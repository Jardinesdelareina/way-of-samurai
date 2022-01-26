import React from "react";
import { connect } from "react-redux";
import Names from "./Names";



const mapStateToProps = (state) => {
  return {
    nameData: state.dialogsPage.nameData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};

const NamesContainer = connect(mapStateToProps, mapDispatchToProps) (Names)

export default NamesContainer;
