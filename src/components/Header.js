import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = function() {
	
	function openMobileMenu(){
		let mobileMenu = document.getElementsByClassName('mobileMenu')[0]
		let menuStatus = mobileMenu.style
		if(menuStatus.display === 'grid'){
			menuStatus.display = 'none'
		}else{
			menuStatus.display = 'grid'
		}
	}
	return (
		<header>
			<div className='topNav'>
				<div className='tag'>
					<button name='tagButton'>New Post</button>
				</div>
				<div className='topNavText'>How to use the ES6 Arrow functions the right way</div>
				<div className='readMore'>
					<a href='/read-more'>Read More</a>
				</div>
			</div>
			<nav>
				<div className='logo'>
					<img src='./transparentLogo.png' alt='logo' />
				</div>
				<div className='menu'>
					<ul>
						<li>
							<a href='/about' className='navLinks'>
								Home
							</a>
						</li>
						<li>
							<div className='dropdown'>
								<a href='/home' className='navLinks'>
									Read
								</a>
								<div className='dropdown-content'>
									<a href='#'>Interview Questions</a>
									<a href='#'>Coding Challenges</a>
									<a href='#'>Career Paths</a>
								</div>
							</div>
						</li>
						<li>
							<a href='/blog' className='navLinks'>
								Blog
							</a>
						</li>
						<li>
							<a href='/write-us' className='navLinks'>
								Write us
							</a>
						</li>
					</ul>
				</div>
				<div className="mobileMenuIcon">
					<button  onClick={()=> openMobileMenu()}>
						<FontAwesomeIcon icon={faBars} />
					</button>
				</div>
				
				<div className="mobileMenu">
					<div id="menuLinks">
						<a href="#news">News</a>
						<a href="#contact">Contact</a>
						<a href="#about">About</a>
					</div>
					
				</div>

				<div className='socialIcons'>
					<ul>
						<li>
							<FontAwesomeIcon icon={faFacebook} />
						</li>
						<li>
							<FontAwesomeIcon icon={faTwitter} />
						</li>
						<li>
							<FontAwesomeIcon icon={faInstagram} />
						</li>
						<li>
							<FontAwesomeIcon icon={faYoutube} />
						</li>
						<li>
							<FontAwesomeIcon icon={faSearch} />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
