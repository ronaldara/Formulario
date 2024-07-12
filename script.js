document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.querySelector('.form-container');
    const tableContainer = document.querySelector('.table-container');
    const toggleFormBtn = document.getElementById('toggle-form-btn');
    const showModalBtn = document.getElementById('show-modal-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementsByClassName('close')[0];

    toggleFormBtn.addEventListener('click', function() {
        formContainer.classList.toggle('hidden');
        if (formContainer.classList.contains('hidden')) {
            tableContainer.style.flex = '1';
        } else {
            tableContainer.style.flex = '';
        }
    });

    showModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
