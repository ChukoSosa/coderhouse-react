import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function CartWidget() {
     // styles
     const button_badge = {
        marginLeft: 'auto'
    }

    return (
        <button 
            type="button" 
            className="btn btn-primary" 
            style={button_badge}
        >
            <FontAwesomeIcon icon="shopping-cart" />
            <span className="badge badge-light">4</span>
        </button>    
    );
}

export default CartWidget;