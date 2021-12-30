import React from 'react';
import '../../App.css';

class Shows extends React.Component {
  componentDidMount() {
    this.props.cs();
  }

  render() {
    return (
    <div className='info-page'>
    <div className='info-body'>
      <div className='shows-container'>
        <h1>There are currently no upcoming shows</h1>
      </div>
    </div>
    </div>
);
  }
}

export default Shows;