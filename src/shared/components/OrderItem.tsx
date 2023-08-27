import './OrderItem.scss';

interface OrderItemProps {
	orderItemImage: string;
	orderItemName: string;
	orderItemAmount: number;
	orderItemPrice: number;
	orderItemSide: string;
	orderItemChanges: string;
	children?: React.ReactNode;
}

function OrderItem(props: OrderItemProps) {
	return (
		<div className='order-item-container'>
			<img className='order-item-image' src={props.orderItemImage} alt='order item' />
			<div className='card-text-content'>
				<div className='order-item-name-amount-container'>
					<p className='order-item-amount'>{props.orderItemAmount}x</p>
					<p className='order-item-name'>{props.orderItemName} </p>
				</div>
				<p className='order-item-side-and-changes'>
					{props.orderItemSide} | {props.orderItemChanges}
				</p>
				<p className='order-item-price'>{props.orderItemPrice}</p>
				{props.children}
			</div>
		</div>
	);
}

export default OrderItem;
