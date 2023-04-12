def Xor(x, y):
    x, y = int(x), int(y)
    if (x and y) or (not x and not y):
        return 0
    return 1
x, y = input().split()
print(Xor(x, y))