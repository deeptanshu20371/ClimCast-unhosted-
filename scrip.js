function fadeOut(el) {
    el.style.opacity = 1;
    function fade(){
       var val = el.style.opacity;
       if ((val -= .04) > 0){
         el.style.opacity = val;
         requestAnimationFrame(fade);
       }
    }
   fade();
};
var down= document.getElementById("down"),
    fglobe=document.getElementById("fglobe"),
    button=document.getElementById("button"),
    body=document.body,
    docElem= document.documentElement,
    done=false,
    offset=100,
    scrollPos, docHeight;

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;

docHeight=Math.max(body.scrollHeight,body.offsetHeight,docElem.clientHeight,docElem.scrollHeight,docElem.offsetHeight);
if (docHeight!='undefined'){
    offset=docHeight/4;
}

window.addEventListener("scroll",function(event){
    var scrollTop = window.pageYOffset || window.scrollTo;
    var scrollPercent = scrollTop/scrollArea || 0;
    fglobe.style.left = 1500 - scrollPercent*window.innerWidth*0.6 + 'px';;

    scrollPos=body.scrollTop || docElem.scrollTop;
    if (scrollPos>offset && done==false){
        fadeOut(down);
        done=true;
        this.document.getElementById("nav").style.opacity=1;
    }
} );

