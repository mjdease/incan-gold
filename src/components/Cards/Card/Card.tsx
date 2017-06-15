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
  label?: string;
  labelDisplay?: 'hover' | 'always' | false;
}

interface CardState {
  gemFontSize: string;
  labelFontSize: string;
}

class Card extends React.Component<CardProps, CardState> {
  cardEl: HTMLDivElement;

  constructor(props: CardProps) {
    super(props);

    this.state = {
      gemFontSize: '30px',
      labelFontSize: '15px',
    };
  }

  componentDidMount() {
    this.updateFontSize(this.cardEl.offsetWidth);
  }

  onSizeChange = (width: number) => {
    this.updateFontSize(width);
  }

  updateFontSize = (cardWidth: number) => {
    let gemFontSize: string = cardWidth * 0.2 + 'px';
    let labelFontSize: string = cardWidth * 0.09 + 'px';

    this.setState({
      gemFontSize,
      labelFontSize,
    });
  }

  render() {
    const gemFontStyle: React.CSSProperties = {
      fontSize: this.state.gemFontSize,
    };

    const labelFontStyle: React.CSSProperties = {
      fontSize: this.state.labelFontSize,
    };

    const rootClasses: string = classNames(
      this.props.className,
      this.props.type + '-card'
    );

    const labelClasses: string = classNames(
      'game-card__label',
      {'game-card__label--hover': this.props.labelDisplay === 'hover'}
    );

    return (
      <div className={rootClasses}>
        <div className="game-card-wrapper">
          <div className="game-card-border">
            <div className="game-card" ref={el => this.cardEl = el}>
              <ReactResizeDetector handleWidth={true} onResize={this.onSizeChange} />
              { this.props.value &&
                <div className="game-card__value game-card__value--top" style={gemFontStyle}>
                  <span>{this.props.value}</span>
                </div>
              }
              { this.props.value &&
                <div className="game-card__value game-card__value--bottom" style={gemFontStyle}>
                  <span>{this.props.value}</span>
                </div>
              }
              { this.props.label &&
                <div className={labelClasses} style={labelFontStyle}>
                  <span>{this.props.label}</span>
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