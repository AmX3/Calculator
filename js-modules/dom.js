// dom interactions with js

export const createElementWithText = (type, text, parent) => {
    // create a new element type
    const newElement = document.createElement(type);
    // create a textNode that contains our text
    const textNode = document.createTextNode(text);
    // to our element type we are appending our text to it
    newElement.appendChild(textNode);
    // to our parent in this case, a div, we are appending our element type to it
    parent.appendChild(newElement);
};
