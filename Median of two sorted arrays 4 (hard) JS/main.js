/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var n = nums1.length;
    var m = nums2.length;
    if (n == 0)
        return findMedianSortedArray(nums2);
    if (m == 0)
        return findMedianSortedArray(nums1);
    var flag = 0;
    if ((n + m) % 2 == 0)
        flag = 0;
    else
        flag = 1;
    var medianNumber = Math.floor((n + m) / 2);
    var nums1Index = 0, nums2Index = 0, currentElem = 0, previousElem = 0;
    for (let i = 0; i < Math.max(n, m) + 1; i++) {
        if (nums1Index == n) {
            nums1Index--;
            nums1[nums1Index] = nums2[nums2.length - 1] + 1;
        }
        if (nums2Index == m) {
            nums2Index--;
            nums2[nums2Index] = nums1[nums1.length - 1] + 1;
        }
        if (nums1[nums1Index] >= nums2[nums2Index]) {
            previousElem = currentElem;
            currentElem = nums2[nums2Index];
            nums2Index++;
        }
        else {
            previousElem = currentElem;
            currentElem = nums1[nums1Index];
            nums1Index++;
        }
        if (i >= medianNumber) {
            if (flag == 0)
                return (previousElem + currentElem) / 2;
            else
                return currentElem;
        }
    }
    return 0;
};
function findMedianSortedArray(array) {
    var medium = Math.floor(array.length / 2);
    if (array.length % 2 == 0)
        return (array[medium - 1] + array[medium]) / 2;
    else
        return array[medium];
}
console.log(findMedianSortedArrays([1], []));