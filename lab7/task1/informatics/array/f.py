n = int(input())
arr = list(map(int, input().split()))
print(len([i for i in range(1, len(arr) - 1) if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]]))