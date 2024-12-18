function OutraLista({itens}) {
    return(
        <>
           <h3>Minha lista de jogos</h3> 
           {
            itens.length > 0 ?(
                itens.map((item, index) => (

                    <p key={index}>{item}</p>
                ))
            ) 
            : (
                <p>Lista não encontrada</p>
            )

           }
        </>
    )
}

export default OutraLista