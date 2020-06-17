using System;

namespace LeetCode_4_Median_of_two_sorted_arrays__hard_
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums1 = new int[2] { 1, 2};
            int[] nums2 = new int[2] { 3, 4 };
            Solution a = new Solution();
            Console.WriteLine(a.FindMedianSortedArrays(nums1, nums2));
        }
    }
    public class Solution
    {
        public double FindMedianSortedArrays(int[] nums1, int[] nums2)
        {
            var n = nums1.Length;
            var m = nums2.Length;
            if (n == 0)
                return FindMedianSortedArray(nums2);
            if (m == 0)
                return FindMedianSortedArray(nums1);
            int flag = 0;
            if ((n + m) % 2 == 0)
                flag = 0;
            else
                flag = 1;
            int medianNumber = (n + m) / 2;
            int nums1Index = 0, nums2Index = 0;
            int currentElem = 0, previousElem = 0;
            for (int i = 0; i < Math.Max(m, n) + 1; i++)
            {
                if (nums1Index == n)
                {
                    nums1Index--;
                    nums1[nums1Index] = nums2[nums2.Length - 1] + 1;
                }
                if (nums2Index == m)
                {
                    nums2Index--;
                    nums2[nums2Index] = nums1[nums1.Length - 1] + 1;
                }
                if (nums1[nums1Index] >= nums2[nums2Index])
                {
                    previousElem = currentElem;
                    currentElem = nums2[nums2Index];
                    nums2Index++;
                }
                else
                {
                    previousElem = currentElem;
                    currentElem = nums1[nums1Index];
                    nums1Index++;
                }
                if (i >= medianNumber)
                {
                    if (flag == 0)
                        return ((double)previousElem + currentElem) / 2;
                    else
                        return currentElem;
                }
            }
            return 0;
        }
        private double FindMedianSortedArray(int[] array)
        {
            var medium = array.Length / 2;
            if (array.Length % 2 == 0)
                return ((double)array[medium - 1] + array[medium]) / 2;
            else
                return array[medium];
        }
    }
}
