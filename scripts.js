// 1. Declared this variables
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

// 2. Add this Event Listener
btnEl.addEventListener("click", () => {
    createPassword();
})


// 4. Add this Event Listener
copyIconEl.addEventListener("click", () => {
    copyPassword();

    if (inputEl.value) {
        alertContainerEl.classList.add("active");
        setTimeout(() => {
            alertContainerEl.classList.remove("active");
        }, 2000);
    }

})


// 3. Create This Function 
function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;

    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.at(randomNum)

        console.log(randomNum, password);
    }
    inputEl.value = password
}


// 5. Create This Function for select Copy password
function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999); //for mobile select
    navigator.clipboard.writeText(inputEl.value); //for copy
}