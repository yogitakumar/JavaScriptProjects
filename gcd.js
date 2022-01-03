function gcd(x,y){
    if(!y)
      return x;
    gcd(y,x/y);
 }
 
 gcd(60,72);