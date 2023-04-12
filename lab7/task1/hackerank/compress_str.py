s = input()
i = 0
j = 0
while i < len(s):
    while j < len(s) and s[i] == s[j]:
        j += 1
    n = j - i
    print("(", n, ", ", s[i], ")", sep='', end=' ')
    i = j
