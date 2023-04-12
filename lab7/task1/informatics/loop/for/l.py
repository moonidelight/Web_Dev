n = input()
d = 0
j = len(n) - 1
for i in n:
    d += int(i) * 2 ** j
    j -= 1
print(d)
