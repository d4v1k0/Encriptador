const textarea =  document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".btn-copiar");

copiar.style.display = "none";
console.log(textarea.value)

function btnEncriptar(){
  const textoEncriptado = encriptar(textarea.value)
  mensaje.value = textoEncriptado
  mensaje.style.backgroundImage = 'none'
  textarea.value = ''
  copiar.style.display = 'block'
  console.log(mensaje.value)
  
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(texto){
  let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
  texto = texto.toLowerCase();
  
  for(let i = 0; i < matrizCodigo.length; i++){
    if(texto.includes(matrizCodigo[i][0])){
      texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return texto
}

function btnDesencriptar(){
  const textoEncriptado = desencriptar(textarea.value)
  mensaje.value = textoEncriptado
  textarea.value = ''
}

function desencriptar(textoDesencriptado){
  let matrizCodigo = [["e","enter"], ["í","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
  textoDesencriptado = textoDesencriptado.toLowerCase()

  for( let i = 0; i<matrizCodigo.length; i++){
    if(textoDesencriptado.includes(matrizCodigo[i][1])){
      textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

    }
  }
  return textoDesencriptado
}

function btnCopiar(){
  mensaje.select()
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = ""
  alert("Texto copiado.")
}