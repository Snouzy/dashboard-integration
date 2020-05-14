const switchBtn = document.querySelector('label');
let htmlElt = document.getElementsByTagName('html')[0]
let currentTheme = htmlElt.getAttribute("data-theme");

switchBtn.addEventListener('click', function() {
    if(currentTheme == "dark") {
        htmlElt.setAttribute("data-theme", "light");
        currentTheme = "light";
    } else {
        htmlElt.setAttribute("data-theme", "dark");
        currentTheme = "dark";
    }
})