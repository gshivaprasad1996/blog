import React from 'react';

const FooterLinks = function() {
	return (
		<div className='footerLinks'>
			<div className='section'>
				<h4>About</h4>
				<div className='aboutText'>
					The key thing to remember with CSS Grid Layout is that it acts on the container. You define tracks
					and these constrain the items inside. Most other methods, including flexbox when used as a “grid”,
					act on the items.
				</div>
			</div>
			<div className='section'>
				<h4>Menu</h4>
				<div className='footerMenu'>
					<ul>
						<li>Home</li>
						<li>Learn</li>
						<li>Blog</li>
						<li>Contact us</li>
						<li>About</li>
					</ul>
				</div>
			</div>
			<div className='section'>
				<h4>Topics</h4>
				<div className='footerTopics'>
					<ul>
						<li>Interviwe questions</li>
						<li>Cheet sheets</li>
						<li>Career paths</li>
						<li>Tools and setup</li>
						<li>Coding challenges</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FooterLinks;
