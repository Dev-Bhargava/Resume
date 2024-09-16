(function($) {
    'use strict';

    var imJs = {
        m: function(e) {
            imJs.d();
            imJs.methods();
        },
        d: function(e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')

        },

        methods: function(e) {
            imJs.featherAtcivation();
            imJs.backToTopInit();
            imJs.mobileMenuActive();
            imJs.vedioActivation();
            imJs.stickyHeader();
            imJs.smothScroll();
            imJs.smothScroll_Two();
            imJs.stickyAdjust();
            imJs.testimonialActivation();
            imJs.wowActive();
            imJs.awsActivation();
            imJs.demoActive();
            imJs.activePopupDemo();
            imJs.onePageNav();
        },


        activePopupDemo: function(e) {
            $('.popuptab-area li a.demo-dark').on('click', function(e) {
                $('.demo-modal-area').addClass('dark-version');
                $('.demo-modal-area').removeClass('white-version');
            });

            $('.popuptab-area li a.demo-light').on('click', function(e) {
                $('.demo-modal-area').removeClass('dark-version');
                $('.demo-modal-area').addClass('white-version');
            })
        },

        demoActive: function(e) {
            $('.rn-right-demo').on('click', function(e) {
                $('.demo-modal-area').addClass('open');
            })
            $('.demo-close-btn').on('click', function(e) {
                $('.demo-modal-area').removeClass('open');
            })
        },


        wowActive: function() {
            new WOW().init();
        },

        smothScroll: function() {
            $(document).on('click', '.smoth-animation', function(event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 50
                }, 300);
            });
        },
        // two scroll spy
        smothScroll_Two: function() {
            $(document).on('click', '.smoth-animation-two', function(event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 0
                }, 300);
            });
        },


        stickyAdjust: function(e) {
            // Sticky Top Adjust..,
            $('.rbt-sticky-top-adjust').css({
                top: 120
            });

            $('.rbt-sticky-top-adjust-two').css({
                top: 200
            });
            $('.rbt-sticky-top-adjust-three').css({
                top: 25
            });
        },

        testimonialActivation: function() {
            $('.testimonial-activation').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.testimonial-item-one').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                    }
                }]
            });


            $('.portfolio-slick-activation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
            });


            $('.blog-slick-activation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
            });

            $('.testimonial-activation-item-3').slick({
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }
                ]
            });

            $('.brand-activation-item-5').slick({
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        },

        featherAtcivation: function() {
            feather.replace()
        },


        backToTopInit: function() {
            // declare variable
            var scrollTop = $('.backto-top');
            $(window).scroll(function() {
                // declare variable
                var topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                    $(scrollTop).css('opacity', '1');

                } else {
                    $(scrollTop).css('opacity', '0');
                }
            });

            //Click event to scroll to top
            $(scrollTop).on('click', function() {
                $('html, body').animate({
                    scrollTop: 0,
                    easingType: 'linear',
                }, 500);
                return false;
            });

        },

        stickyHeader: function(e) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 250) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },

        vedioActivation: function(e) {
            $('#play-video, .play-video').on('click', function(e) {
                e.preventDefault();
                $('#video-overlay, .video-overlay').addClass('open');
                $("#video-overlay, .video-overlay").append('<iframe width="80%" height="80%" src="https://www.youtube.com/embed/" frameborder="0" allowfullscreen></iframe>');
            });

            $('.video-overlay, .video-overlay-close').on('click', function(e) {
                e.preventDefault();
                close_video();
            });

            $(document).keyup(function(e) {
                if (e.keyCode === 27) {
                    close_video();
                }
            });

            function close_video() {
                $('.video-overlay.open').removeClass('open').find('iframe').remove();
            };
        },

        mobileMenuActive: function(e) {

            $('.humberger-menu').on('click', function(e) {
                e.preventDefault();
                $('.popup-mobile-menu').addClass('menu-open');
                imJs._html.css({
                    overflow: 'hidden'
                })
            });

            $('.close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a').on('click', function(e) {
                e.preventDefault();
                $('.popup-mobile-menu').removeClass('menu-open');
                $('.popup-mobile-menu .has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                imJs._html.css({
                    overflow: ''
                })
            });

            $('.popup-mobile-menu').on('click', function(e) {
                e.target === this && $('.popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            });

            $('.popup-mobile-menu .has-droupdown > a').on('click', function(e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $('.nav-pills .nav-link').on('click', function(e) {
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            })

        },

        awsActivation: function(e) {
            AOS.init();
        },

        onePageNav: function() {
            $('.onepagenav').onePageNav({
                currentClass: 'current',
                changeHash: true,
                scrollSpeed: 500,
                scrollThreshold: 0.2,
                filter: ':not(.external)',
                easing: 'swing',
                scrollChange: function($currentListItem) {
                    console.log(this);
                }
            });
        },

    }
    imJs.m();


})(jQuery, window)

// Multilingual Select Box
$(".default_option").not(".active").click(function() {
    if (!$(this).parent().hasClass("active")) {
        $('body').find('.select_wrap.active').removeClass('active');
    }
    $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function(){
    var currentele = $(this).html();
    let currentUrl = $(this).find('p').data('value');
    $(this).parents(".inner").find('a').attr('href',currentUrl);
    $(this).parents(".select_wrap").find(".default_option li").html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
})


$(document).on('click','#resume-form .rn-btn',function(){
    let hrname = $(this).parents('#resume-form').find('#hrName').val();
    let hrphone = $(this).parents('#resume-form').find('#hrPhone').val();
    let hremail = $(this).parents('#resume-form').find('#hrEmail').val();
    let hrorganization = $(this).parents('#resume-form').find('#hrOrganization').val();
    let hrmessage = $(this).parents('#resume-form').find('#hrText').val();
    let callApi = false;

    if(hrname != blank || hremail != blank || hrorganization != blank){
        callApi = true;
        $(this).siblings('.form-error').hide();
    }else if (hrname == blank) {
        $(this).parents('#resume-form').find('#hrName').css('border-color', '#ff7c7c');
        $(this).siblings('.form-error').text('We’d love to know your name!');
        $(this).siblings('.form-error').show();
    }else if (hremail == blank) {
        $(this).parents('#resume-form').find('#hrEmail').css('border-color', '#ff7c7c');
        $(this).siblings('.form-error').text('Enter your email so we can stay in touch.');
        $(this).siblings('.form-error').show();
    }else if (hrorganization == blank) {
        $(this).parents('#resume-form').find('#hrOrganization').css('border-color', '#ff7c7c');
        $(this).siblings('.form-error').text('Which organization are you representing?');
        $(this).siblings('.form-error').show();
    }

    let settings = {
     method : "POST",
     url : `https://mail-app-ivory.vercel.app/email`,
     headers: {
        'Content-Type': 'application/json',
     },
     data : JSON.stringify({ "to" : hremail, "name": hrname, "organization": hrorganization, "phone": hrphone, "message": hrmessage })
   }
   if(callApi){
       $.ajax(settings).done(function (response) {
           $('#resume-form').find('#hrName').val('');
           $('#resume-form').find('#hrEmail').val('');
           $('#resume-form').find('#hrOrganization').val('');
           $('#resume-form').find('#hrPhone').val('');
           $('#resume-form').find('#hrText').val('');
           $(this).siblings('.form-success').text(response);
           $(this).siblings('.form-success').show();

           setTimeout(function() {
                $(this).siblings('.form-success').hide();
                $('#downloadResume').find('.close').click();  
            }, 2000);
        }).fail((e) => {
            
        });
    }
})

$(document).on('click','#submit',function(e){
    e.preventDefault();
    let contactUsername = $('#contact-name').val();
    let contactUserphone = $('#contact-phone').val();
    let contactUseremail = $('#contact-email').val();
    let contactUsersubject = $('#subject').val();
    let contactUsermessage = $('#contact-message').val();
    let _self = $(this);
    let settings = {
     method : "POST",
     url : `https://mail-app-ivory.vercel.app/contact`,
     headers: {
        'Content-Type': 'application/json',
     },
     data : JSON.stringify({ "name": contactUsername, "phone": contactUserphone, "email": contactUseremail, "subject": contactUsersubject, "message": contactUsermessage })
   }
   $.ajax(settings).done(function (response) {
        if (response.code == 400) {
            _self.closest('div').find('[name="' + response.field + '"]');
            _self.find('.rn-btn').after('<div class="error-msg"><p>*' + response.err + '</p></div>');
        } else {
            $('.error-msg').hide();
            $('.form-group').removeClass('focused');
            _self.find('.rn-btn').after('<div class="success-msg"><p>' + response.success + '</p></div>');
            _self.closest('div').find('input,textarea').val('');
            _self.closest('div').find('button[type="submit"]').removeAttr('disabled');

            setTimeout(function() {
                $('.success-msg').fadeOut('slow');
            }, 5000);
        }
   }).fail((e) => {
        _self.closest('div').find('[name="' + e.field + '"]');
        _self.find('.rn-btn').after('<div class="error-msg"><p>*' + e.err + '</p></div>');
   });
})