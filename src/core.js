import _ from "lodash";

const component = () => {
    const element = document.createElement('h1');
    element.innerHTML = 'Unicode Academy - Core';
    return element;
}

document.querySelector('body').appendChild(component());