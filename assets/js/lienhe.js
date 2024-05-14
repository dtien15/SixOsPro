document
  .getElementById("SixOsLienHeBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit

    // Lấy giá trị nhập vào từ các trường input
    var nameLienHe = document.getElementById("SixOsLienHeName").value;
    var companyLienHe = document.getElementById("SixOsLienHeCompany").value;
    var phoneLienHe = document.getElementById("SixOsLienHePhone").value;
    var emailLienHe = document.getElementById("SixOsLienHeEmail").value;
    var requestLienHe = document.getElementById("SixOsLienHeRequest").value;

    // Kiểm tra các trường nhập liệu
    if (
      nameLienHe.trim() === "" ||
      companyLienHe.trim() === "" ||
      phoneLienHe.trim() === "" ||
      emailLienHe.trim() === "" ||
      requestLienHe.trim() === ""
    ) {
      $(".contactbody").addClass("was-validated");
      return;
    }

    // Kiểm tra định dạng email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailLienHe)) {
      $(".contactbody").addClass("was-validated");
      return; // Dừng xử lý tiếp theo nếu email không hợp lệ
    }

    // Gửi email thông qua API của email hoặc một dịch vụ email khác
    // Ví dụ sử dụng EmailJS
    emailjs
      .send("service_suzo2yo", "template_nc5csxo", {
        nameLienHe: nameLienHe,
        companyLienHe: companyLienHe,
        phoneLienHe: phoneLienHe,
        emailLienHe: emailLienHe,
        requestLienHe: requestLienHe,
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
