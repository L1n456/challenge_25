const range = document.querySelector(".range");
const pageViews = document.querySelector(".pv");
const perMonth = document.querySelector(".mth");
const slider = document.querySelector(".switch");

let discount = 0.25;
let cash = 0;

slider.addEventListener("input" , onInput);
range.addEventListener("input", onInput);

function onInput(){
    switch (range.value) {
        case "0":
            pageViews.innerHTML = "10k";
            cash = slider.checked ? 8 - (8 * discount) : 8;
            perMonth.innerHTML = `${cash}.00`;
            break;
    
        case "25":
            pageViews.innerHTML = "50k";
            cash = slider.checked ? 12 - (12 * discount) : 12;
            perMonth.innerHTML = `${cash}.00`;
            break;
    
        case "50":
            pageViews.innerHTML = "100k";
            cash = slider.checked ? 16 - (16 * discount) : 16;
            perMonth.innerHTML = `${cash}.00`;
            break;
    
        case "75":
            pageViews.innerHTML = "500k";
            cash = slider.checked ? 24 - (24 * discount) : 24;
            perMonth.innerHTML = `${cash}.00`;
            break;
    
        case "100":
            pageViews.innerHTML = "1M";
            cash = slider.checked ? 36 - (36 * discount) : 36;
            perMonth.innerHTML = `${cash}.00`;
            break;
    }
    
}


const fill = document.querySelector('.fill');

range.addEventListener('input', function updateFill(){
    fill.style.width = `${range.value}%`;
})



