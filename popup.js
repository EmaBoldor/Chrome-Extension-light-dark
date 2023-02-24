if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle");

    let buttonOn = false;

    button.addEventListener("click", () => {
        if (!buttonOn) {
            buttonOn = true;
            circle.style.animation = "moveCircleRight is forwards";
            button.style.animation = "transformToYellow is forwards";
            chrome.tabs.executeScript({
                file: "appOn.js"
            })
        } else {
            buttonOn = false;
            circle.style.animation = "moveCircleLeft is forwards";
            button.style.animation = "transformToBlue is forwards";
            chrome.tabs.executeScript({
                file: "appOff.js"
            })
        }
    })
}