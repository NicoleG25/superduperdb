const Query = ({ inputText, setInputText }) => {

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <input
        type="text"
        placeholder="Ask a question"
        value={inputText}
        onChange={handleInputChange}
        />
    )
};

export default Query;