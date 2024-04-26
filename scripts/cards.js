/**
 * JS code which is displaying and hiding cards.
 * 
 * @author xjanos19
 */

document.addEventListener('DOMContentLoaded', function () {

    const sections = document.querySelectorAll('#interests section');
    sections.forEach(section => {
        const cards = section.querySelector('.cards');
        cards.classList.add('collapsed');
    });

    sections.forEach(section => {
        const h3 = section.querySelector('h3');
        const cards = section.querySelector('.cards');
        h3.addEventListener('click', () => {
            cards.classList.toggle('collapsed');
            h3.querySelector('i').classList.toggle('fa-chevron-up');
            h3.querySelector('i').classList.toggle('fa-chevron-down');
        });
    });
});
