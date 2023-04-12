def lone_sum(a, b, c):
  if a == b == c:
    a, b, c = 0, 0, 0
  if a == b:
    a = 0
    b = 0
  if b == c:
    b = 0
    c = 0
  if a == c:
    c = 0
    a = 0
  return a + b + c
