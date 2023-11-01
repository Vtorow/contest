function cleanPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g, "");
    return phoneNumber;
}
function cleanCreditCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/[^\d\s]/g, "");
    cardNumber = cardNumber.replace(/\s/g, "");
    return cardNumber;
}

const phoneNumber = "+7 (123) 456-78-90";
const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);
console.log(cleanedPhoneNumber);

const creditCardNumber = "1234 5678 9012 3456";
const cleanedCreditCardNumber = cleanCreditCardNumber(creditCardNumber);
console.log(cleanedCreditCardNumber)