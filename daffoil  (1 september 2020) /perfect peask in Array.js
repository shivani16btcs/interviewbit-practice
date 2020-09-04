// question link : https://www.interviewbit.com/problems/perfect-peak-of-array/#

// check whether  there exist an element which is strictly greater than all element on left of it and strictly smaller all the elements on right of it.

//in this solution i got 31/200 in interviewbit 


int perfectPeak(int* A, int n1) {
    long long int X[100000],Y[100000],l,r,i,check=0;
    X[0]=l=A[0], Y[n1-1]=r=A[n1-1];
    for(i=1;i<n1;i++){
      if(A[i]>l)
      {
          X[i]=A[i];
          l=X[i];
      }
      else
      {
          X[i]=l;
      }
    }
    
     for(i=n1-2;i>=0;i--){
      if(A[i]<r)
      {
          Y[i]=A[i];
          r=Y[i];
      }
      else
      {
        Y[i]=r; 
      }
    }
    
    
    for(i=1;i<n1-1;i++){
      if(X[i]<=Y[i])
      return 1;
    }
    return 0;

}
