function saudarTradado() {
    var input = document.getElementById("nome");
    if (input &&input instanceof HTMLInputElement) {
        const nome = input.value.trim();
        if (nome === "") {
            alert("Por favor, insira seu nome");
        } else {
            alert(`Olá , ${nome}!`);
        }
    }
    else {
        alert("Elemento não encontrado o id 'nome.'")
    }
}