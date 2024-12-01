window.onload = function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const textField = document.getElementById('text' + this.id.charAt(this.id.length - 1));
            textField.style.display = this.checked ? 'inline' : 'none';
        });
    });
};
