function showAnswer(question) {
    document.getElementById(`answer${question}`).style.display = 'block';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
      });
    }
    
    const glossarySearch = document.getElementById('glossarySearch');
    if (glossarySearch) {
      glossarySearch.addEventListener('input', function() {
        const filter = glossarySearch.value.toLowerCase();
        const glossaryList = document.getElementById('glossaryList');
        const terms = glossaryList.getElementsByTagName('dt');
        for (let i = 0; i < terms.length; i++) {
          let termText = terms[i].textContent.toLowerCase();
          if (termText.includes(filter)) {
            terms[i].style.display = '';
            if (terms[i].nextElementSibling && terms[i].nextElementSibling.tagName === 'DD') {
              terms[i].nextElementSibling.style.display = '';
            }
          } else {
            terms[i].style.display = 'none';
            if (terms[i].nextElementSibling && terms[i].nextElementSibling.tagName === 'DD') {
              terms[i].nextElementSibling.style.display = 'none';
            }
          }
        }
      });
    }
  });