def fix_teen(n):
  if n in range(13, 15) or n in range(17, 20):
    return True
  return False
def no_teen_sum(a, b, c):
  if fix_teen(a):
    a = 0
  if fix_teen(b):
    b = 0
  if fix_teen(c):
    c = 0
  return a + b + c