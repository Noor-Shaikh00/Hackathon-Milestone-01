// script.ts
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var target = button.getAttribute('data-target');
            if (target) {
                var content = document.querySelector("#".concat(target, " .content"));
                if (content) {
                    content.classList.toggle('hidden');
                }
            }
        });
    });
});
