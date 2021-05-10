import React from "react";
import withRouter from "umi/withRouter";
import {connect} from "dva";
import styles from "./index.css";
import Nprogress from "nprogress";
import {Redirect} from "umi";

function BasicLayout({children, loading, location: {pathname, search, query},}) {
  if (!loading["global"]) {
    Nprogress.start();
  }

  if (!loading["global"]) {
    Nprogress.done();
  }

  console.log("loading ==>", loading);


  const BootstrappedLayout = () => {
    if (true) {
      return <Redirect to={"admin"}/>;
    }
  };

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {BootstrappedLayout()}
      {children}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default withRouter(connect(mapStateToProps)(BasicLayout));
