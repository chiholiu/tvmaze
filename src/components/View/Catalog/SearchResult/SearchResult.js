import React from 'react';
import { connect } from 'react-redux';
import { Title } from './Components/Title';
import { EpisodeList } from './Components/EpisodeList';
import { Cover } from './Components/Cover';
import { Summary } from './Components/Summary';

export const SearchResult = ({ 
    info, 
    episode 
}) => {
    if(info === undefined) return;

    return (
        <section>
            <Title title={info.name}/>
            <Summary summaryText={info.summary}/>
            <Cover image={info.image} altText={info.name}/>
            <EpisodeList episodeList={episode}/>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        info: state.catalogData.catalogInfo.data || [],
        episode: state.catalogData.episodeList || []
    }
}

export default connect(mapStateToProps)(SearchResult);