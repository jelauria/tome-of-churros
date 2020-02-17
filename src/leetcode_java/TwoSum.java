package leetcode_java;
import java.util.*;

public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> data = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int matchingNum = target - nums[i];
            if (data.containsKey(matchingNum)) {
                return new int[] {data.get(matchingNum), i};
            }
            data.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
