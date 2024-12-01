window.onload = function() {
    const textFields = document.querySelectorAll('input[type="text"]');
    textFields.forEach(field => {
        field.addEventListener('mouseover', function() {
            this.focus();
            this.value = this.id;
        });
        field.addEventListener('mouseout', function() {
            this.value = '';
        });
    });
};
