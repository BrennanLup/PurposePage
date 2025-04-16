import './MockupSection.css';
import mockupImage from '../../assets/mockup_image.svg'

const MockupSection = () => {
  return (
    <section className="mockup-section">
      <div className="mockup-container">
        <h1 className="mockup-title">Prioritize Your Purpose.</h1>
        <p className="mockup-subtitle">with a purpose page</p>

        <img src={mockupImage} alt="Futuristic Ring" className="ring-image" />
      </div>
    </section>
  );
};

export default MockupSection; 