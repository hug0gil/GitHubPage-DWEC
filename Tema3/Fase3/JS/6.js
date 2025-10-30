/*
6. Escriba una función de JavaScript para ocultar direcciones de correo
electrónico y protegerlas de usuarios no autorizados.
console.log (protege_email (" rob_hood@example.com "));
"rob ... @ example.com"
*/

function protege_email(email) {
  partesEmail = email.split("@")
  email = partesEmail[0].substring(0,3)+" ... @"+partesEmail[1]
  return email
}

console.log(protege_email("rob_hood@example.com"))
console.log(protege_email("huguitoooooo@example.com"))

