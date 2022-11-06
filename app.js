import Drawflow from "./Drawflow"
import styleDrawflow from './Drawflow/dist/drawflow.min.css'

var id = document.getElementById("drawflow");
const editor = new Drawflow(id);
editor.start();
