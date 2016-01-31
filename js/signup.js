jQuery(function ($) {

    'use strict';
		
	/*==============================================================*/
    // Search
    /*==============================================================*/

    (function () {

        $('.fa-search').on('click', function() {
            $('.search').fadeIn(500, function() {
              $(this).toggleClass('search-toggle');
            });     
        });

        $('.search-close').on('click', function() {
            $('.search').fadeOut(500, function() {
                $(this).removeClass('search-toggle');
            }); 
        });

    }());
	
	
	
	/*==============================================================*/
    // Menu add class
    /*==============================================================*/
	(function () {	
		function menuToggle(){
			var windowWidth = $(window).width();
			if(windowWidth > 767 ){
				$(window).on('scroll', function(){
					if( $(window).scrollTop()>60 ){
						$('.navbar').addClass('navbar-fixed-top');
					} else {
						$('.navbar').removeClass('navbar-fixed-top');
					};
					if( $(window)){
						$('#home-three .navbar').addClass('navbar-fixed-top');
					} 
				});
			}else{
				
				$('.navbar').addClass('navbar-fixed-top');
					
			};	
		}

		menuToggle();
	}());
	
	
	/*==============================================================*/
    // Parallax Scrolling
    /*==============================================================*/
	
	(function () {
		function parallaxInit() {				
			$("#ticket").parallax("50%", 0.3);
			$("#choose-color").parallax("50%", 0.3);
			$("#blue #choose-color").parallax("50%", 0.3);
		}	
		parallaxInit();
	}());
	
	
	
	/*==============================================================*/
    // Fun Facts
    /*==============================================================*/
	
	(function () {

        $('#fun-facts, #achievement').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });

    }());
	
	
	/*==============================================================*/
    // Tabs Slide
    /*==============================================================*/
	(function () {
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {    
			var target = $(this).attr('href');  			  
			$(target).css('top','-'+$(window).width()+'px');   
			var top = $(target).offset().top;
			$(target).css({top:top}).animate({"top":"0px"}, "-20");
		})
	}());
	
	
	/*==============================================================*/
    // Magnific Popup
    /*==============================================================*/
	
	(function () {
		$('.image-link').magnificPopup({
			gallery: {
			  enabled: true
			},		
			type: 'image' 
		});
		$('.feature-image .image-link').magnificPopup({
			gallery: {
			  enabled: false
			},		
			type: 'image' 
		});
		$('.image-popup').magnificPopup({	
			type: 'image' 
		});
		$('.video-link').magnificPopup({type:'iframe'});
	}());
	
	
	/*==============================================================*/
    // Home Text Slide
    /*==============================================================*/
	(function () {
		var win = $(window),
			foo = $('#typer');
		foo.typer(["Summer Research Program", "Get Connected with Professors", "Find The Right Match"]);
		foo = $('#promotion h1');
		foo.typer(["Want to Work with Us?", "Make your dreams come true"]);	
	}());
	
	
	/*==============================================================*/
    // Twenty20 Plugin
    /*==============================================================*/
	(function () {
		$(window).load(function() {
			$(".layer-slide").twentytwenty();
		});
	}());
	
	
	/*==============================================================*/
    // Accordion
    /*==============================================================*/
	
	(function () {
		$('.faqs .collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
		}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
		});
		
		$('.faqs .panel-heading').on('click', function() {
			if (!$(this).hasClass('active'))
			{
			  $('.panel-heading').removeClass('active');
			  $(this).addClass('active'); 
			  setIconOpened(this);
			}
			else
			{    
			  if ($(this).find('b').hasClass('opened'))
			  {
				setIconOpened(null);
			  }
			  else
			  {
				setIconOpened(this);
			  }
			}
		});
		
	}());
	
	
	
	/*==============================================================*/
    // projects Filter
    /*==============================================================*/

	(function () {
		$(window).load(function(){
		  var $portfolio_selectors = $('.project-filter >ul>li>a');
			var $portfolio = $('#projects');
			$portfolio.isotope({
				itemSelector : '.project-content',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
			
		});

    }());
	
	
	
	/*==============================================================*/
    // Architect Filter
    /*==============================================================*/

	(function () {
		$(window).load(function(){
		  var $portfolio_selectors = $('.architect-filter >ul>li>a');
			var $portfolio = $('#all-architect');
			$portfolio.isotope({
				itemSelector : '.architect',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
			
		});

    }());
		
		
	/*==============================================================*/
    // Google Map
    /*==============================================================*/

	
	(function(){

		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 43.04446,
			lng: -76.130791,
			scrollwheel:false,
			zoom: 6,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		var image = 'images/map-icon.png';
		map.addMarker({
			lat: 43.04446,
			lng: -76.130791,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
			 infoWindow: {
				content: '<div class="map-info"><address>ThemeRegion<br />234 West 25th Street <br />New York</address></div>',
				borderColor: 'red',
			}
		});
		  
		var styles = [ 

			{
			  "featureType": "road",
			  "stylers": [
				{ "color": "#E21243" }
			  ]
			  },{
			  "featureType": "landscape",
			  "stylers": [
				{ "color": "#f7f7f7" }
			  ]
			  },{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{ "color": "#d3cfcf" }
			  ]
			  },{
			  "featureType": "poi",
			  "stylers": [
				{ "color": "#ffffff" }
			  ]
			  },{
			  "elementType": "labels.text",
			  "stylers": [
				{ "saturation": 1 },
				{ "weight": 0.1 },
				{ "color": "#555555" }
			  ]
			}
	  
		];

		map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"  
		});

		map.setStyle("map_style");
	}());
});

