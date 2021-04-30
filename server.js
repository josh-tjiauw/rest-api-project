require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000"
};

// Replace {subdomain} with your subdomain
// Replace {APP_ID} with the App ID
const requestEndpoint = "https://josh-tjiauw.kintone.com/k/v1/records.json?app=1";

// Replace {API_TOKEN} with your API token generated for the App specified in the App ID (from above)
app.get('/getData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-Cybozu-API-Token': process.env.API_TOKEN
    }
  }
  const response = await fetch(requestEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log('Example app listening at http://localhost:${PORT}');
});
