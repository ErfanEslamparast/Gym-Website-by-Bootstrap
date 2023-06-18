//Navbar Event
const navButton=document.querySelector("#nav-btn")
navButton.addEventListener('click',()=>{
    navButton.classList.toggle('change')
})

//Variables
const navMenu=document.querySelector('.nav-menu')
const awardTxt=document.querySelector('.award-text')
const awardIMG=document.querySelector('.award-img')
const rightCard=document.querySelector('#from-right')
const centerCard=document.querySelector('#from-bottom')
const leftCard=document.querySelector('#from-left')
const plans=document.querySelectorAll('.plans .col-lg-4')

//Functions
const awardAdder=function(){
  awardTxt.classList.add('from-right')
  awardIMG.classList.add('from-left')
}
const awardRemover=function(){
  awardTxt.classList.remove('from-right')
  awardIMG.classList.remove('from-left')
}
const plansAdder=function(){
  rightCard.classList.add('card-right')
  centerCard.classList.add('card-bottom')
  leftCard.classList.add('card-left')
}
const plansMdAdder=function(){
  plans.forEach(plan=>plan.classList.add('card-zoom'))
}
const palnsRemover=function(){
  rightCard.classList.remove('card-right')
  centerCard.classList.remove('card-bottom')
  leftCard.classList.remove('card-left')
}
const plansMdRemover=function(){
  plans.forEach(plan=>plan.classList.remove('card-zoom'))
}

//Scroll Events
window.addEventListener('scroll',()=>{
  let height=window.scrollY;
  let width=window.innerWidth;

  //Award Animations
  if(height >= 250) navMenu.classList.add('custom-menu')
  else              navMenu.classList.remove('custom-menu')

  if(width >= 576 && width <= 768 && height >= 1600 && height <= 3100)      awardAdder()
  else if(width >= 768 && width <= 992 && height >= 1000 && height <= 2300) awardAdder()
  else if(width >= 992 && height >= 750 && height <= 2000)                  awardAdder()
  else                                                                      awardRemover()

 //Plans Animations
  if(width >= 992 && height >= 4250 ) plansAdder()
  else                                palnsRemover()

  if     (width >= 576 && height >= 7150 )                 plansMdAdder()
  else if(width >= 768 && width <= 992 && height >= 5950 ) plansMdAdder() 
  else                                                     plansMdRemover()
 })

//Gallery list Events

  /////////  Don't work properly  /////////

// const brdcrmbs=Array.from(document.querySelectorAll('.breadcrumb-item'))
// brdcrmbs.forEach((element)=>{
//   element.addEventListener('click',(e)=>{
//     let category=e.target.getAttribute("breadcrumb-title")
//     const allImages=document.querySelectorAll('.all');
//           allImages.forEach((img)=>{
            
//             if(category == 'all' && img.classList.contains('all'))   img.style.display = "flex" 
//             else                                                     img.style.display = "none"

//             if(category == 'new' && img.classList.contains('new'))   img.style.display = "flex"
//             else                                                     img.style.display = "none"

//             if(category == 'wgt' && img.classList.contains('wgt'))   img.style.display = "flex"
//             else                                                     img.style.display = "none"

//             if(category == 'athl' && img.classList.contains('athl')) img.style.display = "flex"
//             else                                                     img.style.display = "none"
//           })
//   })
// })

  /////////  This part of code just copied and isn't for me   /////////


$('.breadcrumb-item').click(function(){
  let value = $(this).attr('breadcrumb-title');
  $(this).removeClass('active').siblings().addClass('active')

  if(value === 'all'){
      $('.all').show(300)
  }else{
      $('.all').not('.' + value).hide(300);
      $('.all').filter('.' + value).show(300);
 }
})