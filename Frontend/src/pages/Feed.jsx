import { useEffect, useState } from "react";
import "./Feed.css";
import axios from "axios";


// Frontend: Axios → "Hey backend, give me the notes."
// Backend: Express → "Sure, here's the notes."

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/create-post").then((res) => {
      console.log(res.data);
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <main className="feed-page">
      <section className="feed-section">
        <header className="feed-heading">
          <div>
            <p className="feed-eyebrow">Community feed</p>
            <h1>See what is happening.</h1>
          </div>
          <span className="feed-count">{posts.length} posts</span>
        </header>

        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post._id} className="post-card">
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
            </article>
          ))
        ) : (
          <div className="feed-empty">
            <div className="empty-mark" aria-hidden="true">
              +
            </div>
            <h2>No posts yet</h2>
            <p>
              Your feed is quiet for now. Share something and start the
              conversation.
            </p>
            <a className="empty-action" href="/create-post">
              Create a post <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        )}
      </section>
    </main>
  );
};

export default Feed;
