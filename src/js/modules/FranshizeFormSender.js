class FranshizeFormSender {
    constructor() {
        this.popup = document.querySelector(".order-popup");
        this.inputs = document.querySelectorAll(".form__group-input");
        this.popupContent = document.querySelector(".order-popup__content");
        this.events();
    }

    events() {
        document.addEventListener("submit", (e) => {
            e.preventDefault();
            this.sendForm(e.target);
            this.setupPopup();
            // if(this.validation(e.target)) {
            //     this.sendForm(e.target);
            //     this.setupPopup();
            // } else {
            //     console.log('form is not valid');
            // }
        })
    }

    // validation(form) {
    //     let inputs = form.querySelectorAll(".form__group-input");
    //     let isFormValid = true;

    //     for (let input of inputs) {
    //         let isValid = true;
    //         if (input.value === "") {
    //             isValid = false;
    //             isFormValid = false;
    //             console.log('input empty');
    //         }

    //     if(!isFormValid) {
    //       let errorLabel = document.createElement("div");
    //       errorLabel.classList.add("form__group-input__error");
    //       input.style.background = "white";
    //       input.parentElement.appendChild(errorLabel);
    //     }
    // }

    //     return isFormValid;
    // }

    sendForm(data) {
        const form = data.querySelectorAll('.form__group-input');
        

        const sendData = {
            subject: 'Заявка на франшизу',
            content: `<table>`
        };
        
        for(let input of form) {
            let row = `<tr><td>${input.name}</td><td>${input.value}</td></tr>`
            sendData.content += row;
        }

        const xhr = new XMLHttpRequest();
        const jsonData = JSON.stringify(sendData);
        xhr.open('POST', 'https://hairrooms.com/order.php', true);
        xhr.send(jsonData);
    }

    setupPopup() {
        this.popup.classList.add("order-popup--shown");
        this.popupContent.classList.add("order-popup__content--shown");
        this.popup.addEventListener("click", event => {
            event.preventDefault();
            this.popup.classList.remove("order-popup--shown");
        });
    }
}
export default FranshizeFormSender;