import React from 'react';
import {connect} from "react-redux";
import {dislikeMovie, likeMovie } from "../actions";

class Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.title,
      showDescription: true,
    };
  }
  
  render() {
    const { showDescription } = this.state;
    const { id, title, backgroundImage, date, rating, votes, description } = this.props;
    const likeStatus = this.props.hearted.includes(id);

    return (
      <div className="card">
          <div
            className="card__image"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}/>
      
          <div className="card__title">
              {title}
          </div>
      
          <div className="card__like">
              <i className="fa fa-heart-o"
                  onClick={() => { if(likeStatus)
                  {
                      const d = Date(Date.now());
                      console.log(d.toString() + "Disliked movie - " + title);
                      this.props.onDislikeMovie(id);
                  }
                  else
                  {
                      const d = Date(Date.now());
                      console.log(d.toString() + "Liked movie - " + title);
                      this.props.onLikeMovie(id);
                  }}}>
                  <img className="icon"
                       src={ likeStatus ? "like.png" : "unlike.png"}
                  />
              </i>
          </div>
      
          <div className="card__subtitle">
              <span>{date}</span>
              <span>{rating} ({votes} votes)</span>
          </div>
      
          <div className="card-info">
            <div className="card-info__header">Summary</div>
            <button onClick={() => { this.setState({ showDescription: !showDescription })}}>Toggle</button>
            <div className="card-info__description">
              {showDescription ? description : null}
            </div>
          </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    hearted: state.likedCardsReducer.lovedMovies,
});
const mapDispatchToProps = (dispatch) => ({
    onLikeMovie: (id) => dispatch(likeMovie(id)),
    onDislikeMovie: (id) => dispatch(dislikeMovie(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card);
