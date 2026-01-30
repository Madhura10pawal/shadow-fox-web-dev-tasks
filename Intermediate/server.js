const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/clientDB",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Client = mongoose.model("Client", clientSchema);

app.post("/addClient", async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.send("Client added");
});

app.get("/clients", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

app.delete("/deleteClient/:id", async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
