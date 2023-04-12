# print(int(input()[::-1]))

x = input()
s = ''
for i in range(len(x) - 1, -1, -1):
    s += x[i]
print(int(s))