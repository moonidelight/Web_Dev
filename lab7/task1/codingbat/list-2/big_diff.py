def big_diff(nums):
  mn, mx = 100000000, -1
  for i in nums:
    if i > mx:
      mx = i
    if i < mn:
      mn = i
  return mx - mn
