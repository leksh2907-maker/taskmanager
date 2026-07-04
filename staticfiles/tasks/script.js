document.addEventListener('DOMContentLoaded', function () {
    var deleteForms = document.querySelectorAll('.delete-form');

    deleteForms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            var confirmed = window.confirm('Are you sure you want to delete this task? This action cannot be undone.');
            if (!confirmed) {
                event.preventDefault();
            }
        });
    });

    // Auto-hide messages after a few seconds
    var messages = document.querySelectorAll('.message');
    if (messages.length > 0) {
        setTimeout(function () {
            messages.forEach(function (msg) {
                msg.style.transition = 'opacity 0.5s ease';
                msg.style.opacity = '0';
                setTimeout(function () { msg.remove(); }, 500);
            });
        }, 4000);
    }
});
