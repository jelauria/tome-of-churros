package leetcode_java;
import java.util.*;

public class Anagram {

    public Anagram(){}

    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {return false;}
        char[] sarray = s.toCharArray();
        char[] tarray = t.toCharArray();
        Arrays.sort(sarray);
        Arrays.sort(tarray);
        return Arrays.equals(tarray, sarray);
    }
}
