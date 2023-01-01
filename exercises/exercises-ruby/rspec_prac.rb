require 'rspec'

string = 'getting use to rspec'

describe 'title' do
  it 'description' do
    expect(string).to eq('getting use to rspec')
  end
end
