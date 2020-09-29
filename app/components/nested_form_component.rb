class NestedFormComponent < ViewComponent::Base
  def initialize(form:, association:)
    @form = form
    @association = association
  end

  def association_name
    association.class.to_s.tableize.singularize
  end
end
