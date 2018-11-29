class SearchesController < ApplicationController
  def show
    @results = Queries::ContentSearch.call(query_parameters)
  end

  private

  def query_parameters
    params.permit(
      :keywords,
      media_types: [],
      durations: [],
    )
  end
end
