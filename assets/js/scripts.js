function envioFormulario() {
    let nombre = document.getElementById("nombre1").value;
    let correo = document.getElementById("correo1").value;
    let telefono =  document.getElementById("num1").value;
    let mensaje =  document.getElementById("Textarea1").value;
    
    if (nombre.trim() === "" || correo.trim() === ""|| telefono.trim() === ""|| mensaje.trim() === "") {
      alert("Hay un error en tu mensaje. Asegúrate de completar todos los campos.");
    } else {
      console.log("Enviar");
      alert(`Gracias ${nombre} te enviaré pronto una respuesta a ${correo}`);
     
    }
  }