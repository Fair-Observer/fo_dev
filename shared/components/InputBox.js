import React from 'react';
import ReactMarkdown from 'react-markdown';
import firebase from '../utils/firebase.js';
import TextareaAutosize from 'react-autosize-textarea';
// import rehypeRaw from 'rehype-raw'
// import { updateFirestore } from '../utils/functions.js';

import {EditIcon} from "../microcomponents/Icons.js";


function updateFirestore(collection,document,field,content,nextfunction = function(){}) {
  const db = firebase.firestore();
  let updates={};
  let correctcontent;
  if (typeof content == "string"){
    correctcontent = Number(content)?Number(content):content;
  } else {
    correctcontent = content;
  }
  updates[field] = correctcontent;
  db.collection(collection).doc(document).set(updates , { merge: true })
  .then(nextfunction)
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}


class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      content: (this.props.starttext?this.props.starttext:"") + (this.props.content?this.props.content:""),
    };    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let newState = {};
      newState["content"] = this.props.content;
      newState["editMode"] = false;
      this.setState(newState);
    }
  }

  handleChange(event) {
    event.preventDefault();
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    updateFirestore(this.props.collection,this.props.document,this.props.field,this.state.content)
    this.setState({editMode:false})
  }

  toggleEdit(){
    var newmode = !this.state.editMode; 
    this.setState({
      editMode: newmode
    });
  }


  render() {
    let propscontent = this.props.content
    if (this.props.replacetext) {
      propscontent = this.props.content.replace(this.props.replacetext[0],this.props.replacetext[1])
    }
    return (
        <div style={this.props.authorized?(this.state.editMode?{"position":"relative","paddingBottom":"0px"}:{"position":"relative","paddingBottom":"0px"}):null} className="InputBox">
          {this.props.textstyle?
            (!this.state.editMode?React.createElement(this.props.textstyle, {className:this.props.className}, (this.props.starttext?this.props.starttext:"") + (this.props.content?this.props.content.replace("\\n","\n"):null))
          :
            this.props.starttext ?React.createElement(this.props.textstyle, {className:this.props.className}, this.props.starttext): null
            )          
          :
            (!this.state.editMode?
              this.props.content ? <ReactMarkdown rehypePlugins={this.props.htmlAllowed?[rehypeRaw]:null} className={this.props.markdownClassName} >{propscontent}</ReactMarkdown> : null 
            :
              null
            )
          }
          {(this.props.authorized && this.state.editMode) && 
            <div>       
              <form style={{marginBottom:"5px"}} onSubmit={this.handleSubmit} name={this.props.dbname} >
                {
                  this.props.textstyle?
                    <input className={`${this.props.textstyle}input`} name="content" type="text" value={this.state.content} onChange={this.handleChange}/>
                  :
                    <TextareaAutosize name="content" type="text" value={this.state.content} className={this.props.markdownClassName} onChange={this.handleChange}/>
                }
                <input 
                  style={{left:0,bottom:"-2px","zIndex":"100", position:"absolute"}} 
                  type="submit" 
                  value="Save"
                />
                <input 
                  style={{right:0,bottom:"-2px","zIndex":"100", position:"absolute"}}
                  type="button" 
                  value="Cancel"
                  onClick={() => {
                    var newmode = !this.state.editMode; 
                    this.setState({
                      editMode: newmode,
                      content: this.props.content
                    });
                  }} 
                />
              </form>
            </div>
          }
          {(this.props.authorized && !this.state.editMode) &&
            <div
              style={{right:0,bottom:"-10px",position:"absolute"}}
              className="Pointer"
              onClick={() => {
                var newmode = !this.state.editMode; 
                this.setState({
                  editMode: newmode,
                  content: this.props.content
                });
              }}
            >
              <EditIcon/>      
            </div>
          }
        </div>
    );
  }
}

export default InputBox;
