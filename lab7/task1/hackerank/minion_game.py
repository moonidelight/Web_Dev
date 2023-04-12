def minion_game(string):
    # your code goes here
    s = 0
    k = 0
    for i in range(len(string)):
        if string[i] in "AEIOU":
            k += len(string) - i
        else:
            s += len(string) - i
    if k > s:
        print("Kevin", k)
    elif k < s:
        print("Stuart", s)
    else:
        print("Draw")
if __name__ == '__main__':
    s = input()
    minion_game(s)