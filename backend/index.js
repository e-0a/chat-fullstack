const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put('https://api.chatengine.io/users/', 
    { username: username, secret: username, first_name: username },
    { headers: { "private-key": "ba75349d-613b-4706-9375-72ebf8962ad8" }}
    );
    return res.status

  } catch (e) {

  }
});

app.listen(3001);