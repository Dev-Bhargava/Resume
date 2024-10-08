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

$(".nav-link.skills").click(function(e){
    e.preventDefault();
    var tabTrigger = new bootstrap.Tab($('#professional-tab')[0]);
    tabTrigger.show();
})

$(".select_ul li").click(function(){
    var currentele = $(this).html();
    let currentUrl = $(this).find('p').data('value');
    $(this).parents(".inner").find('a').attr('href',currentUrl);
    $(this).parents(".select_wrap").find(".default_option li").html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
})


$(document).on('click','#resume-form .rn-btn',function(){
    let self = $(this);
    let hrname = self.parents('#resume-form').find('#hrName').val();
    let hrphone = self.parents('#resume-form').find('#hrPhone').val();
    let hremail = self.parents('#resume-form').find('#hrEmail').val();
    let hrorganization = self.parents('#resume-form').find('#hrOrganization').val();
    let hrmessage = self.parents('#resume-form').find('#hrText').val();
    let callApi = false;

    self.parents('#resume-form').find('input').css('border-color', '#c4cfde');

    if(hrname != '' && hremail != '' && hrorganization != ''){
        callApi = true;
        self.find('.cta-loader').show();
        self.find('.cta-text').hide();
        self.siblings('.form-error').hide();
    }else if (hrname == '') {
        self.parents('#resume-form').find('#hrName').css('border-color', '#ff7c7c');
        self.siblings('.form-error').text('We’d love to know your name!');
        self.siblings('.form-error').show();
    }else if (hremail == '') {
        self.parents('#resume-form').find('#hrEmail').css('border-color', '#ff7c7c');
        self.siblings('.form-error').text('Enter your email so we can stay in touch.');
        self.siblings('.form-error').show();
    }else if (hrorganization == '') {
        self.parents('#resume-form').find('#hrOrganization').css('border-color', '#ff7c7c');
        self.siblings('.form-error').text('Which organization are you representing?');
        self.siblings('.form-error').show();
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
           $('#resume-form').find('input').val('');
           $('.form-success').text(response.message);
           $('.form-success').show();
           self.find('.cta-loader').hide();
           self.find('.cta-text').show();

           setTimeout(function() {
                $('.form-success').hide();
                $('#downloadResume').find('.close').click();  
            }, 2000);
        }).fail((e) => {
            $('.contact-form-success').hide();
            self.find('.cta-loader').hide();
            self.find('.cta-text').show();
            self.siblings('.form-error').text(e.error);
            self.siblings('.form-error').show();
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

    _self.parents('#contact-form').find('input, textarea').css('border-color', '#c4cfde');

    if(contactUsername != '' && contactUseremail != '' && contactUsersubject != '' && contactUsermessage != ''){
        callApi = true;
        _self.find('.cta-loader').show();
        _self.find('.cta-text').hide();
        _self.siblings('.contact-form-error').hide();
    }else if (contactUsername == '') {
        _self.parents('#contact-form').find('#contact-name').css('border-color', '#ff7c7c');
        _self.siblings('.contact-form-error').text('Enter your name here:');
        _self.siblings('.contact-form-error').show();
    }else if (contactUseremail == '') {
        _self.parents('#contact-form').find('#contact-email').css('border-color', '#ff7c7c');
        _self.siblings('.contact-form-error').text('Enter your email here:');
        _self.siblings('.contact-form-error').show();
    }else if (contactUsersubject == '') {
        _self.parents('#contact-form').find('#subject').css('border-color', '#ff7c7c');
        _self.siblings('.contact-form-error').text('What would you like to talk about?');
        _self.siblings('.contact-form-error').show();
    }else if (contactUsermessage == '') {
        _self.parents('#contact-form').find('#contact-message').css('border-color', '#ff7c7c');
        _self.siblings('.contact-form-error').text('What’s on your mind? Write your message here.');
        _self.siblings('.contact-form-error').show();
    }

    let settings = {
     method : "POST",
     url : `https://mail-app-ivory.vercel.app/contact`,
     headers: {
        'Content-Type': 'application/json',
     },
     data : JSON.stringify({ "name": contactUsername, "phone": contactUserphone, "email": contactUseremail, "subject": contactUsersubject, "message": contactUsermessage })
   }
   if(callApi){
       $.ajax(settings).done(function (response) {
            _self.find('.cta-loader').hide();
            _self.find('.cta-text').show();
            _self.parents('#contact-form').find('input, textarea').val('');
            $('.contact-form-success').text(response.message);
            $('.contact-form-success').show();
            setTimeout(function() {
                $('.contact-form-success').hide();
            }, 5000);
        }).fail((e) => {
            $('.contact-form-success').hide();
            _self.siblings('.contact-form-error').text(e.error);
        });
    }
})