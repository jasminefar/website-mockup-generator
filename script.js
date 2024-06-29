document.getElementById('mockup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const bgColor = document.getElementById('bg-color').value;
    const textColor = document.getElementById('text-color').value;

    document.querySelector('.mockup').style.backgroundColor = bgColor;
    document.querySelector('.mockup-title').textContent = title;
    document.querySelector('.mockup-title').style.color = textColor;
    document.querySelector('.mockup-text').style.color = textColor;
});
