function Pessoa({nome, idade, profissao, img}) {

    return (
        <div>
            <h2>Nome: {nome}</h2>
            <p>Idade : {idade}</p>
            <p>Profissão: {profissao}</p>
            <img src={img} alt="Imagem " />
        </div>
    )
}

export default Pessoa