const cardContainers = document.querySelectorAll('.card-container');


cardContainers.forEach(card => {
    const cardInfo = card.querySelector('.card-info');
    const overview = card.querySelector('.overview');
    
    card.addEventListener('mouseenter', () => {
        const windowWidth = window.innerWidth;

         if ((windowWidth > 640 && windowWidth < 830) || (windowWidth >= 1024 && windowWidth <= 1195) ){
             cardInfo.classList.add('hidden');
            } else {
             cardInfo.classList.remove('hidden');
             cardInfo.classList.add('card_info');
            };

        overview.classList.add('translate-y-0');
    });

   card.addEventListener('mouseleave', () => {
        cardInfo.classList.remove('hidden', 'card_info');
        overview.classList.remove('translate-y-0');
    });
});