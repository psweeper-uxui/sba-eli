json.id result.id
json.name result.name
json.description nil
json.content_type result.content_type
json.uri construct_uri(result)
json.meta_data do
  json.learning_path_id default_meta_id(result.learning_path_id)
  json.learning_objective_id default_meta_id(result.learning_objective_id)
end
json.thumbnail nil
