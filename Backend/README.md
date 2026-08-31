# Backend Setup Guide

This backend is built with Node.js, Express, MongoDB, and ImageKit. It lets users create posts with an image and caption, saves the post in MongoDB, and uploads the image to ImageKit.

## 1. Prerequisites

Before starting, make sure you have:

- Node.js installed (recommended: v18 or higher)
- npm installed
- A MongoDB database
- An ImageKit account
- A code editor such as VS Code

## 2. Open the backend folder

In your terminal, go to the backend folder:

```bash
cd Backend
```

## 3. Install dependencies

Run:

```bash
npm install
```

This installs all required packages from package.json, including:

- express
- mongoose
- multer
- cors
- dotenv
- imagekit

## 4. Create environment variables

Create a file named `.env` inside the `src` folder:

```bash
src/.env
```

Add the following values:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/post-app
IMAGEKIT_PUBLIC_KEY=public_test_key
IMAGEKIT_PRIVATE_KEY=private_test_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id/
```

> The server loads this file with `dotenv` in `server.js` using `dotenv.config({ path: "./src/.env" })`.

## 5. Start the backend server

From the backend folder, run:

```bash
node server.js
```

If everything is configured correctly, you should see:

```bash
server is running on port 3000
```

## 6. Understand the project structure

Main files:

- `server.js` — starts the server and connects to MongoDB
- `src/app.js` — contains Express routes and API logic
- `src/db/db.js` — connects the app to MongoDB
- `src/models/post.model.js` — defines the post schema
- `src/services/storage.service.js` — uploads images to ImageKit

## 7. API endpoints

### Create a post

Endpoint:

```http
POST /create-post
```

Request format:

- Use `form-data`
- Field name: `image`
- Field name: `caption`

Example:

```bash
curl -X POST http://localhost:3000/create-post \
  -F "caption=Beautiful sunset" \
  -F "image=@/path/to/image.jpg"
```

This route:

1. Receives the uploaded image
2. Uploads the image to ImageKit
3. Saves the returned image URL and caption in MongoDB
4. Returns a success response

### Get all posts

Endpoint:

```http
GET /create-post
```

Example:

```bash
curl http://localhost:3000/create-post
```

## 8. How the backend works

The flow is:

1. Client sends a post request with an image and caption.
2. Express receives the request in `src/app.js`.
3. Multer stores the uploaded file in memory.
4. ImageKit uploads the image and returns a public URL.
5. The app saves `image` and `caption` into MongoDB.
6. The server responds with the saved post data.

## 9. Common problems and fixes

### MongoDB connection error

Check if:

- your MongoDB connection string is correct
- your IP is allowed in MongoDB Atlas
- the database user has permission

### ImageKit upload fails

Check if:

- `IMAGEKIT_PUBLIC_KEY` is correct
- `IMAGEKIT_PRIVATE_KEY` is correct
- `IMAGEKIT_URL_ENDPOINT` is valid

### Server does not start

Check:

- you are in the correct folder
- all packages are installed
- the `.env` file exists in `src/.env`

## 10. Build and run summary

Run these commands in order:

```bash
cd Backend
npm install
node server.js
```

Then use Postman, Thunder Client, or curl to test:

- `POST /create-post`
- `GET /create-post`

## 11. Optional improvement

If you want a cleaner workflow, you can add a start script in `package.json`:

```json
"scripts": {
  "start": "node server.js"
}
```

Then you can run:

```bash
npm start
```

## 12. Project goal

This backend is a simple image-post API that demonstrates:

- Express routing
- file upload handling
- cloud image storage
- MongoDB data persistence

If you want, I can also create a complete README for the frontend and add a full project setup guide for both backend and frontend together.
