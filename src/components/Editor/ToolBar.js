import React from "react";
import styled from "styled-components";
import { RenderInlineStyles } from "./InlineStyle";
import { RenderCustomStyles } from "./customStyles";

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  padding: 5px 7px;
  margin-bottom: 8px;
  border-radius: 2px 2px 0 0;
  box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;

export default class Toolbar extends React.Component {
  render() {
    return (
      <ToolbarContainer>
        <RenderInlineStyles
            editorState={this.props.editorState}
            updateEditorState={this.props.updateEditorState}
        />
      </ToolbarContainer>
    );
  }
}