
    
        window.onscroll =function(){
     if ($(window).width() > 992){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.querySelector('header').style.backgroundColor="#0a0a0a";
            document.querySelector('header').style.height="64px";
            document.querySelector('header').style.boxShadow=" 0 1px 2px rgba(0, 0, 0, .1)";
        }
        else{
            document.querySelector('header').style.backgroundColor="transparent";
            document.querySelector('header').style.height="100px";
            document.querySelector('header').style.boxShadow=" 0 0 0 0";
    }
}
}

