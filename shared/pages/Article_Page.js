import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase_app from '../utils/firebase.js'
import { isBrowser, isNode } from 'browser-or-node';
import { isEqual } from 'underscore';
import Article_Page_Styled from '../components/Article_Page_Styled.js';


export default class Article_Page extends Component {
  constructor(props) {
    super(props);
    if (isBrowser && window.__FOinitialData__ && this.props.initialData && (this.props.initialData.type === "article")) {
      let initialData = this.props.initialData;
      this.state = {article:initialData};
      delete window.__FOinitialData__;
      window.__FOinitialData__ = false;
    } else if (isNode) {
      this.state = {article:this.props.initialData};
    } else {
      this.state = {article:{pending:true}}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getArticleData = this.getArticleData.bind(this);
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getArticleData();
  }

  componentWillUnmount() {
    if (this.listener1) {
      this.listener1()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("article shouldComponentUpdate this.state: ", this.state)
    // console.log("article shouldComponentUpdate nextState: ", nextState)
    // console.log("article shouldComponentUpdate this.props: ", this.props)
    // console.log("article shouldComponentUpdate nextProps: ", nextProps)
    if (isEqual(this.state.article,nextState.article) && isEqual(this.props.authorized,nextProps.authorized) && isEqual(this.props.user,nextProps.user) && isEqual(this.props.userdata,nextProps.userdata)) {
      // console.log("On reflection, article not updating.");
      return false;
    } else {
      // console.log("On reflection, article updating.")
      return true;
    }
  }

  getArticleData() {
    const articleid = this.props.match.params.articleslug;
    console.log("ID iee:",articleid);
    console.log(firebase_app)
    this.listener1 = firebase_app.firestore().collection("articles").doc(articleid).onSnapshot(result => {
      // console.log("Firestore update triggered!");
      if (result.exists) {
        let data = result.data();
        data.type = "article";
        this.setState({article: data});
      }
    }, function(error) {
      // console.log("article.js getArticleData error: ", error);
    });
  }

  render() {
    return (
      (this.state.article && !this.state.article.pending && !this.state.article.none && this.state.article.type == "article") ?
        <Article_Page_Styled 
        	article = {this.state.article}
        />
      :
        <p>Waiting...</p>
    );
  }
}


