n = int(input())
arr = list(map(int, input().split()))
ok = False
for i in range(1, len(arr)):
    if arr[i - 1] > 0 and arr[i] > 0:
        ok = True
        break
    if arr[i - 1] < 0 and arr[i] < 0:
        ok = True
        break
if ok:
    print("YES")
else:
    print("NO")