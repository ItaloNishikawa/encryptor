/*
  Button event that will call the encrypt function with
  input value. Then the chargeHalf function call with the
  encrypted message that will be placed in the result id


  Evento do botão que fará o chamamento da função encrypt com 
  valor da entrada. Em seguida o chamado da função chargeHalf
  com a mensagem criptografada que será colocada no id resultado
*/
submit.addEventListener("click", function () {
    let encryptedMessage = encrypt(input.value);
    let finalMessage = chargeHalf(encryptedMessage);
    result.textContent = finalMessage;
});

function encrypt(message) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let codigoASCII = message.charCodeAt(i);
        if ((64 < codigoASCII && codigoASCII < 91) || (96 < codigoASCII && codigoASCII < 123)) {
            encryptedMessage += String.fromCharCode(codigoASCII + 3);
        }
        else if ((0 <= codigoASCII && codigoASCII < 65) || (90 < codigoASCII && codigoASCII < 97) || (122 < codigoASCII && codigoASCII >= 127)) {
            encryptedMessage += String.fromCharCode(codigoASCII);
        }
    }

    return  encryptedMessage.split('').reverse().join('');
}

function chargeHalf(encryptedMessage) {
    let half = Math.floor(encryptedMessage.length / 2);
    let firstHalf = encryptedMessage.substring(0, half);
    let secondHalf = encryptedMessage.substring(half);

    let newSecondHalf = "";
    for (let i = 0; i < secondHalf.length; i++) {
        let codigoASCII = secondHalf.charCodeAt(i);
        newSecondHalf += String.fromCharCode(codigoASCII - 1);
    }
    return firstHalf + newSecondHalf;
}







