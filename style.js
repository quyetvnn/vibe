
$(function(){

    new WOW().init();

    // function to config text animation for the title with 4 parametter:
    // 
    // 1. text 
    // 2. father div 
    // 3. child div 
    // 4. multicolor: optional (true / false / null)
    
    function textFallInDown_animation($text, $father_div, $child_div, $multicolor){
        
        
        // split text to string
        $.each($text.split(""), function(key, val){
            $('.'+$father_div).append('<div class="'+$child_div+'">'+val+'</div>');
            if((val == " ") || (val == "&nbsp;" )){
                $('.'+$father_div).append('<div class="'+$child_div+' space">'+val+'</div>');
            }
        });

        var each_text = $('.'+$child_div);
        $.each(each_text, function() {
            var rand = Math.floor((Math.random()*1000)+ 1);
            // add random color here
            var r = Math.floor(Math.random()*255);
            var g = Math.floor(Math.random()*255);
            var b = Math.floor(Math.random()*255);
            var $color = "";
            if (( $multicolor == true) || ( $multicolor == 'true')) {
                $color = "rgb("+g+","+r+","+b+")";            }
            else if($multicolor == 'false')
            {}

            $(this).css({
                // add custom color 
                'color': $color,
                'margin-top': -rand
            }).animate({
                marginTop: '0px'
            },1000);
        });
        // end function generate the animation 
    }


// chay hieu ung chu o phan intro title
    var text = $('#hidenTitle').html();
    textFallInDown_animation(text, 'animateTitle', 'split-text');


$(window).scroll(function(event){


    // THIS CODE to: debug location of THIS ELEMENT when scroll and the ELEMENT OFFSET TOP
    // console.log($(this).scrollTop());
    // console.log($('.transparent').offset().top);

    // text animation for textandImage 1



    // Jquery for Mobile devices 
    if(window.matchMedia("(max-width: 991px)").matches){
console.log('day la man hinh < 991px')
        
        // text animation for textandImage 1
        if(  $(this).scrollTop() > ($('.onlyMb .normaly').offset().top - 450)){
            $('.onlyMb .normaly p').addClass('active');
        }
        else{
            $('.onlyMb .normaly p').fadeOut;
            $('.onlyMb .normaly p').removeClass('active');
        }

        // text animation for textandImage 2
        if(  $(this).scrollTop() > ($('.onlyMb.transparent').offset().top - 350)){
            $('.onlyMb.transparent p').addClass('active');
        }
        else{
            $('.onlyMb.transparent p').fadeOut;
            $('.onlyMb.transparent p').removeClass('active');
        }

    
    // *** ANIMATION FOR THE SERVICES SECTION:
        // text VIBE:
        scrollTop = $(this).scrollTop();
        currentToTop = $('.vibecover').offset().top-350;
        distance = scrollTop - currentToTop;
        // distance = (Math.round(distance / 10) * 10);

            // for DEBUG
            // console.log('scrollTop: '+scrollTop);
            // console.log('currentToTop: '+currentToTop);
            // console.log('distance: '+distance);
            // console.log("translateX("+distance+"px)");

        var vibe_animation = {
            transform : "translateX("+distance*0.75+"px)",
            transition: "0.3s"
            // position: "fixed",
            // top: "50px"
        };

        // text CENTRO
        var centro_animation = {
            transform : "translateX("+distance+"px)",
            transition: "0.3s"

        };
        // image animation
        var img_animation = {
            transform : "translateY("+distance*0.05+"px)",
            transition: "0.3s"
        };

        // trigger the Animation
        if((distance > 0)){
            $('.vibe').css(vibe_animation);
            $('.centro').css(centro_animation);
            $('.vibecover .textAndImg .right ').css(img_animation);
        }

        // text Animation for Comprehensive
        if(  $(this).scrollTop() > ($('.comprehen-icon').offset().top - 350)){
            $('.comprehen-icon p').addClass('active');
        }
        else{
            $('.comprehen-icon p').fadeOut;
            $('.comprehen-icon p').removeClass('active');
        }
        // text Animation for Services
        if(  $(this).scrollTop() > ($('.content').offset().top - 350)){
            $('.content p').addClass('active');
        }
        else{
            $('.content p').fadeOut;
            $('.content p').removeClass('active');
        }


        // *** Animation for the SCREEN PHONE Icon moving reserve direction
        if(  $(this).scrollTop() > ($('.comprehen-animate').offset().top - 100)){
                // FOR DEBUG
                // console.log('scrollTop: '+$(this).scrollTop());
                // console.log('currentToTop: '+$('.comprehen-animate').offset().top);
            $('.comprehen-animate .top').addClass('rightToLeft Mb');
            $('.comprehen-animate .bottom').addClass('leftToRight Mb');
        }
        else{
            // remove the animation, return first status 
            $('.comprehen-animate .screens').removeClass('rightToLeft leftToRight Mb');

        }

        // *** Animation for the Services 3 phone Icon 
        if(  $(this).scrollTop() > ($('.onlyMb .servicesIcon.Mb').offset().top - 250)){

            // add animation for 3 phone icons
            $('.content .onlyMb').addClass('zoomIn');
            // $('.onlyMb .servicesIcon.Mb ._centerIcon').addClass('zoomIn');
            $('.onlyMb .servicesIcon.Mb ._leftIcon').addClass('slideFromLeftToCenter');
            $('.onlyMb .servicesIcon.Mb ._rightIcon').addClass('slideFromRightToCenter');
        }
        else{
            $('.onlyMb .servicesIcon.Mb span').removeClass('zoomIn slideFromLeftToCenter slideFromRightToCenter');
            $('.content .onlyMb').removeClass('zoomIn');

        }

        // *** Animation for the bottom Vibe LOCATION
        if(  $(this).scrollTop() >=  ($('.location').offset().top) - 500){
            console.log('bottom')
            console.log($(this).scrollTop())
            console.log($('.location').offset().top )


            // add animation for 3 phone icons
            $('.location .vibeLogo img.logoImg').addClass('bounceIn');
            $('.location .vibeLogo img.pointer').addClass('fadeInSlow');
            $('.location .bottom img.bottomImg.Mb').addClass('jumpUp');
            
        }
        else{
            $('.location .vibeLogo img').removeClass('bounceIn fadeInSlow');
            $('.location .bottom img').removeClass('jumpUp');

        }
    
    } // end Jquery for Mobiles devices



// =======================================================================
// =======================================================================



    // Jquery for PC devices 
    else {



    // text animation for textandImage 1
    if(  $(this).scrollTop() > ($('.normaly').offset().top - 350)){
        $('.normaly p').addClass('active');
    }
    else{
        $('.normaly p').fadeOut;
        $('.normaly p').removeClass('active');
    }

    // text animation for textandImage 2
    if(  $(this).scrollTop() > ($('.transparent').offset().top - 350)){
        $('.transparent p').addClass('active');
    }
    else{
        $('.transparent p').fadeOut;
        $('.transparent p').removeClass('active');
    }


    
    // *** ANIMATION FOR THE SERVICES SECTION:
        // text VIBE:
        scrollTop = $(this).scrollTop();
        currentToTop = $('.vibecover').offset().top-350;
        distance = scrollTop - currentToTop;
        // distance = (Math.round(distance / 10) * 10);

            // for DEBUG
            // console.log('scrollTop: '+scrollTop);
            // console.log('currentToTop: '+currentToTop);
            // console.log('distance: '+distance);
            // console.log("translateX("+distance+"px)");

        var vibe_animation = {
            transform : "translateX("+distance*0.75+"px)",
            transition: "0.3s"
            // position: "fixed",
            // top: "50px"
        };

        // text CENTRO
        var centro_animation = {
            transform : "translateX("+distance+"px)",
            transition: "0.3s"
            // position: "fixed",
            // top: "650px"

        };
        // image animation
        var img_animation = {
            transform : "translateY("+distance*0.05+"px)",
            transition: "0.3s"
        };

        // trigger the Animation
        if((distance > 0)){
            $('.vibe').css(vibe_animation);
            $('.centro').css(centro_animation);
            $('.vibecover .textAndImg .right ').css(img_animation);
        }

    // if(  $(this).scrollTop() > ($('.vibecover').offset().top - 200)){
    //     $('.vibe ').removeClass('return').addClass('leftToRight');
    //     $('.centro ').removeClass('return').addClass('rightToLeft');
    //     $('.vibecover .textAndImg .right ').removeClass('return').addClass('downToUp');
    // }
    // else{
    //     $('.vibe ').removeClass('leftToRight').addClass('return');
    //     $('.centro ').removeClass('rightToLeft').addClass('return');
    //     $('.vibecover .textAndImg .right ').removeClass('downToUp').addClass('return');
    // }


    // text Animation for Comprehensive
    if(  $(this).scrollTop() > ($('.comprehen-icon').offset().top - 350)){
        $('.comprehen-icon p').addClass('active');
    }
    else{
        $('.comprehen-icon p').fadeOut;
        $('.comprehen-icon p').removeClass('active');
    }
    // text Animation for Services
    if(  $(this).scrollTop() > ($('.content').offset().top - 350)){
        $('.content p').addClass('active');
    }
    else{
        $('.content p').fadeOut;
        $('.content p').removeClass('active');
    }


    // *** Animation for the SCREEN PHONE Icon moving reserve direction
    if(  $(this).scrollTop() > ($('.comprehen-animate').offset().top - 150)){
            // FOR DEBUG
            // console.log('scrollTop: '+$(this).scrollTop());
            // console.log('currentToTop: '+$('.comprehen-animate').offset().top);
        $('.comprehen-animate .top').addClass('rightToLeft');
        $('.comprehen-animate .bottom').addClass('leftToRight');
    }
    else{
        // remove the animation, return first status 
        $('.comprehen-animate .screens').removeClass('rightToLeft leftToRight');

    }

    // *** Animation for the Services 3 phone Icon 
    if(  $(this).scrollTop() > ($('.servicesIcon.Pc').offset().top - 150)){

        // console.log('pc devices');
        // console.log($(this).scrollTop());
        // console.log($('.servicesIcon.Pc').offset().top);

        // add animation for 3 phone icons
        $('.servicesIcon.Pc ._centerIcon').addClass('zoomIn');
        $('.servicesIcon.Pc ._leftIcon').addClass('slideLeft');
        $('.servicesIcon.Pc ._rightIcon').addClass('slideRight');
    }
    else{
        $('.servicesIcon.Pc span').removeClass('zoomIn slideLeft slideRight');

    }

    // *** Animation for the bottom Vibe LOCATION
    if(  $(this).scrollTop() > ($('.location').offset().top - 500)){
        
        // add animation for 3 phone icons
        $('.location .vibeLogo img.logoImg').addClass('bounceIn');
        $('.location .vibeLogo img.pointer').addClass('fadeInSlow');
        $('.location .bottom img.bottomImg').addClass('jumpUp');
        
    }
    else{
        $('.location .vibeLogo img').removeClass('bounceIn fadeInSlow');
        $('.location .bottom img').removeClass('jumpUp');

    }

    } // end dectect and apply Jquery for screen > 768px 




});
// end function detect scroll window 

    // Script handle the smooth scroll and mouse speed 
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;

        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }

    var goUp = true;
    var end = null;
    var interval = null;

    function handle(delta) {
        var animationInterval = 35; //lower is faster
    var scrollSpeed = 10; //lower is faster

        if (end == null) {
        end = $(window).scrollTop();
    }
    end -= 20 * delta;
    goUp = delta > 0;

    if (interval == null) {
        interval = setInterval(function () {
        var scrollTop = $(window).scrollTop();
        var step = Math.round((end - scrollTop) / scrollSpeed);
        if (scrollTop <= 0 || 
            scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
            goUp && step > -1 || 
            !goUp && step < 1 ) {
            clearInterval(interval);
            interval = null;
            end = null;
        }
        $(window).scrollTop(scrollTop + step );
        }, animationInterval);
    }
    }


}) ;
// end father ready function 


 
// ===============================================================
// ===============================================================

