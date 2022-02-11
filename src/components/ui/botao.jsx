export const Botao = ({children, handleClick}) => {
    //props.children     
    return (
        <div className="form-group">
            <button 
            className="btn btn-primary mt-3" // .btn-custom criar classe no css
            onClick={handleClick}
            >{children}
            </button>
        </div>
    )
}