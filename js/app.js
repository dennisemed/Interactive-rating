const allRates = document.querySelectorAll(".rate");
const submit = document.querySelector("#submit");
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const sr = document.querySelector("#s-rate");
let selected = "";

allRates.forEach(rate => {
    rate.addEventListener("click", (e) => {
        removeSelectedClasses();
        selected = e.target.getAttribute('id');
        e.target.classList.add("selected");
    })  
})

submit.addEventListener("click", () => {

    if (selected === "") {
        addButtonErrors()
        setTimeout(() => {
            removeButtonErrors()
        }, 100);
        return
    }

    box1.classList.add("d-none");
    box2.classList.remove("d-none");
    sr.innerHTML = `${selected}`;
})

function removeSelectedClasses() {
    allRates.forEach(rate => {
    rate.classList.remove("selected")
    })
}

function addButtonErrors()
{
    allRates.forEach(rate => {
        rate.classList.add("error")
    })
}

function removeButtonErrors()
{
    allRates.forEach(rate => {
        rate.classList.remove("error")
    })
}



        
    



    

    






