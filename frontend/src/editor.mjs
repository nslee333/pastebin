import {EditorView, basicSetup} from "codemirror";
import {javascript} from "@codemirror/lang-javascript";

let editor = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: document.getElementById('editor'),
    theme: "./codemirror-ubuntu-theme.css"
});