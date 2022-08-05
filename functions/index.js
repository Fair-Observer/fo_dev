/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/App.js */ \"./shared/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase-functions */ \"firebase-functions\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_functions__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_10__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\nfirebase_admin__WEBPACK_IMPORTED_MODULE_10__.initializeApp({\n  credential: firebase_admin__WEBPACK_IMPORTED_MODULE_10__.credential.applicationDefault(),\n  databaseURL: \"https://fo-dev.firebaseio.com\"\n});\nvar app = express__WEBPACK_IMPORTED_MODULE_6___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_7___default()({\n  origin: true\n}));\napp.get('/article/:articleslug', function (req, res, next) {\n  console.log(\"Article\");\n  console.log(req.params.articleslug);\n  firebase_admin__WEBPACK_IMPORTED_MODULE_10__.firestore().collection(\"articles\").doc(req.params.articleslug).get().then(function (response) {\n    var initialData;\n    var seodata;\n\n    if (response.exists) {\n      var data = response.data();\n      initialData = data;\n      initialData.type = \"article\"; // \n\n      seodata = {\n        title: \"\".concat(data.title, \" | Fair Observer\"),\n        description: data[\"short\"],\n        path: \"/article/\".concat(req.params.articleslug)\n      };\n    } else {\n      initialData = {\n        none: true,\n        type: \"article\"\n      };\n    }\n\n    sendresponse(req, res, next, initialData, seodata);\n  })[\"catch\"](function (reason) {\n    res.send(\"<!doctype html>\\n      <head>\\n        <title>Error on Server</title>\\n      </head>\\n      <h1>Error on Server</h1>\\n      <p>\".concat(reason, \"</p>\\n    </html>\"));\n  });\n});\napp.get('/community/:userslug', function (req, res, next) {\n  console.log(\"Community: \", req.params.userslug);\n  firebase_admin__WEBPACK_IMPORTED_MODULE_10__.firestore().collection(\"community\").doc(req.params.userslug).get().then(function (response) {\n    console.log(response.exists);\n    var initialData;\n    var seodata;\n\n    if (response.exists) {\n      console.log(\"Found\");\n      var data = response.data();\n      initialData = data;\n      initialData.type = \"community\"; // \n\n      seodata = {\n        title: \"Fair Observer\",\n        description: \"A Fair Observer community member\",\n        path: \"/community/\".concat(req.params.userslug)\n      };\n    } else {\n      initialData = {\n        none: true,\n        type: \"community\"\n      };\n    }\n\n    sendresponse(req, res, next, initialData, seodata);\n  })[\"catch\"](function (reason) {\n    res.send(\"<!doctype html>\\n      <head>\\n        <title>Error on Server</title>\\n      </head>\\n      <h1>Error on Server</h1>\\n      <p>\".concat(reason, \"</p>\\n    </html>\"));\n  });\n});\napp.get('*', function (req, res, next) {\n  console.log(\"Generic\");\n  var seodata = {\n    title: \"Fair Observer\",\n    description: \"Citizen Jounalism\",\n    path: \"/\"\n  };\n  sendresponse(req, res, next, {}, seodata);\n  return;\n});\n\nvar seohtml = function seohtml(seo) {\n  var __WEBSITE_URL__ = \"https://fairobserver.com\";\n  return \"\\n    <!-- Primary Meta Tags -->\\n    <title>\".concat(seo.title, \"</title>\\n    <meta name=\\\"title\\\" content=\\\"\").concat(seo.title, \"\\\">\\n    <meta name=\\\"description\\\" content=\\\"\").concat(seo.description, \"\\\">\\n\\n    <!-- Open Graph / Facebook -->\\n    <meta property=\\\"og:type\\\" content=\\\"website\\\">\\n    <meta property=\\\"og:url\\\" content=\\\"\").concat(__WEBSITE_URL__).concat(seo.path, \"\\\">\\n    <meta property=\\\"og:title\\\" content=\\\"\").concat(seo.title, \"\\\">\\n    <meta property=\\\"og:description\\\" content=\\\"\").concat(seo.description, \"\\\">\\n\\n    <!-- Twitter -->\\n    <meta property=\\\"twitter:url\\\" content=content=\\\"\").concat(__WEBSITE_URL__).concat(seo.path, \"\\\">\\n    <meta property=\\\"twitter:title\\\" content=\\\"\").concat(seo.title, \"\\\">\\n    <meta property=\\\"twitter:description\\\" content=\\\"\").concat(seo.description, \"\\\">\\n  \");\n};\n\nfunction sendresponse(req, res, next, initialData, seodata) {\n  var initialDataToSend = _objectSpread({}, initialData);\n\n  initialDataToSend.url = req.url;\n  initialDataToSend.seodata = seodata;\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_8__.ServerStyleSheet();\n  var context = {\n    initialData: initialDataToSend\n  };\n  var componentStream;\n  componentStream = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default().renderToNodeStream(sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_shared_App_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    req: req\n  }))));\n  var styles = sheet.getStyleTags(); // const title = 'EDeeU Education';\n\n  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');\n  var htmlStart = \"<!doctype html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"utf-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n        <link rel=\\\"icon\\\" type=\\\"image/png\\\" href=\\\"/favicon.png?\".concat(new Date().getTime(), \"\\\">\\n        <meta name=\\\"author\\\" content=\\\"Fair Observer\\\">  \\n        \").concat(seohtml(seodata), \"\\n        <script>window.__FOinitialData__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(initialDataToSend), \";window.__FOinitialPage__ = true</script>\\n        <style>/*!**************************************************************************************!*\  !*** css ./node_modules/css-loader/dist/cjs.js!./shared/microcomponents/Columns.css ***!  \**************************************************************************************//* NarrowMaintrack */.Columns_NarrowMaintrack {  max-width: 600px;  margin: auto;  padding: 15px;  flex-grow: 1;}@media (max-width: 600px) {  .Columns_NarrowMaintrack {    width: 100%;  }}.EditIconBackgroun {  width: 30px;  height: 30px;  display: inline-flex;  justify-content: center;  align-items: center;}/* WideMaintrack */.Columns_WideMaintrack {  width: 900px;  margin: auto;  padding: 15px;  flex-grow: 1;}@media (max-width: 900px) {  .Columns_WideMaintrack {    width: 100%;  }}/* VeryWideMaintrack */.Columns_VeryWideMaintrack {  width: 1100px;  margin: auto;  padding: 15px;  flex-grow: 1;}@media (max-width: 1100px) {  .Columns_VeryWideMaintrack {    width: 100%;  }}/* FlexCols */.Columns_FlexCols {  display: flex;  flex-direction: row;}@media (max-width: 500px) {  .Columns_FlexCols {    flex-direction: column;  }} /*!**************************************************************************!*\  !*** css ./node_modules/css-loader/dist/cjs.js!./shared/css/general.css ***!  \**************************************************************************/body {	background-color: lightblue;}#Main_App_Container {	background-color: white;    display: flex;    flex-direction: column;    justify-content: space-between;    min-height: 100vh;}.marginAuto {	margin: auto;}.positionAbsolute {	position: absolute;}.positionRelative {	position: relative;}.bottom30px {	bottom: 30px;}.fullScreenDiv{	width:100vw;	height:100vh}.textAlignCenter {	text-align: center;}.marginBottomZero {	margin-bottom: 0;}.noWidth {	width: initial;}.noscroll { 	overflow: hidden;}.none {	display: none;}.marginTop15px {	margin-top: 15px;}.margin15px {	margin: 15px;}.fullWidth {  width: 100%;}.width180px {	width: 180px;	}.width100percent {	width: 100%;}.marginTopM3px {	margin-top: -3px;}.marginLeftZero {	margin-left: 0!important;}.marginBottom30px {	margin-bottom: 30px;}.marginBottom20px {	margin-bottom: 20px;}.marginTop30px{	margin-top: 30px;}.Pointer {	cursor: pointer;}.flexDirectionRow {	flex-direction: row;}.noUnderline {	text-decoration: none;}.floatLeft {	float: left;}.floatRight {	float: right;}.colorWhite {	color: white;}.hoverUnderline {	text-decoration: none;}.hoverUnderline:hover {	text-decoration: underline;}.textDecorationNone {	text-decoration: none!important;}.blueText {	color: #002f6c;}.showLessThan700 {	display: none;}.hideLessThan700 {	display: inherit;}.location_Display {	font-weight: 300;}@media (max-width: 700px) {  .showLessThan700 {    display: inherit;  }  .hideLessThan700 {    display: none;  }}.Carousel_Container_Box{  display: block;  padding-left: 30px;  padding-right: 0px;  margin-bottom: 30px;  margin-top: 0;  background-size: cover;  background-position: center;}.Maintrack {  padding: 15px;  max-width: 900px;  margin: auto;}.slick-next:before, .slick-prev:before {    color: #000!important;    transform: translateX(-29px);}.slick-next {  transform: translateX(-29px) translateY(-6px);  right: 5px!important;}.slick-prev {  transform: translateX(0px) translateY(-6px);}.slick-track{    display: flex !important;}.slick-slide{    height: inherit !important;    display: flex!important;}hr {	margin-top: 0;	margin-bottom: 10px;	background-color: lightgrey;	height: 2px;	color: lightgrey;	width: 100%;}h1 {	margin-top: 0px;	margin-bottom: 20px;		font-weight: 300;	font-size: 40px;	letter-spacing: 0.5px;	color: #484848;}.h1input {	margin-top: 0px;	margin-bottom: 20px;		font-weight: 300;	font-size: 40px;	letter-spacing: 0.5px;	color: #484848;	margin-bottom: 15px;	width: 100%;}@media(max-width: 700px) {  h1 {  font-size: 32px;	}	 .h1input {  font-size: 32px;  margin-bottom: 15px;  width: 100%;	}}h2 {	margin-top: 0;	margin-bottom: 10px;		font-weight: 400;	font-size: 24px; 	color: #484848;}.h2input {	margin-top: 0;	margin-bottom: 10px;		font-weight: 400;	font-size: 24px; 	color: #484848;	margin-bottom: 15px;	width: 100%;}h3 {	margin-top: 0;	margin-bottom: 10px;	font-weight: 400;	font-size: 18px; 	color: #484848;	}.h3input {	margin-top: 0;	margin-bottom: 10px;	font-weight: 400;	font-size: 18px; 	color: #484848;		margin-bottom: 15px;	width: 100%;}h4 {	margin-top: 0;	margin-bottom: 20px;	font-weight: 700;	font-size: 16px; 	color: #484848;}.h4input {	margin-top: 0;	margin-bottom: 20px;	font-weight: 700;	font-size: 16px; 	color: #484848;	margin-bottom: 15px;	width: 100%;}p {	margin-top: 0;	margin-bottom: 15px;	font-weight: 400;	font-size: 16px; 	color: #484848;	text-decoration: none;}.react-datepicker__input-container input {	margin-top: 0;	margin-bottom: 15px;	font-weight: 400;	font-size: 16px; 	color: #484848!important;	width: 220px;	background-color: white;	-webkit-text-fill-color: #484848!important;	opacity: 1!important;; /* required on iOS */}.pinput {	margin-top: 0;	margin-bottom: 15px;	font-weight: 400;	font-size: 16px; 	color: #484848;	margin-bottom: 15px;	width: 100%;}.standardinput {	width: 100%;}ul {	margin-top: 0;	margin-bottom: 15px;	margin-left: 30px;	font-weight: inherit;	font-size: inherit; 	color: inherit;	color: #484848;}ol {	margin-top: 0;	margin-bottom: 15px;	margin-left: 30px;	font-weight: inherit;	font-size: inherit; 	color: inherit;	color: #484848;}li {	margin-top: 0;	margin-bottom: 6px;	font-weight: inherit;	font-size: inherit; 	color: inherit;	color: #484848;}summary {	margin-top: 0;	margin-bottom: 10px;	font-weight: inherit;	font-size: inherit; 	color: inherit;	color: #484848;  -webkit-touch-callout: none;  -webkit-user-select: none;  -khtml-user-select: none;  -moz-user-select: none;  -ms-user-select: none;  user-select: none;  outline: none;}textarea {	width: 100%;	margin-top: 0;	margin-bottom: 20px;	font-weight: 400;	font-size: 16px; 	color: #484848;	border: 0.5px solid lightgrey;}a {	font: inherit;	font-size: inherit;	font-weight: inherit;	color: inherit;}label {	margin-top: 0;	margin-bottom: 0;	font-weight: 400;	font-size: 18px; 	color: #484848;	}img {	display: block;}.littleInput {	margin-bottom: 10px;	border: solid lightgrey 0.1px;	width: 100%;	height: 25px;	font-weight: 400;	font-size: 16px; 	color: #002f6c;	padding: 5px;}.topTitle {	margin-top: 10px;}.bigInput {    margin-left: 20px;    margin-bottom: 18px;    border: solid lightgrey 1px;    border-radius: 7px;    width: calc(100% - 40px);    height: 35px;    font-weight: 300;    font-size: 18px;    color: #484848;    padding: 12px 12px 14px 10px;}.bigInput:focus {    border: solid #002f6c 1px;}.bigButton {	background-color: #002f6c;	margin-left: 20px;  margin-bottom: 18px;  border: none;  border-radius: 7px;  width: calc(100% - 40px);  font-weight: 400;  font-size: 20px;  color: white;  padding: 15px;  text-align: center;  cursor: pointer;  height: 54px;}.bigMessageSenderButton {	background-color: #002f6c;	margin: auto;  margin-bottom: 18px;  border: none;  border-radius: 7px;  max-width: 600px;  font-weight: 400;  font-size: 20px;  color: white;  padding: 15px;  text-align: center;  cursor: pointer;  height: 54px;}.bigSubjectButton {	background-color: #002f6c;  margin-bottom: 18px;  border: none;  border-radius: 7px;  width: calc(100% - 40px);  font-weight: 400;  font-size: 20px;  color: white;  padding: 15px;  text-align: center;  cursor: pointer;  height: 54px;}.bigEventbriteButton {	background-color: #002f6c;  margin-bottom: 18px;  border: none;  border-radius: 7px;  width: calc(100% - 40px);  font-weight: 400;  font-size: 20px;  color: white;  padding: 15px;  text-align: center;  cursor: pointer;  height: 54px;}.smallButton {	background-color: #002f6c;	margin-bottom: 18px;	padding: 4px;  border: none;  border-radius: 3px;  font-weight: 400;  font-size: 16px;  color: white;  text-align: center;  cursor: pointer;}.bigButton:hover {	background-color: #043e86;}.smallButton:hover {	background-color: #043e86;}.greenButton {	background-color: #4f7a8c;}.greenButton:hover {	background-color: #5d8ea2;}.tanButton {	background-color: #8c7c68;}.tanButton:hover {	background-color: #9c8b75;}.purpleButton {	background-color: #564188;}.purpleButton:hover {	background-color: #6c579e;}.bigAButton {background-color: #002f6c;  border: none;  border-radius: 7px;  width: calc(100% - 40px);  font-weight: 400;  font-size: 20px;  color: white;  padding: 15px;  text-align: center;  cursor: pointer;  text-decoration: none;  height: 54px;}.bigAButton:hover {	background-color: #043e86;}.Modal_Styled {  position:fixed;  margin: auto;  padding: 10px 20px 20px 20px;  width: 600px;  background-color: white;  text-align: left;  left: calc(50% - 300px);  z-index: 10;}@media (max-width: 650px) {	.Modal_Styled {			width: 100%;		top: 0;		left: 0;		bottom: 0;		right: 0;	}	.Modal_Grey_Cover {		background-color: white;	}}.Modal_Grey_Cover {  padding: 60px;  position: fixed;  top: 0;  left: 0;  background-color: rgba(0, 0, 0, 0.75);  width: 100vw;  height: 100vh;  z-index: 9;  text-align: center;}.Modal_S {  margin-bottom: 10px;  font-size: 32px;  font-weight: 100;}.Modal_Xbox {  margin-bottom: 5px;}.CalendarInvite {	padding: 8px 15px;    border-radius: 10px;    font-size: 16px;    font-weight: 400;    color: white;    background-color: #002f6c;}.CalendarInvite:hover {	background-color: #043e86;	cursor: pointer;}textarea{	width: 100%;}.HeadingLink {   margin: 0;  padding: 0;  color: white;     text-decoration: none;}form{	margin-bottom: 0px;}.ApplicationFormGroup {	display: flex;	flex-direction: column;	justify-content: left;	align-items: stretch;	margin-bottom: 0;}.ApplicationForm {}.radiogroup {	margin-bottom: 10px;	display: flex;	flex-direction: row;	align-items: center;}/* to the body element */.noscroll { overflow: hidden; }.none {display: none; }.InputBox > p > img {	vertical-align: middle;}.InputBox {	width: 100%;}.applicationLine {	font-size: 18px;	color:#002f6c;	margin-bottom: 15px;}.applicationLineEssay {	font-size: 16px;	color:#002f6c;	margin-bottom: 15px;}.ApplicationFormSelect {	width: 190px;	height: 28px;	font-size: 18px;	color:#002f6c;}.modalLabel {}.ApplicationFormOption {		color:#002f6c;}.SubjectCarouselNoScriptDiv {	display: flex;  width: 100%;  padding: 0 15px 30px 15px;}.SubjectCarouselNoScriptA {	width: 20%;  margin: 0 15px;}@media (max-width: 1400px) {	.SubjectCarouselNoScriptA {		width: 25%;	}	.SubjectCarouselNoScriptA:nth-child(1) {		display: none;	}}@media (max-width: 1100px) {	.SubjectCarouselNoScriptA {		width: 33.33333%;	}	.SubjectCarouselNoScriptA:nth-child(2) {		display: none;	}}@media (max-width: 800px) {	.SubjectCarouselNoScriptA {		width: 50%;	}	.SubjectCarouselNoScriptA:nth-child(3) {		display: none;	}}.Waiting_Container {	width: 100%;	margin: auto;	text-align: center;	height: 300px;	padding-top: 148px;}.Waiting_Container_Short {	width: 100%;	margin: auto;	text-align: center;	height: 130px;	padding-top: 63px;}.Waiting_Img {	margin-left: auto;	margin-right: auto;	position: relative;	margin-top: 148px;	margin-bottom: 148px;}.Waiting_Img_Short {	margin-left: auto;	margin-right: auto;	margin-top: 63px;	margin-bottom: 63px;	position: relative;}.BottomLink {    color: #afafaf;    font-size: 20px;    text-decoration: none;}.TopLeftLink {    color: #afafaf;    font-size: 20px;    text-decoration: none;}.newPInput {	padding: 10px;    border: 0.5px solid #dadada;    border-radius: 6px;	font-size: 16px; 	color: #484848;	margin-bottom: 15px;}.newPInput:focus {    border: 1px solid #3162a2}.buttonText {	color: #3162a2;	cursor: pointer;	text-decoration: none;}.buttonText:hover {	text-decoration: underline;}.buttonTextInactive{	color: #3162a2;	text-decoration: none;}.smallLinkText {	color: #3162a2;	cursor: pointer;	font-size: 12px;	text-decoration: none;}.smallLinkText:hover {	text-decoration: underline;}.Modal_XboxNoex {	display: none;}.list {  user-select: none;}.item {  cursor: grab;  user-select: none;}.dragged {  cursor: grabbing;}.reactMarkdownContainer > *:last-child {	margin-bottom: 0;}@media (max-width: 700px) {  .Maintrack {    width: 100%;  }  	.Modal_XboxNoex {		display: block;	}}</style>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\");\n  res.write(htmlStart);\n  componentStream.pipe(res, {\n    end: false\n  });\n  var htmlEnd = \"</div>\\n        <script src=\\\"/index_bundle.js?\".concat(new Date().getTime(), \"\\\">\\n        </script>\\n      </body>\\n    </html>\");\n  componentStream.on('end', function () {\n    res.write(htmlEnd);\n    res.end();\n  });\n}\n\nexports.httpServer = firebase_functions__WEBPACK_IMPORTED_MODULE_9__.https.onRequest(app);\n\n//# sourceURL=webpack://fo_dev/./server/index.js?");

