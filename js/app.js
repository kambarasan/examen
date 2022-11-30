const input = document.querySelector('.text-input')
const input1 = document.querySelector('.num-input')
const btn = document.querySelector('.add-btn')
const block = document.querySelector('.block')
const list= document.querySelector('.list')
// const CSS_COLOR_NAMES = [
//     "AliceBlue",
//     "AntiqueWhite",
//     "Aqua",
//     "Aquamarine",
//     "Azure",
//     "Beige",
//     "Bisque",
//     "Black",
//     "BlanchedAlmond",
//     "Blue",
//     "BlueViolet",
//     "Brown",
//     "BurlyWood",
//     "CadetBlue",
//     "Chartreuse",
//     "Chocolate",
//     "Coral",
//     "CornflowerBlue",
//     "Cornsilk",
//     "Crimson",
//     "Cyan",
//     "DarkBlue",
//     "DarkCyan",
//     "DarkGoldenRod",
//     "DarkGray",
//     "DarkGrey",
//     "DarkGreen",
//     "DarkKhaki",
//     "DarkMagenta",
//     "DarkOliveGreen",
//     "DarkOrange",
//     "DarkOrchid",
//     "DarkRed",
//     "DarkSalmon",
//     "DarkSeaGreen",
//     "DarkSlateBlue",
//     "DarkSlateGray",
//     "DarkSlateGrey",
//     "DarkTurquoise",
//     "DarkViolet",
//     "DeepPink",
//     "DeepSkyBlue",
//     "DimGray",
//     "DimGrey",
//     "DodgerBlue",
//     "FireBrick",
//     "FloralWhite",
//     "ForestGreen",
//     "Fuchsia",
//     "Gainsboro",
//     "GhostWhite",
//     "Gold",
//     "GoldenRod",
//     "Gray",
//     "Grey",
//     "Green",
//     "GreenYellow",
//     "HoneyDew",
//     "HotPink",
//     "IndianRed",
//     "Indigo",
//     "Ivory",
//     "Khaki",
//     "Lavender",
//     "LavenderBlush",
//     "LawnGreen",
//     "LemonChiffon",
//     "LightBlue",
//     "LightCoral",
//     "LightCyan",
//     "LightGoldenRodYellow",
//     "LightGray",
//     "LightGrey",
//     "LightGreen",
//     "LightPink",
//     "LightSalmon",
//     "LightSeaGreen",
//     "LightSkyBlue",
//     "LightSlateGray",
//     "LightSlateGrey",
//     "LightSteelBlue",
//     "LightYellow",
//     "Lime",
//     "LimeGreen",
//     "Linen",
//     "Magenta",
//     "Maroon",
//     "MediumAquaMarine",
//     "MediumBlue",
//     "MediumOrchid",
//     "MediumPurple",
//     "MediumSeaGreen",
//     "MediumSlateBlue",
//     "MediumSpringGreen",
//     "MediumTurquoise",
//     "MediumVioletRed",
//     "MidnightBlue",
//     "MintCream",
//     "MistyRose",
//     "Moccasin",
//     "NavajoWhite",
//     "Navy",
//     "OldLace",
//     "Olive",
//     "OliveDrab",
//     "Orange",
//     "OrangeRed",
//     "Orchid",
//     "PaleGoldenRod",
//     "PaleGreen",
//     "PaleTurquoise",
//     "PaleVioletRed",
//     "PapayaWhip",
//     "PeachPuff",
//     "Peru",
//     "Pink",
//     "Plum",
//     "PowderBlue",
//     "Purple",
//     "RebeccaPurple",
//     "Red",
//     "RosyBrown",
//     "RoyalBlue",
//     "SaddleBrown",
//     "Salmon",
//     "SandyBrown",
//     "SeaGreen",
//     "SeaShell",
//     "Sienna",
//     "Silver",
//     "SkyBlue",
//     "SlateBlue",
//     "SlateGray",
//     "SlateGrey",
//     "Snow",
//     "SpringGreen",
//     "SteelBlue",
//     "Tan",
//     "Teal",
//     "Thistle",
//     "Tomato",
//     "Turquoise",
//     "Violet",
//     "Wheat",
//     "White",
//     "WhiteSmoke",
//     "Yellow",
//     "YellowGreen",
// ];
btn.addEventListener('click',()=> {
    addNewWork()
})
input.addEventListener('keydown',(e)=> {
    if (e.key === 'Enter'){
        addNewWork()
    }
})

function  addNewWork(){
    if (input.value !== "") {

        const newList = `<li class="list-group-item d-flex
        justify-content-between align-items-center"><span
        class=" d-flex align-items-center ">
        <div class="block  d-flex align-items-center justify-content-center">${ input.value[0].toUpperCase()} ${input.value[1].toLowerCase()} </div>
        <input type= "checkbox"
        class="checkbox mx-1">${input.value} ${input1.value}</span><button
        class="del-btn btn btn-primary">delete</button></li>`

        list.innerHTML+= newList
    }
    list.innerHTML +=""
}
list.addEventListener('click',(e)=> {
    if (e.target.classList.contains('del-btn')){
        e.target.parentNode.remove("block")

    }

    if (e.target.classList.contains('checkbox')){
        e.target.parentNode.classList.toggle('line')
    }
})








































//
// Замыкание — это комбинация функции и лексического окружения,
// в котором эта функция была определена. Другими словами, замыкание
// даёт вам доступ к Scope (en-US) внешней функции из внутренней
// функции. В JavaScript замыкания создаются каждый раз при создании
// функции, во время её создания.





// Promise – это специальный объект, который содержит своё состояние.
// Вначале pending («ожидание»), затем – одно из: fulfilled
// («выполнено успешно») или rejected («выполнено с ошибкой»).




// JSON (англ. JavaScript Object Notation) — текстовый формат обмена
// данными, основанный на JavaScript. Но при этом формат независим от
// JS и может использоваться в любом языке программирования.



//
// Циклы JavaScript обеспечивают многократное выполнение повторяющихся
// вычислений. Они оптимизируют процесс написания кода, выполняя одну
// и ту же инструкцию или блок инструкций, образующих тело цикла,
// заданное число раз (используя переменную-счётчик) или пока заданное
// условие истинно