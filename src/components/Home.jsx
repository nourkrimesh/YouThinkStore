import Products from './Products';

const Home = () => {
	return (
		<div className='hero'>
			<div id='carouselExampleFade' className='carousel slide carousel-fade' data-bs-ride='carousel' data-bs-interval={1500}>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img src='./assets/slider1.jpg' className='d-block w-100' alt='slider1' />
					</div>
					<div className='carousel-item'>
						<img src='./assets/slider2.jpg' className='d-block w-100' alt='slider2' />
					</div>
					<div className='carousel-item'>
						<img src='./assets/slider3.jpg' className='d-block w-100' alt='slider3' />
					</div>
				</div>
				<button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='prev'>
					<span className='carousel-control-prev-icon' aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button className='carousel-control-next' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='next'>
					<span className='carousel-control-next-icon' aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
			<Products />
		</div>
	);
};

export default Home;
