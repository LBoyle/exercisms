module Complement
  def self.of_dna(input)
    complements = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
      }
    output = ""
    input.each_char do |char|
      if complements.keys.include? char.to_sym
        output << complements[char.to_sym]
      else
        output = ""
        break
      end
    end
    output
  end
end

module BookKeeping
  VERSION = 4
end
