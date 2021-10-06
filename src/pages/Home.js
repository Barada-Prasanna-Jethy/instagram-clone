import React, { Component } from "react";
import { getPhotos } from "../actions/action";
import { withRouter } from "react-router-dom";
import "../styles/home.css";

import { connect } from "react-redux";
function mapStateToProps(state) {
  return { images: state.images };
}
class Home extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    const { images } = this.props;
    return (
      <div className="home-container">
        {images.map((image) => (
          <div className="image-card">
            <div>
              <img src={image.url}></img>
            </div>
            <div className="post-details">
              <p
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <p>{image.title}</p>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.props.history.push({
                      pathname: `/details`,
                      state: image.id,
                    });
                  }}
                >
                  Details
                </p>
              </p>

              <p style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapDispatchToProps = {
  getPhotos,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
