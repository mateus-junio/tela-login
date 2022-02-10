export const Input = (props) => {
    const handleChange = (event) => {
        const { value } = event.target
        props.setValue(value)
    }
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={props.id}>{props.label}</label>
            <input type={props.type}
                onChange={handleChange}
                id={props.id} name={props.name} placeholder={props.placeholder}/>
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