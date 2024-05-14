document.addEventListener("DOMContentLoaded", function () {
  function handleScrollEffect(elements, effectType) {
    function checkVisible(ele) {
      var rect = ele.getBoundingClientRect();
      var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    function applyEffect(title) {
      if (checkVisible(title)) {
        title.style.opacity = "1";
        if (effectType === "leftToRight") {
          title.style.transform = "translateX(0)";
        } else if (effectType === "rightToLeft") {
          title.style.transform = "translateX(0)";
        } else if (effectType === "smallToBig") {
          title.style.transform = "scale(1)";
        } else if (effectType === "topToBottom") {
          title.style.transform = "translateY(0)";
        } else if (effectType === "bottomToTop") {
          title.style.transform = "translateY(0)";
        }
      }
    }

    function handleScroll() {
      elements.forEach(function (element) {
        applyEffect(element);
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }

  // Chọn class animation
  var leftToRightElements = document.querySelectorAll(".leftToRight");
  var rightToLeftElements = document.querySelectorAll(".rightToLeft");
  var smallToBigElements = document.querySelectorAll(".smallToBig");
  var topToBottomElements = document.querySelectorAll(".topToBottom");
  var bottomToTopElements = document.querySelectorAll(".bottomToTop");
  var faceInElements = document.querySelectorAll(".fadeIn");

  // Gọi hàm animation
  handleScrollEffect(leftToRightElements, "leftToRight");
  handleScrollEffect(rightToLeftElements, "rightToLeft");
  handleScrollEffect(smallToBigElements, "smallToBig");
  handleScrollEffect(topToBottomElements, "topToBottom");
  handleScrollEffect(bottomToTopElements, "bottomToTop");
  handleScrollEffect(faceInElements, "fadeIn");
});
