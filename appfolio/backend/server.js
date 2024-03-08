const express = require('express');
const axios = require('axios'); // Import Axios
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors()); // Use the cors middleware

app.post('/slack-proxy', async (req, res) => {
  try {
    const response = await axios.post('https://hooks.slack.com/services/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', req.body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    res.status(500).json({ error: 'Failed to send message to Slack' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});