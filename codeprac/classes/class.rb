class Book
  attr_accessor :name, :author, :pages
  def initialize(name, author, pages)
    @name = name
    @author = author
    @pages = pages
  end
end

book1 = Book.new('family guy', 'peter griffin', 200)
p book1.page = 400
p book1
