# Phone REST API<img src="https://images.ctfassets.net/5gv1edeicqfs/bomBQDobMA6eyu4CkuYmM/6f5debe74cf1e335bb0be7e3ecbba40b/gs-logo.png" height="50px" align="right" margin="5px 0"/>

Phone REST API is built mainly with NodeJS. Every tool used will be detailed on the *Dependencies* section 

This project is for the *Interview Code Challenge* by *GuideSmiths*.



![GitHub last commit](https://img.shields.io/github/last-commit/JaimeDordio/phones-react)

## 🚩 Getting Started

These instructions will get you a copy of the project up and running on your local machine for start using it.

### Installing

A step by step series of examples that tell you how to get a development environment running.

Installing dependencies

```bash
$ npm install
```

Starting on local

```bash
$ npm start
```



## ℹ️ Endpoints

The only REST API endpoint is described below.

## Get list of Phones

### Request

`GET /phones`

```bash
curl -i -H 'Accept: application/json' https://phones-api-jaimedordio.herokuapp.com/phones
```

### Response

```json
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 2673
Etag: W/"a71-+e1weys3r0E/k9zK6qH/rX9hwFk"
Date: Weekday, Day Month Year HH:MM:SS GMT
Via: 1.1 vegur
```



## 🖇 Dependencies

They are in the `package.json` file.

- [ExpressJS](https://expressjs.com) - Promise based HTTP client



## 🛠 Built With

* [NodeJS](https://nodejs.org/) - JavaScript runtime
* [NPM](https://www.npmjs.com) - Package manager



## 🚀 Deployment

### Heroku

This project uses [Heroku](https://www.heroku.com).

Live version can be found on this domain: **[phones-api-jaimedordio.herokuapp.com](https://phones-api-jaimedordio.herokuapp.com/)**.



## 👤 Authors

* Jaime Dordio - [www.jaimedordio.com](www.jaimedordio.com)



## 📄 License

[MIT](LICENSE)