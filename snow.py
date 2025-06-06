month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

pre = {}

for i,month_length in enumerate(month_days):
    month = i + 1

    for day in range(1,month_length+1):
        
        # In January, it goes to neighborhood 1 on Mondays, and neighborhood 2 the other days.
        if ((month) == 1):
            if (day) % 7 == 1:
                pre[(month,day)] = 1
            else:
                pre[(month,day)] = 2
                
        # From February through November, it goes to neighborhood 1 on the 1st, 2 on the 2nd, 3 on the 3rd,
        # 4 on the 4th, 5 on the 5th, 6 on the 6th, and 7 on the 7th, 1 on the 8th, 2 on the 9th, etc.
        elif ((month) <= 11):
            pre[(month,day)] = ((day-1) % 7) + 1

        # Every December, it only goes to neighborhood 8.
        elif ((month) == 12):
            pre[(month,day)] = 8


print(pre)
