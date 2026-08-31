# Frontend README

This frontend is built with React and Vite. It allows users to create a post with an image and caption and view all posts in a feed.

## Features

- Create post form with image upload
- Caption input
- Feed page to display all posts
- React Router for page navigation
- Axios requests to the backend API

## Tech Stack

- React
- Vite
- React Router DOM
- Axios
- CSS for styling

## Project Structure

```text
Frontend/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   └── pages/
│       ├── CreatePost.jsx
│       ├── CreatePost.css
│       ├── Feed.jsx
│       └── Feed.css
└── .gitignore
```

## Prerequisites

Before running the frontend, make sure you have:

- Node.js installed
- npm installed
- The backend server running on port 3000

## Installation

1. Open the frontend folder:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

## Run the App

Start the development server:

```bash
npm run dev
```

This usually starts the app at:

```text
http://localhost:5173
```

## Main Pages

### Create Post Page

The create post page sends a `FormData` object to the backend endpoint:

```http
POST http://localhost:3000/create-post
```

It includes:

- `image` file
- `caption` text

### Feed Page

The feed page retrieves all posts from:

```http
GET http://localhost:3000/create-post
```

Then it renders each post with:

- image
- caption

## Routing

The app uses React Router with routes like:

- `/` → default page
- `/create-post` → form for creating posts
- `/feed` → all posts feed

## API Connection

The frontend communicates with the backend using Axios.

Example:

```js
axios.post("http://localhost:3000/create-post", formData);
```

```js
axios.get("http://localhost:3000/create-post");
```

## Development Notes

If the backend is not running, the frontend requests will fail because it depends on the local API at port 3000.

Make sure both apps are running in separate terminals:

```bash
cd Backend
node server.js
```

```bash
cd Frontend
npm run dev
```

## Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Linting

Run eslint checks:

```bash
npm run lint
```

## Summary

This frontend is the client side of the post app and provides the user interface for:

- uploading a post image
- writing a caption
- viewing latest posts on the feed

It is designed to work with the backend API running locally on port 3000.
