import './styles.css';
import {ReactComponent as Logo} from './logo.svg';
import StepsHeader from './StepsHeader';

function Order(){
    return(
      <div className="orders-container">
        <StepsHeader />
      </div>
    )
}

export default Order;