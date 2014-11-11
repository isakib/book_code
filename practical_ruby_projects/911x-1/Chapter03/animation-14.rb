require 'erb'

class Animation
  Template = ERB.new(<<-END)
<?xml version="1.0"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg width="<%= width %>" height="<%= height %>" xmlns="http://www.w3.org/2000/svg">
<% objects.each do |obj| %>
  <%= obj.render(frame) %>
<% end %>
</svg>
  END

  attr_reader :frame, :width, :height, :objects
    
  def initialize(width, height)
    @width     = width
    @height    = height
    @objects   = []
    @frame     = 0
    @step_callbacks = []
    @at_callbacks = Hash.new {|hash, key| hash[key] = [] }
  end

  def add(obj)
    @objects.push(obj)
  end

  def run(dir, frames)
    Dir.mkdir(dir) rescue nil
    digits = frames.to_s.size
      
    frames.times do |n|
      @frame = n
      file = frame_id(n, digits)
      filename = File.join(dir, file)

      run_callbacks
      render(filename)
    end
  end

  def frame_id(frame, digits)
    sprintf("%.#{digits}d", frame)
  end

  def at(frame, &callback)
    @at_callbacks[frame].push(callback)
  end

  def step(&callback)
    @step_callbacks.push(callback)
  end

  def run_callbacks
    @step_callbacks.each{|cb| cb.call }
    @at_callbacks[frame].each {|cb| cb.call }
  end

  def render(filename)
    File.open("#{filename}.svg", "w") do |file|
      file.write(Template.result(objbinding))
    end
    system("convert #{filename}.svg #{filename}.jpg")
    # Un-comment the next line to delete the intermediate SVG
    # File.unlink("#{filename}.svg")
  end

  def objbinding
    return binding
  end
end

class SVGObject
  def initialize(name, attrs={})
    @name     = name
    @attrs    = attrs
    @contents = []
  end

  def [](key)
    @attrs[key]
  end

  def []=(key, value)
    @attrs[key] = value
  end

  def add(obj)
    @contents.push(obj)
    return self
  end

  def render(frame)
    attrs = @attrs.map{|k, v| %Q{#{k}="#{v}"} }.join(' ')
    body  = @contents.map{|obj| obj.render(frame) }.join("\n")

    return %Q{<#{@name} #{attrs}>#{body}</#{@name}>}
  end

  def move_by(xd, yd)
    raise "Has no coordinates" unless @attrs[:x] && @attrs[:y]

    @attrs[:x] = @attrs[:x] + xd
    @attrs[:y] = @attrs[:y] + yd
    return self
  end

  def move_to(x, y)
    @attrs[:x] = x
    @attrs[:y] = y
    return self
  end
end

