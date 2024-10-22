const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();  // Load environment variables

connectDB();  // Connect to MongoDB

const app = express();

app.use(express.json());  // Parse incoming JSON requests

app.use(
	cors({
		origin: process.env.ORIGIN,  // Allow requests from your frontend origin
		methods: ["GET", "PUT", "POST", "DELETE"],
		credentials: true,  // Allow cookies and other credentials in cross-origin requests
	})
);

// Define your routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/auctions", require("./routes/auctionRoutes"));
app.use("/api/bids", require("./routes/bidRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
