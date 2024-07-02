// Just testing an infinite loop

const crashButton = document.querySelector(".button");
crashButton.addEventListener("click", () => {
    let number = 0;
    while(true) {
        console.log(number);
        number++;
    }
});