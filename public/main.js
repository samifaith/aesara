let slideIndex = 1;

showSlide(slideIndex);

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}


function showSlide(n){
  let slides = document.querySelectorAll('.slides')
  let dots = document.querySelectorAll('.dots')

  if (n > slides.length) {
    slideIndex = 1;
  }
  if ( n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++){
     dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex -1].className += " active";
}

document.querySelector('#edit').addEventListener('click', () => {
  if(    document.querySelector('#textArea').disabled === false  ){
    document.querySelector('#textArea').disabled = true
  }else{
    document.querySelector('#textArea').disabled = false
  }
})