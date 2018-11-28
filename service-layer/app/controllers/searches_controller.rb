class SearchesController < ApplicationController
  def index
    @results = Queries::ContentSearch.call(query_parameters)
  end

  private

  def query_parameters
    params.permit(
      :subject,
      media_types: [],
      durations: [],
    )
  end
end
