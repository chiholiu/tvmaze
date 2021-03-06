import React from "react";
import PropTypes from "prop-types";  
import { connect } from "react-redux";
import { Header } from "./Components/Header";
import { EpisodeList } from "./Components/EpisodeList";
import { Cover } from "./Components/Cover";
import { Summary } from "./Components/Summary";

export const SearchResult = ({ 
	info, 
	episode 
}) => {
	if(info === undefined) return false;

	return (
		<section>
			<Header title={info.name}/>
			<div className="mobile-breakpoint">
				<Summary summaryText={info.summary}/>
				<Cover image={info.image} altText={info.name}/>
			</div>
			<EpisodeList episodeList={episode}/>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		info: state.catalogData.catalogInfo.data || [],
		episode: state.catalogData.episodeList || []
	};
};

SearchResult.propTypes = {
	info: PropTypes.any,
	episode: PropTypes.any
};
     
export default connect(mapStateToProps)(SearchResult);