dict = {
'G': 'C',
'C': 'G',
'T': 'A',
'A': 'U'
}
valids = 'GCTA'
def to_rna(dna):
    s = ''
    for char in list(dna):
        if char in valids:
            s += dict[char]
        else:
            return ''
    return s
