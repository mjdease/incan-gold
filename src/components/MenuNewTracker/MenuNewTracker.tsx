import * as React from 'react';
// import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Form, FormGroup, Label, Button } from 'reactstrap';

import NumberInput from '../NumberInput/NumberInput';

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
            onChange={this.onRoundCountChange}
          />
        </FormGroup>
        <Button type="submit" outline={true}>
          Start Tracking Game
        </Button>
      </Form>
    );
  }
}

// export default connect()(MenuNewTracker);
export default MenuNewTracker;