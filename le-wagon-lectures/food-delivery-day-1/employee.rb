class Employee

  def initialize(attr={})
    @id = attr[:id]
    
    @username = attr[:username]
    @password = attr[:password]
    @role = attr[:role]
  end
end
