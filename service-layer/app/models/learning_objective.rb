class LearningObjective
    include HTTParty
    base_uri ENV["CANVAS_HOST"] + "/api/v1"

    def initialize(token)
        @options = { headers: { "Authorization" => "Bearer " + token } }
    end

    def all(course_id)        
        self.class.get("/courses/#{course_id}/modules", @options).body        
    end

    def find(course_id, id)
        self.class.get("/courses/#{course_id}/modules/#{id}", @options).body        
    end

    def create(course_id, le_params)
        @le_body = {
            'course_id': course_id,                                
            'module[name]':  le_params.fetch(:name, ""),
            'module[unlock_at]': le_params.fetch(:unlock_at, ""),                                
            'module[position]': le_params.fetch(:position, ""),                                
            'module[require_sequential_progress]': le_params.fetch(:require_sequential_progress, ""),  
            'module[prerequisite_module_ids][]': le_params.fetch(:prerequisite_module_ids, ""),                                
            'module[publish_final_grade]': le_params.fetch(:publish_final_grade, "")                             
        }
        options = @options.merge!(body: @le_body)
        self.class.post("/courses/#{course_id}/modules/", options)
    end

    def update(course_id, id, le_params)
        @le_body = {
            'id': id,
            'course_id': course_id,                                
            'module[name]':  le_params.fetch(:name, ""),
            'module[unlock_at]': le_params.fetch(:unlock_at, ""),                                
            'module[position]': le_params.fetch(:position, ""),                                
            'module[require_sequential_progress]': le_params.fetch(:require_sequential_progress, ""),  
            'module[prerequisite_module_ids][]': le_params.fetch(:prerequisite_module_ids, ""),                                
            'module[publish_final_grade]': le_params.fetch(:publish_final_grade, "")                             
        }
        options = @options.merge!(body: @le_body)
        self.class.put("/courses/#{course_id}/modules/#{id}", options)
    end

    def destroy(course_id, id)
        @le_body = {
            'id': id,
            'course_id': course_id,                                     
        }
        options = @options.merge!(body: @le_body)
        self.class.delete("/courses/#{course_id}/modules/#{id}", options)
    end
end