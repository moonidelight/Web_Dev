def centered_average(nums):
    mn = min(nums)
    mx = max(nums)

    sum = 0

    for i in nums:
        sum += i

    sum = sum - mx - mn
    return sum // (len(nums) - 2)