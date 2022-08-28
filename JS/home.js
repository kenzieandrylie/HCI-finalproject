function updateUI(){
    container.css({
        transform: `translateX(calc(${curr} * -20%))`
    })
}


let curr = 0
const arrLen = 5
const container = $("#carousell-image-container")

$("#prevBtn").on("click",()=>{
    const newCurr = curr - 1;
    curr = newCurr < 0 ? arrLen - 1 : newCurr;
    updateUI()
})
$("#nextBtn").on("click",()=>{
    curr = (curr + 1) % arrLen
    updateUI()
})
