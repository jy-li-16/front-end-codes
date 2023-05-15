/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // let a=new Array(nums1.length)
    // for(i=0;i<nums1.length;i++){
    //     if(nums2.some(x=>x===nums1[i])&& (!isNaN(nums1[i]))){
    //         a.push(nums1[i])
    //     }
    // }
    // return a
    let result = [];
    nums1.forEach(x => {
        if(nums2.includes(x)) {
            result.push(x);
        }
    });
    result = [...new Set(result)]
    return result;
}

let result = intersection([1, 2, 3, 4, 5], [2, 3, 4, 5])
console.log(result);
