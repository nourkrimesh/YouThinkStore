import React from 'react';

const Contact = () => {
	return (
		<>
			<div className='container mb-5'>
				<div className='row'>
					<div className='col-12 text-center py-4 my-4'>
						<h1>Have Some Questions?</h1>
						<hr />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 m-auto'>
						<img src='assets/contact.png' className='w-100' alt='Contact us' />
					</div>
					<div className='col-md-6'>
						<form>
							<div className='mb-3'>
								<label for='contactInputFullName' className='form-label'>
									Full Name
								</label>
								<input type='text' className='form-control' id='contactInputFullName' placeholder='Nour Krimesh' />
							</div>
							<div className='mb-3'>
								<label for='controlInputEmail' className='form-label'>
									Email address
								</label>
								<input type='email' className='form-control' id='controlInputEmail' placeholder='name@example.com' />
							</div>
							<div className='mb-3'>
								<label for='contactTextareaMessage' className='form-label'>
									Message
								</label>
								<textarea className='form-control' id='contactTextareaMessage' rows='5'></textarea>
							</div>
							<button type='submit' className='btn btn-dark'>
								<i className='fa fa-send me-1'></i> Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
