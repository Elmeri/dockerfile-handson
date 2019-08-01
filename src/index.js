import _ from 'lodash'

require('./main.css');

function component() {
    let outer_element = document.createElement('div')
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'docker'], ' ');

    element.className = "inner"
    outer_element.className = "outer"
    outer_element.appendChild(element)

    return outer_element;
}

document.body.appendChild(component());