/***/ }),

/***/ "./shared/App.js":
/*!***********************!*\
  !*** ./shared/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_routes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/routes.js */ \"./shared/utils/routes.js\");\n/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! browser-or-node */ \"browser-or-node\");\n/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(browser_or_node__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _css_general_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/general.css */ \"./shared/css/general.css\");\n/* harmony import */ var _css_general_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_general_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar InjectRoute = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(InjectRoute, _React$Component);\n\n  var _super = _createSuper(InjectRoute);\n\n  function InjectRoute(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InjectRoute);\n\n    _this = _super.call(this, props);\n    _this.componentDidMount = _this.componentDidMount.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(InjectRoute, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.setRoute(this.props.route);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.props.children;\n    }\n  }]);\n\n  return InjectRoute;\n}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));\n\nvar App = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);\n\n  var _super2 = _createSuper(App);\n\n  function App(props) {\n    var _this2;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);\n\n    _this2 = _super2.call(this, props);\n    _this2.state = {\n      route: {\n        path: browser_or_node__WEBPACK_IMPORTED_MODULE_10__.isBrowser ? window.__FOinitialData__.url : _this2.props.req.url\n      }\n    };\n    _this2.setRoute = _this2.setRoute.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this2));\n    return _this2;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{\n    key: \"setRoute\",\n    value: function setRoute(route) {\n      this.setState({\n        route: route\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", {\n        className: \"AppDiv\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null, _utils_routes_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].map(function (route, i) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n          key: i,\n          path: route.path,\n          exact: route.exact,\n          render: function render(props) {\n            var initialData;\n\n            if (browser_or_node__WEBPACK_IMPORTED_MODULE_10__.isNode) {\n              initialData = props.staticContext.initialData;\n            } else {\n              initialData = window.__FOinitialData__; // console.log(\"InitialData: \",initialData)\n              // console.log(\"props.match.params: \",props.match.params);\n\n              if (window.__FOinitialPage__) {// console.log(\"Initial page true!\")\n              } else {// console.log(\"Initial page false!\")\n              }\n            } // console.log(\"initialData from App.js <Route />: \",JSON.stringify(initialData));\n            // console.log(\"props from App.js <Route />: \",JSON.stringify(props))\n\n\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(InjectRoute, {\n              setRoute: _this3.setRoute,\n              route: route,\n              key: i\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(route.component, _objectSpread({\n              path: _this3.setRoute,\n              initialData: initialData\n            }, props)));\n          }\n        });\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_7__.Component);\n\n\n\n//# sourceURL=webpack://fo_dev/./shared/App.js?");

