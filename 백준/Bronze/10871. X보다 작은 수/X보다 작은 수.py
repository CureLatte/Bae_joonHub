n, x = map(int, input().split())

list = list(map(int, input().split()))

answer = []

for k in list:
    if k < x:
        answer.append(k)
        print(k)