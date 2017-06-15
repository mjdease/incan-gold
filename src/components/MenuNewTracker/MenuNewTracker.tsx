import * as React from 'react';
// import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Form, FormGroup, Label, Button } from 'reactstrap';

import NumberInput from '../NumberInput/NumberInput';
import * as Cards from '../Cards';

import './MenuNewTracker.css';

interface MenuNewTrackerProps extends RouteComponentProps<void> {
  startGame(currentRoundIndex: number): void;
}

interface MenuNewTrackerState {
  currentRoundIndex: number;
}

class MenuNewTracker extends React.Component<MenuNewTrackerProps, MenuNewTrackerState> {
  constructor(props: MenuNewTrackerProps) {
    super(props);

    this.state = {
      currentRoundIndex: 0,
    };
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log ('starting new game');
    this.props.startGame(this.state.currentRoundIndex);
  }

  onRoundCountChange = (value: number): void => {
    console.log('round count:', value);
    this.setState({
      currentRoundIndex: value - 1,
    });
  }

  // renderExtraSetup() {
  //   return (

  //   );
  // }

  render() {
    return (
      <Form
        className="text-white new-tracker"
        onSubmit={this.handleSubmit}
      >
        <h3>Game Setup</h3>
        <FormGroup >
          <Label>Current Round:</Label>
          <NumberInput
            min={1}
            max={5}
            value={1}
            width="160px"
            onChange={this.onRoundCountChange}
          />
        </FormGroup>
        <Row>
          <Cards.GemCard value={17} className="col-sm-2" />
          <Cards.HazardCard type="bug" showEquivalent={false} className="col-sm-2" />
          <Cards.HazardCard type="bolt" showEquivalent={'hover'} className="col-sm-2" />
          <Cards.HazardCard type="fire" showEquivalent={'hover'} className="col-sm-2" />
          <Cards.HazardCard type="user" showEquivalent={'always'} className="col-sm-2" />
          <Cards.HazardCard type="bomb" showEquivalent={'always'} className="col-sm-2" />
        </Row>
        <Button type="submit" outline={true}>
          Start Tracking Game
        </Button>
      </Form>
    );
  }
}

// export default connect()(MenuNewTracker);
export default MenuNewTracker;