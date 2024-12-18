function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, tudo bém com você?`
    }

    return <> {nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao