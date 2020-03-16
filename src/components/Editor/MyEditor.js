import React from 'react';
import { EditorState, Editor as DraftEditor } from "draft-js";
import Toolbar from "./ToolBar";
import { customStyleFn } from "./customStyles";
import styled from "styled-components";

//Root Wrapper of the Editor 
 export const EditorWrapper = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 3em;
`;
//DraftEditor Container 
export const EditorContainer = styled.div`
  display: flex;
  min-height: 9em;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  padding: 5px;
  font-size: 17px;
  font-weight: 300;
  box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        //Make sure to create an empty instance of the EditorState
        this.state = {
          editorState: EditorState.createEmpty()
        };
      }
      //Method for updating the EditorState with a new one
      updateEditorState(editorState) {
        this.setState({ editorState });
      }

  render() {
    const { editorState } = this.state;
    return (

        <EditorWrapper>
         <Toolbar
          editorState={editorState}
          updateEditorState={this.updateEditorState.bind(this)}
        />
        <EditorContainer>
            <DraftEditor
            placeholder="Explore Your Way In..."
            editorState={this.state.editorState}
            onChange={this.updateEditorState.bind(this)}
            customStyleFn={customStyleFn}
            />
        </EditorContainer>
      </EditorWrapper>
    //   <Editor editorState={this.state.editorState} placeholder='hello i am here' onChange={this.onChange} />
    );
  }
}
export default MyEditor;