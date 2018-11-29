module SearchesHelper
  def construct_uri(result)
    case result.content_type
    when "learning_path"
      learning_path_path(result.id)
    when "learning_objective"
      learning_objective_path(result.reference_id)
    else "learning_event"
      learning_event_path(result.reference_id)
    end
  end
end
