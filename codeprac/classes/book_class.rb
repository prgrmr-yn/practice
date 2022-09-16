class Book
  attr_accessor :name, :author, :pages
  def initialize(name, author, pages)
    @name = name
    @author = author
    @pages = pages
  end
end

book1 = Book.new('family guy', 'peter griffin', 200)
book1.pages = 400


book = "#{book1.name} is written by #{book1.author} and has #{book1.pages} long"
p book
