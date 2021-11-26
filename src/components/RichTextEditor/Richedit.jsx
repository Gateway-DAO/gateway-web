//  import React,{useState} from 'react';
//  import {  EditorState,onEditorStateChange } from 'draft-js' ;
// import createEmojiPlugin from '@draft-js-plugins/emoji';
 import * as Styled from "./Style";
// // import '@draft-js-plugins/emoji/lib/plugin.css';
 import './editorStyles.css';
// //import './Style.jsx' ;

// //const {Editor, EditorState, RichUtils, getDefaultKeyBinding} = Draft;

// const emojiPlugin = createEmojiPlugin({
//   useNativeArt: true,
// });
// const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
// const plugins = [emojiPlugin];
// class RichEditor extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {editorState: EditorState.createEmpty()};

//       this.focus = () => this.refs.editor.focus();
//       this.onChange = (editorState) => this.setState({editorState});

//       this.handleKeyCommand = this._handleKeyCommand.bind(this);
//       this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
//       this.toggleBlockType = this._toggleBlockType.bind(this);
//       this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
//     }

//     _handleKeyCommand(command, editorState) {
//       const newState = RichUtils.handleKeyCommand(editorState, command);
//       if (newState) {
//         this.onChange(newState);
//         return true;
//       }
//       return false;
//     }

//     _mapKeyToEditorCommand(e) {
//       if (e.keyCode === 9 /* TAB */) {
//         const newEditorState = RichUtils.onTab(
//           e,
//           this.state.editorState,
//           4, /* maxDepth */
//         );
//         if (newEditorState !== this.state.editorState) {
//           this.onChange(newEditorState);
//         }
//         return;
//       }
//       return getDefaultKeyBinding(e);
//     }

//     _toggleBlockType(blockType) {
//       this.onChange(
//         RichUtils.toggleBlockType(
//           this.state.editorState,
//           blockType
//         )
//       );
//     }

//     _toggleInlineStyle(inlineStyle) {
//       this.onChange(
//         RichUtils.toggleInlineStyle(
//           this.state.editorState,
//           inlineStyle
//         )
//       );
//     }

//     render() {
//       const {editorState} = this.state;

//       // If the user changes block type before entering any text, we can
//       // either style the placeholder or hide it. Let's just hide it now.
      
//       let className = 'RichEditor-editor';
//       var contentState = editorState.getCurrentContent();
//       if (!contentState.hasText()) {
//         if (contentState.getBlockMap().first().getType() !== 'unstyled') {
//           className += ' RichEditor-hidePlaceholder';
//         }
//       }
//       // focus = () => {
//       //   this.editor.focus();
//       // };
//       return (
//           <Styled.RichEditor_root>
//           {/* <BlockStyleControls
//             editorState={editorState}
//             onToggle={this.toggleBlockType}
//           /> */}
//           <Styled.RichEditor_editor onClick={this.focus}>
//             <Editor
//               blockStyleFn={getBlockStyle}
//               customStyleMap={styleMap}
//               editorState={editorState}
//               plugins={plugins}
//               handleKeyCommand={this.handleKeyCommand}
//               keyBindingFn={this.mapKeyToEditorCommand}
//               onChange={this.onChange}
//               placeholder="We provide the ability for people to find their Web3 communties through an in-depth aggregator with dynamic ability for whitelisted addresses to change information!"
//               ref="editor"
//               // ref={(element) => {
//               //   this.editor = element;
//               // }}
//               spellCheck={true}
//             />
//             <EmojiSuggestions/>
//             <Styled.Controls>
//               <InlineStyleControls
//             editorState={editorState}
//             onToggle={this.toggleInlineStyle}
//           />
//           <Styled.EmojiPicketDiv>
//             <EmojiSelect closeOnEmojiSelect />
//           </Styled.EmojiPicketDiv>
//           </Styled.Controls>
//         <div >
          
//         </div>
//           </Styled.RichEditor_editor>
//           </Styled.RichEditor_root>
//       );
//     }
//   }

//   // Custom overrides for "code" style.
//   const styleMap = {
//     CODE: {
//       backgroundColor: 'rgba(0, 0, 0, 0.05)',
//       fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
//       fontSize: 16,
//       padding: 2,
//     },
//   };

//   function getBlockStyle(block) {
//     switch (block.getType()) {
//       case 'blockquote': return 'RichEditor-blockquote';
//       default: return null;
//     }
//   }

//   class StyleButton extends React.Component {
//     constructor() {
//       super();
//       this.onToggle = (e) => {
//         e.preventDefault();
//         this.props.onToggle(this.props.style);
//       };
//     }

