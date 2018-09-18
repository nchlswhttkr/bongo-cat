import React from "react";

import sounds from "./sounds";

import imgBase from "./img/base.png";
import imgDownLeft from "./img/down-left.png";
import imgUpLeft from "./img/up-left.png";
import imgDownRight from "./img/down-right.png";
import imgUpRight from "./img/up-right.png";

class App extends React.PureComponent {
  state = {
    isLeftPressed: false,
    isRightPressed: false
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  };

  handleKeyDown = e => {
    if (e.key === "f" && e.repeat === false) {
      sounds.LeftDrum.play();
      this.setState({ isLeftPressed: true });
    } else if (e.key === "j" && e.repeat === false) {
      sounds.RightDrum.play();
      this.setState({ isRightPressed: true });
    }
  };

  handleKeyUp = e => {
    if (e.key === "f") this.setState({ isLeftPressed: false });
    else if (e.key === "j") this.setState({ isRightPressed: false });
  };

  render = () => (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Play the bongos with [F] and [J]!</h1>

      {/*
        Strange behaviour was happening with images when importing at build
        time, with some still needing to be requested. This avoids that by
        fetching the required images on initial render.
      */}
      <div style={{ display: "none" }}>
        <img src={imgBase} alt="" />
        <img src={imgDownLeft} alt="" />
        <img src={imgUpLeft} alt="" />
        <img src={imgDownRight} alt="" />
        <img src={imgUpRight} alt="" />
      </div>

      <div style={{ position: "relative", left: 48, top: -128 }}>
        {/* BASE */}
        <img src={imgBase} alt="" />
        {/* LEFT ARM */}
        <img
          style={{ position: "absolute", left: 0, top: 1 }}
          src={this.state.isLeftPressed ? imgDownLeft : imgUpLeft}
          alt=""
        />
        {/* RIGHT ARM */}
        <img
          style={{ position: "absolute", left: 0, top: 2 }}
          src={this.state.isRightPressed ? imgDownRight : imgUpRight}
          alt=""
        />
      </div>
    </React.Fragment>
  );
}

export default App;
