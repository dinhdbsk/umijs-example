import React from "react";
import {connect} from "dva";
import Redirect from "umi/redirect";

function Admin({login, loading}) {
  console.log(loading);
  return <h1>Admin Page</h1>;
}

function mapStateToProps(state) {
  return {
    login: state.global?.login,
    loading: state.loading.effects["global/login"]
  };
}

export default connect(mapStateToProps)(Admin);
