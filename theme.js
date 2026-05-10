const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.innerHTML = '<span class="icon"></span> Light Mode';
}
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeBtn.innerHTML = '<span class="icon"></span> Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        themeBtn.innerHTML = '<span class="icon"></span> Dark Mode';
    }

});