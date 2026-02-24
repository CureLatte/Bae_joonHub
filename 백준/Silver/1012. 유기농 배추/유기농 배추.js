"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var tokens = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
var idx = 0;
var T = tokens[idx++];
var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];
var output = [];
for (var t = 0; t < T; t++) {
    var M = tokens[idx++]; // 가로
    var N = tokens[idx++]; // 세로
    var K = tokens[idx++];
    // K개의 배추 좌표 가져오기
    var baCuList = [];
    for (var i = 0; i < K; i++) {
        var x = tokens[idx++];
        var y = tokens[idx++];
        baCuList.push("".concat(x, " ").concat(y));
    }
    // solution 함수 호출
    var res = solution(M, N, K, baCuList);
    output.push(res);
}
console.log(output.join('\n'));
function solution(M, N, K, baCuList) {
    // graph 생성
    var baCuBat = Array.from({ length: N }, function () { return Array(M).fill(0); });
    for (var _i = 0, baCuList_1 = baCuList; _i < baCuList_1.length; _i++) {
        var baCu = baCuList_1[_i];
        var _a = baCu.split(' '), x = _a[0], y = _a[1];
        baCuBat[Number(y)][Number(x)] = 1;
    }
    var dx = [1, -1, 0, 0];
    var dy = [0, 0, 1, -1];
    var count = 0;
    function dfs(y, x) {
        baCuBat[y][x] = 0;
        for (var dir = 0; dir < 4; dir++) {
            var ny = y + dy[dir];
            var nx = x + dx[dir];
            if (ny >= 0 && ny < N && nx >= 0 && nx < M && baCuBat[ny][nx] === 1) {
                dfs(ny, nx);
            }
        }
    }
    // 전체 탐색
    for (var y = 0; y < N; y++) {
        for (var x = 0; x < M; x++) {
            if (baCuBat[y][x] === 1) {
                dfs(y, x);
                count++;
            }
        }
    }
    return count;
}