/***/ }),

/***/ "./shared/components/Article_Page_Styled.js":
/*!**************************************************!*\
  !*** ./shared/components/Article_Page_Styled.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _InputBox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputBox.js */ \"./shared/components/InputBox.js\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import css from \"../../css/Article_Page_Styled.css\";\n\nvar Article_Page_Styled = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Article_Page_Styled, _Component);\n\n  var _super = _createSuper(Article_Page_Styled);\n\n  function Article_Page_Styled(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Article_Page_Styled);\n\n    return _super.call(this, props);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Article_Page_Styled, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", {\n        className: \"Article_Page_Styled_Body\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_InputBox_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        textstyle: \"h1\",\n        name: \"title\",\n        collection: \"articles\",\n        document: this.props.article.id,\n        field: \"title\",\n        content: this.props.article.title,\n        authorized: true\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_InputBox_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        name: \"articleBody\",\n        collection: \"articles\",\n        document: this.props.article.id,\n        field: \"articleBody\",\n        content: this.props.article.articleBody,\n        authorized: true\n      }));\n    }\n  }]);\n\n  return Article_Page_Styled;\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article_Page_Styled);\n\n//# sourceURL=webpack://fo_dev/./shared/components/Article_Page_Styled.js?");

/***/ }),

/***/ "./shared/components/InputBox.js":
/*!***************************************!*\
  !*** ./shared/components/InputBox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_firebase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/firebase.js */ \"./shared/utils/firebase.js\");\n/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-autosize-textarea */ \"react-autosize-textarea\");\n/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _microcomponents_Icons_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../microcomponents/Icons.js */ \"./shared/microcomponents/Icons.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import rehypeRaw from 'rehype-raw'\n// import { updateFirestore } from '../utils/functions.js';\n\n\n\nfunction updateFirestore(collection, document, field, content) {\n  var nextfunction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};\n  var db = _utils_firebase_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].firestore();\n  var updates = {};\n  var correctcontent;\n\n  if (typeof content == \"string\") {\n    correctcontent = Number(content) ? Number(content) : content;\n  } else {\n    correctcontent = content;\n  }\n\n  updates[field] = correctcontent;\n  db.collection(collection).doc(document).set(updates, {\n    merge: true\n  }).then(nextfunction)[\"catch\"](function (error) {\n    console.error(\"Error writing document: \", error);\n  });\n}\n\nvar InputBox = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InputBox, _React$Component);\n\n  var _super = _createSuper(InputBox);\n\n  function InputBox(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InputBox);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      editMode: false,\n      content: (_this.props.starttext ? _this.props.starttext : \"\") + (_this.props.content ? _this.props.content : \"\")\n    };\n    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    _this.componentDidUpdate = _this.componentDidUpdate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    _this.toggleEdit = _this.toggleEdit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InputBox, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (this.props !== prevProps) {\n        var newState = {};\n        newState[\"content\"] = this.props.content;\n        newState[\"editMode\"] = false;\n        this.setState(newState);\n      }\n    }\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      event.preventDefault();\n      var newState = {};\n      newState[event.target.name] = event.target.value;\n      this.setState(newState);\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      updateFirestore(this.props.collection, this.props.document, this.props.field, this.state.content);\n      this.setState({\n        editMode: false\n      });\n    }\n  }, {\n    key: \"toggleEdit\",\n    value: function toggleEdit() {\n      var newmode = !this.state.editMode;\n      this.setState({\n        editMode: newmode\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var propscontent = this.props.content;\n\n      if (this.props.replacetext) {\n        propscontent = this.props.content.replace(this.props.replacetext[0], this.props.replacetext[1]);\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        style: this.props.authorized ? this.state.editMode ? {\n          \"position\": \"relative\",\n          \"paddingBottom\": \"0px\"\n        } : {\n          \"position\": \"relative\",\n          \"paddingBottom\": \"0px\"\n        } : null,\n        className: \"InputBox\"\n      }, this.props.textstyle ? !this.state.editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(this.props.textstyle, {\n        className: this.props.className\n      }, (this.props.starttext ? this.props.starttext : \"\") + (this.props.content ? this.props.content.replace(\"\\\\n\", \"\\n\") : null)) : this.props.starttext ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(this.props.textstyle, {\n        className: this.props.className\n      }, this.props.starttext) : null : !this.state.editMode ? this.props.content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react_markdown__WEBPACK_IMPORTED_MODULE_7___default()), {\n        rehypePlugins: this.props.htmlAllowed ? [rehypeRaw] : null,\n        className: this.props.markdownClassName\n      }, propscontent) : null : null, this.props.authorized && this.state.editMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"form\", {\n        style: {\n          marginBottom: \"5px\"\n        },\n        onSubmit: this.handleSubmit,\n        name: this.props.dbname\n      }, this.props.textstyle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"input\", {\n        className: \"\".concat(this.props.textstyle, \"input\"),\n        name: \"content\",\n        type: \"text\",\n        value: this.state.content,\n        onChange: this.handleChange\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react_autosize_textarea__WEBPACK_IMPORTED_MODULE_9___default()), {\n        name: \"content\",\n        type: \"text\",\n        value: this.state.content,\n        className: this.props.markdownClassName,\n        onChange: this.handleChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"input\", {\n        style: {\n          left: 0,\n          bottom: \"-2px\",\n          \"zIndex\": \"100\",\n          position: \"absolute\"\n        },\n        type: \"submit\",\n        value: \"Save\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"input\", {\n        style: {\n          right: 0,\n          bottom: \"-2px\",\n          \"zIndex\": \"100\",\n          position: \"absolute\"\n        },\n        type: \"button\",\n        value: \"Cancel\",\n        onClick: function onClick() {\n          var newmode = !_this2.state.editMode;\n\n          _this2.setState({\n            editMode: newmode,\n            content: _this2.props.content\n          });\n        }\n      }))), this.props.authorized && !this.state.editMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        style: {\n          right: 0,\n          bottom: \"-10px\",\n          position: \"absolute\"\n        },\n        className: \"Pointer\",\n        onClick: function onClick() {\n          var newmode = !_this2.state.editMode;\n\n          _this2.setState({\n            editMode: newmode,\n            content: _this2.props.content\n          });\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_microcomponents_Icons_js__WEBPACK_IMPORTED_MODULE_10__.EditIcon, null)));\n    }\n  }]);\n\n  return InputBox;\n}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBox);\n\n//# sourceURL=webpack://fo_dev/./shared/components/InputBox.js?");

