n = int(input())
l = list(map(int, input().split()))
print(len([i for i in range(len(l)) if (i != 0 and l[i-1] < l[i])]))