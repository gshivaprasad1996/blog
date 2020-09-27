import { logDOM } from '@testing-library/react';
import React from 'react';

const Post = function() {
	return (
		<div>
			<div
				className='postBanner'
				style={{
					backgroundImage: `url(./images/five.jpeg)`
				}}
			>
				<div className='postHeader'>
					<div className='headerInfo'>
						<div className='postTitle'>
							<h4>Top 50 React Js Interview Questions.</h4>
						</div>
						<div className='metaInfo'>
							<div className='authorImg'>
								<img src='./logo192.png' />
							</div>
							<div className='authorName'>
								<span>By Shiva Prasad</span>
							</div>
							<div className='dateInfo'>
								<span>12th October 2020</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='postBody'>
				Hey are an aspiring front end developer and preparing for interviews, then this blog is for you. This
				blog on Top 50 React Interview Questions is the perfect guide for you to learn all the concepts required
				to clear a React interview. But before starting with the React Interview Questions, let’s take a quick
				look at React’s demand and status in the market. Want to Upskill yourself to get ahead in Career? Check
				out the Top Trending Technologies. Slowly and steadily, the JavaScript tools are firming their roots in
				the marketplace and the demand for React certification is increasing exponentially. Selecting the right
				technology for developing an application or website is becoming more challenging. Among all, React is
				considered as the fastest growing Javascript framework. Let us start by taking a look at some of the
				most frequently asked Java interview questions:
				<br/> <br/>
                <ol>
					<li>Differentiate between Real DOM and Virtual DOM.</li>
					<li>What is React?</li>
					<li>What are the features of React? </li>
					<li>List some of the major advantages of React.</li>
					<li>What are the limitations of React?</li>
					<li>What is JSX?</li>
					<li>What do you understand by Virtual DOM? Explain its working.</li>
					<li>Why can’t browsers read JSX?</li>
					<li>How different is React’s ES6 syntax when compared to ES5?</li>
					<li>How is React different from Angular?</li>
				</ol>
			</div>
		</div>
	);
};

export default Post;
