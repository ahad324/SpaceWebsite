document.querySelector('.navbar .menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar .links ul').classList.toggle("active");
    document.querySelector('.navbar').classList.toggle("active")
    document.querySelectorAll('.menu-btn i').forEach((e) => {
        e.classList.toggle("active")
    })
})