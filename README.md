# Emergency-Hotline

Answer the following questions clearly:


##What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById helps to get an element using it's given "#id" name whereas getElementsByClassName helps to get elements whom have the same class names. Both querySelector / querySelectorAll helps doing the work mentioned earlier but if there's several elements exists with the same class name, it will return the first matched element and it can be used to query in inside of an element like nthElement.querySelecto(".class-btn") will give me  element having the class-btn inside of that parent nthELement which is very convenient.

##How do you create and insert a new element into the DOM?
Ans: get parent element such as parentElem
const newElem = document.createElement("div");
newElem.innerHTML = `<h1>If Any</h1>`;
parentElem.appendChild(newElem);

##What is Event Bubbling and how does it work?
Ans: when we click deepest element on our page, the even will pass throgu and go upward towards it's parents residing outer area of the page.

##What is Event Delegation in JavaScript? Why is it useful?
Ans: Instead of using multiple event listeners, we use a single event listener at the parent and using this we accomplish our all the tasks.

##What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() > stops default behaviour of browser such as auto reloading of using form tag
stopPropagation() > In order to stop event bubble flow upward we use this.
