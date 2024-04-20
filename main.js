document.getElementById('submit-btn').addEventListener('click', function() {
    window.location.href = 'roadmap.html';
    const domain = document.getElementById('domain').value;
    const interest = document.getElementById('interest').value;
  
    if (domain && interest) {
      const resultContainer = document.getElementById('result');
      let result;
  
      switch (domain) {
        case 'science':
          result = '';
          break;
        case 'commerce':
          result = ``;
          break;
        case 'arts':
          result = ``;
          break;
        default:
          result = 'Please select a domain.';
      }
  
      resultContainer.textContent = result;
     
    } else {
      alert('Please select a domain and enter your interests.');
    }
  });
  