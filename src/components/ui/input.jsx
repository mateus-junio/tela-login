export const Input = (props) => {
// const{
//     label,
//     id,
//     name,
//     placeholder,
//     type,
// } = props

    return (
        <div className="form-group">
            <label
                className="form-label"
                htmlFor={props.id}
            >{props.label}</label>

            <input
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    )
}