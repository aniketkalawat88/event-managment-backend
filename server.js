const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors")
const connectDB = require("./config/db");
connectDB();
app.use(express.json());

app.use(cors());
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
