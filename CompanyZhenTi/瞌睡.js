// 来自牛客网 网易2019秋季校园招聘编程题真题集合
// 下面代码是已通过测试的，下面写死数据的仅做测试用的。

const [n,k] = "20 3".split(" ").map(item=>+item);
const points = "7671 1710 3898 2147 7451 7607 7069 8984 5614 1284 7274 4168 4317 5432 523 1117 5245 3378 8196 368".split(" ").map(item=>+item);
const sleeps = "0 1 0 0 0 1 1 1 1 1 0 1 1 1 1 0 1 0 1 0".split(" ").map(item=>+item);

let sum = 0; // 存放每轮窗口滑动的值。初始值是当窗口在最左端时的和。
for (let i = 0; i < n; i++) {
    if (sleeps[i] === 1)
        sum += points[i];
    if (sleeps[i] === 0 && i < k)
        sum += points[i];
}
let max_sum = sum; // 存放最后的最大值结果
for (let i = k; i < n; i++) {
    let offset_sum = sum + points[i]; // 不管1/0，先把进窗口的兴趣值加进来
    if (sleeps[i - k] === 0) { // 左边出窗口的睡眠值如果是0，则需要从sum中减去改点的兴趣值。
        offset_sum -= points[i - k];
    }
    if (sleeps[i] === 1) { // 进窗口的睡眠值如果是1，则要减去上面加进来的兴趣值，因为本来就醒着的。
        offset_sum -= points[i];
    }
    max_sum = Math.max(max_sum, offset_sum);
    sum = offset_sum;
}
console.log(max_sum);