
const downloadLink = document.querySelector('.downloadLink');

        downloadLink.addEventListener('click', () => {
            if (confirm('This option currently is unavailable?')) {
                // You can track download events here (e.g., using analytics)
            } else {
                event.preventDefault(); // Prevent default download behavior
            } 
        });