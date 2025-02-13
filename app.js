// const aHeader = document.querySelector('.a-header');


// aHeader.addEventListener('click',(e) => {
//     //check if the targeted element has a classname of 'question' and 'plus-icon'
//     if(e.target.classList.contains('question') || e.target.classList.contains('plus-icon')){
//         // Get access to the next element sibling
//         const answer = aHeader.nextElementSibling;

//         // Check if the next element exist and has a classname of anwser toggle the show class
//         if( answer && answer.classList.contains('answer')){
//             answer.classList.toggle('show');
//         }  
//   }
 
// }) 

// Assume all accordion items are inside a container with the class "accordion-container"
const accordionContainer = document.querySelector('.accordion-container');
const plusIcon = document.querySelectorAll('.plus-icon');

accordionContainer.addEventListener('click', (e) => {
    // Check if the clicked element is one that should trigger the toggle
    if (e.target.classList.contains('question') || e.target.classList.contains('plus-icon')) {
        // Use closest() to find the nearest parent element that is the header
        const aHeader = e.target.closest('.a-header');
        if (aHeader) {
            const answer = aHeader.nextElementSibling;
            if (answer && answer.classList.contains('answer')) {
                answer.classList.toggle('show');
                plusIcon.src = "assets/images/icon-minus.svg"
            } else {
                plusIcon.src = "assets/images/icon-plus.svg" 
            }
 
        }
        
    }
});
