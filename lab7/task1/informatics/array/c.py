n = int(input())
l = list(map(int, input().split()))
print(len([i for i in l if i > 0]))