document.body.onload = function() {

    setTimeout(function() {
        let preloader  = document.getElementById('page__preloader');
                   
           if(!preloader.classList.contains('done')) {
               preloader.classList.add('done');
           }
           
    },1000);

}

class Slider {
    constructor(images, buttons, pages, duration = 10000) {
        this.images = images;
        this.buttons = buttons;
        this.pages = pages;
        this.index = 0;
        this.duration = duration;
        this.animate = true; 
    }
    __addActiveClass(index) {
        this.images[index].classList.add("slider__li_active");
        this.pages[index].classList.add("slider__pages-li_active");
    }
    __removeActiveClass(index) {
        this.images[index].classList.remove("slider__li_active");
        this.pages[index].classList.remove("slider__pages-li_active");
    }
    __setIndex(number) {
        if(number >= this.images.length)
            this.index = 0;
        else if(number < 0)
            this.index = this.images.length - 1;
        else
            this.index = number;
    }
    changePage(number) {
        this.__removeActiveClass(this.index);
        if(number >= 0 && number < this.images.length)
            this.__setIndex(number);
        this.__addActiveClass(this.index);
    }
    startSlideShow() {
        this.interval = setInterval(this.nextSlide.bind(this), this.duration);
    }
    stopSlideShow() {
        clearInterval(this.interval);
    }
    nextSlide() {
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index + 1);
        this.__addActiveClass(this.index);
    }
    prevSlide() {
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index - 1);
        this.__addActiveClass(this.index);
    }
    controllerClick(event) {
        let target = event.target.dataset.target;
        if(target){
            event.preventDefault();
            if (target >= "0" && target <= "9") {
                this.changePage(Number.parseInt(target));
            }
        }
    }
    controllerHover() {
        console.log(111);
        this.animate = !this.animate;
        if(this.animate) {
            this.startSlideShow();
        } else {
            this.stopSlideShow();
        }
    }
    
}

const images = document.querySelectorAll(".slider__li");
    const buttons = document.querySelectorAll(".slider__button");
    const pages = document.querySelectorAll(".slider__pages-li");
    const page = document.querySelector(".slider__pages-block");
    const sliderBlock = document.querySelector(".slider");
    
    const slider = new Slider(images,buttons,pages);
    
    slider.startSlideShow();



    sliderBlock.addEventListener("click", slider.controllerClick.bind(slider));
    page.addEventListener("mouseenter", slider.controllerHover.bind(slider));
    page.addEventListener("mouseleave", slider.controllerHover.bind(slider));




    let timerId;

    function update() {
      let clock = document.getElementById('clock');
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      clock.children[0].innerHTML = hours;

      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      clock.children[1].innerHTML = minutes;

      let seconds = date.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
      timerId = setInterval(update, 1000);
      update(); // <--  начать тут же, не ждать 1 секунду пока setInterval сработает
    }

    function clockStop() {
      clearInterval(timerId);
    }

    function dateStart() {
        let textDate = document.getElementById('dat');
        let hpDay = document.getElementById('hpDay');
        let today = new Date().toLocaleDateString();
        let m;
        let n = today.slice(0,2);

        if(n < 10 ) {
          n = today.slice(1,2);
        }

        switch(today.slice(3,5)) {
          case '01': m = 'января'; break;
          case '02': m = 'февраля'; break;
          case '03': m = 'марта'; break;
          case '04': m = 'апреля'; break;
          case '05': m = 'мая'; break;
          case '06': m = 'июня'; break;
          case '07': m = 'июля'; break;
          case '08': m = 'августа'; break;
          case '09': m = 'сентября'; break;
          case '10': m = 'октября'; break;
          case '11': m = 'ноября'; break;
          case '12': m = 'декабря'; break;
        }

    

        hpDay.innerHTML= `Сегодня ${n} ${m}`;

        textDate.innerHTML = today;
    }

    clockStart();
    dateStart();

    
    
