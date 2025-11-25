import { OrderDate } from "./OrderDate.jsx";
import { CartItemDetails } from "./CartItemDetails.jsx";

export function OrderSummary({cart,deliveryOption}) {
    return (
            <div className="order-summary">
                { deliveryOption.length > 0 && cart.map((cartItem)=>{
                    return (
                        <div key={cartItem.productId} className="cart-item-container">
                            <OrderDate cartItem={cartItem} deliveryOption={deliveryOption} />
                            <CartItemDetails 
                                cartItem={cartItem} 
                                deliveryOption={deliveryOption} />
                        </div>
                    );
                })}
            </div>        
    );
}