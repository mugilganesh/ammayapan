window.onload = function () {
    document.body.classList.add("remove-scrolling");
}

setTimeout(()=>{
    $('.splash').fadeOut('fast');
    document.body.classList.remove("remove-scrolling"); 
}, 1500);



// window.onload = function () {
//     const container = document.querySelector('.container');
//     const svg = document.querySelector('svg');
//     const progressBar = document.querySelector('.progress-bar');
//     const totalLength = progressBar.getTotalLength();

//     setTopValue(svg);

//     progressBar.style.strokeDasharray = 1406;
//     progressBar.style.strokeDashoffset = 1406;

//     const intersectionCallback = (entries) => {
//         for (const entry of entries) { // Loop over all elements that either enter or exit the view.
//             if (entry.isIntersecting) { // This is true when the element is in view.
//                 window.addEventListener('scroll', () => {
//                     const curr_scroll_position = getWindowScrollPosition().y
//                     setProgress(container, progressBar, totalLength, curr_scroll_position);
//                 });
//             }
//         }
//     }

//     const observer = new IntersectionObserver(intersectionCallback);

//     const items = document.querySelectorAll('svg');
//     for (const item of items) {
//         observer.observe(item);
//     }

//     window.addEventListener('resize', () => {
//         setTopValue(svg);
//     });
// }

// function setTopValue(svg) {
//     svg.style.top = document.documentElement.clientHeight * 0.5 - (svg.getBoundingClientRect().height * 0.5) + 'px';
// }


// function setProgress(container, progressBar, totalLength, curr_scroll_position) {
//     const clientHeight = document.documentElement.clientHeight;
//     const scrollHeight = document.documentElement.scrollHeight;
//     const scrollTop = document.documentElement.scrollTop;

//     const percentage = scrollTop / (scrollHeight - clientHeight);
//     if (percentage === 1) {
//         container.classList.add('completed');
//     } else {
//         container.classList.remove('completed');
//     }
//     console.log(normalize(totalLength-curr_scroll_position, getWindowScrollPosition().y, totalLength))
//     if(getWindowScrollPosition().y)
//     progressBar.style.strokeDashoffset = 1406 + ((normalize(totalLength-curr_scroll_position, getWindowScrollPosition().y, totalLength) * 100) - 200);
// }

// const getWindowScrollPosition = () => ({
//     x: window.scrollX,
//     y: window.scrollY
// });

// function normalize(value, min, max) {
//     return (value - min) / (max - min);
// }

