def word_count(str):
    nAlph = list('.,/#@!?$%^&*;:{}=-_`~()[]\n\t')
    res = {}
    for i in nAlph:
        str = str.replace(i, ' ')
    for w in str.lower().split():
        if w not in res:
            res[w] = 1
        else:
            res[w] += 1
    return res
