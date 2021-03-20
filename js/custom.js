/*==loder js==*/
$(window).load(function() {
    $(".loader").delay("400") .fadeOut("400");
});

//scroll to top 
$(window).scroll(function(){
  if($(this).scrollTop()>150){
    $('.scrollup').fadeIn();
  }else{
    $('.scrollup').fadeOut();
    }
  });
$('.scrollup').click(function(){
  $("html, body").animate({scrollTop:0}, 600)
  return false;
  });
  
/*==humberger menu js==*/
(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('.bar-collapse'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded2');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  //hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
/*==humberger menu js==*/

/*==banner slider js==*/
$('#owldemo1').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    items: 1,
    dots:true,
    autoplay:true,
    smartSpeed: 950,
    slideSpeed : 400,
    autoplaySpeed: 2000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        }
    }
})


/*==brand slider js==*/
$('#owldemo2').owlCarousel({
    loop:true,
    //center: true,
    margin:15,
    nav:true,
    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    items: 1,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoplaySpeed: 2000,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        900:{
            items:3
        },
        1100:{
            items:4
        }
    }
})



// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
