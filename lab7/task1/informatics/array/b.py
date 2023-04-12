n = int(input())
l = list(map(int, input().split()))
print(*[i for i in l if i % 2 == 0])
