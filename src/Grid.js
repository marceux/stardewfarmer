import React, { Component } from 'react';

class Grid extends Component {
  render() {
    const { height, width, modifier } = this.props;

    // Get the modifier ranges
    const modifierX = modifier[0];
    const modifierY = modifier[1];
    const modifierRange = modifier[2];

    function isWithinRadius(x, y) {
      const coordinateSum = Math.abs(modifierX - x) + Math.abs(modifierY - y);
      const summedDistance = Math.pow((modifierX - x), 2) + Math.pow((modifierY - y), 2);
      return (coordinateSum <= modifierRange && summedDistance <= Math.pow(modifierRange, 2));
    }

    const gridDivs = [];

    for (let y = 0; y < height; y++) {
      const rowDivs = [];

      for (let x = 0; x < width; x++) {
        let className = "grid-contents";

        // Check if it's the source...
        if (y === modifierY && x === modifierX) {
          className += " center";
        } else if (isWithinRadius(x, y)) {
          className += " modifier";
        }

        rowDivs.push((
          <div
            key={`row-${y}-cell-${x}`}
            className="grid-cell"
          >
            <div className={className}>
              <span>C</span>
            </div>
          </div>
        ));
      };

      gridDivs.push((
        <div
          key={`row-${y}`}
          className="grid-row"
        >
          {rowDivs}
        </div>
      ));
    }

    return (
      <div className="Grid" style={{width: `${this.props.width * 25}px`}}>
        {gridDivs}
      </div>
    );
  }
}

export default Grid;
