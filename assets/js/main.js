// Khởi tạo Swiper
var mySwiper = new Swiper(".swiper-container", {
  // Tuỳ chỉnh thêm nếu cần
  loop: true, // Quay lại slide đầu tiên sau khi chạm đến slide cuối cùng
  autoplay: {
    delay: 3000, // Độ trễ giữa các slide (đơn vị là miligiây)
  },
  pagination: {
    el: ".swiper-pagination", // Thanh điều hướng
    clickable: true, // Cho phép chọn trang bằng click
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

//Scroll
// Kiểm tra nếu chiều rộng của màn hình nhỏ hơn 768px (giả định là kích thước màn hình điện thoại), ẩn phần tử
window.addEventListener("resize", function () {
  var screenWidth = window.innerWidth;
  var sideBarMenuWrapper = document.querySelector(".side-bar-menu-wrapper");
  if (screenWidth < 768) {
    sideBarMenuWrapper.classList.add("show-only-desktop");
  } else {
    sideBarMenuWrapper.classList.remove("show-only-desktop");
  }
});

// Chạy hàm kiểm tra lúc trang được tải để ẩn hoặc hiện phần tử ban đầu
window.addEventListener("load", function () {
  var screenWidth = window.innerWidth;
  var sideBarMenuWrapper = document.querySelector(".side-bar-menu-wrapper");
  if (screenWidth < 768) {
    sideBarMenuWrapper.classList.add("show-only-desktop");
  } else {
    sideBarMenuWrapper.classList.remove("show-only-desktop");
  }
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

  const targetEmployeeCount = 20;
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

// document
//   .getElementById("SixOsBookingDemoBtn")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit

//     // Lấy các giá trị nhập vào từ các trường input
//     var name = document.getElementById("SixOsBookingDemoName").value;
//     var company = document.getElementById("SixOsBookingDemoCompany").value;
//     var taxCode = document.getElementById("SixOsBookingDemoTaxCode").value;
//     var address = document.getElementById("SixOsBookingDemoAddress").value;
//     var phone = document.getElementById("SixOsBookingDemoPhone").value;
//     var email = document.getElementById("SixOsBookingDemoEmail").value;
//     var request = document.getElementById("SixOsBookingDemoRequest").value;
//     var note = document.getElementById("SixOsBookingDemoNote").value;

//     // Gửi email thông qua API của email hoặc một dịch vụ email khác
//     // Ví dụ sử dụng EmailJS
//     emailjs
//       .send("service_95izcii", "template_dwctiya", {
//         name: name,
//         company: company,
//         taxCode: taxCode,
//         address: address,
//         phone: phone,
//         email: email,
//         request: request,
//         note: note,
//       })
//       .then(
//         function (response) {
//           alert("Email đã được gửi thành công!");
//         },
//         function (error) {
//           console.log("Gặp lỗi khi gửi email: ", error);
//           alert("Đã xảy ra lỗi khi gửi email. Vui lòng thử lại sau!");
//         }
//       );
//   });

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
      alert("Vui lòng điền đầy đủ thông tin vào các trường yêu cầu.");
      return; // Dừng xử lý tiếp theo nếu có trường không được điền đầy đủ
    }

    // Kiểm tra định dạng email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Vui lòng nhập địa chỉ email hợp lệ.");
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
          alert("Email đã được gửi thành công!");
        },
        function (error) {
          console.log("Gặp lỗi khi gửi email: ", error);
          alert("Đã xảy ra lỗi khi gửi email. Vui lòng thử lại sau!");
        }
      );
  });
