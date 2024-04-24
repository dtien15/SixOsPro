$(document).ready(function(){
    $.getJSON("yourfile.json", function(data){
        if (data && data.slides && data.slides.length > 0) {
            data.slides.forEach(function(slide) {
                var slideHTML = `
                    <div class="swiper-slide">
                        <div class="pt-5 ml-auto mr-auto text-center">
                            <div class="d-lg-block d-none w-100 h-100 position-relative image-header"
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
                $(".swiper-wrapper").append(slideHTML);
            });
        }
    });
});
