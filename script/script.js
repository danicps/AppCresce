
const formContato = document.getElementById("formContato");


formContato.addEventListener("submit", function (event) {

    event.preventDefault();

   
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;

    alert(
        `Obrigado, ${nome}! Recebemos sua solicitação para o serviço: "${servico}". Entraremos em contato pelo telefone ${telefone} em breve.`
    );

    formContato.reset();
});
