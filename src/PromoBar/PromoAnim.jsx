import React from 'react';
import ReactDOM from 'react-dom';

import './PromoAnim.css';

/**
 * Component for promo animated background grid.
 * @extends React.PureComponent
 */
class PromoAnim extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {canvasSide: 320};
  }

  componentDidMount() {
    window.addEventListener('resize', this._onWindowResize);

    const currentNode = ReactDOM.findDOMNode(this);

    this._container = currentNode.parentNode;

    this._setCanvas();
  }

  componentDidUpdate() {
    this._drawGrid();
  }

  _onWindowResize = (evt) => {
    this._setCanvas();
  }

  _setCanvas = () => {
    const {clientHeight, clientWidth} = this._container;
    const canvasSide = clientHeight >= clientWidth ? clientWidth : clientHeight;

    this.setState({canvasSide});

    this._canvas.style.left = `${this._container.clientWidth / 2 - canvasSide / 2}px`;
    this._canvas.style.top = `${this._container.clientHeight / 2 - canvasSide / 2}px`;
  }

  _drawGrid = () => {
    const cSide = this._canvas.width;
    const ctx = this._canvas.getContext('2d');

    const lineCount = Math.ceil(cSide / 25);

    ctx.strokeStyle = 'rgba(212, 212, 212, 0.4)';

    // Horizontal and vertical lines
    for (let i = 0; i < lineCount; i++) {
      // Verical lines
      const x = i * 25;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, cSide);
      ctx.stroke();

      // Horizontal lines
      const y = i * 25;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(cSide, y);
      ctx.stroke();
    }

    // Transparent nodes and diagonal lines
    const transNodeCount = Math.ceil(lineCount / 2);

    for (let i = 0; i < transNodeCount; i++) {
      const y = i * 50;

      for (let n = 0; n < transNodeCount; n++) {
        const x = n * 50 - 5;

        // Top-left to bottom-right diagonal lines
        ctx.beginPath();
        ctx.moveTo(x + 5, y);
        ctx.lineTo(x + 55, y + 50);
        ctx.stroke();

        // Top-right to bottom-left diagonal lines
        ctx.beginPath();
        ctx.moveTo(x + 55, y);
        ctx.lineTo(x, y + 55);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 5, y + 5);
        ctx.lineTo(x + 10, y);
        ctx.lineTo(x + 5, y - 5);
        ctx.lineTo(x, y);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
        ctx.stroke();
      }
    }

    // Transparent circle overlay
    const cHalfSide = cSide / 2;

    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.arc(cHalfSide, cHalfSide, cHalfSide, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }

  render() {
    return (
      <canvas
        ref={ref => {this._canvas = ref}}
        className="promo__anim"
        height={this.state.canvasSide}
        width={this.state.canvasSide}
      >
      </canvas>
    )
  }
}

export default PromoAnim;
