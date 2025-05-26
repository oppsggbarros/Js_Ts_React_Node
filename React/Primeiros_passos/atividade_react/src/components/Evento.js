function Evento() {
    function meuEvento() {
        alert("Evento ativado!");
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}