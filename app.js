
//Psuado code
/*
    .if the target(accordion header) is clicked
        .It should display or show the accordion answer
        . The plus icon should change to minus
    else
        .The accordion answer should close
        .The minus icon should change to plus

*/

const accordionContainer = document.querySelector('.accordion-container');

accordionContainer.addEventListener('click', (e) => {
  // Find the nearest parent with the class 'a-header' that was clicked
  const aHeader = e.target.closest('.a-header');
  if (!aHeader) return; // If no header was clicked, exit

  // Get the answer element which is assumed to be the next sibling of the header
  const answer = aHeader.nextElementSibling;
  if (answer && answer.classList.contains('answer')) {
    // Toggle the 'show' class on the answer element
    answer.classList.toggle('show');

    // Find the plus icon within this header
    const plusIcon = aHeader.querySelector('.plus-icon');
    if (plusIcon) {
      // Update the icon based on whether the answer is shown
      plusIcon.src = answer.classList.contains('show')
        ? "assets/images/icon-minus.svg"
        : "assets/images/icon-plus.svg";
    }
  }
});

