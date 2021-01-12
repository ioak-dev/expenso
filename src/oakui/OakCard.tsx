import React, { useState, useEffect } from 'react';
import './styles/oak-card.scss';

interface Props {
  title?: string;
  headerVariant?: 'subtle' | 'apparent';
  children: any;
  elevation?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;
  square?: boolean;
  variant?: 'outlined';
  noFill?: boolean;
  paddingHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const OakCard = (props: Props) => {
  const [style, setStyle] = useState('');

  useEffect(() => {
    let _style =
      style + `oak-bs-elevation${props.elevation ? props.elevation : 0} `;
    _style = _style + `oak-padding-horizontal${props.paddingHorizontal ? props.paddingHorizontal : 0} `;
    _style = _style + `oak-padding-vertical${props.paddingVertical ? props.paddingVertical : 0} `;
    if (props.variant) {
      _style += `oak-${props.variant} `;
    }

    if (!props.square) {
      _style += 'oak-rounded ';
    }

    if (props.noFill) {
      _style += 'oak-container-nofill ';
    }
    
    setStyle(_style);
  }, [props.elevation, props.square, props.variant]);

  return (
    <div className={`oak-card ${style}`}>
      {props.title && (
        <div
          className={`oak-card--header-${props.headerVariant || "subtle"}`}
        >
          <div className="oak-card--header--title">{props.title}</div>
        </div>
      )}
      <div className="oak-card--body">
        <div className="oak-card--app-text">{props.children}</div>
      </div>
    </div>
  );
};

export default OakCard;
