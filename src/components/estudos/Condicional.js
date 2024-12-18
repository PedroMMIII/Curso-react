import {useState} from 'react'

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" phaceholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviarEmail}>Enviar-email</button>
            </form>
            {userEmail &&(
                <div>
                    <p>Seu email foi enviado seu email é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional