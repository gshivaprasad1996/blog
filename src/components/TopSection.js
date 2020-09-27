import React from 'react';

const TopSection = function() {
	return (
		<section className='topSection'>
			<div className='postPreview'>
				<div className='imageContainer'>
					<img src='./images/one.jpeg' alt='previewImage' />
				</div>
				<div className='postTitle'>
					<div className='tag'>
						<div className='tagDot'> </div>
						<div className='tagText'>Javascript</div>
					</div>
					<h4>Top 50 Must Know Javascript Interview Questions</h4>
					<span>October 1 2020</span>
				</div>
			</div>
			<div className='postPreview'>
				<div className='imageContainer'>
					<img src='./images/two.webp' alt='previewImage' />
				</div>
				<div className='postTitle'>
					<div className='tag'>
						<div className='tagDot'> </div>
						<div className='tagText'>Javascript</div>
					</div>
					<h4>Top 60 Must Know React Js Interview Questions</h4>
					<span>October 2 2020</span>
				</div>
			</div>
		</section>
	);
};

export default TopSection;
