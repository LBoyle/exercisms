def distance(a, b):
    if len(a) != len(b):
        raise ValueError
    return sum(a!=b for a, b in zip(a, b))
# coutresy of SumnerH
