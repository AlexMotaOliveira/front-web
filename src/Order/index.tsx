import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';

function Order(){
    return(
      <div className="orders-container">
        <StepsHeader />
        <ProductsList />
      </div>
    )
}

export default Order;