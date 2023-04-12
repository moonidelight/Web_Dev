def round10(n):
    if n % 10 >= 5:
        while n % 10 != 0:
            n += 1
        return n
    while n % 10 != 0:
        n -= 1
    return n


def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)
