import math
a, b = int(input()), int(input())
for i in range(a, b + 1):
    n = math.sqrt(i)
    if int(n) * int(n) == i:
        print(i)