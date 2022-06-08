//Função criada para modificar o ícone utilizado no botão de mostrar e esconder a senha do usuário

function togglePasswordLabel () {
    const passwordLabel = document.getElementById('password')
    const eyeButton = document.getElementById('eye-button')

    if(passwordLabel.type === "password"){
        passwordLabel.type = "text"
        eyeButton.className = eyeButton.className.replace("bi bi-eye-slash", "bi bi-eye")
    } else {
        passwordLabel.type = "password"
        eyeButton.className = eyeButton.className.replace("bi bi-eye", "bi bi-eye-slash")
    }
}
