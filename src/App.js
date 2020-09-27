import React from 'react';
import Header from './components/Header';
import TopSection from './components/TopSection';
import MidSection from './components/MidSection';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import './App.scss';
import Post from './components/Post';
import Comments from './components/Comments';

function App() {
	return (
		<div className='container'>
			{/* 
		   <Header />
			<TopSection />
			<MidSection />
			<SectionThree />
			<SectionThree />
			<SectionThree />
			<SectionFour />
			<Footer />
			<FooterLinks />
			*/}

			<Header />
			<Post />			
			<Footer />
			<Comments />
			<FooterLinks />

		</div>
	);
}

export default App;
