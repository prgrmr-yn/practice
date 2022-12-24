require_relative 'patient'

class Room

  class FullRoom < Exception; end

  attr_reader :patients
  attr_accessor :id, :patient

  def initialize(attr = {})
    @capacity = attr[:capacity]
    @patients = attr[:patients] || []
  end

  def full?
    @capacity <= @patients.length
  end

  def add(patient)
    if full?
      fail FullRoom
    else
      patient.room = self
      @patients << patient
    end
  end
end
