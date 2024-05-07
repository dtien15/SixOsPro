// $(document).ready(function () {
//     $.ajax({
//       url: "./data/thungo.json",
//       dataType: "json",
//       success: function (data) {
//         if (
//           data &&
//           data.marketingArticles &&
//           data.marketingArticles.length > 0
//         ) {
//           data.marketingArticles.forEach(function (article) {
//             var articleHTML = `
//               <div class="col-12 col-md-6 col-xl-3 p-1 px-3 pt-4">
//                 <div class="d-none d-sm-block card-image position-relative border-radius-lg">
//                   <a href="${article.url}" class="blur-shadow-image text-center">
//                     <div class="colortext">
//                       <img src="${article.image}" onerror="Master_OnLoad_Error_Image(this)" class="img image-blog w-100 border-radius-lg img-thumbnail border-0" alt="architecture" loading="lazy">
//                     </div>
//                   </a>
//                 </div>
//                 <div class="d-block d-sm-none">
//                   <a href="${article.url}" class="colortext">
//                     <img src="${article.image}" class="w-100 border-0 border-radius-lg img-thumbnail p-0" loading="lazy">
//                   </a>
//                 </div>
//                 <p class="twoline title my-3 px-2 fs-5"><a href="${article.url}">${article.title}</a></p>
//                 <p class="twoline content my-2 px-2">${article.content}</p>
//                 <p class="time ps-2">${article.date}</p>
//               </div>
//             `;
//             $("#cat2").append(articleHTML);
//           });
//         }
//       },
//       error: function (xhr, status, error) {
//         console.error("Error loading marketing articles data:", status, error);
//       },
//     });
//   });

$(document).ready(function () {
    $.ajax({
        url: "./data/thungo.json",
        dataType: "json",
        success: function (data) {
            if (data && data.marketingArticles && data.marketingArticles.length > 0) {
                // Thêm dữ liệu vào danh sách bài viết và phân trang
                addArticlesAndPagination(data.marketingArticles);
            }
        },
        error: function (xhr, status, error) {
            console.error("Error loading marketing articles data:", status, error);
        }
    });

    // Hàm thêm dữ liệu vào danh sách bài viết và phân trang
    function addArticlesAndPagination(articles) {
        var pageSize = 8; // Số lượng bài viết mỗi trang
        var currentPage = 1; // Trang hiện tại

        // Hiển thị danh sách bài viết cho trang đầu tiên
        showArticles(articles.slice(0, pageSize));

        // Khởi tạo phân trang
        $('#pagination').pagination({
            dataSource: articles,
            pageSize: pageSize,
            callback: function(data, pagination) {
                showArticles(data);
            }
        });

        // Hàm hiển thị danh sách bài viết
        function showArticles(articlesToShow) {
            var $cat2 = $('#cat2');
            $cat2.empty(); // Xóa nội dung cũ trước khi thêm mới

            articlesToShow.forEach(function(article) {
                var articleHTML = `
                    <div class="col-12 col-md-6 col-xl-3 p-1 px-3 pt-4">
                        <div class="d-none d-sm-block card-image position-relative border-radius-lg">
                            <a href="${article.url}" class="blur-shadow-image text-center">
                                <div class="colortext">
                                    <img src="${article.image}" onerror="Master_OnLoad_Error_Image(this)" class="img image-blog w-100 border-radius-lg img-thumbnail border-0" alt="architecture" loading="lazy">
                                </div>
                            </a>
                        </div>
                        <div class="d-block d-sm-none">
                            <a href="${article.url}" class="colortext">
                                <img src="${article.image}" class="w-100 border-0 border-radius-lg img-thumbnail p-0" loading="lazy">
                            </a>
                        </div>
                        <p class="twoline title my-3 px-2 fs-5"><a href="${article.url}">${article.title}</a></p>
                        <p class="twoline content my-2 px-2">${article.content}</p>
                        <p class="time ps-2">${article.date}</p>
                    </div>
                `;
                $cat2.append(articleHTML);
            });
        }
    }
});
