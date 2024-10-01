function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.querySelector('#theme-toggle i');
    if (document.body.classList.contains('dark-theme')) {
      themeIcon.className = 'fas fa-moon';
    } else {
      themeIcon.className = 'fas fa-sun';
    }
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  }
  
  function applyTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    } else if (localStorage.getItem('theme') === 'light') {
      document.body.classList.remove('dark-theme');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-theme');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  });
  