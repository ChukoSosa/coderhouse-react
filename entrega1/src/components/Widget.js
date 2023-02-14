import './Widget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Widget = (props) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h3>
            <FontAwesomeIcon icon={props.icon} />
            <span>{props.categoria}</span>
        </h3>
      </div>
      <div className="widget-body">
        <img src={props.image} alt={props.title} />
        <h5>{props.title}</h5>
        <p>
          {props.description}..
        </p>
        <h5><strong>Precio: </strong> $ {props.precio}</h5>
      </div>
      <div className="widget-footer">
        <button 
            type="button" 
            className="btn btn-primary" 
        >
            <FontAwesomeIcon icon="shopping-cart" />
            <span className="badge badge-light">COMPRAR</span>
        </button> 
      </div>
    </div>
  );
};

export default Widget;
