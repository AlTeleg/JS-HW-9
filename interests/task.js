const interestsMain = document.querySelector('.interests_main')

interestsMain.addEventListener('change', (e) => {
  if (!e.target.closest('.interests_active')) {
    let childrenCheckerArray = Array.from(e.target.parentElement.nextElementSibling.children);
    childrenCheckerArray.forEach(checker => {
      if (e.target.checked) {
        checker.firstElementChild.firstElementChild.checked = true;
      } else {
        checker.firstElementChild.firstElementChild.checked = false;
      }  
    });
  }
})