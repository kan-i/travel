const modals = () => {
    const modal = document.querySelector('.modal'),
        body = document.querySelector('body'),
        modalBtn = document.querySelector('.modal_btn'),
        modalForm = document.querySelector('.modal-form'),
        scroll = getScrollbarWidth();



    function getScrollbarWidth() {

        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';

        document.body.appendChild(outer);

        const inner = document.createElement('div');
        outer.appendChild(inner);

        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

        outer.parentNode.removeChild(outer);

        return scrollbarWidth;

    }



    function openModal(e) {
        if (e.target.closest('.btn-open-modal')) {
            body.style.overflow = 'hidden';
            body.style.marginRight = `${scroll}px`;

            if (modal.classList.contains('animate__fadeOut')) {
                modal.classList.remove('animate__fadeOut');
            }
            if (modal.classList.contains('animate__fadeIn') === false) {
                modal.classList.add('animate__fadeIn');
            }

            if (modalForm.classList.contains('animate__fadeOutLeft')) {
                modalForm.classList.remove('animate__fadeOutLeft');
            }
            if (modalForm.classList.contains('animate__fadeInLeft') === false) {
                modalForm.classList.add('animate__fadeInLeft');
            }

            if (modalBtn.classList.contains('animate__fadeOutRight')) {
                modalBtn.classList.remove('animate__fadeOutRight');
            }
            if (modalBtn.classList.contains('animate__fadeInRight') === false) {
                modalBtn.classList.add('animate__fadeInRight');
            }



            modal.classList.add('open');

        }
        if (e.target.closest('.btn-close-modal')) {
            body.style.overflow = '';
            body.style.marginRight = '';

            modal.classList.remove('animate__fadeIn');
            modal.classList.add('animate__fadeOut');

            modalForm.classList.remove('animate__fadeInLeft');
            modalForm.classList.add('animate__fadeOutLeft');

            modalBtn.classList.remove('animate__fadeInRight');
            modalBtn.classList.add('animate__fadeOutRight');

            setTimeout(() => {
                modal.classList.remove('open');
            }, 1000);
        }
    }


    document.addEventListener('click', openModal);
}

export default modals;