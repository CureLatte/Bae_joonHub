def calculation_power(warrior_type):
    all_W_position = []

    for x, row_ in enumerate(graph):
        for y, target in enumerate(row_):
            if target == warrior_type:
                all_W_position.append((x, y))

    answer = 0
    for next_network in all_W_position:
        if len(all_W_position) == 0:
            break
        if next_network not in all_W_position:
            continue
        stack = [next_network]
        visited = []
        while len(stack) != 0:
            curr_x, curr_y = stack.pop()
            if (curr_x, curr_y) in visited:
                continue
            visited.append((curr_x, curr_y))
            if curr_x + 1 <= row and graph[curr_x + 1][curr_y] == warrior_type and (curr_x + 1, curr_y) not in visited:
                stack.append((curr_x + 1, curr_y))
            if curr_x - 1 >= 0 and graph[curr_x - 1][curr_y] == warrior_type and (curr_x - 1, curr_y) not in visited:
                stack.append((curr_x - 1, curr_y))
            if curr_y + 1 <= col and graph[curr_x][curr_y + 1] == warrior_type and (curr_x, curr_y + 1) not in visited:
                stack.append((curr_x, curr_y + 1))
            if curr_y - 1 >= 0 and graph[curr_x][curr_y - 1] == warrior_type and (curr_x, curr_y - 1) not in visited:
                stack.append((curr_x, curr_y - 1))
        answer += len(visited) ** 2

        all_W_position = list(set(all_W_position) - set(visited))

    return answer



input_data = input()

col = int(input_data.split(' ')[0]) - 1
row = int(input_data.split(' ')[1]) - 1
graph = []

for i in range(row + 1):
    a = input()
    graph.append(list(a))

# W 병사
print(calculation_power("W"))

# B 병사
print(calculation_power("B"))
