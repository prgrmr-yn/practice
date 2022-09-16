class Question
  attr_reader :prompt, :answer
  def initialize(attr = {})
    @prompt = attr[:prompt]
    @answer = attr[:answer]
  end
end


p1 = "what color are the mangoes?\n(a)yellow\n(b)brown\n(c)purple"
p2 = "what color are the rocks?\n(a)yellow\n(b)brown\n(c)purple"
p3 = "what color is the lavender?\n(a)yellow\n(b)brown\n(c)purple"

questions = [
  Question.new(prompt: p1, answer: 'a'),
  Question.new(prompt: p2, answer: 'b'),
  Question.new(prompt: p3, answer: 'c')
]

def answer_questions(questions)
  answer  = ''
  score = 0
  questions.each do |question|
    puts question.prompt
    answer = gets.chomp
    score += 1 if answer.downcase == question.answer
  end
  puts "you have got #{score} out of #{questions.length}"
end

answer_questions(questions)
