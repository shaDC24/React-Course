import { OrderDate } from "./OrderDate.jsx";
import { CartItemDetails } from "./CartItemDetails.jsx";

export function OrderSummary({cart,deliveryOptions,loadCart}) {
    return (
            <div className="order-summary">
                { deliveryOptions.length > 0 && cart.map((cartItem)=>{
                    return (
                        <div key={cartItem.productId} 
                        className="cart-item-container"
                        data-testid="cart-item-container"
                        >
                            <OrderDate cartItem={cartItem} deliveryOptions={deliveryOptions} />
                            <CartItemDetails 
                                cartItem={cartItem} 
                                deliveryOptions={deliveryOptions} 
                                loadCart={loadCart} />
                        </div>
                    );
                })}
            </div>        
    );
}