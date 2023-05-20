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
    console.log(e.currentTarget.children[1])
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

//동영상 슬라이드
const nextBtn = document.querySelector(".btn_next");
const prevBtn = document.querySelector(".btn_prev");
const slides = document.querySelectorAll(".slide_wrap>li");
const slideRolls = document.querySelectorAll(".slide_roll>ul>li");
const slideLength = slides.length-1;
let slideIndex = 0;

nextBtn.addEventListener("click", e => {
  e.preventDefault();
  slideIndex++;
  if(slideIndex>slideLength) slideIndex = 0;
  banner(slideIndex);
});

prevBtn.addEventListener("click", e => {
  e.preventDefault();
  slideIndex--;
  if(slideIndex<0) slideIndex = slideLength;
  banner(slideIndex);
});

function banner(i) {
  slides.forEach((li,index) => {
    li.classList.remove("active","on");
    slideRolls[index].classList.remove("on");
  });
  slides[i].classList.add("active","on");
  slideRolls[i].classList.add("on");
}

function autoBanner() {
  slideIndex++;
  if(slideIndex>slideLength) slideIndex = 0;
  banner(slideIndex);
  autoBnn = setTimeout(autoBanner,5000); //재귀함수
}

let autoBnn = setTimeout(autoBanner,5000);//최초호출
const btnPlay = document.querySelector(".btn_play");
let flag = 0;

btnPlay.addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  if(flag == 0) {
    clearTimeout(autoBnn);
    flag = 1;
  }
  else {
    autoBnn = setTimeout(autoBanner,5000);
    flag = 0;
  }
});

// 롤링버튼클릭
// 해당 배너로 이동
slideRolls.forEach((li,index) => {
  li.addEventListener("click", e => {
    e.preventDefault();
    banner(index);
  });
});


// 스크롤 위치에 따라 내용이 나타나는 효과

const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const content4 = document.querySelector('.content4')
const sitemap = document.querySelector('.sitemap')
const footer = document.querySelector('#footer')
console.log(footer)

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset;
  console.log(scrollTop);

  let windowHeight = window.innerHeight;
  let scrollHeight = document.documentElement.scrollHeight - windowHeight;

  let scrollPercentage = (scrollTop / scrollHeight) * 100;

  if (scrollPercentage >= 10) {
    content1.classList.add('on');
  }

  if (scrollPercentage >= 20) {
    content2.classList.add('on');
  }

  if (scrollPercentage >= 40) {
    content3.classList.add('on');
  }

  if (scrollPercentage >= 60) {
    content4.classList.add('on');
  }

  if (scrollPercentage >= 80) {
    sitemap.classList.add('on');
  }

  if (scrollPercentage >= 90) {
    footer.classList.add('on');
  }
});


})