/***/ }),

/***/ "./shared/microcomponents/Icons.js":
/*!*****************************************!*\
  !*** ./shared/microcomponents/Icons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EditIcon\": () => (/* binding */ EditIcon),\n/* harmony export */   \"LeftChev\": () => (/* binding */ LeftChev),\n/* harmony export */   \"RightChev\": () => (/* binding */ RightChev)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Columns_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Columns.css */ \"./shared/microcomponents/Columns.css\");\n/* harmony import */ var _Columns_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Columns_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction EditIcon(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: props.onClick,\n    style: {\n      backgroundColor: props.background ? props.background : \"transparent\",\n      marginLeft: \"15px\"\n    },\n    className: \"Pointer\".concat(props.background ? \" EditIconBackgroun\" : \"\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"20\",\n    height: \"20\",\n    viewBox: \"0 0 20 20\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    style: {\n      fill: \"\".concat(props.color ? props.color : \"#002f6c\")\n    },\n    className: \"editicon Pointer\",\n    d: \"M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zm-5.81-3.71L1 14.25V19h4.75l9.96-9.96-4.75-4.75z\"\n  })));\n}\nfunction LeftChev(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    style: {\n      verticalAlign: \"middle\"\n    },\n    width: props.width ? props.width : \"40\",\n    height: props.height ? props.height : \"40\",\n    viewBox: \"0 0 50 50\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    style: {\n      fill: \"#484848\"\n    },\n    className: \"Pointer\",\n    d: \"M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z\"\n  }));\n}\nfunction RightChev(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    style: {\n      verticalAlign: \"middle\"\n    },\n    width: props.width ? props.width : \"40\",\n    height: props.height ? props.height : \"40\",\n    viewBox: \"0 0 50 50\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    style: {\n      fill: \"#484848\"\n    },\n    className: \"Pointer\",\n    d: \"M22.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z\"\n  }));\n}\n\n//# sourceURL=webpack://fo_dev/./shared/microcomponents/Icons.js?");