// CREATING A USER!!!
function signup() {
	var name = $("#name").val();
	var username = $("#username").val();
	var password = $("#password").val();
	var retypepassword = $("#password2").val();
	var zipcode = $("#zipcode").val();
	var isStudent = false;
	var isTeacher = false;
	var type = "";
	var allConditionsSatisfied = true;

	if(document.getElementById('isStudent').checked) {
		isStudent = true;
		type = "student";
	}

	if(document.getElementById('isTeacher').checked) {
		isTeacher = true;
		type = "teacher";
	}

	console.log("Name: "  + name);
	console.log("Username: "  + username);
	console.log("Password: "  + password);
	console.log("Retype Password: " + retypepassword);
	console.log("zipcode: " + zipcode);
	console.log("isStudent: " + isStudent); // boolean
	console.log("isTeacher: " + isTeacher); // boolean

	// check if all inputs are filled out correctly!
	if(name.length == 0) {
		allConditionsSatisfied = false;
		window.alert("Please input a name!");
	} else if(username.length == 0 ) {
		allConditionsSatisfied = false;
		window.alert("Please input a username!");
	} else if(password.length == 0) {
		allConditionsSatisfied = false;
		window.alert("Please input a password!")
	} else if(zipcode.length == 0) {
		allConditionsSatisfied = false;
		window.alert("Please input a zipcode!")
	} else if(isTeacher == isStudent) {
		allConditionsSatisfied = false;
		window.alert("Are you a teacher or a student?")
	} else if(zipcode.length != 5) {
		allConditionsSatisfied = false;
		window.alert("Please input a correct zipecode")
	}

	// check if username has @ symbol
	var validUsername = false; 
	for(var i = 0; i < username.length; i++) {
		if(username.charAt(i) == '@') {
			validUsername = true;
		}
	}

	if(!validUsername || !allConditionsSatisfied) {
		console.log("Not a valid username!");
		window.alert("Please input a valid email!");
	} else {
		if(password == retypepassword && validUsername) {
			console.log("Success!");
			// READY TO SEND TO FIREBASE
			var ref = new Firebase("https://summerprogramlocator.firebaseio.com/");
			ref.createUser({
			  email    : username,
			  password : password
			}, function(error, userData) {
			  if (error) {
			    console.log("Error creating user:", error);
			    window.alert("Uh oh! There seems to be something wrong. " + error);
			  } else {
			    console.log("Successfully created user account with uid:", userData.uid);
		    	
			    var usersRef = ref.child("Users");
			    var userRef2 = usersRef.child(name);
			    userRef2.set({
				  	Name: name,
				    Username: username,
				    Zipcode: zipcode,
				    Type: type,
				    LoggedIn : true
				}, function(error, userData) {
					if(error) {
						window.alert("Not Working " + error);
					} else {
						window.alert("works!");
					}
				});

			    if(isTeacher) {
			    	window.location.replace("dashboard-teacher.html");
			    } else {
			    	window.location.replace("dashboard-student.html");
			    }
			  }
			});
		} else {
			console.log("Please type your password again!");
			window.alert("Your passwords don't match. Please try again!");
		}
	}
}
