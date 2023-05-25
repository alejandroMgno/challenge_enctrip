const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value=''
}
function btndesEncriptar(){
  const textodesEncriptado = desencriptar(textArea.value)
  mensaje.value = textodesEncriptado
  textArea.value=''
}

function copiarTexto() {
  mensaje.select();
  document.execCommand("copy");
  mensaje.value=''
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i =0;i<matrizCodigo.length;i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada =stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
  }
  return stringEncriptada
}
 

function desencriptar(stringdesEncriptada) {
  let matrizCodigo2 = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  stringdesEncriptada = stringdesEncriptada.toLowerCase();

  for(let i =0;i<matrizCodigo2.length;i++){
    if(stringdesEncriptada.includes(matrizCodigo2[i][0])){
      stringdesEncriptada =stringdesEncriptada.replaceAll(matrizCodigo2[i][0],matrizCodigo2[i][1])
    }
  }
  return stringdesEncriptada
}