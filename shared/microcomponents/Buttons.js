import React, { Component } from 'react';
import css from "./Buttons.css";
import { Link } from "react-router-dom";

export function SimpleButton(props) {
	if (!props.to) {
	  return (
	  	<button
	  		style = {props.style}
	  		disabled={props.disabled} 
	  		className={`Buttons_SimpleButton Pointer ${props.className}`} 
	  		onClick={props.onClick}
	  	>
	  		<h3 style={!props.color?{"color":"white"}:{}} className="marginBottomZero">{props.waiting?"...":props.text}</h3>
	  	</button>
	  )
	} else {
		if (props.plain) {
			return (
				<a 
					href={props.to} 
					className={`Buttons_SimpleButton Pointer ${props.className}`} 
					style={props.style}
					target={props.target}
				>
		  		<h3 style={!props.color?{"color":"white"}:{}} className="marginBottomZero noUnderline">{props.waiting?"...":props.text}</h3>
				</a>
			)
		} else {
	  	return (
				<Link 
					to={props.to} 
					{...props}
					className={`Buttons_SimpleButton Pointer ${props.className}`} 
					style={props.style}
					target={props.target}
				>
		  		<h3 style={!props.color?{"color":"white"}:{}} className="marginBottomZero noUnderline">{props.waiting?"...":props.text}</h3>
				</Link>
	  	)
		}
	}
}