// 来自牛客网 网易2019秋季校园招聘编程题真题集合
// 下面代码是已通过测试的，下面写死数据的仅做测试用的。

const n = 5;
const appleCounts = "2 7 3 4 9".split(" ").map(item=>+item);
const times = 3;
const appleNOs = "1 25 11".split(" ").map(item=>+item);

const sums = appleCounts.reduce((acc,cur,idx)=>{
        if (acc.length === 0)
            return [cur];
        acc.push(acc[idx - 1] + cur);
        return acc;
    }
    , [])
function binarySearch(arr, item) {
    if (arr.length === 0)
        return -1;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middleIndex = Math.floor(left + (right - left) / 2);
        const middleValue = arr[middleIndex];
        if (item > middleValue) {
            left = middleIndex + 1;
        } else if (item < middleValue) {
            right = middleIndex - 1;

        } else
            return middleIndex;
    }
    return item < arr[left] ? left : right;
}

const res = appleNOs.map(no=>{
        return binarySearch(sums, no) + 1;
    }
)
console.log(res.join("\n"));