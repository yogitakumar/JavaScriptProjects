function bubbleSort(a)
{
    var isSwap;
    var n = a.length-1;
    do {
        isSwap= false;
        for (var i=0; i < n; i++)
        {
            if (a[i] < a[i+1])
            {
               var temp = a[i];
               a[i] = a[i+1];
               a[i+1] = temp;
               isSwap= true;
            }
        }
        n--;
    } while (isSwap);
 return a; 
}

console.log(bubbleSort([6,1,8,2,0,3,7,4]));
