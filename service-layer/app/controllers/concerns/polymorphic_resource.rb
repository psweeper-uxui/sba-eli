module PolymorphicResource
  extend ActiveSupport::Concern

  def resource
    klass, param = resource_class
    klass&.find(params[param.to_sym])
  end

  private

  def resource_class
    params.each do |name, _value|
      if /(.+)_id$/.match?(name)
        model = name.match(%r{([^\/.]*)_id$})
        return model[1].classify.constantize, name
      end
    end
    nil
  end
end
