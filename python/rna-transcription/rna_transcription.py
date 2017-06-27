dict = {
'G': 'C',
'C': 'G',
'T': 'A',
'A': 'U'
}
valids = 'GCTA'
def to_rna(dna):
    s = []
    for char in dna:
        if char in valids:
            s.append(dict[char])
    return ''.join(s) if len(s) == len(dna) else ''
