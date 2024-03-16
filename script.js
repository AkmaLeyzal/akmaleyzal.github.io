let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section =  document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a[href*=" + id + " ]").classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
};
