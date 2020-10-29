# Hack Hate 2020

A hackathon project for [HackHate 2020](https://www.eventbrite.co.uk/e/hack-hate-the-hackathon-against-hate-crime-tickets-120116372303).

The repostory is a React frontend that interacts with a [Elastic Search](https://www.elastic.co/) backend. Elastic Search components are from the [Searchkit project](https://github.com/searchkit/searchkit).

## Starting the UI

The project is managed by npm:

```bash
npm install
npm run
```

The UI should then be available at http://localhost:3000

## Elastic Search

This project uses a public Elastic instance with anonymous read access: http://18.134.149.85:9200. Complete REST documentation can be found at https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html.

The Elastic instance also has Kibana: http://18.134.149.85:5601/

### Useful Elastic Curl Commands

The following could be useful to investigate Elastic.

Empty search that returns everything:

```bash
curl -X POST 18.134.149.85:9200/hackhate-raw-3/_search -H 'Content-Type: application/json' | jq .
```

Simple search query for "363":

```bash
curl -X POST 18.134.149.85:9200/hackhate-raw-3/_search -H 'Content-Type: application/json' -d'{"query": { "simple_query_string": {"query": "363", "fields": ["*"] } }, "_source": true }' | jq .
```

List mappings:

```bash
curl -X GET 18.134.149.85:9200/hackhate-raw-3/_mapping -H 'Content-Type: application/json' --user username:password | jq .
```


## React Documentation

*The following is from the original React project starter.*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
