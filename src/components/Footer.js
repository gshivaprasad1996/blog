import React from 'react';

const Footer = function() {
	return (
		<div className='footer'>
			<div className='newsLetterContainer'>
				<div className='newsLetterTitle'>
					<h4>Need more updates singup for news letter</h4>
					<p>
						Get my weekly emails about all my designing and programming concepts which will help you to
						boost your knowledge
					</p>
				</div>
			</div>
			<div className='newsLetterForm'>
				<div className='newsLetterText'>
					<input type='text' placeholder='Please enter your email address' />
				</div>
				<div className='newsLetterSubmit'>
					<input type='submit' />
				</div>
			</div>
		
		</div>
	);
};
export default Footer;
