import React from 'react';
 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    console.log(this.props.match);
    console.log(this.props.history);
    console.log('MyComponent ', this.props.location);

    return <div ref={this.wrapper}>{this.props.children}</div>;
  }
}
 
export default MyComponent;
 