const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});





const leftElements = document.querySelectorAll('.left')
leftElements.forEach((el) => observer.observe(el));

const topElements = document.querySelectorAll('.top')
topElements.forEach((el) => observer.observe(el));


