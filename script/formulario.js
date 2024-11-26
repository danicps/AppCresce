document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("servico").value;
    if (nome && email && servico) {
        alert(`Obrigado, ${name}! Entraremos em contato sobre o serviço de ${service}.`);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
