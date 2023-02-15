import './ProductItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

const ProductItem = (props) => {
  return (
    <div className="widget">
      <div className="widget_header">
        <h3>
            <FontAwesomeIcon icon={props.icon} />
            <span>{props.categoria}</span>
        </h3>
      </div>
      <div className='widget_image'>
          <img src={props.image} alt={props.title} / >
      </div>
      <div className="widget_body">
        <h5>{props.title}</h5>
        <p>
          {props.description}..
        </p>
        <h5><strong>Precio: </strong> $ {props.precio}</h5>
      </div>
      <div className="widget_footer">
        <Link className="btn btn-primary" to={`/item/${props.id}`}>
          <FontAwesomeIcon icon="shopping-cart" />
          <span className="badge badge-light">COMPRAR</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
