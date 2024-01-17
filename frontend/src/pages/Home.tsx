import '../styles/App.css';
import { basicSetup } from 'codemirror';
import { EditorView, keymap } from "@codemirror/view";
import { useEffect, useRef } from 'react';

let myView = new EditorView({
  extensions: [basicSetup],
  parent: document.getElementById('editor-div') 
});

function Home() {
  return (
    <div className="body">
      <header className="bg-[#666] flex justify-center h-[8rem]">
        <div className="text-[#fff] flex items-center font-bold text-3xl w-[50%]">
          
          <div className="text-center">
            Pastebin
          </div>
          
        </div>
      </header>

      <div className="flex justify-center m-[2rem]">
        <div className="w-[50%] h-[70vh] p-[2rem] bg-[#555] rounded-lg text-[#fff]">
          <div className="bg-[#333] rounded-lg h-[60vh] p-[1rem]">
            
            <div className="bg-[#555] m-[1rem] p-[.5rem] rounded">
              <div className="bg-[#222] rounded p-[.25rem]">
                Title
              </div>
            </div>
            
            <div className="bg-[#555] m-[1rem] h-[40vh] p-[.75rem] rounded">
              <div id='editor-div' className=" bg-[#222] rounded p-[.25rem] h-[37vh]">
                {/* // & This is where I want my editor to appear */}
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-[#2ec116] font-bold w-[10rem] h-[2rem] rounded m-[1rem] align-right">
                Create Paste
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
