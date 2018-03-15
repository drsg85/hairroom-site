import $ from 'jquery';
import Validator from 'jquery-validation';

class FranshizeFormSender {
    constructor() {
        this.franshizeSubmit = $("#franshize-submit");
        this.franshizeForm = $("#franshize-form");
        this.okButton = $("#order-popup .order-popup__button");

        this.setupPopup();
        this.setupValidator();
    }
    setupPopup() {
        let self = this;
        this.okButton.on("click", function(e) {
            self.hidePopup();
            e.preventDefault();
        });
    }

    showPopup() {
        // let $orderPopupContent = ;
        $("#order-popup").addClass("order-popup--shown");
        $("#order-popup .order-popup__content").addClass("order-popup__content--shown");
        $("#order-popup .order-popup__title").text("Отправка заявки");
        $("#order-popup .order-popup__text").html("");
    }

    hidePopup() {
        let $orderPopup = $("#order-popup");
        let $orderPopupContent = $("#order-popup .order-popup__content");
        $orderPopup.removeClass("order-popup--shown");
        $orderPopupContent.removeClass("order-popup__content--shown");
    }

    setupValidator() {
        let self = this;

        this.franshizeForm.validate({
            errorPlacement: function(error, element) {
                error.appendTo(element.parent(".form__group"));
            },
            rules: {
                fullname: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                city: "required"
            },
            messages: {
                fullname: "Пожайлуйста введите свое имя",
                phone: "Пожалуйста введите номер телефона",
                email: "Пожалуйста введите адрес электронной почты",
                city: "Пожалуйста введите название города",
            },
            submitHandler: function(form, event) {
                self.parseForm();
                event.preventDefault();
            }
        });
    }
    parseForm() {
        let self = this;
        
        this.showPopup();

        let FranshizePartner = {
            name: this.franshizeForm.find("input[name=\"fullname\"]").val(),
            phone: this.franshizeForm.find("input[name=\"phone\"]").val(),
            email: this.franshizeForm.find("input[name=\"email\"]").val(),
            city: this.franshizeForm.find("input[name\"city\"]").val()
        };
        alert(FranshizePartner.name);
        
        let phoneClean = FranshizePartner.phone.replace(/[^0-9 +]+/g, "");

        let $fullOrder = $(`
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0; padding:0; background-color: #e0ddd9; padding: 20px; font-family: Arial, sans-serif;">
      <tr>
        <td height="100%">
          <table border="0" cellpadding="0" cellspacing="0" style="margin:0 auto; padding:0;">
            <tr>
              <td id="table-container" style="background-color: #f1f1f1; max-width:600px; margin: 0 auto; padding: 20px; border-radius: 5px;">
                <h1>Заявка на сотрудничество</h1>
                <table border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0; width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Фамилия Имя Отчество</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${FranshizePartner.name}</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Номер телефона</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;"><a href="tel:${phoneClean}">${FranshizePartner.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Электронная почта</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;"><a href="mailto:${FranshizePartner.email}">${FranshizePartner.email}</a></td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Город</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${FranshizePartner.city}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
        `);

        let dataToSend = {
            "subject": "Заявка по франшизе",
            "content": $fullOrder.html()
        };
        console.log(FranshizePartner.name);
        $.ajax({
            type: "POST",
            url: "http://localhost/HairRoom/mail.php",
            data: dataToSend,
            success: onSuccess,
            error: onError,
            complete: onComplete
        });

        function onSuccess() {
            $("#order-popup .order-popup__title").text();
            $("#order-popup .order-popup__text").html("Ваша заявка успешно принята<br>Мы с вами свяжемся позже");
            $("#order-popup .order-popup__button").show();
            self.franshizeForm[0].reset();
        }

        function onError() {
            $("#order-popup .order-popup__title").text("Ошибка отправки.");
            $("#order-popup .order-popup__text").text("Проверьте соединение или попробуйте позже.");
            $("#order-popup .order-popup__button").show();
        }

        function onComplete() {}
    }

}
export default FranshizeFormSender;