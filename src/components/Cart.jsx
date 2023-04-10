import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, decrementItemQtyInCart, deleteItemFromCart} from '../redux/actions';

const Cart = () => {
	const state = useSelector((state) => state.handleCart);
	const dispatch = useDispatch();
	const deleteItem = 'DEL';
	const incrementItem = 'INC';
	const decrementItem = 'DEC';

	const handleItem = (item, actionType) => {
		switch (actionType) {
			case deleteItem:
				dispatch(deleteItemFromCart(item));
				break;
			case incrementItem:
				dispatch(addToCart(item));
				break;
			case decrementItem:
				dispatch(decrementItemQtyInCart(item));
				break;
			default:
				break;
		}
	};

	const cartItems = (product) => {
		return (
			<>
				<div className='container'>
					<div className='px-4 my-5 bg-light rounded-3' key={product.id}>
						<div className='container py-4'>
							<button className='btn btn-outline-danger float-end' aria-label='delete' onClick={() => handleItem(product, deleteItem)}>
								<i className='fa fa-trash' aria-hidden='true'></i>
							</button>
							<div className='row justify-content-center'>
								<div className='col-md-4'>
									<img src={product.image} alt={product.title} height='200px' width='180px' />
								</div>
								<div className='col-md-4'>
									<h3>{product.title}</h3>
									<p className='lead fw-bold'>
										{product.qty} x ${product.price} = $ {product.qty * product.price}
									</p>
									<button className='btn btn-outline-dark me-1' onClick={() => handleItem(product, decrementItem)}>
										<i className='fa fa-minus'></i>
									</button>
									<input type='number' name='qty' id='qty' value={product.qty} />
									<button className='btn btn-outline-dark ms-1' onClick={() => handleItem(product, incrementItem)}>
										<i className='fa fa-plus'></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			{state.length !== 0 ? (
				state.map(cartItems)
			) : (
				<div className='container py-5 my-5'>
					<div className='row'>
						<div className='col-6 m-auto'>
							<img src='/assets/empty-cart.png' className='w-100' alt='' />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