/***/ }),

/***/ "./shared/pages/Article_Page.js":
/*!**************************************!*\
  !*** ./shared/pages/Article_Page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Article_Page)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_auth__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_firebase_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/firebase.js */ \"./shared/utils/firebase.js\");\n/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! browser-or-node */ \"browser-or-node\");\n/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(browser_or_node__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! underscore */ \"underscore\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_Article_Page_Styled_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Article_Page_Styled.js */ \"./shared/components/Article_Page_Styled.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar Article_Page = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Article_Page, _Component);\n\n  var _super = _createSuper(Article_Page);\n\n  function Article_Page(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Article_Page);\n\n    _this = _super.call(this, props);\n\n    if (browser_or_node__WEBPACK_IMPORTED_MODULE_11__.isBrowser && window.__FOinitialData__ && _this.props.initialData && _this.props.initialData.type === \"article\") {\n      var initialData = _this.props.initialData;\n      _this.state = {\n        article: initialData\n      };\n      delete window.__FOinitialData__;\n      window.__FOinitialData__ = false;\n    } else if (browser_or_node__WEBPACK_IMPORTED_MODULE_11__.isNode) {\n      _this.state = {\n        article: _this.props.initialData\n      };\n    } else {\n      _this.state = {\n        article: {\n          pending: true\n        }\n      };\n    }\n\n    _this.componentDidMount = _this.componentDidMount.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    _this.getArticleData = _this.getArticleData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    _this.shouldComponentUpdate = _this.shouldComponentUpdate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    _this.componentWillUnmount = _this.componentWillUnmount.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Article_Page, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.scrollTo(0, 0);\n      this.getArticleData();\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      if (this.listener1) {\n        this.listener1();\n      }\n    }\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      // console.log(\"article shouldComponentUpdate this.state: \", this.state)\n      // console.log(\"article shouldComponentUpdate nextState: \", nextState)\n      // console.log(\"article shouldComponentUpdate this.props: \", this.props)\n      // console.log(\"article shouldComponentUpdate nextProps: \", nextProps)\n      if ((0,underscore__WEBPACK_IMPORTED_MODULE_12__.isEqual)(this.state.article, nextState.article) && (0,underscore__WEBPACK_IMPORTED_MODULE_12__.isEqual)(this.props.authorized, nextProps.authorized) && (0,underscore__WEBPACK_IMPORTED_MODULE_12__.isEqual)(this.props.user, nextProps.user) && (0,underscore__WEBPACK_IMPORTED_MODULE_12__.isEqual)(this.props.userdata, nextProps.userdata)) {\n        // console.log(\"On reflection, article not updating.\");\n        return false;\n      } else {\n        // console.log(\"On reflection, article updating.\")\n        return true;\n      }\n    }\n  }, {\n    key: \"getArticleData\",\n    value: function getArticleData() {\n      var _this2 = this;\n\n      var articleid = this.props.match.params.articleslug;\n      console.log(\"ID iee:\", articleid);\n      console.log(_utils_firebase_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n      this.listener1 = _utils_firebase_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].firestore().collection(\"articles\").doc(articleid).onSnapshot(function (result) {\n        // console.log(\"Firestore update triggered!\");\n        if (result.exists) {\n          var data = result.data();\n          data.type = \"article\";\n\n          _this2.setState({\n            article: data\n          });\n        }\n      }, function (error) {// console.log(\"article.js getArticleData error: \", error);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.state.article && !this.state.article.pending && !this.state.article.none && this.state.article.type == \"article\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Article_Page_Styled_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        article: this.state.article\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"p\", null, \"Waiting...\");\n    }\n  }]);\n\n  return Article_Page;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n\n\n//# sourceURL=webpack://fo_dev/./shared/pages/Article_Page.js?");

