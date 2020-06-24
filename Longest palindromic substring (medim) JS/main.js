var longestPalindrome = function (s) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let curMax = Seek(s, i, s[i]);
        ans = curMax.length > ans.length ? curMax : ans;
        if (s[i] == s[i + 1]) {
            curMax = Seek(s, i, s[i] + s[i + 1]);
            ans = curMax.length > ans.length ? curMax : ans;
        }
    }
    return ans;
}

function Seek(s, i, curMax) {
    let ans = "";
    let leftIndex = i - 1;
    curMax.length > 1 ? rightIndex = i + 2 : rightIndex = i + 1;
    while (true) {
        if (leftIndex < 0 && rightIndex >= s.length)
            break;
        if (s[leftIndex] == s[rightIndex]) {
            curMax = s[leftIndex] + curMax + s[rightIndex];
            if (curMax.length > ans.length)
                ans = curMax;
            leftIndex--;
            rightIndex++;
        }
        else
            break;
    }
    ans = curMax.length > ans.length ? curMax : ans;
    return ans;
}
