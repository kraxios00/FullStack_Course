const Input = ({ newValue, setNewValue, text }) => {
    return (
        <div>
            <span>{text}</span>
            <input 
                value={newValue} 
                onChange={(event) => setNewValue(event.target.value)}
            />
        </div>
    )
}

export default Input