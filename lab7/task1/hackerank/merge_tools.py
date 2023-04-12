def merge_the_tools(string, k):
    # your code goes here
    l = [string[i:i + k] for i in range(0, len(string), k)]

    for i in l:
        s = set()
        for j in i:
            if j not in s:
                print(j, end='')
                s.add(j)
        print()
    l = []
    t = ''
    d = {}
    n = len(string)
    for i in string:
        if len(t) == n / k:
            l.append(t)
            t = ''
        t += i
    l.append(t)
    for i in l:
        t = ''
        for j in i:
            if j not in t:
                t += j
        print(t)


if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)