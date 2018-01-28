module Hamming
  def self.compute(a, b)
    if a.length != b.length
      raise ArgumentError
    else
      
      dist = 0
      i = 0
      while (i < a.length)
        if a[i] != b[i]
          dist += 1
        end
        i += 1
      end

    end
    dist
  end
end

module BookKeeping
  VERSION = 3
end
