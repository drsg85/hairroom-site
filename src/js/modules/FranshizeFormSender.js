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

            if(this.validation(e.target)) {
                console.log("VALID FORM")
                this.sendForm(e.target);
                // this.sendGA(e);
                this.setupPopup();
            } else {
                console.log('form is not valid');   
            }
        })
    }

    // sendGA(event) {
        // ga('send','event','submit_franchise_form', 'submit_franchise_form')
    // }

    validation(form) {
        let inputs = form.querySelectorAll(".form__group-input");
        let isFormValid = true;
        let errorLabel = document.createElement("div");

        for (let input of inputs) {
            let isValid = true;
            if (input.value == "") {
                isValid = false;
                isFormValid = false;
                console.log('input empty');
            }

        if(!isFormValid) {
          errorLabel.classList.add("form__group-input__error");
          input.style.background = "white";
          input.parentElement.appendChild(errorLabel);
        }
    }

        return isFormValid;
    }

    sendForm(data) {
        const form = data.querySelectorAll('.form__group-input');
        

        const sendData = {
            subject: 'Заявка на франшизу',
            content: `<table>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:200px auto; padding:0; padding: 20px; font-family: Arial, sans-serif;">
            <tr>
            <td height="100%">
            <table border="0" cellpadding="0" cellspacing="0" style="margin: auto; padding:0; width: 600px;">
            <tr>
            <td id="table-container" style="border-radius: 10px; background-color: #e673bf; width:600px; text-align: left; margin: 0 auto; padding: 50px 60px; box-shadow: 10px 20px 50px -1px rgba(203, 165, 187, 0.59);">
            <div style="position: relative;">
            <header style="text-align: left; margin: 15px 0; display: inline-block;">
            <h1 style="text-align: center; font-weight: 400; display: inline-block; margin: 0; font-size: 28px; letter-spacing: 1.5px; color:#fff;">Hairroom Франшиза</h1>
            <h1 style="color: #fff; font-size: 60px; text-transform: uppercase; margin: 0;text-shadow: 0 0, -6px 7px 0 #8a185a;">Заявка</h1>
            </header>
            <img class="logo" src="http://hairrooms.ru/wp-content/themes/HairRoom/img/hr_logo_white.jpg" alt="изображение" style="padding-bottom: 0; text-align: right; float: right; max-width: 100px; margin-top: 0px;background-color: white; padding: 10px; border-radius: 15px;" width="100" height="100" />
            </div>
            <table border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0; padding-bottom: 100px; width: 100%; border-collapse: collapse; text-align: left;">
            
            `
        };
        
        for(let input of form) {
            let row = `<tr style="color:#fff;"><td style="border-bottom: 1px solid #fff; padding: 20px 25px; padding-left: 0;">${input.name}</td><td style="border-bottom: 1px solid #fff; padding: 20px 25px; padding-left: 0; font-weight: bold;">${input.value}</td></tr>`
            sendData.content += row;
        }
        sendData.content += "</table></td></tr></table></td></tr></table>"
        sendData.email = data.querySelector("input[type='email']").value;

        const xhr = new XMLHttpRequest();
        const jsonData = JSON.stringify(sendData);
        xhr.open('POST', `${window.location.origin}/order/`, true);
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