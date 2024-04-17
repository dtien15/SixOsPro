function Master_OnLoad_Error_Image(image) {
  image.src = Master_Default_Pic;
  return true;
}

function Master_ScrollLoadImage(element = "") {
  setTimeout(() => {
    var lazyloadThrottleTimeout;
    const lazyload = () => {
      if (lazyloadThrottleTimeout) clearTimeout(lazyloadThrottleTimeout);
      var lazyloadImages = element != "" ? $("." + element) : $("img.lazy");
      element = element != "" ? element : "lazy";
      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = $(window).scrollTop();
        var heightView = $(window).outerHeight();
        lazyloadImages.each(function (img) {
          let itemImage = $(this);
          let srcImage = itemImage.attr("data-src");
          if (srcImage != undefined) {
            if (itemImage.offset().top < heightView + scrollTop + 150) {
              itemImage.attr("src", srcImage);
              var imageLoad = new Image();
              imageLoad.src = srcImage;
              imageLoad.onload = function (ev) {
                itemImage.attr("src", srcImage);
                itemImage.removeClass(element);
              };
              imageLoad.onerror = function (ev) {
                itemImage.attr("src", Master_Default_Pic);
                itemImage.removeClass(element);
              };
            }
          }
        });
        if (lazyloadImages.length == 0) {
          window.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    };
    window.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
    window.dispatchEvent(new CustomEvent("scroll"));
  }, 10);
}

//#region  Render block
var timeOutRenderBlock = [];

async function fnRenderBlock(data, id, blocknum, fnrender, fnsuccess, fnbegin) {
  let _dataroot;
  if (typeof data == "object") {
    _dataroot = Object.keys(data).map(function (key) {
      return data[key];
    });
  } else {
    _dataroot = data;
  }
  let _data = JSON.parse(JSON.stringify(_dataroot));
  if (typeof fnbegin === "function") fnbegin();
  new Promise((resolve, reject) => {
    if (timeOutRenderBlock && timeOutRenderBlock.length != 0) {
      timeOutRenderBlock.forEach(clearTimeout);
      timeOutRenderBlock = [];
    }
    var promises = [];
    let array = sliceIntoChunks(_data, blocknum);
    if (array != undefined && array.length != 0) fnrender(array[0], id);
    for (var i = 1; i < array.length; i++) {
      promises.push(fnRenderBlock_Each(fnrender, array[i], id));
    }
    Promise.all(promises).then(() => {
      if (typeof fnsuccess === "function") fnsuccess();
    });

    resolve();
  });
}
async function fnRenderBlock_Each(fnrender, data, id) {
  new Promise((resolve, reject) => {
    timeOutRenderBlock.push(
      setTimeout(() => {
        fnrender(data, id);
        resolve();
      }, 200)
    );
  });
}
async function fnRenderArray(data, id, index, fnrender, fnsuccess, fnbegin) {
  if (typeof fnbegin === "function") fnbegin();
  return new Promise((resolve, reject) => {
    fnrender(data[index], id);
    index = index + 1;
    if (typeof fnsuccess === "function") fnsuccess();
    resolve(index);
  });
}
function sliceIntoChunks(myArray, chunk_size) {
  try {
    var results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  } catch (ex) {
    return [];
  }
}
function xoa_dau(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}
//#endregion
