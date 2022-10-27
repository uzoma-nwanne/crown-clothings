import { usePaystackPayment } from 'react-paystack';
import { PaystackProps } from 'react-paystack/dist/types';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
 type PaymentFormProps = {
    config:PaystackProps,
    onClose?:() => void,
    onSuccess: () => void,
 }
const PaymentForm = ({config, onClose, onSuccess}: PaymentFormProps )=>{
    const initializePayment = usePaystackPayment(config);
    const handlePayment = () =>{
        initializePayment(onSuccess, onClose);
    }
    return (
        <div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handlePayment} >Pay Now</Button>
        </div>
    )
}

export default PaymentForm;