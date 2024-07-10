const carousel= document.querySelector(".carouselbyme");
const carouselTwo= document.querySelector(".carouselbymetwo");
const getStartBtn= document.querySelector(".fourthareadivright button");
// const img= document.querySelector(".img");
const arrowBtn = document.querySelectorAll(".wrapperbyme i")
const arrowBtnTwo = document.querySelectorAll(".wrapperbymetwo i")
const movieimg =document.querySelectorAll(".sliderbyme .img ")
const movieimgtwo =document.querySelectorAll(".sliderbymetwo .imgtwo ")
// const imgLength = document.querySelector('.realimg').offsetWidth;
// let isDragging=false,startX, startScrollLeft;

  arrowBtn.forEach(element => {
      element.addEventListener('click',()=>{
      carousel.scrollLeft += element.id==='left'? -260:260;
  });
  });

  arrowBtnTwo.forEach(element => {
    element.addEventListener('click',()=>{
    carouselTwo.scrollLeft += element.id==='lefttwo'? -260:260;
});
});

// for showing movie info

movieimg.forEach(element=>{
    
  element.addEventListener('mouseenter', ()=>{
    
    element.style.transform= 'scale(1.1)';
    element.nextElementSibling.style.transform= 'scale(1.1)';
    element.nextElementSibling.style.display='flex';
  })

  element.addEventListener('click',  ()=>{
    window.location.href="searchmovie.html";
  })
  element.addEventListener('mouseleave',()=>{
    
    element.style.transform= 'none';
     element.nextElementSibling.style.transform= 'none';
    element.nextElementSibling.style.display='none';
    
  })
})


movieimgtwo.forEach(element=>{
    
  element.addEventListener('mouseenter', ()=>{
    
    element.style.transform= 'scale(1.1)';
    element.nextElementSibling.style.transform= 'scale(1.1)';
    element.nextElementSibling.style.display='flex';
  })

  element.addEventListener('click',  ()=>{
    window.location.href="searchmovie.html";
  })
  element.addEventListener('mouseleave',()=>{
    
    element.style.transform= 'none';
     element.nextElementSibling.style.transform= 'none';
    element.nextElementSibling.style.display='none';
    
  })
})

getStartBtn.addEventListener('click',()=>{
    window.location.href='searchmovie.html';
})
// const dragStart =(e)=>{
//     isDragging = true;
//     carousel.classList.add('dragging');
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }
// const dragging =(e)=>{
//    if(!isDragging){
//     return;}
//   carousel.scrollLeft = startScrollLeft-(e.pageX-startX);

// }
// const dragStop =()=>{
//     isDragging = false;
//     carousel.classList.remove('dragging')
// }


// let isDraggingTwo=false,startTwoX, startScrollLeftTwo;

  
// const dragStartTwo =(e)=>{
//     isDraggingTwo = true;
//     carouselTwo.classList.add('dragging');
//     startTwoX = e.pageX;
//     startScrollLeftTwo = carouselTwo.scrollLeft;
// }
// const draggingTwo =(e)=>{
//    if(!isDraggingTwo){
//     return;}
//   carouselTwo.scrollLeft = startScrollLeftTwo-(e.pageX-startTwoX);

// }
// const dragStopTwo =()=>{
//     isDraggingTwo = false;
//     carouselTwo.classList.remove('dragging')
// }
// carousel.addEventListener('mousedown', dragStart);
// carousel.addEventListener('mousemove', dragging);
// carousel.addEventListener('mouseout', dragStop);
// carousel.addEventListener('mouseup', dragStop);
// carouselTwo.addEventListener('mousedown', dragStartTwo);
// carouselTwo.addEventListener('mousemove', draggingTwo);
// carouselTwo.addEventListener('mouseout', dragStopTwo);
// carouselTwo.addEventListener('mouseup', dragStopTwo);

// img.addEventListener('mousedown', dragStart);
// img.addEventListener('mouseup', dragStop);

// img.addEventListener('mousemove', dragging);

