var x = document.getElementById("myAudio");

x.load()
x.addEventListener("load", function() {
    x.play();
  }, true);
function myFunction() {
   
    if(x.paused){
    x.play();
   }
   else{
    x.pause();
   }
  
    document.getElementsByClassName('sun').sun = 'sun';
}
