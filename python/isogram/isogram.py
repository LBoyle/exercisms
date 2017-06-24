def is_isogram(str):
    str = str.replace('-', '').replace(' ','').lower()
    return len(str) == len(''.join(set(str)))
