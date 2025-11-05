export default function Button({text, onClick, isActive}){
    return(
        <button 
        onClick={onClick} 
        type="button" 
        className={isActive ? "mx-2 btn btn-warning" : "mx-2 btn btn-primary"}>
            {text}
            </button>
    )
}