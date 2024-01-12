let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let about = document.querySelector('#aboutArea')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let aboutOk = false

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
        nomeOk = false
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'lightblue'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
        emailOkOk = false
    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'lightblue'
        emailOk = true
    }
}

function validaAbout() {
    let txtAbout = document.querySelector('#txtAbout')

    if (about.value.length >= 100) {
        txtAbout.innerHTML = 'Assunto deve conter até 100 caracteres.'
        aboutOk = false
    } else {
        txtAbout.innerHTML = ''
        aboutOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && aboutOk == true)
        alert('Formulário enviado com sucesso!')
    else
        alert('Preencha formulário corretamente')
}

function mapaZoomIn() {
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}

function mapaZoomOut() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}