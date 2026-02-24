"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var tokens = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
var idx = 0;
// console.log(tokens)
var M = tokens.shift();
var N = tokens.shift();
// console.log(M,N)
var graph = [];
for (var i = 0; i < N; i++) {
    graph.push(tokens.slice(i * M, i * M + M));
}
var result = solution(M, N, graph);
console.log(result);
function solution(M, N, graph) {
    var dy = [-1, 1, 0, 0];
    var dx = [0, 0, 1, -1];
    // console.log(graph)
    var days = 0;
    var head = 0;
    var queue = [];
    for (var y = 0; y < N; y++) {
        for (var x = 0; x < M; x++) {
            if (graph[y][x] === 1) {
                queue.push([y, x]);
            }
        }
    }
    while (head < queue.length) {
        var size = queue.length - head; // 현재 레벨
        for (var i = 0; i < size; i++) {
            var _a = queue[head++], currY = _a[0], currX = _a[1]; // shift 대신 head++
            // console.log(currY, currX)
            // graph[currY][currX] = 1 // 익은 토마토 처리
            for (var dir = 0; dir < 4; dir++) {
                var ny = currY + dy[dir];
                var nx = currX + dx[dir];
                if (ny < N && ny >= 0 && nx >= 0 && nx < M && graph[ny][nx] === 0) {
                    graph[ny][nx] = 1;
                    queue.push([ny, nx]);
                }
            }
        }
        days++;
    }
    if (graph.some(function (row) { return row.some(function (value) { return value === 0; }); })) {
        return -1;
    }
    return days - 1;
}