// $(document).ready(function(){

//     // FUNCTION to smooth the scroll wheel in the mouse Devices and also other low quality touchpad
//     ! function() {
//         // "use strict";
//         var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
//             window.setTimeout(t, 1e3)
//         };
//         new class {
//             constructor(t) {
//                 Object.assign(this, t), this.target || (this.target = document.scrollingElement || document.documentElement || document.body.parentNode || document.body), this.speed = this.speed || 80, this.smooth = this.smooth || 12, this.pos = this.current || 0, this.frame = this.target === document.body && document.documentElement ? document.documentElement : this.target, this.min = this.min || 0, this.max = this.target.scrollHeight - this.target.clientHeight, this.moving = !1, this.target.scrollTop = this.pos, this.target.addEventListener("mousewheel", o, {
//                     passive: !1
//                 }), this.target.addEventListener("DOMMouseScroll", o, {
//                     passive: !1
//                 }), this.target.addEventListener("scroll", t => {
//                     this.moving || (this.pos = t.target.scrollTop)
//                 }, {
//                     passive: !1
//                 });
//                 const e = this;

//                 function o(t) {
//                     var o = e.normalizeWheelDelta(t);
//                     e.pos += -o * e.speed, e.pos = Math.max(0, Math.min(e.pos, e.max)), e.moving || e.update()
//                 }
//             }
//             normalizeWheelDelta(t) {
//                 return t.detail ? t.wheelDelta ? t.wheelDelta / t.detail / 40 * (t.detail > 0 ? 1 : -1) : -t.detail / 3 : t.wheelDelta / 120
//             }
//             update() {
//                 this.moving = !0;
//                 var e = (this.pos - this.target.scrollTop) / this.smooth;
//                 this.target.scrollTop += e, this.onUpdate && this.onUpdate(this.target.scrollTop);
//                 const o = this;
//                 Math.abs(e) > 1 ? t(() => {
//                     o.update()
//                 }) : this.moving = !1
//             }
//         }({
//             target: document.querySelector('html, body'),
//             speed: 80,
//             smooth: 18
//         })
//     }();

// })
