import React from 'react';
import './BlogPage.css';
import Navbar from '../../components/Navbar/Navbar';

function BlogPage() {
  return (
    <div className="App">
      <div className="blog-container">
        <div className="blog-main-content">
          <div className="user-card">
            <h2>👤 user_01</h2>
            <div className="main-post"></div>
          </div>
          <div className="other-users">
            <div className="user-entry">👤 user_02</div>
            <div className="user-entry">👤 user_20</div>
            <div className="user-entry">👤 user_absd</div>
            <div className="user-entry">👤 user_123</div>
            <div className="user-entry">👤 user_123</div>
            <div className="user-entry">👤 user_123</div>
          </div>
        </div>
        <aside className="featured-posts">
          <h3>Featured Posts</h3>
          <div className="featured-post">👤 user_213</div>
          <div className="featured-post">👤 user_542</div>
          <div className="featured-post">👤 user_124</div>
          <div className="featured-post">👤 user_124</div>
          <div className="featured-post">👤 user_124</div>
          <div className="featured-post">👤 user_124</div>
          <div className="featured-post">👤 user_124</div>
        </aside>
      </div>
    </div>
  );
}

export default BlogPage;
