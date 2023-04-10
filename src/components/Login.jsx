import React from 'react';

const Login = () => {
	return (
		<>
			{/* <!-- Button trigger modal --> */}
			<button type='button' className='btn btn-outline-dark' data-bs-toggle='modal' data-bs-target='#loginModal'>
				<i className='fa fa-sign-in me-1'></i> Login
			</button>

			{/* <!-- Modal --> */}
			<div className='modal fade' id='loginModal' tabIndex='-1' aria-labelledby='loginModalLabel' aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='loginModalLabel'>
								Login
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<form>
								<div className='mb-3'>
									<label htmlFor='loginInputEmail' className='form-label'>
										Email address
									</label>
									<input type='email' className='form-control' id='loginInputEmail' aria-describedby='loginEmailHelp' />
									<div id='loginEmailHelp' className='form-text'>
										We'll never share your email with anyone else.
									</div>
								</div>
								<div className='mb-3'>
									<label htmlFor='loginInputPassword' className='form-label'>
										Password
									</label>
									<input type='password' className='form-control' id='loginInputPassword' />
								</div>
								<div className='mb-3 form-check'>
									<input type='checkbox' className='form-check-input' id='loginCheck' />
									<label className='form-check-label' htmlFor='loginCheck'>
										Check me out
									</label>
								</div>
								<button type='submit' className='btn btn-dark w-100'>
									<i className='fa fa-sign-in me-1'></i> Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
