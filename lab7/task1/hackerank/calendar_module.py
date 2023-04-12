import calendar
# print(calendar.TextCalendar(firstweekday=6).formatyear(2015))
month, day, year = input().split()
l = ["MONDAY", "TUESDAY", 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
print(l[calendar.weekday(int(year), int(month), int(day))])