import dayjs from "dayjs";
export function OrderDate({cartItem,deliveryOption})
{
    const selectedDeliveryOption=deliveryOption
        .find((option)=>{
            return option.id===cartItem.deliveryOptionId;
    });    
    return (
    <div className="delivery-date">
    Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
    </div>        
    );
}