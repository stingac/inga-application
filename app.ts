import { css, LitElement, html } from 'lit-element';
import { style } from './Drawflow/dist/drawflow.style';
import './Drawflow/dist/drawflow.min';
import Drawflow from 'drawflow'

class DrawflowElement extends LitElement {
    static get styles() {
      return [
        style,
        css`
          #drawflow {
            display: block;
            position: relative;
            width: 100%;
            height: 800px;
          }
        `
      ];
    }
  
    render() {
      return html`
        <div id="drawflow"></div>
      `;
    }
  
    firstUpdated() {
      const container = this.shadowRoot?.getElementById('drawflow');
      const editor = new Drawflow(container);
  
      editor.reroute = true;
      editor.reroute_fix_curvature = true;
  
      editor.start();
  
      const data = {
        name: ''
      };
  
      editor.addNode('foo', 1, 1, 100, 200, 'foo', data, 'Foo', false);
      editor.addNode('bar', 1, 1, 400, 100, 'bar', data, 'Bar A', false);
      editor.addNode('bar', 1, 1, 400, 300, 'bar', data, 'Bar B', false);
  
      editor.addConnection(1, 2, "output_1", "input_1");
      editor.addConnection(1, 3, "output_1", "input_1");
    }
}
  
customElements.define("drawflow-element", DrawflowElement);



import Logger from './logger'
const logger = new Logger();
logger.log('message'); 

//Events using EventEmitter
/* 
const EventEmitter = require ('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(eventArg) {
    console.log('Listener called', eventArg);
})

emitter.emit('messageLogged',{id: 1, url: 'http://'}); 
*/

// Factory Functions
/* 
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1); 
*/ 

// const express = require('express'); 
