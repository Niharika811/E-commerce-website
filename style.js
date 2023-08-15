const sliderItems = document.querySelectorAll('.slideritem');
        const menuItems = document.querySelectorAll('.menuitem');

        function changeSlide(index) {
            sliderItems.forEach(item => {
                item.classList.remove('active');
            });
            
            sliderItems[index].classList.add('active');
        }

        menuItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                changeSlide(index);
            });
        });
        function updateImageWidths() {
            const container = document.querySelector('.slider');
            const images = container.querySelectorAll('img');

            images.forEach(image => {
                const containerWidth = container.clientWidth;
                image.style.width = containerWidth + 'px';

            });
        }

        // Call the function initially and whenever the window is resized
        updateImageWidths();
        window.addEventListener('resize', updateImageWidths);