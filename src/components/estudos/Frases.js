import styles from './Frases.module.css'

function Frases() {
    return (
        <div className={styles.fraseContainer}>
        <p className={styles.fraseContent}>Essa é uma frase criada em React</p>
        </div>
    )
};

export default Frases;