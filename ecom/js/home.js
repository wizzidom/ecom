// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',() => {
    console.log(scrollY )
    if(scrollY>=270){
        navbar.classList.add('bg')
    }
    else {
        navbar.classList.remove('bg')
    }
}

)

//image collage

const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item,i) => {
    item.addEventListener('mouseover' , () => {
        collageImages.map((image,index) => {
            if(index != i){
                image.style.filter = 'blur(5px)';
                item.style.zIndex = 2;
            }
        })
    } )
})
item.addEventListener('mouseleave' , () => {
    collageImages.map((image,index) => {
        image.style = null;
    })
})