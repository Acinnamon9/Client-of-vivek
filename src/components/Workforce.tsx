import React from "react";

const Workforce: React.FC = () => {
  return (
    <section className="workforce-main-section">
      <div className="workforce-container">
        <div className="workforce-header">
          <span className="workforce-badge">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            The New Standard
          </span>
          <h2 className="workforce-title">Your 24/7 AI Sales Workforce</h2>
          <p className="workforce-subtitle">
            Replace the chaos of human teams with the precision of AI. One
            integrated system handling every stage of your pipeline.
          </p>
        </div>

        <div className="workforce-roles-grid">
          {/* Role 1: Influencer (Ads) */}
          <div className="workforce-glass-card">
            <div className="workforce-role-header">
              <div className="workforce-icon-box">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="workforce-role-info">
                <h3>AI Social Media Influencer</h3>
                <div className="workforce-role-salary">
                  Replaces: Ad Agency ($5k/mo)
                </div>
              </div>
            </div>
            <div className="workforce-role-content">
              <div className="workforce-features">
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Creates & posts viral content daily</div>
                </div>
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Manages paid ad campaigns 24/7</div>
                </div>
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Generates high-intent inbound leads</div>
                </div>
              </div>
              <div className="workforce-card-stats">
                <div className="workforce-stat-box">
                  <span className="workforce-stat-value">10k+</span>
                  <span className="workforce-stat-label">Views/Day</span>
                </div>
                <div className="workforce-stat-box">
                  <span className="workforce-stat-value">3.5%</span>
                  <span className="workforce-stat-label">CTR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Role 2: Sales Rep */}
          <div className="workforce-glass-card">
            <div className="workforce-role-header">
              <div className="workforce-icon-box">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="workforce-role-info">
                <h3>AI Sales Representative</h3>
                <div className="workforce-role-salary">
                  Replaces: 3 SDRs ($15k/mo)
                </div>
              </div>
            </div>
            <div className="workforce-role-content">
              <div className="workforce-features">
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Calls leads within 3 minutes</div>
                </div>
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Qualifies prospects via SMS/Call</div>
                </div>
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Books appointments on your calendar</div>
                </div>
              </div>
              <div className="workforce-card-stats">
                <div className="workforce-stat-box">
                  <span className="workforce-stat-value">24/7</span>
                  <span className="workforce-stat-label">Availability</span>
                </div>
                <div className="workforce-stat-box">
                  <span className="workforce-stat-value">5m</span>
                  <span className="workforce-stat-label">Response Time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Role 3: Receptionist */}
          <div className="workforce-glass-card">
            <div className="workforce-role-header">
              <div className="workforce-icon-box">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="workforce-role-info">
                <h3>AI Receptionist</h3>
                <div className="workforce-role-salary">
                  Replaces: Front Desk ($4k/mo)
                </div>
              </div>
            </div>
            <div className="workforce-role-content">
              <div className="workforce-features">
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Answers inbound calls instantly</div>
                </div>
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Routes calls to appropriate staff</div>
                </div>
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Handles scheduling & inquiries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Role 4: Customer Service */}
          <div className="workforce-glass-card">
            <div className="workforce-role-header">
              <div className="workforce-icon-box">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="workforce-role-info">
                <h3>AI Customer Service</h3>
                <div className="workforce-role-salary">
                  Replaces: Support Rep ($4k/mo)
                </div>
              </div>
            </div>
            <div className="workforce-role-content">
              <div className="workforce-features">
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Resolves common issues instantly</div>
                </div>
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Available across Chat, SMS, Email</div>
                </div>
                <div className="workforce-feature-item">
                  <span className="workforce-check">✓</span>
                  <div>Escalates complex issues to humans</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="workforce-cta-section">
          <a href="https://myteam.ravan.ai/book" className="workforce-cta-btn">
            BOOK A DEMO CALL
          </a>
        </div>
      </div>
    </section>
  );
};

export default Workforce;
