cnt = int(input())
blank = ' '
star = '*'
for k in range(1, cnt+1):
    print(blank * (cnt-k) + star * k)