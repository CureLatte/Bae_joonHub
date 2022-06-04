# 이진탐색 연습장
# 외우기 코드!

import sys
from collections import deque

input = sys.stdin.readline
n = int(input())

graph = []

for i in range(n):
    temp = list(map(int, list(input())[:-1]))
    graph.append(temp)

dcol = [1,0,-1,0]
drow = [0,1,0,-1]


def dfs(v, check, cnt):
    crow, ccol = v
    if graph[crow][ccol] != 1:
        return cnt
    graph[crow][ccol] = check
    cnt += 1
    for i in range(4):
        nrow = crow + drow[i]
        ncol = ccol + dcol[i]
        if 0 <= nrow <= n-1 and 0 <= ncol <= n-1:
            cnt = dfs([nrow, ncol], check, cnt)
        else:
            continue
    return cnt

answer_cnt = []

cnt = 0
for R in range(n):
    for C in range(n):
        if graph[R][C] == 1:
            cnt += 1
            visited = 0
            visited = dfs([R,C], str(cnt), visited)
            answer_cnt.append(visited)

print(cnt)
answer_cnt.sort()
for _ in answer_cnt:
    print(_)