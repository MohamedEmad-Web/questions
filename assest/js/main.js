$(window).ready(function () {
    
    "use strict";
    
    var one,two,three,four,five,six,seven,eight,user;
    
    $(".home-quiz .ans").click(function() {
        
        if( $(this).hasClass("ans-1") ) {
                
            user = "عماد";
            
        } else if ( $(this).hasClass("ans-2") ) {
            
            user = "شيرين";
        }
        
        else if ( $(this).hasClass("ans-3") ) {
            
            user = "عمرو";
        }
        
        else if ( $(this).hasClass("ans-4") ) {
            
            user = "محمد";
        }
        
        else if ( $(this).hasClass("ans-5") ) {
            
            user = "سارة";
        }
        
        else {
            
            user = "مريم";
        };
        
        $(".home-quiz .ans").fadeOut(300);
                
        $(".home-quiz span").css("visibility","visible");
        
        $("span").click(function () {
            
            $(".home-quiz").removeClass("active").next().addClass("active");
        })
    });
    
    // First
    
    $(".first-quiz .ans").click(function() {
        
        if( $(this).hasClass("ans-2") ) {
            
            $(this).css("background","#0CB774");
            
             one = 1;
            
        } else {
            
            $(this).css("background","#c0392b");
            
            $(".first-quiz .ans-2").css("background","#0CB774");
            
             one = 0;
        };
                
        $(".first-quiz span").css("visibility","visible");
        
        $("span").click(function () {
            
            $(".first-quiz").removeClass("active").next().addClass("active");
        })
    });
        
    
    // Two
    
    $(".second-quiz .ans").click(function() {
        
        if( $(this).hasClass("ans-3") ) {
            
            $(this).css("background","#0CB774");
            
             two = 1;
            
        } else {
            
            $(this).css("background","#c0392b");
            
            $(".second-quiz .ans-3").css("background","#0CB774");
            
             two = 0;
        };
        
        $(".second-quiz span").css("visibility","visible");
        
        $("span").click(function () {
            
            $(".second-quiz").removeClass("active").next().addClass("active");
        })
        
    })
    
    // Three
    
    $(".third-quiz .ans").click(function() {
        
        if( $(this).hasClass("ans-4") ) {
            
            $(this).css("background","#0CB774");
            
             three = 1;
            
        } else {
            
            $(this).css("background","#c0392b");
            
            $(".third-quiz .ans-4").css("background","#0CB774");
            
             three = 0;
        };
        
        $(".third-quiz span").css("visibility","visible");
        
        $("span").click(function () {
            
            $(".third-quiz").removeClass("active").next().addClass("active");
        })
        
    })
    
    // Four
    
     $(".fourth-quiz .ans").click(function() {
        
        if( $(this).hasClass("ans-2") ) {
            
            $(this).css("background","#0CB774");
            
             four = 1;
            
        } else {
            
            $(this).css("background","#c0392b");
            
            $(".fourth-quiz .ans-2").css("background","#0CB774");
            
             four = 0;
        };
        
        $(".fourth-quiz span").css("visibility","visible");
        
        $("span").click(function () {
            
            $(".fourth-quiz").removeClass("active").next().addClass("active");
        })
        
    })
    
    // Five
    
    $(".fifth-quiz .ans").click(function() {
        
        if( $(this).hasClass("ans-3") ) {
            
            $(this).css("background","#0CB774");
            
             five = 1;
            
        } else {
            
            $(this).css("background","#c0392b");
            
            $(".fifth-quiz .ans-3").css("background","#0CB774");
            
             five = 0;
        };
        
        $(".fifth-quiz span").css("visibility","visible");
        
        $("span").click(function () {
            
            $(".fifth-quiz").removeClass("active").next().addClass("active");
        })
        
    })
    
    // Six
    
    $(".sixth-quiz .ans").click(function() {
        
        if( $(this).hasClass("ans-2") ) {
            
            $(this).css("background","#0CB774");
            
             six = 1;
            
        } else {
            
            $(this).css("background","#c0392b");
            
            $(".sixth-quiz .ans-2").css("background","#0CB774");
            
             six = 0;
        };
        
        $(".sixth-quiz span").css("visibility","visible");
        
        $("span").click(function () {
            
            $(".sixth-quiz").removeClass("active").next().addClass("active");
        })
    })
    
    // Seven
    
    $(".seventh-quiz .ans").click(function() {
        
        if( $(this).hasClass("ans-4") ) {
            
            $(this).css("background","#0CB774");
            
             seven = 1;
            
        } else {
            
            $(this).css("background","#c0392b");
            
            $(".seventh-quiz .ans-4").css("background","#0CB774");
            
             seven = 0;
        };
        
        $(".seventh-quiz span").css("visibility","visible");
        
        $("span").click(function () {
            
            $(".seventh-quiz").removeClass("active").next().addClass("active");
        })
    })
    
    // Eight
    
    $(".eighth-quiz .ans").click(function() {
        
        if( $(this).hasClass("ans-2") ) {
            
            $(this).css("background","#0CB774");
            
            eight = 1;
            
        } else {
            
            $(this).css("background","#c0392b");
            
            $(".eighth-quiz .ans-2").css("background","#0CB774");
            
             eight = 0;
        };
        
        $(".eighth-quiz span").css("visibility","visible");
        
        $("span").click(function () {
            
            $(".eighth-quiz").removeClass("active").next().addClass("active");
        })
        
       
    })
        
    $(".mido").click(function() {
        
        console.log(one+two+three+four+five+six+seven+eight);
        
        $(".num").append("8" + " / " + (one+two+three+four+five+six+seven+eight));
    
        $(".name").append(user);
    })

})

// Overlay Loading
    
$(window).on("load", function() {
        
    "use strict";
        
    $(".loading-overlay .sk-chase").fadeOut(2000, function () {
        
        $(this).parent().fadeOut(2000)
    })
})