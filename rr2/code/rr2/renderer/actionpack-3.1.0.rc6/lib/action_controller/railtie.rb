#---
# Excerpted from "Rails Recipes",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material, 
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose. 
# Visit http://www.pragmaticprogrammer.com/titles/rr2 for more book information.
#---
require "rails"
require "action_controller"
require "action_dispatch/railtie"
require "action_view/railtie"
require "abstract_controller/railties/routes_helpers"
require "action_controller/railties/paths"

module ActionController
  class Railtie < Rails::Railtie
    config.action_controller = ActiveSupport::OrderedOptions.new

    initializer "action_controller.logger" do
      ActiveSupport.on_load(:action_controller) { self.logger ||= Rails.logger }
    end

    initializer "action_controller.initialize_framework_caches" do
      ActiveSupport.on_load(:action_controller) { self.cache_store ||= RAILS_CACHE }
    end

    initializer "action_controller.set_configs" do |app|
      paths   = app.config.paths
      options = app.config.action_controller

      options.assets_dir           ||= paths["public"].first
      options.javascripts_dir      ||= paths["public/javascripts"].first
      options.stylesheets_dir      ||= paths["public/stylesheets"].first
      options.page_cache_directory ||= paths["public"].first

      # make sure readers methods get compiled
      options.asset_path           ||= app.config.asset_path
      options.asset_host           ||= app.config.asset_host

      ActiveSupport.on_load(:action_controller) do
        include app.routes.mounted_helpers
        extend ::AbstractController::Railties::RoutesHelpers.with(app.routes)
        extend ::ActionController::Railties::Paths.with(app)
        options.each { |k,v| send("#{k}=", v) }
      end
    end

    initializer "action_controller.compile_config_methods" do
      ActiveSupport.on_load(:action_controller) do
        config.compile_methods! if config.respond_to?(:compile_methods!)
      end
    end
  end
end