const form = document.getElementById('form-contato')
const tabelaContatos = document.querySelector('#tabelaContatos tbody');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome-contato').value;
    const telefone = document.getElementById('telefone-contato').value;

    if (!/^\d{11}$/.test(telefone)) {
        alert("O telefone deve conter exatamente 11 dígitos.");
        return;
    }

    const novaLinha = document.createElement('tr');

    const celulaNome = document.createElement('td');
        celulaNome.textContent = nome;
        novaLinha.appendChild(celulaNome);

    const celulaTelefone = document.createElement('td');
        celulaTelefone.textContent = telefone;
        novaLinha.appendChild(celulaTelefone);

    tabelaContatos.appendChild(novaLinha);

    form.reset();
})

