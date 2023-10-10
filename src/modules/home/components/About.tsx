import { appStore, epicureLogo, googlePlay } from '../assets/images/others/index';

import '../components/About.scss';

function About() {
	return (
		<div className='about-container'>
			<div className='about-container-content'>
				<div className='about-container-title-content-images'>
					<div className='about-text-content'>
						<div>
							<p className='about-us-title'>ABOUT US:</p>
							<p className='about-us-content'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</div>
						<div className='app-downloads-images'>
							<img src={googlePlay} alt='Get It On Google Play' className='store-images' />
							<img src={appStore} alt='Download On The App Store' className='store-images' />
						</div>
					</div>
				</div>
				<img src={epicureLogo} alt='Epicure logo' className='epicure-logo' />
			</div>
		</div>
	);
}

export default About;
