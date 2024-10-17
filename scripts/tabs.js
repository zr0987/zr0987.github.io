const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('mousedown', (e) => {
        tabs.forEach(tab => {tab.classList.remove('active')});
        tab.classList.add('active');

        var line = document.querySelector('#tab-slider');
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => {content.classList.remove('active')})
        all_content[index].classList.add('active');
    })
})