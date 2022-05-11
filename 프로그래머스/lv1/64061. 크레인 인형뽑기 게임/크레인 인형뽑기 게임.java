import java.util.ArrayList;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        
        ArrayList bucket = new ArrayList();
    
        
            
        
        
        
        for(int k=0 ; k <moves.length;k++){
            for(int i=0; i<board.length;i++){
                int check = board[i][moves[k]-1];
                if(check != 0){   
                    bucket.add(check);
                    board[i][moves[k]-1] = 0;
                    break;
                }
            
            }
            if(bucket.size()>=2 && bucket.get(bucket.size()-1) ==bucket.get(bucket.size()-2)){
                bucket.remove(bucket.size()-1);
                bucket.remove(bucket.size()-1);
                answer += 2;
            }
        }
        
        for(int i=0;i<bucket.size();i++){
            System.out.println(bucket.get(i));
        }
    
        
        return answer;
    }
}