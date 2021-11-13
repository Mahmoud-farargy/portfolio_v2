

$(document).ready(()=>{
    // set current year in copyright text
    // day/night handling
    const inputEl = $("#dNSwitch input");
    inputEl.prop("checked", true);
    inputEl.change(function(k){
        const isChecked = k.target.checked;
        if(isChecked){
             $("body").addClass("dark");
            $("body").removeClass("light");
              window.localStorage.setItem(
                "isDay",
                JSON.stringify(true)
              );
        }else{
            $("body").removeClass("dark");
            $("body").addClass("light");
           window.localStorage.setItem(
                "isDay",
                JSON.stringify(false)
              );
          
        }
    });
    // animation on scroll
    jQuery(function ($) {

      $.supersized({

          // Functionality
          slide_interval: 3000,		// Length between transitions
          transition: 1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
          transition_speed: 700,		// Speed of transition

          // Components							
          slide_links: 'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
          slides: [			// Slideshow Images
                                              { image: 'images-slider/wide1.jpg', url: '' },
                                              { image: 'images-slider/wide2.jpg', url: '' },
                    { image: 'images-slider/wide3.jpg', url: '' },
          ]

      });
  });
    //  slides
      const splideOptions = {
          type  : 'loop',
          autoplay    : true,
          pauseOnHover: true,
          interval: 5000,
          lazyLoad: true,
          cover  : true,
          height : '100%',
          width:'100%',
          perPage: 1,
      }
      new Splide( ".splide" , splideOptions).mount();
      new Splide( ".instagramCarousel", splideOptions).mount();
      new Splide( ".spotifyCarousel", splideOptions).mount();
      new Splide( ".vHouseCarousel", splideOptions).mount();
      new Splide( ".weatherCarousel", splideOptions).mount();
      new Splide( ".blogivaCarousel", splideOptions).mount();
      new Splide( ".luxashopCarousel", splideOptions).mount();
      new Splide( ".netflixCarousel", splideOptions).mount();
      new Splide( ".dictionaryCarousel", splideOptions).mount();
      new Splide( ".wordBeaterCarousel", splideOptions).mount();
    $("#currYear").text(new Date().getFullYear());
    // -------------
    // handle day and night theme change
  
})