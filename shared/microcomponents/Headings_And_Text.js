import React, { Component } from 'react';
import css from "./Headings_And_Text.css";

export function H1(props) {
  return <h1 className="Headings_And_Text_H1">{props.children}</h1>;
}

export function MainH1(props) {
  return <div><h1 className="Headings_And_Text_MainH1">{props.children}</h1><hr/></div>;
}

export function H2(props) {
  return <h2 className="Headings_And_Text_H2">{props.children}</h2>;
}

export function H3(props) {
  return <h3 className="Headings_And_Text_H3">{props.children}</h3>;
}

export function H4(props) {
  return <h4 className="Headings_And_Text_H4">{props.children}</h4>;
}

export function H5(props) {
  return <h5 className="Headings_And_Text_H5">{props.children}</h5>;
}

export function H6(props) {
  return <h6 className="Headings_And_Text_H6">{props.children}</h6>;
}

export function P(props) {
  return <p className="Headings_And_Text_P">{props.children}</p>;
}


