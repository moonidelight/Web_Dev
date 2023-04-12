import math

x = int(input())
cnt = 2
if x == 1:
    cnt = 1
for i in range(2, int(math.sqrt(x)) + 1):
    if x % i == 0:
        if x / i == i:
            cnt += 1
        else:
            cnt += 2
print(cnt)
