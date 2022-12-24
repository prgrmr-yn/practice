class Patient
  attr_reader :cured, :name
  attr_accessor :room, :id
  def initialize(attr = {})
    @id = attr[:id]
    @name = attr[:name]
    @cured = attr[:cured] || false
    @blood_type = attr[:blood_type]
  end

  def cure
    @cured = true
  end


end
