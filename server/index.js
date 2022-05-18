import App from '../shared/App.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from "serialize-javascript";
import express from 'express';
import cors from 'cors';
import { ServerStyleSheet } from 'styled-components'; 
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://fo-dev.firebaseio.com"
});

const app = express();
app.use(cors({ origin: true }));


app.get('/article/:articleslug', (req, res, next) => {
  admin.firestore().collection("articles").doc(req.params.articleslug).get().then(response => {
    let initialData;
    let seodata;
    if(response.exists) {
      const data = response.data();
      initialData = data;
      initialData.type = "writing";
      // console.log("index.js data.subjects: ",subjects[data.subjects[0]])
      seodata = {
        title: `${data.title} | Fair Observer`,
        description: data.short,
        path: `/article/${req.params.articleslug}`
      }
    } else {
      initialData = {none:true,type:"article"}
    }
    sendresponse(req, res, next, initialData, seodata);
  }).catch(reason => {
    res.send(`<!doctype html>
      <head>
        <title>Error on Server</title>
      </head>
      <h1>Error on Server</h1>
      <p>${reason}</p>
    </html>`)
  })
});

app.get('*', (req, res, next) => {
  let seodata = {
    title: "Fair Observer",
    description: "Citizen Jounalism",
    path: "/"
  }
  sendresponse(req, res, next, {}, seodata);
  return
});

const seohtml = seo => {
  const __WEBSITE_URL__ = "https://fairobserver.com"
  return `
    <!-- Primary Meta Tags -->
    <title>${seo.title}</title>
    <meta name="title" content="${seo.title}">
    <meta name="description" content="${seo.description}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${__WEBSITE_URL__}${seo.path}">
    <meta property="og:title" content="${seo.title}">
    <meta property="og:description" content="${seo.description}">

    <!-- Twitter -->
    <meta property="twitter:url" content=content="${__WEBSITE_URL__}${seo.path}">
    <meta property="twitter:title" content="${seo.title}">
    <meta property="twitter:description" content="${seo.description}">
  `
}

function sendresponse(req, res, next, initialData, seodata) {  
  let initialDataToSend = {...initialData};
  initialDataToSend.url = req.url;
  initialDataToSend.seodata = seodata;
  const sheet = new ServerStyleSheet();
  const context = { initialData: initialDataToSend };

  let componentStream;
  componentStream = ReactDOMServer.renderToNodeStream(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <App req={req}/>
      </StaticRouter>
    )
  );
  const styles = sheet.getStyleTags(); 
  // const title = 'EDeeU Education';
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  const htmlStart = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" href="/favicon.png?${new Date().getTime()}">
        <meta name="author" content="Fair Observer">  
        ${seohtml(seodata)}
        <script>window.__FOinitialData__ = ${serialize(initialDataToSend)};window.__FOinitialPage__ = true</script>
        <style>!!!--STYLES-HERE--!!!</style>
      </head>
      <body>
        <div id="root">`
  res.write(htmlStart)
  componentStream.pipe(
    res,
    { end: false }
  )
  const htmlEnd = `</div>
        <script src="/index_bundle.js?${new Date().getTime()}">
        </script>
      </body>
    </html>`

  componentStream.on('end', () => {
      res.write(htmlEnd);
    res.end();
  });  
}

exports.httpServer = functions.https.onRequest(app);