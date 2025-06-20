const btnClick = document.getElementById('btn');
btnClick.addEventListener('click', () => {
    const displayText = document.getElementById('text');
    displayText.textContent = 'ボタンをクリックしました';
});