import React, { Component } from 'react';
import { Link } from "react-router-dom";
import css from "./Cards.css";

export function SettingCard(props) {
  return (
  	props.to?
  	<Link to={props.to} className="noUnderline">
	  	<div className="Cards_SettingCard">
	  		<h3 className="Cards_SettingCardText">{props.text}</h3>
	  	</div>
  	</Link>
  	:
  	<div className="Cards_SettingCard">
  		<h3 className="Cards_SettingCardText">{props.text}</h3>
  	</div>
  );
}

export function SuccessDiv(props) {
  return (
    <div className="Cards_SuccessDiv">
      <p className="marginBottomZero Cards_SuccessDivText">{props.text}</p>
    </div>
  );
}

export function ErrorDiv(props) {
  return (
    <div className="Cards_ErrorDiv">
      <p className="marginBottomZero Cards_ErrorDivText">{props.text}</p>
    </div>
  );
}

export function NoticeDiv(props) {
  return (
    <div className="Cards_NoticeDiv">
      <p className="marginBottomZero Cards_NoticeDivText">{props.text}</p>
    </div>
  );
}

export function Verified(props) {
  return (
    <span className="Cards_Verified">{props.text}</span>
  );
}

export function SmallProfilePreviewCard(props) {
  return (
    <Link to={`/learn/${props.profile.key?props.profile.key:null}`} className="hoverUnderline Pointer">
      <div className="SmallProfilePreviewCard hoverUnderline Pointer">
        <img className="SmallProfilePreviewCard_Image" src={props.profile.image_url?props.profile.image_url:null}/>
        <h3 className="SmallProfilePreviewCard_Text">{`${props.profile.firstname} ${props.profile.lastname}`}</h3>
      </div>
    </Link>
  )
}

export function SmallDirectorPreviewCard(props) {
  return (
    <Link to={`/director/${props.username?props.username:null}`} className="hoverUnderline Pointer">
      <div className="SmallProfilePreviewCard">
        <img className="SmallDirectorPreviewCard_Image" src={props.image_url?props.image_url:null}/>
        <h3 className="SmallProfilePreviewCard_Text">{`${props.displayname}`}</h3>
      </div>
    </Link>
  )
}

export function SmallDirectorPreviewCardNew(props) {
  return (
    <Link to={`/director/${props.userdirector.username?props.userdirector.username:null}`} className="hoverUnderline Pointer">
      <div className="SmallProfilePreviewCard">
        <img className="SmallDirectorPreviewCard_Image" src={props.userdirector.image_url?props.userdirector.image_url:null}/>
        <h3 className="SmallProfilePreviewCard_Text">{`${props.userdirector.formal_displayname}`}</h3>
      </div>
    </Link>
  )
}

export function SmallMemberPreviewCard(props) {
  return (
    <Link to={`/learn/${props.username?props.username:null}`} className="hoverUnderline Pointer">
      <div className="SmallProfilePreviewCard">
        <img className="SmallProfilePreviewCard_Image" src={props.image_url?props.image_url:null}/>
        <h3 className="SmallProfilePreviewCard_Text">{`${props.displayname}`}</h3>
      </div>
    </Link>
  )
}

export function SmallProfilePreviewCard_Self(props) {
  return (
      <div className="SmallProfilePreviewCard_Self">
        <img className="SmallProfilePreviewCard_Self_Image" src={props.profile.image_url?props.profile.image_url:null}/>
        <h3 className="SmallProfilePreviewCard_Self_Text">{`${props.profile.firstname} ${props.profile.lastname}`}</h3>
      </div>
  )
}

export function SmallProfileMenuImage(props) {
  return (
      <div className="SmallProfileMenuImage">
        <img onClick={props.onClick} alt="Profile Image" className="SmallProfileMenuImage_Image" src={props.profile.image_url?props.profile.image_url:null}/>
      </div>
  )
}
