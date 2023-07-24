const box = document.querySelectorAll('.box');
const ovserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show-box', entry.isIntersecting)
    })
},
{
    threshold: 1,
    //rootMargin: '-350px',
}
)

box.forEach(box => {
    ovserver.observe(box);
})