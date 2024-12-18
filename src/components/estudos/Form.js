import {useState} from 'react'

function Form() {
    function cadastroUsuario(e) {
        e.preventDefault()
        console.log(`O usuario foi cadastrado com ${name} e com a senha ${password}`);
        console.log('Usuario cadastrado');
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h2>Meu cadastro</h2>

            <form onSubmit={cadastroUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type='text' id="name" name="name" phaceholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type='password' id="password" name="password" phaceholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <input type='submit' value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form