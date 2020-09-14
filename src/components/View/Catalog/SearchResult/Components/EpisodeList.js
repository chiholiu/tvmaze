import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getIndex } from '../../../../../actions/index';

export const EpisodeList = ({ 
	episodeList
}) => {
	const dispatch = useDispatch();
	if(episodeList === undefined) return false; 

	return (
		<ul>
			{episodeList && episodeList.map((episode, index) => {
				return (
					<Link key={episode.id}
						className='button-link'
						to={`/DetailPage/${episode.id}`}
						onClick={() => dispatch(getIndex(index))}
					>
						<button>{episode.name}</button>
					</Link>
				);
			})}
		</ul>
	);
};

const mapStateToProps = (state) => {
	return {
		episode: state.catalogData.catalogInfo.episodeList || []
	};
};

EpisodeList.propTypes = {
	episodeList: PropTypes.any
};
     
export default connect(mapStateToProps)(EpisodeList);