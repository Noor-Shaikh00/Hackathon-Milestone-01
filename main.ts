// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            if (target) {
                const content = document.querySelector(`#${target} .content`);
                if (content) {
                    content.classList.toggle('hidden');
                }
            }
        });
    });
});
