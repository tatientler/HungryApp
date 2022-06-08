const loginButton = document.getElementById('login-submit')

loginButton.addEventListener('click', async () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const loginData = {
        "email": email,
        "password": password
    }

    const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
    }

    await fetch(`http://localhost:3000/users/login`, options)
        .then(response => {
            response.json()
            if (response.status == 200) {
                console.log("LOGADO")
                window.location.href = "./main.html"
            } else {
                alert('Não autorizado')
                console.log('Não autorizado')
            }
        })
        .catch(erro => {
            console.log("ERRO " + erro)
        })
})