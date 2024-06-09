
// <!-- оголошуємо функцію -->
function getElementWidth(content, padding, border) {
    // let result = Number.parseFloat(getElementWidth);
    let getElementWidth = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) *2;
    return getElementWidth;
}

//  <!-- Виконуємо функцію -->
 console.log(getElementWidth("50px", "8px", "4px")); 
 console.log(getElementWidth("60px", "12px", "8.5px"));
 console.log(getElementWidth("200px", "0px", "0px"));

 //  Залиш цей код для перевірки ментором.
// Оголошена функція getElementWidth(content, padding, border)
// Виклик getElementWidth("50px", "8px", "4px") повертає число 74
// Виклик getElementWidth("60px", "12px", "8.5px") повертає число 101
// Виклик getElementWidth("200px", "0px", "0px") повертає число 200
// Виклик getElementWidth з будь якими-валідними аргументами повертає правильне значення