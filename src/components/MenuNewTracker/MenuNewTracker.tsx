import * as React from 'react';
// import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col, Form, FormGroup, Label, Button, Alert } from 'reactstrap';

import NumberInput from '../NumberInput/NumberInput';
import { HazardCard } from '../Cards';

import './MenuNewTracker.css';

interface MenuNewTrackerProps extends RouteComponentProps<void> {
  startGame(currentRoundIndex: number): void;
}

interface MenuNewTrackerState {
  currentRoundIndex: number;
  artifactsCollected: number;
  hazardsDiscarded: ig.hazardCount;
  submitErrorMessage: string;
}

class MenuNewTracker extends React.Component<MenuNewTrackerProps, MenuNewTrackerState> {
  defaultState: MenuNewTrackerState = {
    currentRoundIndex: 0,
    artifactsCollected: 0,
    hazardsDiscarded: {
      bolt: 0,
      bomb: 0,
      bug: 0,
      fire: 0,
      user: 0,
    },
    submitErrorMessage: '',
  };

  constructor(props: MenuNewTrackerProps) {
    super(props);

    this.state = this.defaultState;
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    console.log ('starting new game', this.state);

    this.setState({submitErrorMessage: ''});

    if (this.state.artifactsCollected > this.state.currentRoundIndex) {
      this.setState({
        submitErrorMessage:
          `You may only collect up to ${this.state.currentRoundIndex} artifact cards.
          (Currently ${this.state.artifactsCollected} ${this.state.artifactsCollected === 1 ? 'is' : 'are'} selected)`,
      });
      return;
    }

    let totalHazardCount: number = this.getTotalHazardCount();
    if (totalHazardCount !== this.state.currentRoundIndex) {
      this.setState({
        submitErrorMessage:
          `You must select a total of ${this.state.currentRoundIndex} hazard cards to discard.
          (Currently ${totalHazardCount} ${totalHazardCount === 1 ? 'is' : 'are'} selected)`,
      });
      return;
    }

    this.props.startGame(this.state.currentRoundIndex);
  }

  onRoundCountChange = (value: number): void => {
    if (this.state.submitErrorMessage && value === 1) {
      this.resetState();
    }

    this.setState({
      currentRoundIndex: value - 1,
    });
  }

  onArtifactCountChange = (value: number): void => {
    this.setState({
      artifactsCollected: value,
    });
  }

  onHazardCountChange = (value: number, name: string): void => {
    const discards: ig.hazardCount = this.state.hazardsDiscarded;
    this.setState({
      hazardsDiscarded: {
        ...discards,
        [name]: value,
      },
    });
  }

  resetState = () => {
    this.setState(this.defaultState);
  }

  getTotalHazardCount = () => {
    return Object.keys(this.state.hazardsDiscarded).reduce(
      (prevTotal: number, key: string) => {
        return this.state.hazardsDiscarded[key] + prevTotal;
      },
      0
    );
  }

  getMaxHazardCount = (type: ig.hazardTypes, max: number, totalRemain: number): number => {
    const hazardCount: number = this.state.hazardsDiscarded[type];
    const countTillMax: number = max - hazardCount;

    if (countTillMax > 0 && totalRemain > 0) {
      return max;
    }

    const currentMax: number = Math.min(max, totalRemain);
    return Math.max(hazardCount, currentMax);
  }

  render() {
    return (
      <Form
        className="text-white new-tracker"
        onSubmit={this.handleSubmit}
      >
        <h3>Game Setup</h3>
        <Row>
          {this.renderRoundsInput()}
          {this.renderArtifactsInput()}
        </Row>
        {this.renderHazardsInput()}
        {this.renderError()}
        <Button type="submit" outline={true}>
          Start Tracking Game
        </Button>
      </Form>
    );
  }

  renderError() {
    if (!this.state.submitErrorMessage) {
      return null;
    }

    return (
      <Alert color="danger">
        {this.state.submitErrorMessage}
      </Alert>
    );
  }

  renderRoundsInput() {
    return (
      <Col xs="6" sm="4" md="3" xl="2">
        <FormGroup >
          <Label>Current Round:</Label>
          <NumberInput
            min={1}
            max={5}
            initialValue={1}
            onChange={this.onRoundCountChange}
          />
        </FormGroup>
      </Col>
    );
  }

  renderArtifactsInput() {
    if (this.state.currentRoundIndex === 0) {
      return null;
    }

    return (
      <Col xs="6" sm="4" md="3" xl="2">
        <FormGroup >
          <Label>Artifacts Collected:</Label>
          <NumberInput
            initialValue={0}
            min={0}
            max={this.state.currentRoundIndex}
            onChange={this.onArtifactCountChange}
          />
        </FormGroup>
      </Col>
    );
  }

  renderHazardsInput() {
    if (this.state.currentRoundIndex === 0) {
      return null;
    }

    const maxHazard: number = Math.min(this.state.currentRoundIndex, 2);
    const maxHazardsRemain: number = this.state.currentRoundIndex - this.getTotalHazardCount();
    const hazardList: ig.hazardTypes[] = ['bug', 'bolt', 'fire', 'user', 'bomb'];

    return (
      <Row>
        <Col xs="12">
          <Label>Hazards Discarded:</Label>
        </Col>
        {
          hazardList.map((hazardType: ig.hazardTypes) => {
            return (
              <Col xs="6" sm="4" md="3" lg="2" className="new-tracker__card-column">
                <HazardCard className="new-tracker__card" type={hazardType} showEquivalent={'hover'} />
                <NumberInput
                  initialValue={0}
                  min={0}
                  max={this.getMaxHazardCount(hazardType, maxHazard, maxHazardsRemain)}
                  name={hazardType}
                  onChange={this.onHazardCountChange}
                />
              </Col>
            );
          })
        }
      </Row>
    );
  }
}

// export default connect()(MenuNewTracker);
export default MenuNewTracker;