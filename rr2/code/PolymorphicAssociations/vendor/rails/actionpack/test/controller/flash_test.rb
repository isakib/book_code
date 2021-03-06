#---
# Excerpted from "Rails Recipes",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material, 
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose. 
# Visit http://www.pragmaticprogrammer.com/titles/rr2 for more book information.
#---
require File.dirname(__FILE__) + '/../abstract_unit'

class FlashTest < Test::Unit::TestCase
  class TestController < ActionController::Base
    def set_flash
      flash["that"] = "hello"
      render :inline => "hello"
    end

    def set_flash_now
      flash.now["that"] = "hello"
      flash.now["foo"] ||= "bar"
      flash.now["foo"] ||= "err"
      @flashy = flash.now["that"]
      @flash_copy = {}.update flash
      render :inline => "hello"
    end

    def attempt_to_use_flash_now
      @flash_copy = {}.update flash
      @flashy = flash["that"]
      render :inline => "hello"
    end

    def use_flash
      @flash_copy = {}.update flash
      @flashy = flash["that"]
      render :inline => "hello"
    end

    def use_flash_and_keep_it
      @flash_copy = {}.update flash
      @flashy = flash["that"]
      silence_warnings { keep_flash }
      render :inline => "hello"
    end

    def rescue_action(e)
      raise unless ActionController::MissingTemplate === e
    end
  end

  def setup
    @request    = ActionController::TestRequest.new
    @response   = ActionController::TestResponse.new
    @controller = TestController.new
  end

  def test_flash
    get :set_flash

    get :use_flash
    assert_equal "hello", @response.template.assigns["flash_copy"]["that"]
    assert_equal "hello", @response.template.assigns["flashy"]

    get :use_flash
    assert_nil @response.template.assigns["flash_copy"]["that"], "On second flash"
  end

  def test_keep_flash
    get :set_flash
    
    get :use_flash_and_keep_it
    assert_equal "hello", @response.template.assigns["flash_copy"]["that"]
    assert_equal "hello", @response.template.assigns["flashy"]

    get :use_flash
    assert_equal "hello", @response.template.assigns["flash_copy"]["that"], "On second flash"

    get :use_flash
    assert_nil @response.template.assigns["flash_copy"]["that"], "On third flash"
  end
  
  def test_flash_now
    get :set_flash_now
    assert_equal "hello", @response.template.assigns["flash_copy"]["that"]
    assert_equal "bar"  , @response.template.assigns["flash_copy"]["foo"]
    assert_equal "hello", @response.template.assigns["flashy"]

    get :attempt_to_use_flash_now
    assert_nil @response.template.assigns["flash_copy"]["that"]
    assert_nil @response.template.assigns["flash_copy"]["foo"]
    assert_nil @response.template.assigns["flashy"]
  end 
end