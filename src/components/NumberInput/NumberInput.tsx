import * as React from 'react';
import * as reactstrapTypes from '../../types/extensions/reactstrap';
import { Input, InputGroupButton, Button } from 'reactstrap';
const InputGroup = require('reactstrap').InputGroup as reactstrapTypes.InputGroup;

import Icon from 'react-fa';

import './NumberInput.css';

interface NumberInputProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  name?: string;
  width?: string;
  isValid?: boolean;
  onChange?(value: number, name: string): void;
}

interface NumberInputState {
  value: number;
}


class NumberInput extends React.Component<NumberInputProps, NumberInputState> {
  static defaultProps: NumberInputProps = {
    initialValue: 1,
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    isValid: true,
  };

  public input: HTMLInputElement;

  constructor(props: NumberInputProps) {
    super(props);

    this.state = {
      value: this.props.initialValue,
    };

  }

  componentWillReceiveProps(nextProps: NumberInputProps) {
    if (nextProps.min !== this.props.min || nextProps.max !== this.props.max) {
      let newVal: number = this.bound(this.state.value, nextProps.min, nextProps.max);
      if (newVal !== this.state.value) {
        this.setState({
          value: newVal,
        });
      }
    }
  }

  componentDidUpdate(prevProps: NumberInputProps, prevState: NumberInputState) {
    if (this.state.value !== prevState.value) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(this.state.value, this.props.name);
      }
    }
  }

  increase = () => {
    this.step(1);
  }

  decrease = () => {
    this.step(-1);
  }

  step = (change: number) => {
    let newVal: number = this.state.value;

    newVal += change * this.props.step;

    newVal = this.bound(newVal, this.props.min, this.props.max);

    this.setState({
      value: newVal,
    });
  }

  bound = (value: number, min: number, max: number): number => {
    let newValue: number = value;
    if (newValue > max) {
      newValue = max;
    }
    if (newValue < min) {
      newValue = min;
    }
    return newValue;
  }

  onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();

    let val = parseInt(event.currentTarget.value, 10);

    if (isNaN(val)) {
      return;
    }

    val = this.bound(val, this.props.min, this.props.max);

    this.setState({
      value: val,
    });
  }

  render() {
    let buttonColor: string = this.props.isValid ? 'secondary' : 'danger';

    if (this.props.width) {
      var widthStyle: React.CSSProperties = {
        width: this.props.width,
      };
    }

    return (
      <InputGroup className="number-input" style={widthStyle}>
        <InputGroupButton>
          <Button
            className="number-input__button"
            outline={true}
            color={buttonColor}
            onClick={this.decrease}
            disabled={this.state.value <= this.props.min}
          >
            <Icon name="minus" />
          </Button>
        </InputGroupButton>
        <Input
          className="number-input__input"
          value={this.state.value}
          onChange={this.onChange}
        />
        <InputGroupButton>
          <Button
            className="number-input__button"
            outline={true}
            color={buttonColor}
            onClick={this.increase}
            disabled={this.state.value >= this.props.max}
          >
            <Icon name="plus" />
          </Button>
        </InputGroupButton>
      </InputGroup>
    );
  }
}

export default NumberInput;