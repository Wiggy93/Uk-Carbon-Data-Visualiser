# Data Visualisation of the UKs power mix

This site visualises in real-time the generation mix of the UK split into various renewables and non-renewables.

Deloyed at: https://ukcarbonstats.netlify.app

The home page shows the power generation mix for the last 30 minutes, with the ability to look at longer time periods.

Data sourced from: https://api.carbonintensity.org.uk/ and visualised using Google Charts

## Installation to run locally

Clone the repo:

    $ git clone https://github.com/Wiggy93/fe-react-data-visualisation.git

Installation if done using the npm install command to install all dependencies

    $ npm install

Change to the uk-carbon-stats directory, and run:

    $ npm start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

    $ npm run build

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### minimum dependency requirements

Node.js : v19.1.0

### Features coming soon:

Carbon intensity scores - nationally and mapped to a particular region.
