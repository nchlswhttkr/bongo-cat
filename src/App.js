import React from "react";

class App extends React.PureComponent {
  state = {
    isPressed: false
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  };

  handleKeyDown = e => e.key === " " && this.setState({ isPressed: true });
  handleKeyUp = e => e.key === " " && this.setState({ isPressed: false });

  render = () => (
    <div>
      <img src={this.state.isPressed ? "/down.png" : "/up.png"} alt="" />
    </div>
  );
}

export default App;
