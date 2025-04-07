function saudarTradado(): void{
    const input = document.getElementById("nome");
    if (input &&input instanceof HTMLInputElement) {
        const nome = input.value.trim();
        if (nome === "") {
            alert("Por favor, insira seu nome");
        } else {
            console.error("Elemento com id 'saudacao' não encontrado");
        }
    }
}