/***/ }),

/***/ "./shared/pages/Dashboard_Page.js":
/*!****************************************!*\
  !*** ./shared/pages/Dashboard_Page.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dashboard_Page)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Dashboard_Page = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Dashboard_Page, _Component);\n\n  var _super = _createSuper(Dashboard_Page);\n\n  function Dashboard_Page(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dashboard_Page);\n\n    return _super.call(this, props);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dashboard_Page, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"p\", null, \"This is the Fair Observer dashboard page.\"));\n    }\n  }]);\n\n  return Dashboard_Page;\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n\n\n\n//# sourceURL=webpack://fo_dev/./shared/pages/Dashboard_Page.js?");

/***/ }),

/***/ "./shared/pages/Homepage_Page.js":
/*!***************************************!*\
  !*** ./shared/pages/Homepage_Page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Homepage_Page)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Homepage_Page = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Homepage_Page, _Component);\n\n  var _super = _createSuper(Homepage_Page);\n\n  function Homepage_Page(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Homepage_Page);\n\n    return _super.call(this, props);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Homepage_Page, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"p\", null, \"This is the Fair Observer homepage.\"));\n    }\n  }]);\n\n  return Homepage_Page;\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n\n\n\n//# sourceURL=webpack://fo_dev/./shared/pages/Homepage_Page.js?");

/***/ }),

