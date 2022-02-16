const ButtonInner = (props) => {
    const { children, className, handleClick } = props
  
    return (
      <button
        className={`btn btn-primary mt-3 ${className}`}
        onClick={handleClick}
      >{children}</button>
    )
  }
  
  export const Botao = (props) => {
    if (props.noGroup) {
      return <ButtonInner {...props} />
    }
  
    return (
      <div className="form-group">
        <ButtonInner {...props} />
      </div>
    )
  }