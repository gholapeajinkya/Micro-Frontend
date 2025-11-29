import React from "react";
import "./landing.css";

interface LandingProps {
  onLogin?: () => void;
  onBrowser?: (category: string) => void;
}

export default function Landing({ onLogin, onBrowser }: LandingProps) {
  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free shipping on orders over $50",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "100% secure payment processing",
    },
    {
      icon: "🎁",
      title: "Special Offers",
      description: "Amazing deals every week",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Dedicated customer support",
    },
  ];

  const categories = [
    {
      name: "Electronics",
      image: "📱",
      count: "120+ Products",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Fashion",
      image: "👕",
      count: "200+ Products",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      name: "Home & Living",
      image: "🏠",
      count: "150+ Products",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      name: "Sports",
      image: "⚽",
      count: "80+ Products",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Verified Buyer",
      rating: 5,
      comment: "Amazing products and fast delivery! Highly recommended.",
      avatar: "👩‍💼",
    },
    {
      name: "Mike Chen",
      role: "Regular Customer",
      rating: 5,
      comment: "Best online shopping experience. Great customer service!",
      avatar: "👨‍💻",
    },
    {
      name: "Emily Davis",
      role: "Fashion Enthusiast",
      rating: 5,
      comment: "Love the variety and quality. My go-to store now!",
      avatar: "👩‍🎨",
    },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="hero-content">
          <h1 className="app-title">
            <span className="title-icon">🛒</span>
            Buy<span className="title-highlight">Nest</span>
          </h1>
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>Your Premium Shopping Destination</span>
          </div>
          <h1 className="hero-title">
            Discover Amazing
            <br />
            <span className="hero-highlight">Products</span> Online
          </h1>
          <p className="hero-description">
            Shop the latest trends in electronics, fashion, home decor, and more.
            <br />
            Quality products at unbeatable prices with fast, free delivery.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-secondary" onClick={onLogin}>
              Login
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4.8★</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">
              Explore our wide range of product categories
            </p>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div
                  className="category-background"
                  style={{ background: category.gradient }}
                >
                  <div className="category-icon">{category.image}</div>
                </div>
                <div className="category-info">
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-count">{category.count}</p>
                </div>
                <button className="category-button" onClick={() => onBrowser?.(category.name)}>
                  Browse →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-section">
        <div className="container">
          <div className="promo-banner">
            <div className="promo-content">
              <span className="promo-badge">Limited Time Offer</span>
              <h2 className="promo-title">Get 30% Off Your First Order!</h2>
              <p className="promo-description">
                Sign up today and enjoy exclusive discounts on your first purchase
              </p>
              <button className="btn btn-light" onClick={onLogin}>
                Claim Offer Now
              </button>
            </div>
            <div className="promo-decoration">
              <div className="promo-circle promo-circle-1"></div>
              <div className="promo-circle promo-circle-2"></div>
              <div className="promo-icon">🎉</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Join thousands of satisfied customers worldwide
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Shopping?</h2>
            <p className="cta-description">
              Create your account and get access to exclusive deals and offers
            </p>
            <button className="btn btn-cta" onClick={onLogin}>
              Get Started Today
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">BuyNest</h3>
              <p className="footer-description">
                Your trusted online shopping destination for quality products at
                amazing prices.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Customer Service</h4>
              <ul className="footer-links">
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Connect With Us</h4>
              <div className="footer-social">
                <a href="#facebook" className="social-icon">📘</a>
                <a href="#twitter" className="social-icon">🐦</a>
                <a href="#instagram" className="social-icon">📷</a>
                <a href="#linkedin" className="social-icon">💼</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
