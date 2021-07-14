const Dom = function() {

    this.create = function(name) {
        this.element = document.createElement(name);
        return this.element;
    };
    this.html = function(html, element) {
        element = element || this.element;
        element.innerHTML = html;
    };

    this.classAdd = function(name, element) {
        element = element || this.element;
        element.classList.add(name);
    }

    this.classRemove = function(name, element) {
        element = element || this.element;
        element.classList.remove(name);
    }

    this.append = function(to, element, before) {
        element = element || this.element;

        if (!before) {
            to.appendChild(element);
        } else {
            to.insertBefore(element, before);
        }
    }

    this.search = function(selector, element) {
        element = element || document;

        let result = element.querySelectorAll(selector);        
        
        if (result.length == 1) result = result[0];

        return result;
    };

    this.attr = function(element, name, value){
        element = element || this.element;
        element.setAttribute(name, value)
    };

    this.toggleClass=function(element, className){
        element = element || this.element;
        element.classList.toggle(className)
    };

    this.hasClass=function(element, className){
        element = element || this.element;

        if (element.classList.contains(className)) return true
        else return false
    };

    this.on = function(element, eventName, funcName){
        element = element || this.element;
        element.addEventListener(eventName, funcName)
    };
};

const $ = new Dom();
console.log($);

let h1 = $.create('h1');
console.log(h1);

let p = $.create('p');
console.log(p);

$.html('Заголовок', h1);
$.html('Текстовый абзац', p);

$.classAdd('p1', p);

$.append(document.body, h1);
$.append(document.body, p);

let p2 = $.create('p');
$.html('Еще один абзац', p2);
$.append(document.body, p2);

let divMain = $.create('div');
$.classAdd('main-container', divMain);

let div1 = $.create('div');
$.classAdd('container', div1);
$.attr(div1, "contenteditable", false);
$.append(divMain, div1);
$.append(document.body, divMain);

let divBtn = $.create('div');
$.classAdd('buttons-container', divBtn);
$.append(div1, divBtn);

let button = $.create('button');
$.classAdd('button', button);
$.classAdd('button-classic', button);
$.html('click to change', button);
$.append(divBtn, button);

console.log($.search('p'));

$.on(button, 'click', function onn(){
    $.toggleClass(button, 'button-classic');
    $.toggleClass(div1, 'container-classic');
    $.toggleClass(divMain, 'main-container-classic');
 });

console.log($.hasClass(button, 'button'));
console.log($.hasClass(button, 'false-button'));