import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { CartContext } from './../context/context';

function CartWidget() {
    const { getTotalItems } = useContext(CartContext);
    const shoppingCart = getTotalItems();

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
            <span className="badge badge-light">
                { shoppingCart }
            </span>
        </button>    
    );
}

export default CartWidget;