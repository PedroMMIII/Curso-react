import Button from "../evento/Button";

function Evento() {
    function meuEvento() {
        console.log(`Ativando meu primeiro evento!`);
    }

    function segundoEvento() {
        let btnDois = document.getElementById('btn-evento');
        console.log('Ativando segundo evento'); 
        btnDois.style.background = 'red'
        btnDois.style.color = 'white'
    }

    return (
        <>
            <p>Clique aqui para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </>
    )
}

export default Evento