/***/ "./shared/pages/User_Page.js":
/*!***********************************!*\
  !*** ./shared/pages/User_Page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User_Page)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar User_Page = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(User_Page, _Component);\n\n  var _super = _createSuper(User_Page);\n\n  function User_Page(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, User_Page);\n\n    return _super.call(this, props);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(User_Page, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"p\", null, \"This is the Fair Observer community page.\"));\n    }\n  }]);\n\n  return User_Page;\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n\n\n\n//# sourceURL=webpack://fo_dev/./shared/pages/User_Page.js?");

/***/ }),

/***/ "./shared/utils/firebase.js":
/*!**********************************!*\
  !*** ./shared/utils/firebase.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // For Firebase JS SDK v7.20.0 and later, measurementId is optional\n\nvar config = {\n  apiKey: \"AIzaSyDot0rRO6VlRjyEBVv-qYbVl0CtJZCH6gI\",\n  authDomain: \"fo-dev-87c2c.firebaseapp.com\",\n  projectId: \"fo-dev-87c2c\",\n  storageBucket: \"fo-dev-87c2c.appspot.com\",\n  messagingSenderId: \"473971860175\",\n  appId: \"1:473971860175:web:48c4921f46831599b18dba\",\n  measurementId: \"G-MJR3H9ZTJE\"\n};\nfirebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(config);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (!(firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(config) : firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default().app());\n\n//# sourceURL=webpack://fo_dev/./shared/utils/firebase.js?");

/***/ }),

