$(document).ready(function () {
  var newDataLoaded = false;

  function updateElementWithData(elementId, jsonDataKey, jsonData) {
    var element = $("#" + elementId);
    var data = jsonData[jsonDataKey];

    if (data) {
      element.html(data);
    } else {
      element.hide();
    }
  }

  function loadDataAndUpdate() {
    $.ajax({
      url: "/data/thungo.json",
      dataType: "json",
      success: function (data) {
        if (data && Object.keys(data).length !== 0) {
          updateElementWithData("thuNgoOne", "thuNgoOne", data);
          updateElementWithData("thuNgoTwo", "thuNgoTwo", data);
          updateElementWithData("thuNgoThree", "thuNgoThree", data);
          updateElementWithData("thuNgoFour", "thuNgoFour", data);
          updateElementWithData("thuNgoFive", "thuNgoFive", data);
          updateElementWithData("thuNgoSix", "thuNgoSix", data);
          updateElementWithData("thuNgoDanhSachSP", "thuNgoDanhSachSP", data);

          //heading
          updateElementWithData("heading-h1", "heading-h1", data);
          updateElementWithData("heading-h2", "heading-h2", data);
          updateElementWithData("heading-h2--2", "heading-h2--2", data);
          newDataLoaded = true;
        }
      },
      error: function (xhr, status, error) {
        console.error("Error loading data:", status, error);
        // Hiển thị thông báo lỗi cho người dùng
        $("#error-message").text("Error loading data. Please try again later.");
      },
    });
  }

  loadDataAndUpdate();

  // Cập nhật dữ liệu mỗi giây nếu không có dữ liệu mới được tải
  setInterval(function () {
    if (!newDataLoaded) {
      loadDataAndUpdate();
    }
  }, 1000);
});
//banner
$(document).ready(function () {
  $.ajax({
    url: "./data/thungo.json",
    dataType: "json",
    success: function (data) {
      if (data && data.slides && data.slides.length > 0) {
        data.slides.forEach(function (slide) {
          var slideHTML = `
                        <div class="swiper-slide">
                            <div class="py-4 ml-auto mr-auto text-center">
                                <div class="d-lg-block d-none w-100 h-100  image-header"
                                    title="${slide.title}"
                                    alt="${slide.title}"
                                    style="margin-left: auto; background: url('${slide.image}');">
                                </div>
                                <div class="d-lg-none w-100">
                                    <img src="${slide.image}" class="img-container" alt="${slide.title} header"/>
                                </div>
                            </div>
                        </div>
                    `;
          $("#img-banner").append(slideHTML);
        });
      }
    },
    error: function (xhr, status, error) {
      console.error("Error loading data:", status, error);
    },
  });
});
// San Pham
$(document).ready(function () {
  $.ajax({
    url: "./data/thungo.json",
    dataType: "json",
    success: function (data) {
      if (
        data &&
        data.product &&
        data.product.slides &&
        data.product.slides.length > 0
      ) {
        data.product.slides.forEach(function (slide) {
          var slideHTML = `
            <div class="col-lg-4 swiper-slide position-relative services-item">
              <div class="p-3 text-center">
                <a href="${slide.link}">
                    <img                    
                    style="cursor: pointer"
                    class="img my-3"
                    width="180"
                    height="180"
                    src="${slide.image}"
                    alt="${slide.title}"
                  />
                  <h4
                    style="cursor: pointer"
                    class="pt-3 cursor-pointer text-gradient text-primary fw-bolder my-0 card-blog-title"
                    title="${slide.title}"
                  >
                    ${slide.title}
                  </h4>
                  <p class="h5 content px-3 pt-3" style="font-weight: 400; line-height: 1.5;" title="${slide.description}">
                    ${slide.description}
                  </p>
                </a>
              </div>
            </div>
          `;
          $("#img-product").append(slideHTML);
        });
      }
    },
    error: function (xhr, status, error) {
      console.error("Error loading data:", status, error);
    },
  });
});
//logo
$(document).ready(function () {
  $.ajax({
    url: "./data/thungo.json",
    dataType: "json",
    success: function (data) {
      if (
        data &&
        data.logo &&
        data.logo.slides &&
        data.logo.slides.length > 0
      ) {
        data.logo.slides.forEach(function (slide) {
          var slideHTML = `
            <div class="swiper-slide">
              <img
                height="40"
                class="w-100 img-filter-gray"
                src="${slide.image}"
                alt="${slide.title}"
              />
            </div>
          `;
          $("#logo").append(slideHTML);
        });

        // Reinitialize Swiper after adding slides
        var swiper = new Swiper(".swiper-container1", {
          slidesPerView: 5,
          spaceBetween: 10,
          autoplay: {
            delay: 3000, // Thời gian chờ giữa các slide (miligiây)
            disableOnInteraction: false, // Ngưng autoplay khi người dùng tương tác với slider
          },
          breakpoints: {
            991: {
              slidesPerView: 5,
            },
            320: {
              slidesPerView: 1,
            },
          },
        });
      }
    },
    error: function (xhr, status, error) {
      console.error("Error loading data:", status, error);
    },
  });
});
//Member

$(document).ready(function () {
  $.ajax({
    url: "./data/thungo.json",
    dataType: "json",
    success: function (data) {
      if (
        data &&
        data.Member &&
        data.Member.memberSlides &&
        data.Member.memberSlides.length > 0
      ) {
        data.Member.memberSlides.forEach(function (memberSlide) {
          var memberHTML = `
            <div class="testimonial-item border p-4">
              <div class="">
                <h4 class="text-primary">${memberSlide.name}</h4>
                <p class="m-0 pb-3">${memberSlide.position}</p>
              </div>
              <div class="d-flex align-items-center">
                <div class="">
                  <img src="${memberSlide.image}" alt="${memberSlide.alt}" />
                </div>
              </div>
              <div class="border-top mt-4 pt-3">
                <p class="mb-0">${memberSlide.comment}</p>
              </div>
            </div>
          `;
          $("#testimonial-carousel").append(memberHTML);
        });

        // Reinitialize Owl Carousel after adding testimonial items
        $(".testimonial-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          center: true,
          dots: true,
          loop: true,
          margin: 0,
          nav: true,
          navText: false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            576: {
              items: 1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          },
        });
      }
    },
    error: function (xhr, status, error) {
      console.error("Error loading member data:", status, error);
    },
  });
});
