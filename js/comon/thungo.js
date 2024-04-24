function updateElementWithData(elementId, jsonDataKey, jsonData) {
  var element = $("#" + elementId);
  var data = jsonData[jsonDataKey];

  if (data) {
    element.html(data);
  } else {
    element.hide();
  }
}

$(document).ready(function () {
  var newDataLoaded = false; // Biến kiểm tra xem dữ liệu mới đã được tải hay chưa

  // Hàm để tải dữ liệu từ tệp JSON và cập nhật nội dung
  function loadDataAndUpdate() {
    $.getJSON("./data/thungo.json", function (data) {
      if (data && Object.keys(data).length !== 0) {
        updateElementWithData("thuNgoOne", "thuNgoOne", data);
        updateElementWithData("thuNgoTwo", "thuNgoTwo", data);
        updateElementWithData("thuNgoThree", "thuNgoThree", data);
        updateElementWithData("thuNgoFour", "thuNgoFour", data);
        updateElementWithData("thuNgoFive", "thuNgoFive", data);
        updateElementWithData("thuNgoSix", "thuNgoSix", data);
        newDataLoaded = true;
      }
    });
  }

  // Tải dữ liệu và cập nhật nội dung khi trang được tải
  loadDataAndUpdate();

  // Cập nhật nội dung mới mỗi giây
  setInterval(function () {
    if (!newDataLoaded) {
      loadDataAndUpdate();
    }
  }, 1000);
});

$(document).ready(function () {
  $.getJSON("./data/thungo.json", function (data) {
    if (data && data.slides && data.slides.length > 0) {
      data.slides.forEach(function (slide) {
        var slideHTML = `
                    <div class="swiper-slide">
                        <div class="ml-auto mr-auto text-center">
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
  });
});

// $(document).ready(function () {
//   $.getJSON("./data/thungo.json", function (data) {
//     var slideHTML = `
//                 <h1 class="title mb-0  topToBottom" style="text-align: center; "  title="" lang="vi" aria-label="SixOS - Công nghệ và giải pháp phần mềm">${data.heading.heading1}</h1>
//                   `;
//     $("#heading1").append(slideHTML);
//   });
// });
