# Backend API README

This backend provides the API for a simple social-style post app where users can upload an image and caption, and the app saves the post in MongoDB while storing the image in ImageKit.

## Features

- Express server for REST API routes
- File upload support using Multer
- Image upload to ImageKit
- MongoDB connection and schema model
- CORS enabled for frontend communication
- Post creation and retrieval endpoints

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Multer
- ImageKit
- dotenv

## Project Structure

```text
Backend/
├── server.js
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── .env
│   ├── db/
│   │   └── db.js
│   ├── models/
│   │   └── post.model.js
│   └── services/
│       └── storage.service.js
└── .gitignore
```

## Prerequisites

Before running the project, ensure you have:

- Node.js installed
- npm installed
- MongoDB database available
- ImageKit account and credentials

## Installation

1. Open the backend folder:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a file named `.env` inside the `src` folder:

```bash
Backend/src/.env
```

Add the following content:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id/
```

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/post-app
IMAGEKIT_PUBLIC_KEY=public_test_key
IMAGEKIT_PRIVATE_KEY=private_test_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id/
```

The app loads this file using:

```js
dotenv.config({ path: "./src/.env" });
```

## Running the Server

Start the backend server:

```bash
node server.js
```

If the server starts successfully, you should see:

```bash
server is running on port 3000
```

## API Endpoints

### 1. Create a post

```http
POST /create-post
```

Request type: `multipart/form-data`

Fields:

- `image` — uploaded image file
- `caption` — post caption text

Example using curl:

```bash
curl -X POST http://localhost:3000/create-post \
  -F "caption=Beautiful sunset" \
  -F "image=@/path/to/image.jpg"
```

### 2. Get all posts

```http
GET /create-post
```

Example:

```bash
curl http://localhost:3000/create-post
```

## How It Works

1. The frontend sends a form with image and caption.
2. Express receives the request in `src/app.js`.
3. Multer stores the uploaded file in memory.
4. The app uploads the image to ImageKit.
5. MongoDB saves the image URL and caption.
6. The API responds with the created post data.

## Database Connection

The app connects to MongoDB using the configuration in `src/db/db.js`.

A typical connection process includes:

```js
mongoose.connect(process.env.MONGO_URI);
```

## Post Model

The post schema is defined in `src/models/post.model.js` and contains:

- `image` — uploaded image URL
- `caption` — caption text
- timestamps generated automatically by Mongoose

## Common Issues

### Server not starting

Check:

- Node.js is installed
- dependencies were installed successfully
- `.env` exists in `src/.env`
- MongoDB URI is valid

### Image upload fails

Check:

- ImageKit public key is valid
- ImageKit private key is valid
- URL endpoint is correct

### MongoDB connection fails

Check:

- the MongoDB URI is correct
- your database user has permissions
- your server IP is allowed in MongoDB Atlas

## Scripts

The backend currently runs with:

```bash
node server.js
```

You can also add a start script to `package.json` if desired:

```json
"scripts": {
  "start": "node server.js"
}
```

Then run:

```bash
npm start
```

## Summary

This backend is a simple image post API that demonstrates:

- REST routes
- file uploads
- cloud image hosting
- MongoDB persistence
- frontend-to-backend integration
