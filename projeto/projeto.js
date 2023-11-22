function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    Convidados=['Mathues', 'Ana', 'Pedro']
    if(Convidados.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 
        'Você pode Entrar'
    }else {
        document.getElementById('PermissaoDeEntrada').innerText = 
        'Você não pode Entrar!'
    }
}