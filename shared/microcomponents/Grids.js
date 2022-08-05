import React, { Component } from 'react';
import css from "./Grids.css";

export function SimpleGrid(props) {
  return <div className="Grids_SimpleGrid">{props.children}</div>;
}

export function SimpleGridItem4(props) {
  return <div className="Grids_SimpleGridItem4">{props.children}</div>;
}

export function SimpleGridItem3(props) {
  return <div className="Grids_SimpleGridItem3">{props.children}</div>;
}