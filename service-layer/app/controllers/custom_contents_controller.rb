class CustomContentsController < ApplicationController
  include PolymorphicResource

  def show
    render jsonn contentable
  end

  def create
    content = contentable.new(model_params)
    if content.save
      render json: content, status: :created
    else
      render errors_for(content)
    end
  end

  def update
    content = contentable.find(params[:id])
    if content.update(model_params)
      render json: content, status: :ok
    else
      render errors_for(content)
    end
  end

  private

  def contentable
    @resource || resource
    @resource.content
  end

  def model_params
    params.require(:custom_content).permit(:content)
  end
end
