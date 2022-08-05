import React, { Component } from 'react';
import css from "./Columns.css";

export function WideMaintrack(props) {
  return <div style={props.style?props.style:null} className={`Columns_WideMaintrack${props.className?props.className:""}`}>{props.children}</div>;
}

export function VeryWideMaintrack(props) {
  return <div style={props.style?props.style:null} className={`Columns_VeryWideMaintrack${props.className?props.className:""}`}>{props.children}</div>;
}

export function NarrowMaintrack(props) {
  return <div style={props.style?props.style:null} className={`Columns_NarrowMaintrack${props.className?props.className:""}`}>{props.children}</div>;
}

export function FlexCols(props) {
  return <div style={props.style?props.style:null} className={`Columns_FlexCols${props.className?props.className:""}`}>{props.children}</div>;
}