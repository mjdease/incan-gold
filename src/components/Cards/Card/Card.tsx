import * as React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import * as classNames from 'classnames';

import './Card.css';
import IconSvg from '../../IconSvg/IconSvg';

interface CardProps {
  iconName: ig.iconName;
  type: 'hazard' | 'gem' | 'artifact';
  className?: string;
  value?: ig.gemValue;
}

interface CardState {
  fontSize: string;
}

class Card extends React.Component<CardProps, CardState> {
  cardEl: HTMLDivElement;

  constructor(props: CardProps) {
    super(props);

    this.state = {
      fontSize: '30px',
    };
  }

  componentDidMount() {
    this.updateFontSize(this.cardEl.offsetWidth);
  }

  onSizeChange = (width: number) => {
    this.updateFontSize(width);
  }

  updateFontSize = (cardWidth: number) => {
    let fontSize: string = cardWidth * 0.2 + 'px';

    this.setState({
      fontSize,
    });
  }

  render() {
    const fontStyle: React.CSSProperties = {
      fontSize: this.state.fontSize,
    };

    let classes: string = classNames(
      this.props.className,
      this.props.type + '-card'
    );

    return (
      <div className={classes}>
        <div className="game-card-wrapper">
          <div className="game-card-border">
            <div className="game-card" ref={el => this.cardEl = el}>
              <ReactResizeDetector handleWidth={true} onResize={this.onSizeChange} />
              { this.props.value &&
                <div className="game-card__value game-card__value--top" style={fontStyle}>
                  <span>{this.props.value}</span>
                </div>
              }
              { this.props.value &&
                <div className="game-card__value game-card__value--bottom" style={fontStyle}>
                  <span>{this.props.value}</span>
                </div>
              }
              <IconSvg name={this.props.iconName} className="game-card__icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;