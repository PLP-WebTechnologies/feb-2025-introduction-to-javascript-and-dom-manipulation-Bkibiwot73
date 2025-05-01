document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('changeText');
    const addElementButton = document.getElementById('addElement');
    const removeElementButton = document.getElementById('removeElement');
    const textElement = document.getElementById('textElement');
    const container = document.getElementById('elementContainer');

    changeTextButton.addEventListener('click', () => {
        textElement.textContent = 'The text has been updated!';
    });

    addElementButton.addEventListener('click', () => {
        const newElement = document.createElement('p');
        newElement.textContent = 'A new element has been added!';
        container.appendChild(newElement);
    });

    removeElementButton.addEventListener('click', () => {
        const lastElement = container.lastElementChild;
        if (lastElement) {
            container.removeChild(lastElement);
        }
    });
});