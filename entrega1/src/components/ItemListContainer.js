const ItemListContainer = ({ greeting }) => {
    // styles
    const wrapper = {
        border: "1px solid black", 
        padding: "20px", 
        margin: "30px auto",
        maxWidth: "1200px",
    }

    const message = {
        fontSize: '42px',
        marginTop: '15px',
        marginBottom: '15px'
    }

    return (
        <div style={wrapper}>
            <h3 style={message}>{greeting}</h3>
        </div>
    );
};

export default ItemListContainer;