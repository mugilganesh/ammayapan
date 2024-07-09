window.onload = function () {
    document.body.classList.add("remove-scrolling");
}

setTimeout(()=>{
    $('.splash').fadeOut('fast');
    document.body.classList.remove("remove-scrolling"); 
}, 1500);