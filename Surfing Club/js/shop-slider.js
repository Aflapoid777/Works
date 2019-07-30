$(document).ready(function() {
  
    const headerSlider = $('.owl-carousel');
    
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
}); 