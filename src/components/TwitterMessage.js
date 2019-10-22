import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
  }

  handleChange = e => {
    const input = e.target.value
    this.setState({
      [e.target.name]: input,
      remainingChars: this.props.maxChars - input.length
      })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={e => this.handleChange(e)}/>
        <p>remaining characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
