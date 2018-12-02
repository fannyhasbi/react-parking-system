import React from 'react';

import PerfectScrollbar from 'perfect-scrollbar';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header, Footer, Sidebar } from '../../components';

import dashboardRoutes from '../../routes/dashboard';

var ps;

class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hasLoggedIn: false
    }
  }
  
  componentDidMount() {
    // check whether the user has logged in or not
    if(sessionStorage.getItem("id_officer")){
      this.setState({ hasLoggedIn: true });
    }
    else {
      this.setState({ hasLoggedIn: false });
    }

    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.refs.mainPanel.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }

  render(){
    if(!this.state.hasLoggedIn)
      return <Redirect to="/login" />

    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={dashboardRoutes} />
        <div className="main-panel" ref="mainPanel">
          <Header {...this.props} />
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.collapse) {
                return prop.views.map((prop2, key2) => {
                  return (
                    <Route
                      path={prop2.path}
                      component={prop2.component}
                      key={key2}
                    />
                  );
                });
              }
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          <Footer fluid />
        </div>
      </div>
    )
  }
}

export default Dashboard;