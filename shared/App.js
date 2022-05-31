import React, { Component } from "react";
import {Switch, Route, Link} from "react-router-dom";
import routes from "./utils/routes.js";
import { isBrowser, isNode } from 'browser-or-node';
import styles from "./css/general.css";

class InjectRoute extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount() {
    this.props.setRoute(this.props.route)
  }

  render() {
    return this.props.children;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      route: {path:isBrowser?window.__FOinitialData__.url:this.props.req.url},
    }
    this.setRoute = this.setRoute.bind(this);
  }


  setRoute(route) {
    this.setState({
      route:route
    });
  }

  render() {
    return (
      <div className="AppDiv">
          <Switch>
            {routes.map((route, i) => 
              {
                return (
                  <Route 
                    key={i}
                    path={route.path}
                    exact={route.exact}
                    render=
                    {
                      (props) => {
                        let initialData;
                        if(isNode) {
                          initialData = props.staticContext.initialData;
                        } else {
                          initialData = window.__FOinitialData__;
                          // console.log("InitialData: ",initialData)
                          // console.log("props.match.params: ",props.match.params);
                          if(window.__FOinitialPage__) {
                            // console.log("Initial page true!")
                          } else {
                            // console.log("Initial page false!")
                          }
                        }

                        // console.log("initialData from App.js <Route />: ",JSON.stringify(initialData));
                        // console.log("props from App.js <Route />: ",JSON.stringify(props))
                        return (
                          <InjectRoute setRoute={this.setRoute} route={route} key={i}>
                            {React.createElement(
                              route.component,
                              {
                                path:this.setRoute,
                                initialData:initialData,
                                ...props
                              }
                            )}
                          </InjectRoute>
                        )
                      }
                    }
                  />
                )
              }
            )}     
          </Switch>
      </div>
    )
  }
}

