import Asan from '../Images/Asan.jpeg';
import Dan from '../Images/Dan.png';
import Danny from '../Images/Danny.jpeg';
import Abukar from '../Images/Abukar.jpg';
import Asia from '../Images/Asia.jpg';
import './MeetTheTeam.css';

function MeetTheTeam() {
  return (
    <section id="meet-team-1765">
      <div className="cs-container">
        <div className="cs-content">
          <div className="cs-flex-wrapper">
            <div className="cs-flex">
              <span className="cs-topper">DevOps Team</span>
              <h2 className="cs-title">Elevating Your Digital Experience!</h2>
            </div>
            <div className="cs-image-group">
              <picture className="cs-picture">
                <source media="(max-width: 600px)" srcSet={Abukar} />
                <source media="(min-width: 601px)" srcSet={Abukar} />
                <img loading="lazy" decoding="async" src={Abukar} alt="Team-member named Abukar" width="305" height="440" />
              </picture>
              <div className="cs-social">
                <a
                  href="https://www.linkedin.com/in/abukarshegow/"
                  className="cs-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/LinkedIn.png"
                    alt="LinkedIn"
                    width="20"
                    height="20"
                  />
                </a>
                <a href="https://github.com/Abukarabukar" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/GitHub.png"
                    alt="GitHub"
                    width="20"
                    height="20"
                  />
                </a>
              </div>
            </div>
            <div className="cs-info">
              <span className="cs-name">Abukar Abukar</span>
              <span className="cs-job">Student Software Developer</span>
            </div>
            <div className="cs-image-group">
              <picture className="cs-picture">
                <source media="(max-width: 600px)" srcSet={Asan} />
                <source media="(min-width: 601px)" srcSet={Asan} />
                <img loading="lazy" decoding="async" src={Asan} alt="Team-member named Asan" width="305" height="440" />
              </picture>
              <div className="cs-social">
                <a
                  href="https://www.linkedin.com/in/asan-ahmadli/"
                  className="cs-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/LinkedIn.png"
                    alt="LinkedIn"
                    width="20"
                    height="20"
                  />
                </a>
                <a href="https://github.com/asanahmadli" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/GitHub.png"
                    alt="GitHub"
                    width="20"
                    height="20"
                  />
                </a>
              </div>
            </div>
            <div className="cs-info">
              <span className="cs-name">Asan Ahmadli</span>
              <span className="cs-job">Student Software Developer</span>
            </div>
            <div className="cs-image-group">
              <picture className="cs-picture">
                <source media="(max-width: 600px)" srcSet={Asia} />
                <source media="(min-width: 601px)" srcSet={Asia} />
                <img loading="lazy" decoding="async" src={Asia} alt="Team-member named Asia" width="305" height="440" />
              </picture>
              <div className="cs-social">
                <a href="https://www.linkedin.com/in/asiaburton/" className="cs-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/LinkedIn.png"
                    alt="LinkedIn"
                    width="20"
                    height="20"
                  />
                </a>
                <a href="https://github.com/asiaburton" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/GitHub.png"
                    alt="GitHub"
                    width="20"
                    height="20"
                  />
                </a>
              </div>
            </div>
            <div className="cs-info">
              <span className="cs-name">Asia Burton</span>
              <span className="cs-job">Student Software Developer</span>
            </div>
            <div className="cs-image-group">
              <picture className="cs-picture">
                <source media="(max-width: 600px)" srcSet={Dan} />
                <source media="(min-width: 601px)" srcSet={Dan} />
                <img loading="lazy" decoding="async" src={Dan} alt="Team-member named Daniel" width="305" height="440" />
              </picture>
              <div className="cs-social">
                <a
                  href="https://www.linkedin.com/in/danielmoffett/"
                  className="cs-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/LinkedIn.png"
                    alt="LinkedIn"
                    width="20"
                    height="20"
                  />
                </a>
                <a href="https://github.com/moffd234" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/GitHub.png"
                    alt="GitHub"
                    width="20"
                    height="20"
                  />
                </a>
              </div>
            </div>
            <div className="cs-info">
              <span className="cs-name">Daniel Moffett</span>
              <span className="cs-job">Student Software Developer</span>
            </div>
            <div className="cs-image-group">
              <picture className="cs-picture">
                <source media="(max-width: 600px)" srcSet={Danny} />
                <source media="(min-width: 601px)" srcSet={Danny} />
                <img loading="lazy" decoding="async" src={Danny} alt="Team-member named Danny" width="305" height="440" />
              </picture>
              <div className="cs-social">
                <a href="https://www.linkedin.com/in/dannycao97/" className="cs-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/LinkedIn.png"
                    alt="LinkedIn"
                    width="20"
                    height="20"
                  />
                </a>
                <a href="https://github.com/dannycao1997" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                  <img
                    className="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="react-frontend/src/logos/GitHub.png"
                    alt="GitHub"
                    width="20"
                    height="20"
                  />
                </a>
              </div>
            </div>
            <div className="cs-info">
              <span className="cs-name">Danny Cao</span>
              <span className="cs-job">Student Software Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeam;
