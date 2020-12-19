import React, { Fragment, memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import useCanvas from './../hooks/useCanvas';

const CanvasEl = styled.canvas`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 888;
`;

const ButtonEl = styled.button`
    position: absolute;
    ${props => props.coords};
    display: ${props => props.visible ? 'block' : 'none'};
    z-index: 889;
`;

const CanvasComponent = memo(({ canvasRef }) => <CanvasEl ref={canvasRef} />);

const Canvas = () => {
  const [canvasRef, activeObject, changeFill] = useCanvas();
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [buttonCoords, setButtonCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (activeObject) {
      const { top, left } = activeObject;
      setIsButtonVisible(true);
      setButtonCoords({
        top: `${top}px`,
        left: `${left}px`,
      });
    } else {
      setIsButtonVisible(false);
    }
  }, [activeObject]);

  return (
    <Fragment>
      <CanvasComponent canvasRef={canvasRef} />
      <ButtonEl
        visible={isButtonVisible}
        onClick={changeFill}
        coords={buttonCoords}
      >Change color</ButtonEl>
    </Fragment>
  );
};

export default Canvas;
