import { fabric } from 'fabric';
import randomcolor from 'randomcolor';

import {
  getActionFromCorner,
  controlsVisibility,
  drawControl,
  setCornerCoords
} from './overrides';

(function() {
  fabric.Canvas.prototype._getActionFromCorner = getActionFromCorner;

  fabric.CustomObject = fabric.util.createClass(fabric.Rect, {
    initialize: function(options) {
      options = {
        ...options,
        width: 200,
        height: 200,
        fill: randomcolor(),
        borderColor: 'black',
        padding: 10,
        margin: 10
      };

      this.setControlsVisibility(controlsVisibility);

      this.callSuper('initialize', options);

      this._drawControl = drawControl.bind(this);
      this._setCornerCoords = setCornerCoords.bind(this);
    },
  })
})();

const createFabricObject = (args) => {
  return new fabric.CustomObject(args);
};

export default createFabricObject;
