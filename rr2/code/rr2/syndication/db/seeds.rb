#---
# Excerpted from "Rails Recipes",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material, 
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose. 
# Visit http://www.pragmaticprogrammer.com/titles/rr2 for more book information.
#---
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)
#

users = %w(hank quincy forrest martin).map do |name|
  User.create!(:name => name)
end

[
  "Blood Sausage",
  "Natto Omlet",
  "Figgy Pudding",
  "Grilled Cheese",
  "Goat Cheese Banana"
].each do |title|
  Recipe.create!(:title => title, :author => users[rand(users.size)])
end