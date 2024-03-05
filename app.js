// This code snippet comes from the tutorial 
// https://www.youtube.com/watch?v=T33NN_pPeNI&ab_channel=BeyondFireship
// Which I used to show and remove different components on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));