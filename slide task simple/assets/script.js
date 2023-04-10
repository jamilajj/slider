let slideIndex=1;
showSlides(slideIndex);
// next pre buttonin
function plusSlides(n){
    showSlides(slideIndex+=n);
}
function currentSlide(n){
    showSlides(slideIndex=n);
}
function showSlides(n){

    let i;
    let slide=document.getElementsByClassName("slide");
    let dot=document.getElementsByClassName("dot");
    console.log(n);
    
    if(n==0){slideIndex=1}
    if(n>slide.length){slideIndex=1}
    for(i=0;i<slide.length;i++){
        slide[i].style.display="none";
    }
    for(i=0;i<slide.length;i++){
        dot[i].className=dot[i].className.replace(" active","");
    }
    
    console.log(slideIndex);
    
    slide[slideIndex-1].style.display="block";
    dot[slideIndex-1].className +=" active";
}
