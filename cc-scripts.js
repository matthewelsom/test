///////////
// Page Check
///////////
$(".page-wrapper").addClass("ext-js");
var $pageLayout = $(".page-wrapper").attr("layout");

///////////////
// Cursor Text
///////////////
function cursorText() {
  $("[cursor-text]").each(function () {
    var cursorText = $(this).attr("cursor-text");
    if (cursorText) {
      $(this).on("mouseenter", function () {
        let randomNumber = gsap.utils.random(-10, 10);
        $(".cursor_tag").css("transform", `rotate(${randomNumber}deg)`);
        $(".cursor_text").text(cursorText);
        $(".cursor").css("opacity", "1");
      });

      $(this).on("mouseleave", function () {
        $(".cursor").css("opacity", "0");
      });
    }
  });
}

///////////////
// Guest Counter
///////////////
function guestCounter() {
  if ($pageLayout === "home" || $pageLayout === "about") {
    var startDate = new Date(2022, 7, 1),
      today = new Date(),
      diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)),
      output = 16000 + diff * 5;
    // Animate the guestcount from 1,000 to calculated value
    $({ someValue: 1000 }).animate(
      { someValue: output },
      {
        duration: 4000, // 4s
        easing: "swing", // Easing
        step: function () {
          // called on every step
          // Update count with rounded-up value
          $("#guestCount").text(
            commaSeparateNumber(Math.round(this.someValue))
          );
        },
        complete: function () {
          $("#guestCount").text(
            commaSeparateNumber(Math.round(this.someValue))
          );
        },
      }
    );
    // Caluclate the Guests
    // document.getElementById('guestcount').innerHTML = commaSeparateNumber(output);
    console.log(commaSeparateNumber(output) + " 🧑‍🤝‍🧑 Guests and counting");
    // Increment the Count
    window.setInterval(function () {
      increase = 1;
      currentnumber = document.getElementById("guestCount");
      var curnum = parseInt(currentnumber.innerHTML.replace(",", ""));
      document.getElementById("guestCount").innerHTML = commaSeparateNumber(
        (curnum += increase)
      );
    }, 1000);
    // Comma separated value
    function commaSeparateNumber(val) {
      while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }
      return val;
    }
  } else {
  }
}

///////////////
// CMS Anchors
///////////////
function cmsAnchors() {
  $("a[slug]").each(function () {
    var slugValue = $(this).attr("slug");
    if (slugValue) {
      $(this).attr("href", "#" + slugValue);
    }
  });
}

///////////////
// External Links
///////////////
function extLinks() {
  var currentDomain = window.location.hostname;

  $("a").each(function () {
    var href = $(this).attr("href");
    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("/") &&
      !href.includes(currentDomain)
    ) {
      $(this).addClass("external-link");
      $(this).attr("target", "_blank");
    }
  });
}

///////////////
// Swipers
///////////////
function swipers() {
  if ($pageLayout === "home") {
    ////////////////////////////////////////////////////////////
    // Gallery Swiper
    const portfolioSwiper = new Swiper(".swiper.is-gallery", {
      // Optional parameters
      wrapperClass: "swiper_list",
      slideClass: "swiper_item",
      slideActiveClass: "swiper_active",
      navigation: {
        nextEl: ".swiper_left",
        prevEl: ".swiper_right",
      },
      pagination: {
        type: "bullets",
        el: ".swiper_pagination",
        clickable: true,
      },
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",

      // spaceBetween: 0,
      simulateTouch: false,
      allowTouchMove: true,
      preventInteractionOnTransition: true,
      autoplay: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      sensitivity: 1,
      watchSlidesVisibility: true,
      preloadImages: true,
      updateOnImagesReady: true,
    });
  }
}

///////////////
// Move Down Arrow
///////////////
function moveDown() {
  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    var togglePosition = 50;
    if (scrollPosition >= togglePosition) {
      $(".hero_down").addClass("scrolled");
    } else {
      $(".hero_down").removeClass("scrolled");
    }
  });
}

///////////////
// Lazy Load into View
///////////////
function lazy() {
  // WORKING 100% OF OOBJECT IN VIEW

  // $("[lazy]").addClass("lazy").each(function() {
  //   var lazyClass = $(this).attr("lazy");
  //   if (lazyClass) {
  //       $(this).addClass(lazyClass);
  //   }
  // });

  // const lazyItems = document.querySelectorAll('[lazy]');
  // const options = {
  //   threshold: 1 // The percentage of the element's visibility needed to trigger the callback
  // };

  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('show');
  //       observer.unobserve(entry.target); // Unobserve the element to prevent multiple triggers
  //     }
  //   });
  // }, options);

  // lazyItems.forEach(item => {
  //   const height = item.clientHeight; // Get the height of the element
  //   item.style.height = height + 'px'; // Set the height explicitly (optional)
  //   observer.observe(item);

  //   console.log(`Element height: ${height}px`); // Log the height to the console
  // });

  // WORKING FIXED %

  // $("[lazy]").addClass("lazy").each(function() {
  //   var lazyClass = $(this).attr("lazy");
  //   if (lazyClass) {
  //       $(this).addClass(lazyClass);
  //   }
  // });

  // const lazyItems = document.querySelectorAll('[lazy]');
  // const togglePercentage = 75; // Adjust this value to the desired percentage

  // window.addEventListener('scroll', () => {
  //   const viewportHeight = window.innerHeight;
  //   const togglePoint = (viewportHeight * togglePercentage) / 100;

  //   lazyItems.forEach(item => {
  //     const itemTop = item.getBoundingClientRect().top;

  //     if (itemTop < togglePoint) {
  //       item.classList.add('show');
  //     } else {
  //       item.classList.remove('show');
  //     }
  //   });
  // });

  // WORKING

  $("[lazy]")
    .addClass("lazy")
    .each(function () {
      var lazyClass = $(this).attr("lazy");
      if (lazyClass) {
        $(this).addClass(lazyClass);
      }
    });

  const lazyItems = document.querySelectorAll("[lazy]");
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0% 0% -5% 0%", // Add a root margin of 100px
    threshold: 0, // The percentage of the element's visibility needed to trigger the callback
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Unobserve the element to prevent multiple triggers
      }
    });
  }, options);

  lazyItems.forEach((item) => {
    const height = item.clientHeight; // Get the height of the element
    item.style.height = height + "px"; // Set the height explicitly (optional)
    observer.observe(item);

    // console.log(`Element height: ${height}px`); // Log the height to the console
  });
}

