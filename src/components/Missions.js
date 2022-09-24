import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions" />
      </>
    );
  }
}

export default Missions;
