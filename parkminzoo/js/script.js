
//horizon scroll
(function(){
    init();

    var g_containerInViewport;
    function init(){
        setStickyContainersSize();
        bindEvents();
    }

    function bindEvents(){
        window.addEventListener("wheel", wheelHandler);        
    }

    function setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach(function(container){
            const stikyContainerHeight = container.querySelector('main').scrollWidth;
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }

    function isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt){
        
        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
            return isElementInViewport(container);
        })[0];

        if(!containerInViewPort){
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if(g_canScrollHorizontally){
            containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
        }
    }
})();


//skills
const skillsSection = document.getElementById('skills-section');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
  progressBars.forEach(progressBar => {
    const value = progressBar.dataset.progress;
    // console.log(value);
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`
  });
}

function hideProgress(){
  progressBars.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener('scroll',() => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight/2;

  if(sectionPos < screenPos){
    // console.log('show progress');
    showProgress();
  }else{
    // console.log('hide progress');
    hideProgress();
  }

});


//슬라이드1

   //변수지정
   var sliderWrapper = document.getElementsByClassName('container'),
      sliderContainer = document.getElementsByClassName('slider-container'),
      slides = document.getElementsByClassName('slide'),
      slideCount = slides.length,
      currentIndex = 0,
      topHeight = 0,
      navPrev = document.getElementById('prev'),
      navNext = document.getElementById('next'); 

      // console.log(slideCount);

  //슬라이드 높이 확인하여 부모의 높이로 지정하기
  // topHeight = slides[num].offsetHeight //배열이기떄문에 []안에 넣음
    function calculateTallestSlide(){
      // for(시작;끝값(조건);증감){실제로 반복할 일}
      for(var i = 0 ; i < slideCount; i++){
        if(slides[i].offsetHeight > topHeight){
          topHeight = slides[i].offsetHeight
        }  
      }
      sliderWrapper[0].style.height = topHeight + 'px' //하나밖에 없기때문에 0
      sliderContainer[0].style.height = topHeight + 'px';
    }
    calculateTallestSlide();
  
  //슬라이드가 있으면 가로로 배열하기
  // for(시작;끝값(조건);증감){실제로 반복할 일}

    for(var i = 0 ; i < slideCount; i++){
      slides[i].style.left = i*100 + '%' 
    }
  //슬라이드 이동 함수
  function goToSlide(idx){
    sliderContainer[0].style.left = idx * -100 + '%';
    sliderContainer[0].classList.add('.animated');
    currentIndex = idx;

    //updateNav(); 
    //***처음버튼 눌렀을 때 마지막으로 가거나
    //마지막 버튼 눌렀을 때 첫번째로 가게하려면 업데이트 네브 없애기
  }

  //버튼기능 업데이트 함수
    function updateNav(){
      //처음일 때
      if(currentIndex == 0){
        navPrev.classList.add('disabled');
      }else{
        navPrev.classList.remove('disabled');
      }
      //마지막일 때
      if(currentIndex == slideCount - 1){
        navNext.classList.add('disabled');
      }else{
        navNext.classList.remove('disabled');
      }
    }


  //버튼 클릭하면 슬라이드 이동
  // navPrev.addEventListener('이벤트종류',function(){})
  navPrev.addEventListener('click',function(event){
    event.preventDefault(); //a태그를 썼기 때문에 링크가 걸리는 것을 막아줌
    // goToSlide(currentIndex - 1); 
    // ***

    //처음이 아니라면 goToSlide(currentIndex - 1);
    //처음이라면 goToSlide 마지막으로
    if(currentIndex > 0){
      goToSlide(currentIndex - 1);
    }else{
      goToSlide(slideCount - 1);
    }
});
  navNext.addEventListener('click',function(){
    event.preventDefault();
    // goToSlide(currentIndex + 1);
    //***

    if(currentIndex < slideCount - 1){
      goToSlide(currentIndex + 1);
    }else{
      goToSlide(0);
    }
});

  //첫번째 슬라이드 먼저 보이도록 하기
  goToSlide(0); //지금이 첫번째인것을 지정해줘야 첫페이지 화살표가 사라짐

//슬라이드2

   //변수지정
   var sliderWrapper = document.getElementsByClassName('container2'),
      sliderContainer = document.getElementsByClassName('slider-container2'),
      slides = document.getElementsByClassName('slide2'),
      slideCount = slides.length,
      currentIndex = 0,
      topHeight = 0,
      navPrev = document.getElementById('prev2'),
      navNext = document.getElementById('next2'); 

      // console.log(slideCount);

  //슬라이드 높이 확인하여 부모의 높이로 지정하기
  // topHeight = slides[num].offsetHeight //배열이기떄문에 []안에 넣음
    function calculateTallestSlide(){
      // for(시작;끝값(조건);증감){실제로 반복할 일}
      for(var i = 0 ; i < slideCount; i++){
        if(slides[i].offsetHeight > topHeight){
          topHeight = slides[i].offsetHeight
        }  
      }
      sliderWrapper[0].style.height = topHeight + 'px' //하나밖에 없기때문에 0
      sliderContainer[0].style.height = topHeight + 'px';
    }
    calculateTallestSlide();
  
  //슬라이드가 있으면 가로로 배열하기
  // for(시작;끝값(조건);증감){실제로 반복할 일}

    for(var i = 0 ; i < slideCount; i++){
      slides[i].style.left = i*100 + '%' 
    }
  //슬라이드 이동 함수
  function goToSlide(idx){
    sliderContainer[0].style.left = idx * -100 + '%';
    sliderContainer[0].classList.add('.animated');
    currentIndex = idx;

    //updateNav(); 
    //***처음버튼 눌렀을 때 마지막으로 가거나
    //마지막 버튼 눌렀을 때 첫번째로 가게하려면 업데이트 네브 없애기
  }

  //버튼기능 업데이트 함수
    function updateNav(){
      //처음일 때
      if(currentIndex == 0){
        navPrev.classList.add('disabled');
      }else{
        navPrev.classList.remove('disabled');
      }
      //마지막일 때
      if(currentIndex == slideCount - 1){
        navNext.classList.add('disabled');
      }else{
        navNext.classList.remove('disabled');
      }
    }


  //버튼 클릭하면 슬라이드 이동
  // navPrev.addEventListener('이벤트종류',function(){})
  navPrev.addEventListener('click',function(event){
    event.preventDefault(); //a태그를 썼기 때문에 링크가 걸리는 것을 막아줌
    // goToSlide(currentIndex - 1); 
    // ***

    //처음이 아니라면 goToSlide(currentIndex - 1);
    //처음이라면 goToSlide 마지막으로
    if(currentIndex > 0){
      goToSlide(currentIndex - 1);
    }else{
      goToSlide(slideCount - 1);
    }
});
  navNext.addEventListener('click',function(){
    event.preventDefault();
    // goToSlide(currentIndex + 1);
    //***

    if(currentIndex < slideCount - 1){
      goToSlide(currentIndex + 1);
    }else{
      goToSlide(0);
    }
});

  //첫번째 슬라이드 먼저 보이도록 하기
  goToSlide(0); //지금이 첫번째인것을 지정해줘야 첫페이지 화살표가 사라짐

