// FAQ Expand/Collapse Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        // Collapse all open answers
        document.querySelectorAll('.faq-answer').forEach(ans => (ans.style.display = 'none'));
        document.querySelectorAll('.faq-question span').forEach(icon => (icon.textContent = '+'));

        // Toggle the selected FAQ
        if (!isVisible) {
            answer.style.display = 'block';
            question.querySelector('span').textContent = '-';
        }
    });
});
