const slide = document.querySelector("#slide")
const output = document.querySelector("#output")
const showValue = () => {
    output.textContent = slide.value
}
slide.oninput = () => {
    showValue()
}
showValue()

// setInterval(() => {
//     console.log("Hello everyone")
// }, 1000);