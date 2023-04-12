d = {}
for i in range(int(input())):
    s = input()
    if s not in d:
        d[s] = 1
    else:
        d[s] += 1
print(len(d))
for i in d:
    print(d[i], end=' ')