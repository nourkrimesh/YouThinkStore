import React from 'react';

const Register = () => {
	return (
		<>
			{/* <!-- Button trigger modal --> */}
			<button type='button' className='btn btn-outline-dark ms-2' data-bs-toggle='modal' data-bs-target='#registerModal'>
				<i className='fa fa-user-plus me-1'></i> Register
			</button>

			{/* <!-- Modal --> */}
			<div className='modal fade' id='registerModal' tabIndex='-1' aria-labelledby='registerModalLabel' aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='registerModalLabel'>
								Register
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<form>
								<div className='mb-3'>
									<label htmlFor='registerInputUsername' className='form-label'>
										User Name
									</label>
									<input type='text' className='form-control' id='registerInputUsername' />
								</div>
								<div className='mb-3'>
									<label htmlFor='registerInputEmail' className='form-label'>
										Email address
									</label>
									<input type='email' className='form-control' id='registerInputEmail' aria-describedby='registerEmailHelp' />
									<div id='registerEmailHelp' className='form-text'>
										We'll never share your email with anyone else.
									</div>
								</div>
								<div className='mb-3'>
									<label htmlFor='registerInputPassword' className='form-label'>
										Password
									</label>
									<input type='password' className='form-control' id='registerInputPassword' />
								</div>
								<div className='mb-3 form-check'>
									<input type='checkbox' className='form-check-input' id='registerCheck' />
									<label className='form-check-label' htmlFor='registerCheck'>
										Check me out
									</label>
								</div>
								<button type='submit' className='btn btn-dark w-100'>
									<i className='fa fa-user-plus me-1'></i> Register
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
