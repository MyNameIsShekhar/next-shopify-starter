// pages/api/fetchData.js

import axios from 'axios';

const API_URL = 'https://media-fetch-api-002b.onrender.com/fetch_external_data?url=';
const PORT = 3000;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  try {
    const response = await axios.get(`${API_URL}${url}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

// Note: Make sure to update the API_URL to the correct environment variable name if it differs in your Next.js project

