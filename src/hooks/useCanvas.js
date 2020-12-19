import { useState, useEffect, useRef, useCallback } from 'react';
import randomcolor from 'randomcolor';

import createFabricCanvas from './../studio/canvas';
import createFabricObject from './../studio/object';

const OBJECTS_COUNT = 5;
const OBJECTS_OFFSET = 40;

const useCanvas = () => {
  const ref = useRef();
  const [canvas] = useState(createFabricCanvas());
  const [activeObject, setActiveObject] = useState(null);

  useEffect(() => {
    canvas.initialize(ref.current, {
      width: window.innerWidth,
      height: window.innerHeight
    });

    canvas.on('mouse:down', ({ target, button }) => {
      if (button === 3) {
        target && canvas.setActiveObject(target);
        setActiveObject(target);
        canvas.renderAll();
      } else {
        setActiveObject(null);
      }
    });

    for (let i = 0; i < OBJECTS_COUNT; i++) {
      const customObject = createFabricObject({ top: i * OBJECTS_OFFSET, left: i * OBJECTS_OFFSET });
      canvas.add(customObject);
    }

    canvas.renderAll();
  }, [canvas]);

  const changeFill = useCallback(() => {
    if (!activeObject) return;
    activeObject.set('fill', randomcolor());
    canvas.renderAll();

  }, [activeObject, canvas]);

  const setRef = useCallback(node => {
    ref.current = node;
  }, [ref]);

  return { setRef, activeObject, changeFill };
};

export default useCanvas;
