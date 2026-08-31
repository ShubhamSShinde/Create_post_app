// Import the packages needed for the app
const express = require("express");
const postModel = require("./models/post.model");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const cors = require("cors")

// Create the Express app
const app = express();



// Allow the app to read JSON data sent by the client
app.use(express.json());
app.use(cors())

// This lets us upload files in memory before sending them to ImageKit

// multer() → Initializes Multer.
// storage → Tells Multer where to store uploaded files.
// multer.memoryStorage() → Stores the uploaded file as a Buffer in memory, not on your hard disk.
// upload → Your configured Multer middleware.


const upload = multer({ storage: multer.memoryStorage() });


// Create a new post with an image and caption
app.post("/create-post", upload.single("image"), async (req, res) => {
  // Show the form data and uploaded image info for debugging
  console.log(req.body);
  console.log(req.file);


  // Upload the image to ImageKit and get its URL
  const result = await uploadFile(req.file.buffer);


  
  // Save the image URL and caption in MongoDB
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  // Send success response back to the client
  res.status(200).json({ Message: "Post created succesfully", post });

  console.log(result);
});



// Read all posts from the database
app.get("/create-post", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    Message: "Posts get succesfully",
    posts,
  });
});

// Export the app so the server file can use it
module.exports = app;