//     render() {
//       let className = false;
//       if (this.props.active) {
//         className =true;
//       }
//       else{
//         className=false;
//       }
//       return (
        
//         <Styled.RichEditor_styleButton onMouseDown={this.onToggle}>
//           <label style={{
//           color: className ? "#f50cce" : 'white',
//           display: 'flex',
//           padding:"0"
//         }}>
//           {this.props.label}
//           </label>
//         </Styled.RichEditor_styleButton>
        
//       );
//     }
//   }

//   const BLOCK_TYPES = [
//     {label: 'H1', style: 'header-one'},
//     {label: 'H2', style: 'header-two'},
//     {label: 'H3', style: 'header-three'},
//     {label: 'H4', style: 'header-four'},
//     {label: 'H5', style: 'header-five'},
//     {label: 'H6', style: 'header-six'},
//     {label: 'Blockquote', style: 'blockquote'},
//     {label: 'UL', style: 'unordered-list-item'},
//     {label: 'OL', style: 'ordered-list-item'},
//     {label: 'Code Block', style: 'code-block'},
//   ];

//   const BlockStyleControls = (props) => {
//     const {editorState} = props;
//     const selection = editorState.getSelection();
//     const blockType = editorState
//       .getCurrentContent()
//       .getBlockForKey(selection.getStartKey())
//       .getType();

//     return (
//       <Styled.RichEditor_controls>
//         {BLOCK_TYPES.map((type) =>
//           <StyleButton
//             key={type.label}
//             active={type.style === blockType}
//             label={type.label}
//             onToggle={props.onToggle}
//             style={type.style}
//           />
//         )}
//       </Styled.RichEditor_controls>
//     );
//   };

//   var INLINE_STYLES = [
//     {label: "Bold", style: 'BOLD'},
//     {label: 'Italic', style: 'ITALIC'},
//     {label: 'Underline', style: 'UNDERLINE'},
//     {label: 'Monospace', style: 'CODE'},
//   ];

//   const InlineStyleControls = (props) => {
//     const currentStyle = props.editorState.getCurrentInlineStyle();
    
//     return (
       
//       <Styled.RichEditor_controls>
//         <div style={{
//         // backgroundColor: true ? 'blue' : 'transparent'
//         display : 'flex'
        
//        }}
//        >
//         {INLINE_STYLES.map((type) =>
//           <StyleButton
//             key={type.label}
//             active={currentStyle.has(type.style)}
//             label={type.label}
//             onToggle={props.onToggle}
//             style={type.style}
//           />
//         )}
//         </div>
//       </Styled.RichEditor_controls>
     
//     );
//   };
// import { Editor } from "react-draft-wysiwyg";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// function RichEditor(){
//   const [editorstate , setEditorstate]=useState(EditorState.createEmpty());

//   const onEditorStateChange=(editorState) => 
//   {setEditorstate(editorState)
//   console.log(editorstate);
//   };

//   return (
//     <div>
      
//        <Styled.RichEditor_root>
//     {/* <Styled.RichEditor_editor>  */}
//      <Editor  
//      editorState = {editorstate}
//      onEditorStateChange={onEditorStateChange}
//      toolbarClassName = "flex sticky top-0 z-50 !justify-cener mx-auto"
//      editorClassName = "mt-6 p-10 shadow-lg max-w-5xl mx-auto mb-12 border"
//       ></Editor>
//       {/* </Styled.RichEditor_editor> */}
    //  </Styled.RichEditor_root>
//     </div>
//   )
// }
import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import * as Emoji from "quill-emoji";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import parser from "html-react-parser";

Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/emoji", Emoji);

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }],
  [{ align: [] }],
  ["image", "emoji"]
];
const RichEditor = () => {

  const [text, setText] = useState("");

  return (
    <div className="App">
      <Styled.RichEditor_root>
      <ReactQuill
        value={text}
        onChange={(val) => setText(val)}
        modules={{
          imageResize: {
            // parchment: Quill.import('parchment'),
            modules: ["Resize", "DisplaySize"]
          },
          toolbar: {
            container: TOOLBAR_OPTIONS
          },
          "emoji-toolbar": true,
          "emoji-textarea": false,
          "emoji-shortname": true
        }}
      />
      {/* <button onClick={() => console.log(text)}>Print</button>
  
      <div id="output">{parser(text)}</div> */}
      </Styled.RichEditor_root>
    </div>
  );
};

 export default RichEditor ;