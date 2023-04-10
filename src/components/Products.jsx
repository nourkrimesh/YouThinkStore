import React, {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);
	const [selectedCategory, setCategory] = useState('all');
	const notify = (msg) => toast.success(msg);

	const dispatch = useDispatch();
	const addProduct = (event, product) => {
		event.preventDefault();
		event.stopPropagation();
		dispatch(addToCart(product));
		notify('Product added to cart successfully!');
	};

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await fetch('https://fakestoreapi.com/products');
			setData(await response.clone().json());
			setFilter(await response.json());
			setLoading(false);
		};

		getProducts();
	}, []);

	const Loading = () => {
		return (
			<>
				<div className='col-md-3'>
					<Skeleton height={350} />
				</div>
				<div className='col-md-3'>
					<Skeleton height={350} />
				</div>
				<div className='col-md-3'>
					<Skeleton height={350} />
				</div>
				<div className='col-md-3'>
					<Skeleton height={350} />
				</div>
			</>
		);
	};

	const filterProduct = (categoryName) => {
		const updatedList = data.filter((products) => products.category === categoryName);
		setFilter(updatedList);
		setCategory(categoryName);
	};

	const ShowProducts = () => {
		return (
			<>
				<div className='buttons d-flex justify-content-center mb-5 pb-5'>
					<button
						className={selectedCategory === 'all' ? 'btn btn-outline-dark me-2 active' : 'btn btn-outline-dark me-2'}
						onClick={() => {
							setFilter(data);
							setCategory('all');
						}}>
						All
					</button>
					<button className={selectedCategory === "men's clothing" ? 'btn btn-outline-dark me-2 active' : 'btn btn-outline-dark me-2'} onClick={() => filterProduct("men's clothing")}>
						Men's Clothing
					</button>
					<button className={selectedCategory === "women's clothing" ? 'btn btn-outline-dark me-2 active' : 'btn btn-outline-dark me-2'} onClick={() => filterProduct("women's clothing")}>
						Women's Clothing
					</button>
					<button className={selectedCategory === 'jewelery' ? 'btn btn-outline-dark me-2 active' : 'btn btn-outline-dark me-2'} onClick={() => filterProduct('jewelery')}>
						Jewelery
					</button>
					<button className={selectedCategory === 'electronics' ? 'btn btn-outline-dark me-2 active' : 'btn btn-outline-dark me-2'} onClick={() => filterProduct('electronics')}>
						Electronics
					</button>
				</div>
				{filter.map((product) => {
					return (
						<div className='col-md-3 mb-4' key={product.id}>
							<NavLink to={`/products/${product.id}`} className='card h-100 text-center p-5 g-selectable g-expandable' style={{textDecoration: 'none', color: '#000'}}>
								<img src={product.image} className='card-img-top' alt={product.title} height='250px' />
								<div className='card-body'>
									<h5 className='card-title mb-0'>{product.title.substring(0, 12)}...</h5>
									<p className='card-text lead fw-bold'>${product.price}</p>
									<button className='btn btn-outline-dark' onClick={(event) => addProduct(event, product)}>
										Add To Cart
									</button>
								</div>
							</NavLink>
						</div>
					);
				})}
				<ToastContainer position='top-center' autoClose={2000} hideProgressBar={true} theme='colored' />
			</>
		);
	};

	return (
		<>
			<div className='container my-5 py-5'>
				<div className='row'>
					<div className='col-12 mb-5'>
						<h1 className='display-6 fw-bolder text-center'>{document.location.pathname.includes('/products') ? 'Products' : 'Latest Products'}</h1>
						<hr />
					</div>
				</div>
				<div className='row justify-content-center'>{loading ? <Loading /> : <ShowProducts />}</div>
			</div>
		</>
	);
};

export default Products;
