export const Input = (props) => {
    const handleChange = (event) => {
        const { value } = event.target
        props.setValue((VALOR_ANTERIOR) => ({ //prev (valor anterior)
            ...VALOR_ANTERIOR,
            [props.name]: value
        }))
    }

    // "..."
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={props.id}>{props.label}</label>
            <input
                className="form-control"
                type={props.type}
                onChange={handleChange}
                defaultValue={props.value}
                //value={props.value}
                id={props.id} name={props.name} placeholder={props.placeholder} />
        </div>
    )
}

// const{
//     label,
//     id,
//     name,
//     placeholder,
//     type,
// } = props