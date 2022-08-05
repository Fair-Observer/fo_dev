import React, { Component } from 'react';
import css from "./Columns.css";

export function EditIcon(props) {
  return (
  	<div onClick={props.onClick} style={{backgroundColor:props.background?props.background:"transparent",marginLeft:"15px"}} className={`Pointer${props.background?" EditIconBackgroun":""}`}>
		<svg width="20" height="20" viewBox="0 0 20 20">
			<path style={{ fill: `${props.color?props.color:"#002f6c"}`}} className="editicon Pointer" d="M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zm-5.81-3.71L1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>
		</svg>
	</div>
  )
}

export function LeftChev(props) {
  return (
		<svg style={{verticalAlign:"middle"}} width={props.width?props.width:"40"} height={props.height?props.height:"40"} viewBox="0 0 50 50">
			<path style={{fill: "#484848"}} className="Pointer" d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"/>
		</svg>
  )
}

export function RightChev(props) {
  return (
		<svg style={{verticalAlign:"middle"}} width={props.width?props.width:"40"} height={props.height?props.height:"40"} viewBox="0 0 50 50">
			<path style={{fill: "#484848"}} className="Pointer" d="M22.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"/>
		</svg>
  )
}