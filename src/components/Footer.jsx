import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<div className='border-top w-100 bg-light'>
				<div className='container '>
					<footer className='py-5'>
						<ul className='nav justify-content-center pb-0'>
							<li className='nav-item'>
								<NavLink className='nav-link  px-2 text-body-secondary  fs-5 text-dark' aria-current='page' to='/'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link  px-2 text-body-secondary fs-5 text-dark' aria-current='page' to='/products'>
									Products
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link  px-2 text-body-secondary  fs-5 text-dark' aria-current='page' to='/about'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link  px-2 text-body-secondary  fs-5 text-dark' aria-current='page' to='/contact'>
									Contact
								</NavLink>
							</li>
						</ul>

						<div className='d-flex flex-column flex-sm-row justify-content-between py-4 border-top'>
							<p className='text-dark fs-5'>© 2023 YouThink Store, Inc. All rights reserved.</p>
							<ul className='list-unstyled d-flex'>
								<li className='ms-3'>
									<a className='link-body-emphasis text-dark fw-bold fs-3' href='https://twitter.com'>
										<i className='fa fa-twitter' aria-hidden='true'></i>
									</a>
								</li>
								<li className='ms-3'>
									<a className='link-body-emphasis text-dark fw-bold fs-3' href='https://instagram.com'>
										<i className='fa fa-instagram' aria-hidden='true'></i>
									</a>
								</li>
								<li className='ms-3'>
									<a className='link-body-emphasis text-dark fw-bold fs-3' href='https://facebook.com'>
										<i className='fa fa-facebook-official' aria-hidden='true'></i>
									</a>
								</li>
							</ul>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
};

export default Footer;
