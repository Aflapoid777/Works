$(document).ready(function() {
    
    // HEADER SLIDER 
  
    const headerSlider = $('#headerSlider');
    
    headerSlider.on('initialize.owl.carousel initialized.owl.carousel', function(event) {
        $('.slide-controlls__number-active').text(event.item.index + 1)       
        $('.slide-controlls__number-total').text(event.item.count)        
    });
    
    headerSlider.owlCarousel({
        items: 1,
        dots: false,
        smartSpeed: 2000,    
    });
    
    $('#headerSliderRight').click(function() {
        headerSlider.trigger('next.owl.carousel');
    })
    
    $('#headerSliderLeft').click(function() {
        headerSlider.trigger('prev.owl.carousel');
    })
    
    headerSlider.on('changed.owl.carousel', function(event) {
        $('.slide-controlls__number-active').text(event.item.index + 1)       
        $('.slide-controlls__number-total').text(event.item.count)        
    });
    
    // HEADER SLIDER END 
    
    // SHOP SLIDER
    
    const shopSlider = $('#shopSlider');
    
    shopSlider.owlCarousel({
        dots: false,
        loop: true,
        margin: 2,
        smartSpeed: 1500,
        responsive: {
            0 : {
                items: 1,
            },
            
            1254 : {
                items: 3,
            },
        }
    });
    
    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel');
    })
    
    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel');
    })
    
    // SHOP SLIDER END
    
    // ПЛАВНАЯ ПРОКРУТКА СТРАНИЦЫ
    
    jQuery("a.navigation__link").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
    
}); 