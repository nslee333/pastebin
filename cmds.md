. .venv/bin/activate

pip install flask

flask --app hello run

flask run

flask run --debug


import { renderToStaticMarkup } from "react-dom/server";

// const output = document.createElement('div');


// function CodeEditor(): JSX.Element {


//   return (
//     <div id='editor-div' className=" bg-[#222] rounded p-[.25rem] h-[37vh]">
//         {/* // & This is where I want my editor to appear */}
//     </div>
//   );
// } 


// const staticElement = renderToStaticMarkup(CodeEditor());
// output.innerHTML = staticElement

// let myView = new EditorView({
//   extensions: [basicSetup],
//   parent: output
// });






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
              {/* <div id='editor-div' className=" bg-[#222] rounded p-[.25rem] h-[37vh]"> */}
                {/* // & This is where I want my editor to appear */}
              {/* </div> */}
              {/* {element} */}
              <CodeEditor />
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