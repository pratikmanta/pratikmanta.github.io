import React, { Component } from 'react';
import profileImage from '../../assets/pratik.jpg';

import { ActionButton, Sidebar } from '../../components/';

class Root extends Component {
	constructor(props) {
		super(props);
	}

	handleButtonClick = () => {
		this.props.history.push('/profile');
	};


	toggleSidebar = () => {
		var body = document.getElementsByTagName('body')[0];
		body.classList.toggle('nav-open');
	};

	render() {
		return (
			<div className='root-container'>
				<div className='nav-trigger' onClick={this.toggleSidebar}>
					<span></span>
				</div>
				<Sidebar profileImage={profileImage} handleButtonClick={this.handleButtonClick}/>
				<main className='content'>
					<div id='intro-img' className='animate__animated animate__bounce'>
						<img
							src={profileImage}
							className='profile'
						/>
					</div>

					<div className='intro'>
						<div className='typewriter'>Hey, I'm Pratik!</div>
					</div>
					<div className='tagline'>
						Frontend Dev | Game Enthusiast
					</div>
					<div className='icons-social'>
						<a target='_blank' href='https://github.com/pratikmanta'>
							<i className=' animates heartBeat delay-3s fab fa-github'></i>
						</a>
						<a
							target='_blank'
							href='https://in.linkedin.com/in/pratikmanta'
						>
							<i className=' animated heartBeat delay-4s fab fa-linkedin'></i>
						</a>
					</div>
					<ActionButton
						name='pulse-button'
						style='center'
						handleClick={this.handleButtonClick}
					/>
				</main>
				<div className='overlay'></div>
			</div>
		);
	}
}

export default Root;
