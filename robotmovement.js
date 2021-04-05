console.log(flr("RF"));

function flr(path) {
 var North=0,East=1,South=2,West=3;
  var x = 0, y = 0;
  var dir = North;
  var step=0;
 
  for (var i=0; path[i]; i++)
  {
      var move = path[i];
   
      if (move == 'R')
        dir = (dir + 1)%4;
      else if (move == 'L')
        dir = (4 + dir - 1)%4;
 
         else if (move == 'F')
      {
         if (dir == North)
            y++;
         else if (dir == East)
            x++;
         else if (dir == South)
            y--;
         else 
            x--;
      }
  }
  
  if  (x === 0 && y === 0)
    return 0;
 
  else
    {
      if (x>0 && y>=0)
        {
          if(dir == East){
            step=2;
          }
          else step =1;
        }
  
        if (x>0 && y<0)
        {
          if(dir == South){
            step=2;
          }
          else step =1;
        }
       
      if (x<0 && y<=0)
        {
          if(dir ==West){
            step=2;
          }
          else step =1;
        }
       
      if (x<=0 && y>0)
        {
          if(dir ==North){
            step=2;
          }
          else if(dir == South)
          {
              step=0;
          }
          else step =1;
        }
       
       
      if (x<0)
        {x= -(x);
        }
      if (y<0)
        {
          y=-(y);
        }
      
      return x+y+step;
    }
 
}
