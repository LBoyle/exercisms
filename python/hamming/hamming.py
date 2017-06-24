def distance(a, b):
    if len(a) != len(b):
        raise ValueError
    count = 0
    for i, c in enumerate(a):
        if c != b[i]:
            count+=1
    return count
