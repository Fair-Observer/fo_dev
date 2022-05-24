import React, { Component } from "react";
import Homepage_Page from "../pages/Homepage_Page.js"
import Article_Page from "../pages/Article_Page.js"
import User_Page from "../pages/User_Page.js"
import Dashboard_Page from "../pages/Dashboard_Page.js"

const routes = [
	{
		path: "/",
		component: Homepage_Page,
		exact: true
	},
	{
		path: "/article/:articleslug",
		component: Article_Page,
		exact: true
	},
	{
		path: "/community/:userslug",
		component: User_Page,
		exact: true
	},
	{
		path: "/myfo",
		component: Dashboard_Page,
		exact: true
	}
]

export default routes