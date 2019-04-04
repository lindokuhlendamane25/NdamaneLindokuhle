
          
    function myFunction(){
                            var curDate = new Date();
                            var weekday = new Array(7);
                                        weekday[0] = "Sunday";
                                        weekday[1] = "Monday";
                                        weekday[2] = "Tuesday";
                                        weekday[3] = "Wednesday";
                                        weekday[4] = "Thursday";
                                        weekday[5] = "Friday";
                                        weekday[6] = "Saturday";
                              var n = weekday[curDate.getDay()];
                              var hours = curDate.getHours();
                              var min = curDate.getMinutes();
                              var seconds = curDate.getSeconds();
                              var ampm = curDate.getHours();

                if(ampm>=12){
                    
        alert( "Today is: " + n +"\n "+ "Current time is : " + hours + " PM" + " :"+ min +" : "+ seconds);
                }else{
                    
               alert( "Today is: " + n +"\n"+ "Current time is : " + hours+ " AM"+ " :"+ min +" : "+ seconds);     
                }

}

function url(){
    document.write( window.location.href);
    
}
       
/*function compare() { 
       
    var str = prompt("please enter a word");
    var value = str.startsWith('Java');  
    document.write(value); 
} 
*/

function compare(){
var name;
    name = prompt("please enter a word");
    var results;
    results = name.substring(0,4);

 
    if(results === "Java" || results ==="java" || results=== "JAVA"){
        
        
        document.write(true);
       // console.log("true");
      
        
    }else if(results !=="Java"|| results !=="java" || results !== "JAVA"){
        

        document.write(false);
}
   
}


function large(){
var x,y,z;

x = prompt("type a number");
y = prompt("type another number");
z = prompt("type one last number");
    
var largestNum  = Math.max(x,y,z);
document.write(x + " ,"+ y + ", " + z + " " + ", " +  "The largest number is "+largestNum );} 

  function capitalLetter(str){

  var str = prompt("Enter any sentence"); 
  str = str.toLowerCase().split(' ');
    
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
   
    }
       
      alert(str.join(" "));


}
function timeConvert(){ 
var num= prompt("Please insert a number");  
var hours;  
    var minutes;
    hours = num / 60;
    
minutes = num % 60;

  document.write(Math.floor(hours) );
     document.write(" :" );
 document.write(minutes );
    return hours;
  
}








