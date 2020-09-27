import React from 'react';

const MidSection = function() {
	return (
		<div className='midSection'>
			<div
				className='midPostPreview'
				style={{
					backgroundImage: `url(./images/four.jpeg)`
				}}
			>
				<div className='midPostTitle'>
					<h4>How to be successfully as front-end developer?</h4>
                    <h5>Front-end</h5>
                    <span>1st October 2020 / 4 Min to read</span>
				</div>
			</div>
			<div
				className='midPostPreview'
				style={{
					backgroundImage: `url(./images/five.jpeg)`
				}}
			>
				<div className='midPostTitle'>
					<h4>How to be successfully as back-end developer?</h4>
                    <h5>Back-end</h5>
                    <span>1st October 2020 / 4 Min to read</span>
				</div>
			</div>
			<div
				className='midPostPreview'
				style={{
					backgroundImage: `url(./images/six.jpeg)`
				}}
			>
				<div className='midPostTitle'>
					<h4>How to be successfully as full-stack developer?</h4>
                    <h5>Fullstack</h5>
                    <span>1st October 2020 / 4 Min to read</span>
                   
				</div>
			</div>
		</div>
	);
};

export default MidSection;
