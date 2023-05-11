const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const private_key = "ed3e6131-4e82-492e-b82d-2b1ddba9b88e";

app.get("/getUsers", async (req, res) => {
    try {
        const r = await axios.get(
            "https://api.chatengine.io/users/",
            { headers: {"private-key" : private_key}}
        )
        return res.status(r.status).json(r.data);
      } catch (e) {
        return res.status(e.response.status).json(e.response.data);
      }
});

app.post("/createUser", async (req, res) => {
  const { username } = req.body;
  console.log(username);
  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username},
        { headers: {"private-key" : private_key}}
    )
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.delete("/deleteUser", async (req, res) => {
  const { id } = req.body;
  console.log(id)
  try {
    const r = await axios.delete(
        `https://api.chatengine.io/users/${id}`,
        { headers: {"private-key" : private_key}}
    )
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});


app.listen(3001);