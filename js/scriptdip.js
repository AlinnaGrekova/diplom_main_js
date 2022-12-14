window.addEventListener('DOMContentLoaded', ()=>{
    
//timer
const timeEnd='2022-12-12';
function getTimeRemaining(endTime){
    const t =Date.parse(endTime)-Date.parse(new Date()),
    days = Math.floor(t/(1000*60*60*24)),
    hours = Math.floor(t/(1000*60*60)%24),
    minutes =Math.floor(t/(1000/60)%60),
    seconds = Math.floor((t/1000)%60);

    return{
        'total': t,
        'days':days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    };
}

function setClock(selector, endTime){
    const   timer = document.querySelector(selector),
            days= document.querySelector('.days'),
            hours= document.querySelector('.hours'),
            minutes= document.querySelector('.minutes'),
            seconds= document.querySelector('.seconds'),
            timeInterval=setInterval(updateClock,1000);


    function updateClock(){
            const t = getTimeRemaining(endTime);
            days.innerHTML=t.days;
            hours.innerHTML=t.hours;
            minutes.innerHTML=t.minutes;
            seconds.innerHTML=t.seconds;
}
}
setClock('.countdown', timeEnd);

//slidesslide
const slides = document.querySelectorAll('.swiper-slide'), 
        prev = document.querySelector('.tc-button tc-button-prev'),
        next = document.querySelector('.tc-button tc-button-next');

        let slideIndex=1;
        showslides(slideIndex);
        function showslides(n){
            if(n>slides.length){
                slideIndex=1;
            }
            if(n<1){
                slideIndex=slides.length;
            }
            // slides.forEach(item=>item.style.display='none');
            // slides[slideIndex-1].style.display ='block';
        }
        

        function plusSlides(n){
            showslides(slideIndex +=n);
        }

        prev?.addEventListener('click', ()=>{
            plusSlides(-1);
        })
        next?.addEventListener('click', ()=>{
            plusSlides(1);
        })
});

