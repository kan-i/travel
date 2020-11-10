import * as $ from 'jquery';



const slickSliders = () => {

    const btnPrev = `
    <button class="slider-btn slider-btn--prev">
        <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L1 6.5L6 1" />
        </svg>
    </button>`,
        btnNext = `
    <button class="slider-btn slider-btn--next">
        <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6.5L1 12" />
        </svg>
    </button>`;


    $('.hot-tours-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `${btnPrev}`,
        nextArrow: `${btnNext}`,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    });

    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: `${btnPrev}`,
        nextArrow: `${btnNext}`,

    });

    $('#menu-btn').click(function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
    });

}


export default slickSliders;