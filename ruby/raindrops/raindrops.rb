require "prime"

module Raindrops
  def self.convert(num)
    f = Prime.prime_division(num).map {|x| x[0]}
    o = ""
    o << "Pling" if f.include?(3)
    o << "Plang" if f.include?(5)
    o << "Plong" if f.include?(7)
    o.length > 0 ? o : num.to_s
  end
end

module BookKeeping
  VERSION = 3
end
