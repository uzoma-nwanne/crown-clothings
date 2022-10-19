import { usePaystackPayment } from 'react-paystack';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const PaymentForm = ({config, onClose, onSuccess})=>{
    const initializePayment = usePaystackPayment(config);
    const handlePayment = () =>{
        initializePayment(onSuccess, onClose);
    }
    return (
        <div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handlePayment}>Pay Now</Button>
        </div>
    )
}

export default PaymentForm;