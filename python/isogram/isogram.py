def is_isogram(s):
    s = "".join(filter(str.isalpha, s.lower()))
    return len(s) == len(set(s))
