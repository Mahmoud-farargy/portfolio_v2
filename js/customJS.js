

$(document).ready(()=>{
    // set current year in copyright text
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
  // $(document).ready(()=>{
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
      new Splide( ".visipointCarousel" , splideOptions).mount();
      new Splide( ".googleCarousel" , splideOptions).mount();
      new Splide( ".instagramCarousel", splideOptions).mount();
      new Splide( ".xypoCarousel", splideOptions).mount();
      new Splide( ".spotifyCarousel", splideOptions).mount();
      new Splide( ".blogenCarousel", splideOptions).mount();
      new Splide( ".netflixCarousel", splideOptions).mount();
      new Splide( ".hotelResortCarousel", splideOptions).mount();
      new Splide( ".amazonCarousel", splideOptions).mount();
      new Splide( ".wordBeaterCarousel", splideOptions).mount();
      new Splide( ".mizuxeCarousel", splideOptions).mount();
      new Splide( ".burgerioCarousel", splideOptions).mount();
      new Splide( ".traviaCarousel", splideOptions).mount();
      new Splide( ".splendifyCarousel", splideOptions).mount();
      new Splide( ".notesCarousel", splideOptions).mount();
      new Splide( ".budgetCarousel", splideOptions).mount();
      new Splide( ".lyricsFinderCarousel", splideOptions).mount();
      new Splide( ".dictionaryCarousel", splideOptions).mount();
      new Splide( ".appchirpCarousel", splideOptions).mount();
      new Splide( ".soundcloudCarousel", splideOptions).mount();
      new Splide( ".portfolioV1Carousel", splideOptions).mount();
      new Splide( ".weatherCarousel", splideOptions).mount();
      new Splide( ".blogivaCarousel", splideOptions).mount();
      new Splide( ".ipTrackerCarousel", splideOptions).mount();
      
// });
    $("#currYear").text(new Date().getFullYear());
    // -------------
    // handle day and night theme change
  
})