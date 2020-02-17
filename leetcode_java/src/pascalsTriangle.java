import java.util.*;

public class pascalsTriangle {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> endList = new ArrayList<>();
        generate(endList, numRows);
        return endList;
    }

    public void generate(List<List<Integer>> endList, int numRows){
        if(numRows == 1) endList.add(Arrays.asList(1));
        else if(numRows > 0) {
            generate(endList, numRows -1);
            List<Integer> prevList = endList.get(numRows - 2);
            List<Integer> curList = new ArrayList<>();
            for(int i = 0; i <= prevList.size(); i++){
                if(i == 0 || i == prevList.size()){
                    curList.add(1);
                }
                else{
                    curList.add(prevList.get(i-1) + prevList.get(i));
                }
            }

            endList.add(curList);
        }

    }
}
