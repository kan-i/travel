import './styles/reset.css';
import './styles/styles.css';
import './styles/sass/vars.sass';
import './styles/sass/style.sass';
import './styles/sass/about.sass';
import './styles/sass/bars.sass';
import './styles/sass/features.sass';
import './styles/sass/footer.sass';
import './styles/sass/form.sass';
import './styles/sass/header.sass';
import './styles/sass/hero.sass';
import './styles/sass/hot-tours.sass';
import './styles/sass/modal.sass';
import './styles/sass/popular.sass';
import './styles/sass/reviews.sass';
import './styles/sass/sale.sass';
import './styles/sass/slick.sass';
import './styles/sass/load.sass';
import './styles/sass/navbar.sass';


import '../node_modules/slick-carousel/slick/slick.min';
import Rellax from '../node_modules/rellax/rellax.min';
import slickSliders from './modules/slickSliders';
import saleSlider from './modules/sale';
import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    setTimeout(() => {
        document.querySelector('.load').classList.add('close');
    }, 0);

    new Rellax('.rellax');
    slickSliders();
    saleSlider();
    modals();

});






