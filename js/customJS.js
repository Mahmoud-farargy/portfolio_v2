

$(document).ready(()=>{
    // set current year in copyright text
    $("#currYear").text(new Date().getFullYear());
    // -------------
    // handle day and night theme change
    const inputEl = $("#dNSwitch input");
    // var initVal = window.localStorage.getItem("isDay");
    var initVal = new Date().getHours() > 12 ? true: false
    console.log(initVal);
    
    inputEl.prop("checked", false);
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
})