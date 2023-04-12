def last2(str):
  cnt = 0
  for i in range(len(str) - 2):
    if str[i:i+2] == str[-2:]:
      cnt += 1
  return cnt
