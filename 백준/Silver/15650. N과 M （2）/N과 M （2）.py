import sys
from collections import deque
from itertools import combinations

input = sys.stdin.readline

n, m = map(int, input().split())

table = list(range(1, n+1))

temp = []

case = {}

a = list(combinations(table, m))

for _ in a:
    answer = ''
    for i in _:
        answer += str(i) + ' '
    print(answer)