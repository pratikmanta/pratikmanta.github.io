import React from 'react';

const ActionButton = ({ name, style, handleClick }) => {
	const buttonStyles = {
		display: 'flex',
		alignSelf: style,
		margin: '30px',
		padding: '20px'
	};

	return (
		<button
			className={`animate__animated animate__delay-4s ${name}`}
			style={buttonStyles}
			onClick={handleClick}
		/>
	);
};

export default ActionButton;
