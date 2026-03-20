import { useState } from "react";

const Reviews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([
    {
      id: 1,
      username: "StickMan123",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJKSYHfOBBKY-cdczA98vV6nmveKCHR0RuQ&s",
      comment:
        "I found the website easy to use and very straightforward. The layout made it simple to browse products without feeling overwhelmed.",
    },
    {
      id: 2,
      username: "JinGoat",
      avatar:
        "https://images.coolpfp.com/generated/jin-woo-pfp-1768649619771-18.png",
      comment:
        "Everything felt organized and easy to understand. It was a stress-free way to look through different options.",
    },
    {
      id: 3,
      username: "MrsKittens10",
      avatar:
        "https://galaxypfp.com/wp-content/uploads/2025/10/aesthetic-cute-cat-pfp.webp",
      comment:
        "I had a really positive experience using this site. Everything was clearly organized, and I was able to find what I needed without any confusion. The added trust information made me feel more confident while browsing. Overall, the process felt smooth and reliable from start to finish.",
    },
    {
      id: 4,
      username: "BeserkBeserk",
      avatar:
        "data:image/jpeg;base64,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",
      comment:
        "The site was simple to navigate and made browsing feel quick and easy. I liked how clean everything looked.",
    },
  ]);

  const handleAddReview = () => {
    if (title === "" || description === "") {
      alert("Please use at least both fields.");
      return;
    }
    setReviews([
      {
        id: 5,
        username: "You",
        avatar:
          "https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg",
        comment: description,
        header: title,
      },
      ...reviews,
    ]);
    setDescription("");
    setTitle("");
    console.log(reviews);
  };

  const handleDelete = () => {
    setReviews(reviews.filter(review => review.id != 5));
  }

  return (
    <div className="reviews-page">
      <main className="reviews-container">
        <div className="reviews-layout-grid">
          <section className="reviews-list-column">
            <header className="reviews-header-row">
              <h1 className="site-domain-title">lvfurniturecollection.com</h1>
              <div className="filter-group">
                <span>Filter:</span>
                <select className="filter-select">
                  <option value="newest">Newest</option>
                  <option value="top">Top</option>
                </select>
              </div>
            </header>
            <div className="reviews-stack">
              {reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-user-info">
                    <img
                      src={review.avatar}
                      alt="User Avatar"
                      className="user-avatar-sm"
                    />
                    <span className="review-username">{review.username}</span>
                  </div>
                  <div className="review-title">{review.header}</div>
                  <p className="review-text">{review.comment}</p>
                  <div className="trashcan-reply">
                  <button className="reply-link">
                    <span className="reply-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-message-circle-more-icon lucide-message-circle-more"
                      >
                        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                        <path d="M8 12h.01" />
                        <path d="M12 12h.01" />
                        <path d="M16 12h.01" />
                      </svg>
                    </span>{" "}
                    Reply
                  </button>
                  {review.id === 5 &&
                  <button className="reply-link" onClick={handleDelete}>
                    <span className="reply-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-trash-icon lucide-trash"
                      >
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M3 6h18" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </span>{" "}
                    Delete
                  </button>}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <aside className="create-review-column">
            <div className="create-review-card">
              <h2 className="form-header">CREATE REVIEW</h2>
              <div className="review-form">
                <div className="form-field">
                  <label>Title:</label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="form-input"
                  />
                </div>
                <div className="form-field">
                  <label>Description:</label>
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="form-textarea"
                  ></textarea>
                </div>
                <div className="form-field">
                  <label>Image upload:</label>
                  <div className="upload-box">
                    <span className="upload-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-upload-icon lucide-upload"
                      >
                        <path d="M12 3v12" />
                        <path d="m17 8-5-5-5 5" />
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      </svg>
                    </span>
                  </div>
                </div>
                <button onClick={handleAddReview} className="add-review-btn">
                  Add Review
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Reviews;
