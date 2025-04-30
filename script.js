
// About Buttons

const aboutBtns = document.querySelectorAll('.about-btn');

aboutBtns.forEach((btn, idx) =>{
    btn.addEventListener('click', () => {
        const aboutDetails = document.querySelectorAll('.about-detail');

        aboutBtns.forEach(btn =>{
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        aboutDetails.forEach(detail =>{
            detail.classList.remove('active');
        });
        aboutDetails[idx].classList.add('active');
    });
});

// Homepage Text

var typed= new Typed(".text", {
    strings:["3rd Year", "BSIT 3C"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

