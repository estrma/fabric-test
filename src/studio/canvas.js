import { fabric } from 'fabric';

(function() {
    fabric.CustomCanvas = fabric.util.createClass(fabric.Canvas, {
        initialize: function(el, options) {
            options = {
                ...options,
                stopContextMenu: true,
                fireRightClick: true
            };
            this.callSuper('initialize', el, options);
        }
    })
})();

const createFabricCanvas = () => {
    return new fabric.CustomCanvas('canvas');
};

export default createFabricCanvas;
