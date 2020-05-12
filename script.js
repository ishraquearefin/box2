

			

var count=0;
var start=0;
var select=0;



       function checkParent(parent){ 

          var node1 = document.getElementById("box1"); 
          var  node2 = document.getElementById('box2'); 
          var  node3 = document.getElementById("box3");  
  
            // keep iterating unless null 
             while(parent!=null){
                if (parent ==node1 ) { 
                    select+=1
                
return select;
                }
            }
        }

       function checkChild(parent) { 

          var node1 = document.getElementById("box1"); 
          var  node2 = document.getElementById('box2'); 
          var  node3 = document.getElementById("box3"); 
               if (document.getElementById("box2").onclick) {
    event.stopPropagation();
  }   
                if(parent=node2){
                	count+=1
                 
                }
               return count;
                	

            }
   

             
             
         
 /*function checkElements(){parent = document.getElementById("box1"); 
            child = document.getElementById('box2'); 
            non_child = document.getElementById("box3"); 
  
            output_child = checkParent(parent); 
            output_non_child = checkParent(child, non_child); 
            document.getElementById("selected").innerHTML=output_child;
            document.getElementById("selected").innerHTML=output_non_child; 
            }*/
            document.getElementById("box1").onclick=function(){
            parent = document.getElementById("box1"); 
            child = document.getElementById('box2'); 
            non_child = document.getElementById("box3"); 
  
            output_child = checkParent(parent); 
            document.getElementById("selected").innerHTML=select;
            }
            document.getElementById("box2").onclick=function(){
 			parent = document.getElementById("box1"); 
            child = document.getElementById('box2'); 
            non_child = document.getElementById("box3"); 
  
            output_child = checkChild(child); 
            document.getElementById("selected1").innerHTML=count;
            }
            document.getElementById("box3").onclick=function(){
            	          if (document.getElementById("box3").onclick) {
    event.stopPropagation();
  } 
            start+=1 
            document.getElementById("selected2").innerHTML=start;
        }