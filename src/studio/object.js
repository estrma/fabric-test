import { fabric } from 'fabric';
import randomcolor from 'randomcolor';

const CONTROLS_VISIBILITY = {
  'tl': true,
  'tr': true,
  'bl': true,
  'br': true,
  'ml': false,
  'mt': false,
  'mr': false,
  'mb': false,
  'mtr': false
};

const OFFSET = 10;

(function() {

  fabric.Canvas.prototype._getActionFromCorner = function(alreadySelected, corner) {
    if (!corner || !alreadySelected) {
      return 'drag';
    }

    switch (corner) {
      case 'tl':
      case 'br':
        return 'rotate';
      default:
        return 'scale';
    }
  };

  fabric.util.object.extend(fabric.Object.prototype, {
    _drawControl: function(control, ctx, methodName, left, top) {
      if (!this.isControlVisible(control)) {
        return;
      }

      const size = this.cornerSize;
      const l = left + size / 2;
      const t = top + size / 2;

      if (control === 'tl') {
        ctx.beginPath();
        ctx.arc(l - OFFSET, t - OFFSET, size / 2, 0, 2 * Math.PI, false);
        ctx[methodName]();
        ctx.strokeStyle = 'black';
        ctx.stroke();
      }

      if (control === 'br') {
        ctx.beginPath();
        ctx.arc(l + OFFSET, t + OFFSET, size / 2, 0, 2 * Math.PI, false);
        ctx[methodName]();
        ctx.strokeStyle = 'black';
        ctx.stroke();
      }

      if (control === 'bl') {
        ctx.beginPath();
        ctx.moveTo(l - size, t + size);
        ctx.lineTo(l - OFFSET, t);
        ctx.lineTo(l, t + OFFSET);
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.stroke();
      }

      if (control === 'tr') {
        ctx.beginPath();
        ctx.moveTo(l + size, t - size);
        ctx.lineTo(l, t - OFFSET);
        ctx.lineTo(l + OFFSET, t);
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.stroke();
      }
    },
    _setCornerCoords: function() {
      let coords = this.oCoords,
        newTheta = fabric.util.degreesToRadians(45 - this.angle),
        cornerHypotenuse = this.cornerSize * 0.707106 * 2.4,
        cosHalfOffset = cornerHypotenuse * fabric.util.cos(newTheta),
        sinHalfOffset = cornerHypotenuse * fabric.util.sin(newTheta),
        x, y;

      for (let point in coords) {
        x = coords[point].x;
        y = coords[point].y;
        coords[point].corner = {
          tl: {
            x: x - sinHalfOffset,
            y: y - cosHalfOffset
          },
          tr: {
            x: x + cosHalfOffset,
            y: y - sinHalfOffset
          },
          bl: {
            x: x - cosHalfOffset,
            y: y + sinHalfOffset
          },
          br: {
            x: x + sinHalfOffset,
            y: y + cosHalfOffset
          }
        };
      }
    },
  });

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

      this.setControlsVisibility(CONTROLS_VISIBILITY);

      this.callSuper('initialize', options);
    }
  })
})();


const createFabricObject = (args) => {
  return new fabric.CustomObject(args);
};

export default createFabricObject;
