const Blockly = require("scratch-blocks");
window.Blockly = Blockly;
class HelloWorld {
    hello() {
        console.log("Hello, World!!");
    }
}

var helloWorld = new HelloWorld();
helloWorld.hello();

// Instantiate scratch-blocks and attach it to the DOM.
const workspace = Blockly.inject('blocks', {
    media: './media/', // 不存在使用线上的吧
    zoom: {
        controls: true,
        wheel: true,
        startScale: 0.75
    },
    colours: {
        workspace: '#334771',
        flyout: '#283856',
        scrollbar: '#24324D',
        scrollbarHover: '#0C111A',
        insertionMarker: '#FFFFFF',
        insertionMarkerOpacity: 0.3,
        fieldShadow: 'rgba(255, 255, 255, 0.3)',
        dragShadowOpacity: 0.6
    }
});
window.workspace = workspace;