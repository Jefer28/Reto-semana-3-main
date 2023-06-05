window.addEventListener("scroll", function(){
    var header = document.querySelector("header")
    if (window.scrollY>0) {
        header.style.backgroundColor="#d87306";
    }else{
        header.style.backgroundColor="transparent";
    }
})