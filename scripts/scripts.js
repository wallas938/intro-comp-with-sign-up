const inputs = document.querySelectorAll("input");
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const screen =  window.screen
inputs.forEach(input => {
    input.addEventListener("blur", () => {
        const image = input.previousElementSibling;
        const message = input.nextElementSibling;
        if (input.id !== "email") {
            if (input.value.trim() === "") {
                input.classList.add("form-error");
                if (screen.width < 1440) {
                    image.classList.add("show-error-icon-mobile"); 
                } else {
                    image.classList.add("show-error-icon-desktop");
                }
                image.classList.remove("hide");
                message.classList.remove("hide");
            } else {
                input.classList.remove("form-error");
                if (screen.width < 1440) {
                    image.classList.remove("show-error-icon-mobile"); 
                } else {
                    image.classList.remove("show-error-icon-desktop");
                }
                image.classList.add("hide");
                message.classList.add("hide");
            }
        } else if (input.id === "email") {
            if (!regex.test(String(input.value).toLowerCase())) {
                input.classList.add("form-error");
                input.setAttribute("placeholder", "email@exemple/com");
                if (screen.width < 1440) {
                    image.classList.add("show-error-icon-mobile"); 
                } else {
                    image.classList.add("show-error-icon-desktop");
                }
                image.classList.remove("hide");
                message.classList.remove("hide");
            } else {
                input.classList.remove("form-error");
                input.removeAttribute("placeholder");
                image.classList.add("hide");
                if (screen.width < 1440) {
                    image.classList.remove("show-error-icon-mobile"); 
                } else {
                    image.classList.remove("show-error-icon-desktop");
                }
                message.classList.add("hide");
            }
        }
    })
})