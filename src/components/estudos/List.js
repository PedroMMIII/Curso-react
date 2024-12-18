import Item from "./Item"

function List() {
    return (
        <>
            <h3>Testando Lista</h3>

            <ul>
                <Item marca="Ferrari" ano_lancamento={2010} />
                <Item marca="Uno" ano_lancamento={1995} />
                <Item marca="Renault" ano_lancamento={2000} />
            </ul>
        </>
    )
}

export default List