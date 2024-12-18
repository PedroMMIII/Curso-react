function Button(props) {
    return <button onClick={props.event} id="btn-evento">{props.text}</button>
}

export default Button