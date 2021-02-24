
$('.navbar a').on('click', function(e){
    if (this.hash !== '') {
            e.preventDefault();
        
            const hash = this.hash;
        
            $('html, body')
              .animate({
                scrollTop: $(hash).offset().top
              },500);
          }
});
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('nav').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = (1-(((elementHeight) - scrollTop/3)/ elementHeight ))+0.7;
           
            return opacity;
        }

    });
});
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.hero-text div').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop/2) / elementHeight);
            return opacity;
        }
        
    });
});
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.slim-arrow').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity =0.4+ (((elementHeight) - scrollTop/5)/ elementHeight );
           
            return opacity;
        }
        
    });
});

const faders=document.querySelectorAll('.fade-in');
const appearOptions={
    threshold:0.5,
    rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll=new IntersectionObserver(function(entries,appearOnScroll)
{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},appearOptions);

faders.forEach(fader=>{
    appearOnScroll.observe(fader);
});