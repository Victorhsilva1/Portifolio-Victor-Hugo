const menuBtn = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navigation.classList.contains('active') && link.getAttribute('href').startsWith('#')) {
            setTimeout(() => {
                navigation.classList.remove('active');
            }, 100); 
        } else if (navigation.classList.contains('active')) {
            navigation.classList.remove('active');
        }
    });
});
