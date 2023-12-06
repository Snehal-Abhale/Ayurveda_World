import React from 'react';
import { Container, Row } from 'react-bootstrap';

function HomePage() {
  return (
    <div style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/00/51/80/77/360_F_51807752_ddoLl2Z0cURqduIWMkI7tmHBhxvMhgYA.jpg")', backgroundSize: 'cover', color: 'white', height: '800px' }}>
      <Container>
        <Row className="justify-content-center">
          <div style={{ textAlign: 'center' }}>
            <h1>THE AURUVEDIC WORLD</h1>
            <p>Welcome to Ayurvedic World – Your Gateway to Holistic Wellness! <br></br> <br></br>

              🌿 Discover Timeless Ayurvedic Treasures:
              Explore our curated collection of authentic Ayurvedic products sourced from renowned vendors. From herbal supplements to skincare essentials, we bring you the purest form of nature's healing wisdom.
              <br></br> <br></br>
              🌟 Nourish Your Body, Mind, and Soul:
              Immerse yourself in the world of Ayurveda, where each product is carefully selected to promote holistic well-being. Our offerings aim to balance your doshas, enhance vitality, and foster a harmonious life.
              <br></br> <br></br>
              🛍️ Shop with Confidence:
              Browse through our diverse categories, including oils, tablets, tinctures, and more. Every product is backed by the principles of Ayurveda, ensuring quality, purity, and efficacy. Shop with confidence, knowing you're investing in your health.
              <br></br> <br></br>
              🌐 Education for Empowerment:
              Explore our training and education section, where we offer webinars, books, and CDs/DVDs to deepen your understanding of Ayurveda. Empower yourself with knowledge and embark on a journey towards a healthier lifestyle.
              <br></br> <br></br>
              Step into Ayurvedic World and embrace a holistic approach to health and wellness. Your well-being, our priority!</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
