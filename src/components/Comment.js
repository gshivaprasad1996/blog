import React from 'react';

const Comment = function() {
	return (
		<div className='commentBox'>
			<div className='commentHeader'>
				<div className='profilePic'>
					<img src='./logo192.png' />
				</div>
				<div className='profileName'>
					<h4>Shiva Prasad Gajula</h4>
				</div>
				<div className='timeStamp'>
					<span>20th October 2020</span>
				</div>
			</div>
			<div className='commentBody'>
				<p>
					Hey are an aspiring front end developer and preparing for interviews, then this blog is for you.
					This blog on Top 50 React Interview Questions
				</p>
			</div>
            <div className='commentFooter'>
                <p>
                    <a href="">Reply</a>
                </p>
            </div>
		</div>
	);
};

export default Comment;
