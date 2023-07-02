document.querySelector('.navbar .menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar .links ul').classList.toggle("active");
    document.querySelectorAll('.menu-btn i').forEach((e) => {
        e.classList.toggle("active")
    })
})
document.addEventListener("scroll", () => {
    if (this.scrollY > 20) {
        document.querySelector('.navbar').classList.add("active")
    } else {
        document.querySelector('.navbar').classList.remove("active")
    }
})



// Get all the buttons
const btn = document.querySelectorAll('.btn');

// Add event listener to each button
btn.forEach(element => {
    element.addEventListener('click', () => {
        // Remove "active" class from all buttons
        btn.forEach(el => el.classList.remove('active'));

        // Add "active" class to the clicked button
        element.classList.add('active');
    });
});



//   fetch('data.json').then(re=>re.json())
//     .then(dat=>{
//         console.log(dat)
//     })