/***/ "./shared/utils/routes.js":
/*!********************************!*\
  !*** ./shared/utils/routes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Homepage_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Homepage_Page.js */ \"./shared/pages/Homepage_Page.js\");\n/* harmony import */ var _pages_Article_Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Article_Page.js */ \"./shared/pages/Article_Page.js\");\n/* harmony import */ var _pages_User_Page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/User_Page.js */ \"./shared/pages/User_Page.js\");\n/* harmony import */ var _pages_Dashboard_Page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Dashboard_Page.js */ \"./shared/pages/Dashboard_Page.js\");\n\n\n\n\n\nvar routes = [{\n  path: \"/\",\n  component: _pages_Homepage_Page_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}, {\n  path: \"/article/:articleslug\",\n  component: _pages_Article_Page_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true\n}, {\n  path: \"/community/:userslug\",\n  component: _pages_User_Page_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  exact: true\n}, {\n  path: \"/myfo\",\n  component: _pages_Dashboard_Page_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  exact: true\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://fo_dev/./shared/utils/routes.js?");

/***/ }),

/***/ "./shared/css/general.css":
/*!********************************!*\
  !*** ./shared/css/general.css ***!
  \********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://fo_dev/./shared/css/general.css?");

/***/ }),

/***/ "./shared/microcomponents/Columns.css":
/*!********************************************!*\
  !*** ./shared/microcomponents/Columns.css ***!
  \********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://fo_dev/./shared/microcomponents/Columns.css?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "browser-or-node":
/*!**********************************!*\
  !*** external "browser-or-node" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("browser-or-node");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase-admin");

/***/ }),

/***/ "firebase-functions":
/*!*************************************!*\
  !*** external "firebase-functions" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase-functions");

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/compat/app");

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/compat/auth");

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/compat/firestore");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-autosize-textarea":
/*!******************************************!*\
  !*** external "react-autosize-textarea" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-autosize-textarea");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-markdown");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("serialize-javascript");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "underscore":
/*!*****************************!*\
  !*** external "underscore" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("underscore");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;