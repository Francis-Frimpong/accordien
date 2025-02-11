const aHeader = document.querySelector('.a-header');

aHeader.addEventListener('click',(e) => {
    //check if the targeted element has a classname of 'question' and 'plus-icon'
    if(e.target.classList.contains('question') || e.target.classList.contains('plus-icon')){
        // Get access to the next element sibling
        const answer = aHeader.nextElementSibling;
        console.log(answer);

        // Check if the next element exist and has a classname of anwser
        /*
            problem: The problem am facing is the element i want to toggle(answer class and element) doesnt display on the web page.
        */
        if( answer && answer.classList.contains('answer')){
            answer.classList.toggle('show');
        }
    
  }
}) 