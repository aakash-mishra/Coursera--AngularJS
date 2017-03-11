import java.io.*;
import java.util.*;

public class arr{

  public static boolean isEven(int n){
    boolean ans=false;
    if(n%2==0)
    ans= true;
    else
    ans= false;

    return ans;
  }

public static void main(String args[]){

Scanner sc= new Scanner(System.in);
int n=sc.nextInt();
System.out.println(isEven(n));
}
}
