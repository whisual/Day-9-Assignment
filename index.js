const colorSelect = document.getElementById("color");
const bgColorSelect = document.getElementById("bgColor");
const paddingSelect = document.getElementById("padding");
const fontSizeSelect = document.getElementById("fontSize");
const fontWeightSelect = document.getElementById("fontWeight");
const changingDiv = document.getElementById("text");

colorSelect.addEventListener("change", () => {
    changingDiv.style.color = colorSelect.value;
});

bgColorSelect.addEventListener("change", () => {
    changingDiv.style.backgroundColor = bgColorSelect.value;
});

paddingSelect.addEventListener("change", () => {
    changingDiv.style.padding = paddingSelect.value;
});

fontSizeSelect.addEventListener("change", () => {
    changingDiv.style.fontSize = fontSizeSelect.value;
});

fontWeightSelect.addEventListener("change", () => {
    changingDiv.style.fontWeight = fontWeightSelect.value;
});