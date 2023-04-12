# Enter your code here. Read input from STDIN. Print output to STDOUT
from itertools import permutations
s, n = input().split()
l =[]
for i in list(permutations([*s], int(n))):
    t = ''
    for j in i:
        t += j
    l.append(t)
l.sort()
print(*l, sep='\n')
