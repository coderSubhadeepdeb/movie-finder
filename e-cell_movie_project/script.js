const carousel= document.querySelector(".carouselbyme");
const carouselTwo= document.querySelector(".carouselbymetwo");
// const img= document.querySelector(".img");
const arrowBtn = document.querySelectorAll(".wrapperbyme i")
const arrowBtnTwo = document.querySelectorAll(".wrapperbymetwo i")
// const imgLength = document.querySelector('.realimg').offsetWidth;
let isDragging=false,startX, startScrollLeft;

  arrowBtn.forEach(element => {
      element.addEventListener('click',()=>{
      carousel.scrollLeft += element.id==='left'? -260:260;
  });
  });
const dragStart =(e)=>{
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging =(e)=>{
   if(!isDragging){
    return;}
  carousel.scrollLeft = startScrollLeft-(e.pageX-startX);

}
const dragStop =()=>{
    isDragging = false;
    carousel.classList.remove('dragging')
}


let isDraggingTwo=false,startTwoX, startScrollLeftTwo;

  arrowBtnTwo.forEach(element => {
      element.addEventListener('click',()=>{
      carouselTwo.scrollLeft += element.id==='lefttwo'? -260:260;
  });
  });
const dragStartTwo =(e)=>{
    isDraggingTwo = true;
    carouselTwo.classList.add('dragging');
    startTwoX = e.pageX;
    startScrollLeftTwo = carouselTwo.scrollLeft;
}
const draggingTwo =(e)=>{
   if(!isDraggingTwo){
    return;}
  carouselTwo.scrollLeft = startScrollLeftTwo-(e.pageX-startTwoX);

}
const dragStopTwo =()=>{
    isDraggingTwo = false;
    carouselTwo.classList.remove('dragging')
}
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseout', dragStop);
carousel.addEventListener('mouseup', dragStop);
carouselTwo.addEventListener('mousedown', dragStartTwo);
carouselTwo.addEventListener('mousemove', draggingTwo);
carouselTwo.addEventListener('mouseout', dragStopTwo);
carouselTwo.addEventListener('mouseup', dragStopTwo);

// img.addEventListener('mousedown', dragStart);
// img.addEventListener('mouseup', dragStop);

// img.addEventListener('mousemove', dragging);

