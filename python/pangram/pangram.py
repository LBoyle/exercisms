def is_pangram(phrase):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    phrase = phrase.lower()
    for letter in alphabet:
        if not letter in phrase:
            return False
    return True
