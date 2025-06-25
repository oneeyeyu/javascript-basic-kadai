const btnClick = document.getElementById('btn');
const displayText = document.getElementById('text');
btnClick.addEventListener('click',() =>{
    setTimeout(() => {
        displayText.textContent = 'ボタンをクリックしました';
    }, 2000);
},);