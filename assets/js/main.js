(function () {
  emailjs.init({
    publicKey: "XmPoA__h4o8c2P3YG",
  });
})();

$(window).on("load", function () {
  mySwiper.autoplay.start();
});

// Khởi tạo Swiper
var mySwiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

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

var swiper = new Swiper(".swiper-container2", {
  slidesPerView: 3, // Default setting: 3 slides per view
  spaceBetween: 0,
  autoplay: {
    delay: 3000, // Thời gian chờ giữa các slide (miligiây)
    disableOnInteraction: false, // Ngưng autoplay khi người dùng tương tác với slider
  },
  breakpoints: {
    991: {
      slidesPerView: 3,
    },

    912: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

///Khách hàng tiêu biểu

const counterSection = document.getElementById("counterSection");
let isCounting = false;

window.addEventListener("scroll", () => {
  if (!isCounting && isElementInViewport(counterSection)) {
    startCounting();
    isCounting = true;
  }
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startCounting() {
  const employeeCount = document.getElementById("employeeCount");
  const projectCount = document.getElementById("projectCount");

  const targetEmployeeCount = 15;
  const targetProjectCount = 500;

  let currentEmployeeCount = 0;
  let currentProjectCount = 0;

  const interval = setInterval(() => {
    if (currentEmployeeCount < targetEmployeeCount) {
      currentEmployeeCount++;
      employeeCount.textContent = currentEmployeeCount;
    }
    if (currentProjectCount < targetProjectCount) {
      currentProjectCount += 10; // Nhảy mỗi 10
      projectCount.textContent = currentProjectCount;
    }

    if (
      currentEmployeeCount === targetEmployeeCount &&
      currentProjectCount >= targetProjectCount
    ) {
      clearInterval(interval);
      addPlusSign(projectCount);
      addPlusSign(employeeCount);
    }
  }, 15); // Khoảng thời gian mỗi bước
}

function addPlusSign(element) {
  const plusSign = document.createElement("span");
  plusSign.textContent = "+";
  element.appendChild(plusSign);
}

// Testimonial carousel

// $(".testimonial-carousel").owlCarousel({
//   autoplay: true,
//   smartSpeed: 1500,
//   center: true,
//   dots: true,
//   loop: true,
//   margin: 0,
//   nav: true,
//   navText: false,
//   responsiveClass: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     576: {
//       items: 1,
//     },
//     768: {
//       items: 2,
//     },
//     992: {
//       items: 3,
//     },
//   },
// });

document
  .getElementById("SixOsBookingDemoBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit

    // Lấy giá trị nhập vào từ các trường input
    var name = document.getElementById("SixOsBookingDemoName").value;
    var company = document.getElementById("SixOsBookingDemoCompany").value;
    var taxCode = document.getElementById("SixOsBookingDemoTaxCode").value;
    var address = document.getElementById("SixOsBookingDemoAddress").value;
    var phone = document.getElementById("SixOsBookingDemoPhone").value;
    var email = document.getElementById("SixOsBookingDemoEmail").value;
    var request = document.getElementById("SixOsBookingDemoRequest").value;
    var note = document.getElementById("SixOsBookingDemoNote").value;

    // Kiểm tra các trường nhập liệu
    if (
      name.trim() === "" ||
      company.trim() === "" ||
      address.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      request.trim() === ""
    ) {
      $(".contactbody").addClass("was-validated");
      return;
    }

    // Kiểm tra định dạng email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      $(".contactbody").addClass("was-validated");
      return; // Dừng xử lý tiếp theo nếu email không hợp lệ
    }

    // Gửi email thông qua API của email hoặc một dịch vụ email khác
    // Ví dụ sử dụng EmailJS
    emailjs
      .send("service_95izcii", "template_dwctiya", {
        name: name,
        company: company,
        taxCode: taxCode,
        address: address,
        phone: phone,
        email: email,
        request: request,
        note: note,
      })
      .then(
        function (response) {
          $("#modal-thankyou").modal("show");

          // Xoá class modal và modal-open khi gửi thành công
          var modal = document.querySelector(".modal-register--demo");
          var body = document.querySelector("body");
          modal.classList.remove("show");
          modal.setAttribute("aria-hidden", "true");
          modal.style.display = "none";
          body.classList.remove("modal-open");
          body.style.paddingRight = "0";
          $(".modal-backdrop").remove();
        },
        function (error) {
          console.log("Gặp lỗi khi gửi email: ", error);
          alert("Đã xảy ra lỗi khi gửi email. Vui lòng thử lại sau!");
        }
      );
  });

// loader screen

window.addEventListener("load", function () {
  var loader = document.getElementById("loader-wrapper");
  var content = document.getElementById("logo");

  loader.style.display = "none"; // Ẩn loader
  content.style.display = "block"; // Hiển thị nội dung
});
