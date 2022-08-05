import React, { Component } from 'react';
import InputBox from './InputBox.js'
// import css from "../../css/Article_Page_Styled.css";

class Article_Page_Styled extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="Article_Page_Styled_Body">
        <InputBox
          textstyle="h1"
          name="title"
          collection="articles"
          document={this.props.article.id}
          field="title"
          content={this.props.article.title}
          authorized={true}
        />
        <InputBox
          name="articleBody"
          collection="articles"
          document={this.props.article.id}
          field="articleBody"
          content={this.props.article.articleBody}
          authorized={true}
        />
      </div>
    )
  };
}


export default Article_Page_Styled