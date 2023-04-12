def non_start(a, b):
  if len(a)==1:
    return b[1:]
  if len(b)==1:
    return a[1:]
  return a[1:]+b[1:]
