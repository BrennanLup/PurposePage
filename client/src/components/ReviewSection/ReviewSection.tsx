

interface Review {
  id: number;
  text: string;
  author?: string;
}

const ReviewSection = () => {
  const reviews: Review[] = [
    { id: 1, text: "This is amazing!", author: "User 1" },
    { id: 2, text: "Really helpful tool", author: "User 2" },
    // Add more reviews as needed
  ];

  return (
    <section className="review-section">
      <h2>Here's what people are saying...</h2>
      <div className="reviews-container">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <p>{review.text}</p>
            {review.author && <span className="author">- {review.author}</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection; 