import { fabric } from 'fabric';

const OFFSET = 10;

export const getActionFromCorner = function(alreadySelected, corner) {
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

export const controlsVisibility = {
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

export const drawControl = function(control, ctx, methodName, left, top) {
  if (!this.isControlVisible(control)) {
    return;
  }

  const size = this.cornerSize;
  const l = left + size / 2;
  const t = top + size / 2;

  const drawCircle = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, 2 * Math.PI, false);
    ctx[methodName]();
    ctx.strokeStyle = 'black';
    ctx.stroke();
  };

  const drawTriangle = (x1, y1, x2, y2, x3, y3) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.stroke();
  };

  if (control === 'tl') {
    drawCircle(l - OFFSET, t - OFFSET);
  }

  if (control === 'br') {
    drawCircle(l + OFFSET, t + OFFSET)
  }

  if (control === 'bl') {
    drawTriangle(l - size, t + size, l - OFFSET, t, l, t + OFFSET);
  }

  if (control === 'tr') {
    drawTriangle(l + size, t - size, l, t - OFFSET, l + OFFSET, t);
  }
};

export const setCornerCoords = function() {
  let coords = this.oCoords,
    newTheta = fabric.util.degreesToRadians(45 - this.angle),
    cornerHypotenuse = this.cornerSize * 0.707106,
    cosHalfOffset = cornerHypotenuse * fabric.util.cos(newTheta),
    sinHalfOffset = cornerHypotenuse * fabric.util.sin(newTheta),
    x, y;

  for (let point in coords) {
    x = coords[point].x;
    y = coords[point].y;
    coords[point].corner = {
      tl: {
        x: x - sinHalfOffset - OFFSET,
        y: y - cosHalfOffset - OFFSET
      },
      tr: {
        x: x + cosHalfOffset + OFFSET,
        y: y - sinHalfOffset - OFFSET
      },
      bl: {
        x: x - cosHalfOffset - OFFSET,
        y: y + sinHalfOffset + OFFSET
      },
      br: {
        x: x + sinHalfOffset + OFFSET,
        y: y + cosHalfOffset + OFFSET
      }
    };
  }
};
