import java.util.ArrayList;
import java.util.Collections;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        Arrays.sort(phone_book);
        
        int current_len = phone_book[0].length();
        String target = phone_book[0];
        String prevalue = "";
        for(int i=0; i<phone_book.length; i++){
            // 중복확인
            if (prevalue.compareTo(phone_book[i])==0){
                return false;
            } else {
                prevalue = phone_book[i];
            }
            
            // 길이가 바뀌였을 때 
            
            if(current_len >= phone_book[i].length() || target.compareTo(phone_book[i].substring(0, current_len)) !=0){
                
                target = phone_book[i];
                current_len = phone_book[i].length();
            }
            else{
                String check = phone_book[i].substring(0, current_len);
                if(target.compareTo(check) == 0 ){
                    return false;
                }
                
            }
            
        }
        
        return true;
    }
}


// class Solution {
//     public boolean solution(String[] phone_book) {
//         // 1. HashMap을 선언한다.
//         Map<String, Integer> map = new HashMap<>();

//         // 2. 모든 전화번호를 HashMap에 넣는다.
//         for (int i = 0; i < phone_book.length; i++) map.put(phone_book[i], i);

//         // 3. 모든 전화번호의 substring이 HashMap에 존재하는지 확인한다.
//         for(int i = 0; i < phone_book.length; i++) for (int j = 0; j < phone_book[i].length(); j++)
//             if (map.containsKey(phone_book[i].substring(0, j)))
//                 return false;
//         return true;
//     }
// }