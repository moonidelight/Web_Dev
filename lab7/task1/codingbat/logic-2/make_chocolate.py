def make_chocolate(small, big, goal):
  if goal > small + big * 5:
    return -1
  needed = goal - big * 5
  if needed >= 0 and needed <= small:
    return needed
  if needed < 0 and goal % 5 <= small:
    return goal % 5
  return -1

