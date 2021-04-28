const nameInput = document.getElementById('name-input');
const buttonPress = document.getElementById('button');
const displayName = document.getElementById('name');
buttonPress.addEventListener('click', () => {
    displayName.textContent = nameInput.value;
});