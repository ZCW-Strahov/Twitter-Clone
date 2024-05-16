import React from 'react';
import './MeetTheTeam.css';
import Footer from '../components/Footer';

const MeetTheTeam: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Web site created using Echo" />
        <title>Meet The Team</title>
        <link rel="stylesheet" href="MeetTheTeam.css" />
      </head>
      <body>
        {/* Meet The Team */}
        <section id="meet-team-1765">
          <div className="cs-container">
            <div className="cs-flex">
              <h2 className="cs-title">Elevating Your Digital Experience!</h2>
            </div>
            <ul className="cs-card-group">
              <li className="cs-item">
                <div className="cs-image-group">
                  <picture className="cs-picture">
                    {/* Mobile Image */}
                    <source
                      media="(max-width: 600px)"
                      srcSet="https://media.licdn.com/dms/image/D4E03AQHA9I9EbK82oQ/profile-displayphoto-shrink_400_400/0/1712335787969?e=1721260800&v=beta&t=CKLXBmJrhJnoX3N1D3LiytyrG2--pu30A4hXiVMOb8E"
                    />
                    {/* Tablet and above Image */}
                    <source
                      media="(min-width: 601px)"
                      srcSet="https://media.licdn.com/dms/image/D4E03AQHA9I9EbK82oQ/profile-displayphoto-shrink_400_400/0/1712335787969?e=1721260800&v=beta&t=CKLXBmJrhJnoX3N1D3LiytyrG2--pu30A4hXiVMOb8E"
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src="https://media.licdn.com/dms/image/D4E03AQHA9I9EbK82oQ/profile-displayphoto-shrink_200_200/0/1712335787969?e=2147483647&v=beta&t=Os8-BQQcxXRRd5k6VTvtnMML7hmbnNuRVgJ6WMALk1k"
                      alt="Team-member named Abukar"
                      width="305"
                      height="440"
                    />
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Wb7G67EcR44qT3KQLlLzI1Fna_L2lPXfTI1sx8_z2w&s"
                        alt="linkedin"
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://github.com/Abukarabukar" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png"
                        alt="github"
                        width="20"
                        height="20"
                      />
                    </a>
                  </div>
                </div>
                <div className="cs-info">
                  <span className="cs-name">Abukar Abukar</span>
                  <span className="cs-job">Software Developer</span>
                </div>
              </li>
              <li className="cs-item">
                <div className="cs-image-group">
                  <picture className="cs-picture">
                    {/* Mobile Image */}
                    <source
                      media="(max-width: 600px)"
                      srcSet="https://media.licdn.com/dms/image/C4D03AQHy2ne7mCcELw/profile-displayphoto-shrink_400_400/0/1623101271346?e=1721260800&v=beta&t=TxJwGU4cmrgAOfIsAYy_lT8V1sD7Z5VT4E0nnWt2PVs"
                    />
                    {/* Tablet and above Image */}
                    <source
                      media="(min-width: 601px)"
                      srcSet="https://media.licdn.com/dms/image/C4D03AQHy2ne7mCcELw/profile-displayphoto-shrink_400_400/0/1623101271346?e=1721260800&v=beta&t=TxJwGU4cmrgAOfIsAYy_lT8V1sD7Z5VT4E0nnWt2PVs"
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src="https://media.licdn.com/dms/image/C4D03AQHy2ne7mCcELw/profile-displayphoto-shrink_400_400/0/1623101271346?e=1721260800&v=beta&t=TxJwGU4cmrgAOfIsAYy_lT8V1sD7Z5VT4E0nnWt2PVs"
                      alt="Team-member named Asan"
                      width="305"
                      height="440"
                    />
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Wb7G67EcR44qT3KQLlLzI1Fna_L2lPXfTI1sx8_z2w&s"
                        alt="linkedin"
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://github.com/asanahmadli" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png"
                        alt="instagram"
                        width="20"
                        height="20"
                      />
                    </a>
                  </div>
                </div>
                <div className="cs-info">
                  <span className="cs-name">Asan Ahmadli</span>
                  <span className="cs-job">Software Developer</span>
                </div>
              </li>
              <li className="cs-item">
                <div className="cs-image-group">
                  <picture className="cs-picture">
                    {/* Mobile Image */}
                    <source
                      media="(max-width: 600px)"
                      srcSet="https://media.licdn.com/dms/image/D4E03AQE2GUxAPE7ukg/profile-displayphoto-shrink_400_400/0/1712750018341?e=1721260800&v=beta&t=fqkYH9BS0w_cADcN6nRSfABf70msnWfuUPRTJ5Ehz3w"
                    />
                    {/* Tablet and above Image */}
                    <source
                      media="(min-width: 601px)"
                      srcSet="https://media.licdn.com/dms/image/D4E03AQE2GUxAPE7ukg/profile-displayphoto-shrink_400_400/0/1712750018341?e=1721260800&v=beta&t=fqkYH9BS0w_cADcN6nRSfABf70msnWfuUPRTJ5Ehz3w"
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src="https://media.licdn.com/dms/image/D4E03AQE2GUxAPE7ukg/profile-displayphoto-shrink_400_400/0/1712750018341?e=1721260800&v=beta&t=fqkYH9BS0w_cADcN6nRSfABf70msnWfuUPRTJ5Ehz3w"
                      alt="Team-member named Asia"
                      width="305"
                      height="440"
                    />
                  </picture>
                  <div className="cs-social">
                    <a
                      href="https://www.linkedin.com/in/asiaburton/"
                      className="cs-link"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Wb7G67EcR44qT3KQLlLzI1Fna_L2lPXfTI1sx8_z2w&s"
                        alt="twitter"
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://github.com/asiaburton" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png"
                        alt="github"
                        width="20"
                        height="20"
                      />
                    </a>
                  </div>
                </div>
                <div className="cs-info">
                  <span className="cs-name">Asia Burton</span>
                  <span className="cs-job">Software Developer</span>
                </div>
              </li>
              <li className="cs-item">
                <div className="cs-image-group">
                  <picture className="cs-picture">
                    {/* Mobile Image */}
                    <source
                      media="(max-width: 600px)"
                      srcSet="https://media.licdn.com/dms/image/D4E03AQFGAPYkrZIOgg/profile-displayphoto-shrink_400_400/0/1715788639376?e=1721260800&v=beta&t=1gci_sB1MzAgqX1G2XB6Mr5AXiudEP77I7yDdHDimq0"
                    />
                    {/* Tablet and above Image */}
                    <source
                      media="(min-width: 601px)"
                      srcSet="https://media.licdn.com/dms/image/D4E03AQFGAPYkrZIOgg/profile-displayphoto-shrink_400_400/0/1715788639376?e=1721260800&v=beta&t=1gci_sB1MzAgqX1G2XB6Mr5AXiudEP77I7yDdHDimq0"
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src="https://media.licdn.com/dms/image/D4E03AQFGAPYkrZIOgg/profile-displayphoto-shrink_400_400/0/1715788639376?e=1721260800&v=beta&t=1gci_sB1MzAgqX1G2XB6Mr5AXiudEP77I7yDdHDimq0"
                      alt="Team-member named Daniel"
                      width="305"
                      height="440"
                    />
                  </picture>
                  <div className="cs-social">
                    <a href="" className="cs-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Wb7G67EcR44qT3KQLlLzI1Fna_L2lPXfTI1sx8_z2w&s"
                        alt="linkedin"
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png"
                        alt="github"
                        width="20"
                        height="20"
                      />
                    </a>
                  </div>
                </div>
                <div className="cs-info">
                  <span className="cs-name">Daniel Moffett</span>
                  <span className="cs-job">Software Developer</span>
                </div>
              </li>
              <li className="cs-item">
                <div className="cs-image-group">
                  <picture className="cs-picture">
                    {/* Mobile Image */}
                    <source
                      media="(max-width: 600px)"
                      srcSet="https://media.licdn.com/dms/image/D4E03AQHcqTbo1UZk3Q/profile-displayphoto-shrink_400_400/0/1709285685415?e=1721260800&v=beta&t=SBktu-iVN1RlP1jzpYDkiQEP5IAkYXKfvnRBdpE5b0w"
                    />
                    {/* Tablet and above Image */}
                    <source
                      media="(min-width: 601px)"
                      srcSet="https://media.licdn.com/dms/image/D4E03AQHcqTbo1UZk3Q/profile-displayphoto-shrink_400_400/0/1709285685415?e=1721260800&v=beta&t=SBktu-iVN1RlP1jzpYDkiQEP5IAkYXKfvnRBdpE5b0w"
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src="https://media.licdn.com/dms/image/D4E03AQHcqTbo1UZk3Q/profile-displayphoto-shrink_400_400/0/1709285685415?e=1721260800&v=beta&t=SBktu-iVN1RlP1jzpYDkiQEP5IAkYXKfvnRBdpE5b0w"
                      alt="Team-member named Danny"
                      width="305"
                      height="440"
                    />
                  </picture>
                  <div className="cs-social">
                    <a
                      href="https://www.linkedin.com/in/dannycao97/"
                      className="cs-link"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Wb7G67EcR44qT3KQLlLzI1Fna_L2lPXfTI1sx8_z2w&s"
                        alt="twitter"
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://github.com/dannycao1997" className="cs-link" aria-label="GitHub" target="_blank" rel="noopener">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png"
                        alt="instagram"
                        width="20"
                        height="20"
                      />
                    </a>
                  </div>
                </div>
                <div className="cs-info">
                  <span className="cs-name">Danny Cao</span>
                  <span className="cs-job">Software Developer</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
};

export default MeetTheTeam;
