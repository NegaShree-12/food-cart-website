document.querySelector('.book').addEventListener('click', function() {
    this.classList.toggle('active');

    const paymentContent = document.querySelector('.payment .payment-content');
    const blueBottomBox = document.querySelector('.blue-bottom-box');
    const catlog = document.querySelector('.catlog-hidden');
    const printItems = document.querySelector('.print-items');

    paymentContent.style.display = this.classList.contains('active') ? 'none' : 'block';
    blueBottomBox.classList.toggle('hidden');
    catlog.style.visibility = this.classList.contains('active') ? 'visible' : 'hidden';
    
    printItems.style.display = 'flex';

    const textToDisplay = document.querySelector('.text-to-display');
    textToDisplay.style.display = 'none'; 
});

document.querySelectorAll('.food-image').forEach(image => {
    image.addEventListener('click', function() {
        const textToDisplay = document.querySelector('.text-to-display');
        const catlog = document.querySelector('.catlog-hidden');
        const printItems = document.querySelector('.print-items');

        textToDisplay.style.display = 'block'; 

        catlog.style.visibility = 'visible';
        catlog.querySelector('.catalog').style.display = 'none';
        catlog.querySelector('.table').style.display = 'none';
        catlog.querySelector('.food-list').style.display = 'none';

        printItems.style.display = 'none';
    });
});

document.querySelector('.bx-x').addEventListener('click', function() {
    const paymentContent = document.querySelector('.payment .payment-content');
    const catlog = document.querySelector('.catlog-hidden');
    const printItems = document.querySelector('.print-items');
    const bookButton = document.querySelector('.book');
    const blueBottomBox = document.querySelector('.blue-bottom-box');
    const textToDisplay = document.querySelector('.text-to-display');

    paymentContent.style.display = 'block';
    catlog.style.visibility = 'hidden';
    bookButton.classList.remove('active');
    printItems.style.display = 'flex';
    blueBottomBox.classList.remove('hidden');

    textToDisplay.style.display = 'none';
});
