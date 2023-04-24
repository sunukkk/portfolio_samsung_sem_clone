window.addEventListener('load', () =>{

//main.js

/* 주메뉴 */
// 각 li에 마우스 올리면 높이값 가져와서 풀다운 메뉴 내려오고 보여야 됨,
// 키보드 탭으로도 움직여야함

const gnbMenu = document.querySelectorAll('.gnb>ul>li');
const headerWrap = document.querySelector('.header_wrap')



for(let i = 0; i<gnbMenu.length; i++){
  gnbMenu[i].addEventListener('mouseover', e =>{
    e.currentTarget.classList.add('on')
    let ht = e.currentTarget.children[1].offsetHeight;
    headerWrap.style.height = `${70+ht}px`
    
  })

  gnbMenu[i].addEventListener('mouseout', e =>{
    e.currentTarget.classList.remove('on')
    headerWrap.style.height = `${70}px`
  })
  
  gnbMenu[i].children[0].addEventListener('focus', e => {
    e.currentTarget.parentElement.classList.add('on')
    let ht = e.currentTarget.nextElementSibling.offsetHeight;
    headerWrap.style.height = `${70+ht}px`
  })

  gnbMenu[i].children[0].addEventListener('blur', e => {
    e.currentTarget.parentElement.classList.remove('on')
    headerWrap.style.height = `${70}px`
  })
}




/* 검색박스 */
// 검색버튼 누르면 검색박스 보이고
// 닫기버튼 누르면 검색박스 안보이게

const btnSrch = document.querySelector('.btn_srch')
const srchWrap = document.querySelector('.srch_wrap')
const btnSrchClose = document.querySelector('.btn_srch_close')

btnSrch.addEventListener('click', e =>{
  e.preventDefault();
  srchWrap.classList.add('on')
});

btnSrchClose.addEventListener('click', e =>{
  e.preventDefault();
  srchWrap.classList.remove('on')
});


// /* 오토배너 */

// //next 버튼 클릭했을때
// //li.slide_roll 
// //.slide_roll>ul>li.on>a

// const btnNext = document.querySelector('.btn_next')
// const btnPrev = document.querySelector('.btn_prev')
// const slide = document.querySelectorAll('.slide')
// const slideRoll = document.querySelectorAll('.slide_roll li')
// const btnPlay = document.querySelector('.btn_play')




// let bnnNum = 0;
// let lastNum = document.querySelectorAll('.slide_wrap>li').length -1;


// function activation(index,list){
//   for(let i=0; i<list.length;i++){
//     list[i].classList.remove('on','active');
//   }
//   list[index].classList.add('on','active')
// }

// btnNext.addEventListener('click', e =>{
//   e.preventDefault();
//   bnnNum++;
//   if(bnnNum>lastNum)bnnNum=0;
//   // for(let j = 0;j<slide.length;j++){
//   //   slide[j].classList.remove('active')
//   //   slideRoll[j].classList.remove('on')
//   // }
//   // slide[bnnNum].classList.add('active')
//   // slideRoll[bnnNum].classList.add('on')
//   activation(bnnNum, slide)
//   activation(bnnNum, slideRoll)
// })
  


// //prev버튼 클릭했을때

// btnPrev.addEventListener('click', e=>{
//   e.preventDefault();
//   bnnNum--;
//   if(bnnNum<0)bnnNum=lastNum;

//   activation(bnnNum, slide)
//   activation(bnnNum, slideRoll)

// })
// //오토배너 5초마다

// function autoBanner(){
//   bnnNum++;
//   if(bnnNum>lastNum) bnnNum=0;
//   activation(bnnNum,slide);
//   activation(bnnNum,slideRoll);
//   autoBnn = setTimeout(autoBanner,5000);
// }

// let autoBnn = setTimeout(autoBanner,5000)


// /* let autoBnn = setInterval(() =>{
//   bnnNum++;
//   if(bnnNum>lastNum) bnnNum=0;
//   activation(bnnNum,slide);
//   activation(bnnNum,slideRoll);
// }
// ,5000) */


// // 배너 재생 멈춤 버튼
// // 배너 멈추고 이미지 바뀌고
// // 배너 재생 이미지 바뀌고


// // 롤링버튼클릭
// // 해당배너로 이동



// // const btnNext = document.querySelector('.btn_next')
// // const btnPrev = document.querySelector('.btn_prev')
// // const slide = document.querySelectorAll('.slide')
// // const slideRoll = document.querySelectorAll('.slide_roll ul li')


// let flag = true;



// btnPlay.addEventListener('click', e =>{
//   e.preventDefault();
//   if(flag==true){
//     btnPlay.classList.add('on');
//     clearTimeout(autoBnn); 
//     flag = false;

//   }else{
//     btnPlay.classList.remove('on')
//     autoBnn = setTimeout(autoBanner, 5000)
//     flag = true;
//   }
//   })
  
  
// for(let i=0; i<slideRoll.length;i++){
//   slideRoll[i].addEventListener('click', e =>{
//     e.preventDefault();
//     activation(i, slide);
//     activation(i, slideRoll);
    
//   })
// }

// top 버튼
// 클릭하면 스크롤 맨위로 올라감
const btnTop = document.querySelector('.btn_top')

btnTop.addEventListener('click', e =>{
  e.preventDefault();
  window.scroll({
    top: 0});
})


// 스크롤을 움직이면
// 스크롤 위치에 따라서 탑버튼이 바뀜
window.addEventListener('scroll', () =>{
  let scroll = window.pageYOffset;
  

  if(scroll <=0)
    {btnTop.classList.remove('on','ab');
    
  }else if(scroll>2800){
      btnTop.classList.add('ab'); 
      btnTop.classList.add('on');   
  }else{
    btnTop.classList.remove('ab')
    btnTop.classList.add('on')
  }

})

// sub1.html
// step1

const btnInq = document.querySelectorAll('.step1 ul li>a')
console.log(btnInq)

for(let i=0;i<btnInq.length;i++){
  btnInq[i].addEventListener('click', e =>{
    e.preventDefault();
    for(let i=0;i<btnInq.length;i++){
      btnInq[i].style.background = `#fff url(images/ico_inquiry_0${i+1}.png) no-repeat 50% 35%`
      btnInq[i].style.color = `#333`
    }
    btnInq[i].style.background = `#043285 url(images/ico_inquiry_on_0${i+1}.png) no-repeat 50% 35%`
    btnInq[i].style.color = `#fff`
    console.log(btnInq[i])
  })
}

})