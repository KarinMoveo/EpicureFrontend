import { Link } from 'react-router-dom';

import '../components/Footer.scss';

function Footer() {
	return (
		<footer className='footer-container'>
			<ul className='ul-footer-container'>
				<li className='footer-item'>
					<Link to='/contact'>Contact Us</Link>
				</li>
				<li className='footer-item'>
					<Link to='/terms'>Term Of Use</Link>
				</li>
				<li className='footer-item'>
					<Link to='/privacy'>Privacy Policy</Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
