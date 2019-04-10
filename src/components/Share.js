import React from 'react';
import PropTypes from 'prop-types';
import {FacebookShareButton,	WhatsappShareButton,} from 'react-share';
import { faFacebookF , faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Share = ({ socialConfig }) => {
	// const tagList = tags.map(name => name.name);
	return(
	<div className="post-social">
	<h6 class="title is-6">Share:</h6>
		<FacebookShareButton
			url={socialConfig.config.url}
			className="button is-outlined is-rounded facebook"
		>
			<span className="icon">
			<FontAwesomeIcon icon={faFacebookF} />
			</span>
			<span className="text">Facebook</span>
		</FacebookShareButton>
		{/* <TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'twitter']} />
			</span>
			<span className="text">Twitter</span>
		</TwitterShareButton>
		<GooglePlusShareButton url={socialConfig.config.url} className="button is-outlined is-rounded googleplus" >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'google-plus-g']} />
			</span>
			<span className="text">Google+</span>
		</GooglePlusShareButton>
		<LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
			</span>
			<span className="text">LinkedIn</span>
		</LinkedinShareButton>
		<RedditShareButton url={socialConfig.config.url} className="button is-outlined is-rounded reddit" title={socialConfig.config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'reddit-alien']} />
			</span>
			<span className="text">Reddit</span>
		</RedditShareButton> */}
		<WhatsappShareButton url={socialConfig.config.url} className="button is-outlined is-rounded whatsapp" title={socialConfig.config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={faWhatsapp} />
			</span>
			<span className="text">WhatsApp</span>
		</WhatsappShareButton>
		
	</div>
	)
};

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};


export default Share;