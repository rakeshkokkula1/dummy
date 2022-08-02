const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(process.env.PORT || 4000, () => {
  console.log("Server started!")
})
