 import React,{useState} from 'react'
 import Modal from "react-modal";
 
 const App = () => {
   const [openModel,setopenModel] = useState(false) 
    Modal.setAppElement("body");
    const customStyles = {
      content: {
        top: "20%",
        left: "0",  
        width:'700px',
        margin:'auto'
      },
    };
   return (
     <div>
       <button onClick={() => setopenModel(true)}>Open Modal</button>
       <Modal
         style={customStyles}
         isOpen={openModel}
         onRequestClose={() => setopenModel(false)}
         
       >
         <p>
           node-sass Warning: LibSass and Node Sass are deprecated. While they
           will continue to receive maintenance releases indefinitely, there are
           no plans to add additional features or compatibility with any new CSS
           or Sass features. Projects that still use it should move onto Dart
           Sass. Node version support policy Supported Node.js versions vary by
           release, please consult the releases page. Node versions that hit end
           of life https://github.com/nodejs/Release, will be dropped from
           support at each node-sass release (major, minor). We will stop
           building binaries for unsupported releases, testing for breakages in
           dependency compatibility, but we will not block installations for
           those that want to support themselves. New node release require minor
           internal changes along with support from CI providers (AppVeyor,
           GitHub Actions). We will open a single issue for interested parties
           to subscribe to, and close additional issues. Below is a quick guide
           for minimum and maximum supported versions of node-sass:
         </p>
         <button onClick={() => setopenModel(false)}>Close Modal</button>
       </Modal>
     </div>
   );
 }
 
 export default App