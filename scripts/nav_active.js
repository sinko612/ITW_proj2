/**
 * JS code which is changing color of navigation despite on which section is active.
 * 
 * @author xjanos19
 */

const navLinks = document.querySelectorAll('#navigation ul li a');
function isSectionPartiallyInView(section) {
    const rect = section.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function highlightNavLink() {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const listItem = link.parentNode;
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section && isSectionPartiallyInView(section) && section.offsetTop <= scrollPosition) {
            navLinks.forEach(navLink => navLink.parentNode.classList.remove('active'));
            listItem.classList.add('active');
        }
    });
}

document.addEventListener('scroll', highlightNavLink);
