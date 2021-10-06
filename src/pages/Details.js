import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getPhotos } from "../actions/action";

import { connect } from "react-redux";

function mapStateToProps(state) {
  return { images: state.images };
}
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { imageId: null };
  }
  componentDidMount() {
    this.props.getPhotos();
    const id = this.props.location.state - 1;
    this.setState({ imageId: id });
  }
  render() {
    const { imageId } = this.state;
    const { images } = this.props;
    return (
      <div>
        {imageId !== null && (
          <div style={{ display: "flex" }}>
            <img
              style={{ height: "100vh", width: "100vh" }}
              src={images[imageId].url}
            ></img>
            <div className="post-details">
              <p style={{ fontWeight: "bold" }}>
                <p>{images[imageId].title}</p>
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
        )}
      </div>
    );
  }
}
const mapDispatchToProps = {
  getPhotos,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