///////////////
// Navigation + Progress
///////////////

function navigation() {
  // Variables
  var $n = $(".nav"),
    $t = $("#menuTrigger"),
    $l = $(".nav_menu_link"),
    $h = $("html"),
    $b = $("body"),
    //      $p = $('.progress'),
    //      $i = $('.progress__indicate'),
    //      $w = $('.wrapper > .section:first-child'),
    previousScroll = 0,
    menuOffset = $(".nav").outerHeight(),
    hideShowOffset = 6; // scrolling value after which triggers hide/show menu

  // Reset the Nav onLoad
  //  $p.removeClass('invisible');
  $n.removeClass("invisible");

  // Hide menu on scroll, show at page top (for Mobile)
  $(window).scroll(function () {
    if ($n.hasClass("expanded")) {
    } else {
      var currentScroll = $(this).scrollTop();
      // if scrolled past menu
      if (currentScroll > menuOffset) {
        $n.addClass("mobile-visible");
      } else {
        $n.removeClass("mobile-visible");
      }
    }
  });

  // On scroll down hide, on scroll up show
  $(window).scroll(function () {
    if ($n.hasClass("expanded")) {
    } else {
      var currentScroll = $(this).scrollTop(),
        scrollDifference = Math.abs(currentScroll - previousScroll);

      // if scrolled past menu
      if (currentScroll > menuOffset) {
        // if scrolling faster than hideShowOffset hide/show menu
        if (scrollDifference >= hideShowOffset) {
          if (currentScroll > previousScroll) {
            // scrolling down; hide menu
            $n.addClass("invisible");
          } else {
            // scrolling up; show menu
            $n.removeClass("invisible");
          }
        }
      } else {
      }
      // if user is at the bottom of document show menu
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        $n.removeClass("invisible");
      }
      // replace previous scroll position with new one
      previousScroll = currentScroll;
    }
  });

  // Highlight Dropdown Pages
  if ($(".nav_dropdown-link-label").hasClass("w--current")) {
    var $current = $(".nav_dropdown-link-label.w--current");
    // Make parent current
    $current.closest(".nav_dropdown-link").addClass("active");
    // Make Dropdown button current
    $current.closest(".nav_menu-dropdown").addClass("active");
  }
}

///////////////
// Form Reset
///////////////
function form() {
  if ($pageLayout === "contact") {
    // Generate a custom sucess message
    $(".contact_form").submit(function () {
      const $name = $("#FirstName");
      if ($.trim($name.val())) {
        $(".form_submit_success_custom_message").text(
          "Thank you, " + $name.val() + "!"
        );
        return true;
      } else {
        $(".form_submit_success_custom_message").text("Thank you!");
        return true;
      }
    });

    // Reset Form on submit
    var FORM_SELECTOR = "#wf-form-Contact-Form",
      form = document.querySelector(FORM_SELECTOR),
      successDiv = form.nextSibling;

    // Target any custom elements
    var resetCustomElement = function (customElement) {
      var inputElement = customElement.nextSibling;
      if (inputElement.checked) {
        customElement.classList.add("w--redirected-checked");
      } else {
        customElement.classList.remove("w--redirected-checked");
      }
    };

    var resetForm = function (form, successDiv) {
      // Reset the inputs in the form
      form.reset();

      // Reset custom checkboxes
      document
        .querySelectorAll(".w-checkbox-input--inputType-custom")
        .forEach(resetCustomElement);

      // Reset custom radio buttons
      document
        .querySelectorAll(".w-form-formradioinput--inputType-custom")
        .forEach(resetCustomElement);
    };

    // Observe Webflow, to see when it hides our form after submission
    var observer = new MutationObserver(function (mutations) {
      if (form.style.display === "none") {
        resetForm(form, successDiv);
      }
    });

    // Listen for when the style attribute of our form changes
    observer.observe(form, { attributes: true, attributeFilter: ["style"] });
  }
}

///////////////
// CTA Spans
///////////////
function spans() {
  if ($pageLayout === "design") {
    $(".cta_span").each(function (index) {
      let relatedEl = $(".span_element").eq(index);
      relatedEl.appendTo($(this));
    });
  }
}

// -------------------------------------------------------------- //
// INIT                                                           //
// -------------------------------------------------------------- //

function init() {
  cursorText();
  guestCounter();
  swipers();
  // moveDown();
  // cmsAnchors();
  extLinks();
  navigation();
  form();
  lazy();
  spans();
}

// -------------------------------------------------------------- //
// Document Ready                                                 //
// -------------------------------------------------------------- //

$(document).ready(function () {
  ///////////
  // Captain's Log
  ///////////
  console.log("\u00A9 2020-2024 & Beyond. Cleary & Co.");
  console.log("📡 Scripts operational");

  ///////////
  // Make it so
  ///////////
  console.log("🖖 Make it so");
  init();
});
