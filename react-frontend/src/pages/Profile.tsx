import { FunctionComponent } from 'react';
import TweetCard from '../components/TweetCard';
import GroupComponent2 from '../components/GroupComponent2';
import GroupComponent from '../components/GroupComponent';
import Parentheses from '../components/Parentheses';
import './Profile.css'; // Assuming CSS is externalized

import PaginatedTweets from '../pages/timelinefeed';

const Profile: FunctionComponent = () => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#fff',
        border: '1px solid #000',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '0px 155px',
        gap: '4px',
        lineHeight: 'normal',
        letterSpacing: 'normal',
      }}
    >
      <section
        style={{
          width: '1595px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          gap: '1px',
          maxWidth: '100%',
          textAlign: 'left',
          fontSize: '20px',
          color: 'rgb(19,19,19)',
          fontFamily: 'Roboto',
        }}
      >
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            padding: '0px 0px 6px',
            boxSizing: 'border-box',
            maxWidth: '100%',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              maxWidth: '100%',
            }}
          >
            <div
              style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                gap: '15px',
                maxWidth: '100%',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  maxWidth: '100%',
                }}
              >
                <div
                  style={{
                    width: '1px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    maxWidth: '100%',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      height: '56px',
                      width: '60px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                      padding: '0px 0px 6.5px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <img
                      style={{
                        alignSelf: 'stretch',
                        flex: '1',
                        position: 'relative',
                        maxWidth: '100%',
                        overflow: 'hidden',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                      loading="lazy"
                      alt=""
                      src="/twitterlogo4-1@2x.png"
                    />
                  </div>
                  <div
                    style={{
                      width: '910px',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      padding: '1px 31px 17px',
                      boxSizing: 'border-box',
                      gap: '40px',
                      maxWidth: '100%',
                      zIndex: '1',
                    }}
                  >
                    <div
                      style={{
                        height: '87px',
                        width: '910px',
                        position: 'relative',
                        backgroundColor: '#fff',
                        display: 'none',
                        maxWidth: '100%',
                      }}
                    />
                    <div
                      style={{
                        height: '23px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        padding: '0px 0px 23px',
                        boxSizing: 'border-box',
                      }}
                    ></div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: 'stretch',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    gap: '53px',
                    maxWidth: '100%',
                    fontSize: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '230px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      padding: '26px 0px 0px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        alignSelf: 'stretch',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: '146px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                          padding: '0px 15px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '30px',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            {/* Home*/}

                            <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/iconshomefill.svg"
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                                fontFamily: 'Roboto, sans-serif',
                              }}
                            >
                              <a href="/homepage">
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '52px',
                                    cursor: 'pointer', // Add cursor style to indicate it's clickable
                                    fontFamily: 'Roboto, sans-serif',
                                  }}
                                >
                                  Home
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                              fontFamily: 'Roboto, sans-serif',
                            }}
                          >
                            {/* Explore*/}

                            <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                                fontFamily: 'Roboto, sans-serif',
                              }}
                              alt=""
                              src="/iconsexplore.svg"
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                                fontFamily: 'Roboto, sans-serif',
                              }}
                            >
                              <a href="/homepage">
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '52px',
                                    cursor: 'pointer', // Add cursor style to indicate it's clickable
                                    fontFamily: 'Roboto, sans-serif',
                                  }}
                                >
                                  Explore
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            {/* Notifications*/}

                            <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/iconsnotifications.svg"
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            >
                              <a href="/homepage">
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '52px',
                                    cursor: 'pointer', // Add cursor style to indicate it's clickable
                                  }}
                                >
                                  Notifications
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            {/* Message*/}

                            <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/iconsmessages.svg"
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            >
                              <a href="/homepage">
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '52px',
                                    cursor: 'pointer', // Add cursor style to indicate it's clickable
                                  }}
                                >
                                  Message
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            {/* Bookmark*/}

                            <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/iconsbookmarks.svg"
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                                fontFamily: 'Roboto, sans-serif',
                              }}
                            >
                              <a href="/homepage">
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '52px',
                                    cursor: 'pointer', // Add cursor style to indicate it's clickable
                                  }}
                                >
                                  Bookmark
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/iconsbookmarks.svg"
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            >
                              <a href="/profile">
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '52px',
                                    cursor: 'pointer', // Add cursor style to indicate it's clickable
                                  }}
                                >
                                  Profile
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            {/* Profile*/}
                            <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/iconsprofile.svg"
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            >
                              <a href="/profile">
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '52px',
                                    cursor: 'pointer', // Add cursor style to indicate it's clickable
                                  }}
                                >
                                  More
                                </div>
                              </a>
                            </div>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            <button
                              style={{
                                cursor: 'pointer',
                                border: 'none',
                                padding: '15px 89px 22px',
                                backgroundColor: 'rgba(7,181,244,0.94)',
                                alignSelf: 'stretch',
                                borderRadius: '27.5px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                              }}
                            >
                              <div
                                style={{
                                  height: '55px',
                                  width: '230px',
                                  position: 'relative',
                                  borderRadius: '27.5px',
                                  backgroundColor: '#07b5f4',
                                  display: 'none',
                                }}
                              />

                              <div
                                style={{
                                  position: 'relative',
                                  fontSize: '18px',
                                  lineHeight: '18px',
                                  fontFamily: 'Roboto',
                                  color: '#fff',
                                  textAlign: 'left',
                                  display: 'inline-block',
                                  minWidth: '39px',
                                  zIndex: '1',
                                }}
                              >
                                Echo
                              </div>
                            </button>

                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            ></div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            ></div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            ></div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '20px',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      gap: '20px',
                      maxWidth: 'calc(100% - 283px)',
                    }}
                  >
                    <div
                      style={{
                        alignSelf: 'stretch',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
                      <img
                        style={{
                          height: '230px',
                          flex: '1',
                          position: 'relative',
                          maxWidth: '100%',
                          overflow: 'hidden',
                          objectFit: 'fill',
                        }}
                        alt=""
                        src="/standard.gif"
                      />
                      <img
                        style={{
                          height: '150px',
                          width: '150px',
                          position: 'absolute',
                          margin: '0',
                          bottom: '-75px',
                          left: '26px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          zIndex: '1',
                        }}
                        loading="lazy"
                        alt=""
                        src="/ellipse-4@2x.png"
                      />
                      <div
                        style={{
                          height: '800px',
                          width: '1px',
                          position: 'absolute',
                          margin: '0',
                          bottom: '-722px',
                          left: '0px',
                          backgroundColor: 'rgba(19,19,19,0.18)',
                          zIndex: '2',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        alignSelf: 'stretch',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        padding: '0px 21px 23px 26px',
                        boxSizing: 'border-box',
                        maxWidth: '100%',
                      }}
                    >
                      <div
                        style={{
                          flex: '1',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                          justifyContent: 'flex-start',
                          gap: '24px',
                          maxWidth: '100%',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            padding: '0px 8px',
                          }}
                        >
                          <button
                            style={{
                              cursor: 'pointer',
                              border: '1px solid rgba(0, 0, 0, 0.4)',
                              padding: '8px 14px',
                              backgroundColor: 'transparent',
                              borderRadius: '50px',
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <div
                              style={{
                                position: 'relative',
                                fontSize: '18px',
                                fontFamily: 'Roboto',
                                color: '#131313',
                                textAlign: 'left',
                                display: 'inline-block',
                                minWidth: '86px',
                              }}
                            >
                              Edit profile
                            </div>
                          </button>
                        </div>
                        <div
                          style={{
                            alignSelf: 'stretch',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '20px',
                            maxWidth: '100%',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '10px',
                              fontSize: '16px',
                              fontFamily: 'Roboto',
                            }}
                          >
                            <div
                              style={{
                                height: '24px',
                                position: 'relative',
                                display: 'inline-block',
                                minWidth: '67px',
                              }}
                            >
                              Danny Cao Student Developer @ ZCW
                            </div>
                            {/* <div
                              style={{
                                position: 'relative',
                                fontSize: '16px',
                                color: 'rgba(0, 0, 0, 0.6)',
                                display: 'inline-block',
                                minWidth: '86px',
                              }}
                            >
                              @DannyCao
                            </div> */}
                          </div>
                          {/* <div style={{ position: 'relative' }}>Student Developer @ ZCW</div> */}
                          <div
                            style={{
                              alignSelf: 'stretch',
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '28px',
                              maxWidth: '100%',
                              color: 'rgb(19,19,19)',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                gap: '15px',
                                maxWidth: '100%',
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'flex-start',
                                  justifyContent: 'flex-start',
                                  gap: '30px',
                                }}
                              >
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    gap: '5px',
                                  }}
                                >
                                  {/* <img
                                    style={{
                                      height: '24px',
                                      width: '24px',
                                      position: 'relative',
                                      overflow: 'hidden',
                                      flexShrink: '0',
                                      minHeight: '24px',
                                    }}
                                    loading="lazy"
                                    alt=""
                                    src="/frame.svg"
                                  />
                                  <div
                                    style={{
                                      position: 'relative',
                                      display: 'inline-block',
                                      minWidth: '121px',
                                    }}
                                  >
                                    Wilmington, DE
                                  </div> */}
                                </div>
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    gap: '5px',
                                    color: '#07b5f4',
                                  }}
                                >
                                  {/* <img
                                    style={{
                                      height: '24px',
                                      width: '24px',
                                      position: 'relative',
                                      overflow: 'hidden',
                                      flexShrink: '0',
                                      minHeight: '24px',
                                    }}
                                    loading="lazy"
                                    alt=""
                                    src="/frame-1.svg"
                                  />
                                  <div style={{ position: 'relative' }}>github.com/ZCW-Strahov</div> */}
                                </div>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'flex-start',
                                  justifyContent: 'flex-start',
                                  gap: '31px',
                                  color: '#131313',
                                }}
                              >
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '102px',
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div
                              style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                gap: '35px',
                                minWidth: '276px',
                                maxWidth: '100%',
                              }}
                            >
                              <div
                                style={{
                                  flex: '1',
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'flex-start',
                                  justifyContent: 'flex-start',
                                  gap: '5px',
                                  minWidth: '144px',
                                }}
                              >
                                {/* <img
                                  style={{
                                    height: '24px',
                                    width: '24px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    flexShrink: '0',
                                    minHeight: '24px',
                                  }}
                                  loading="lazy"
                                  alt=""
                                  src="/frame-2.svg"
                                />
                                <div style={{ position: 'relative' }}>Born September 9, 1997</div> */}
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'flex-start',
                                  justifyContent: 'flex-start',
                                  gap: '5px',
                                }}
                              >
                                {/* <img
                                  style={{
                                    height: '24px',
                                    width: '24px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    flexShrink: '0',
                                    minHeight: '24px',
                                  }}
                                  alt=""
                                  src="/frame-3.svg"
                                />
                                <div style={{ position: 'relative' }}>Joined May 2023</div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: 'stretch',
                        height: '44px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: '22px',
                        maxWidth: '100%',
                      }}
                    >
                      <div
                        style={{
                          alignSelf: 'stretch',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                          padding: '0px 5px',
                          boxSizing: 'border-box',
                          maxWidth: '100%',
                        }}
                      >
                        <div
                          style={{
                            flex: '1',
                            backgroundColor: 'rgb(19,19,19)',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            maxWidth: '100%',
                            gap: '5px',
                          }}
                        ></div>
                      </div>

                      {/*All code must go here for profile tweets*/}
                      {/* <div style={{ position: 'absolute', left: '17.3%', top: '33%', width: '80%', margin: '30px 150px' }}>
                        <PaginatedTweets />
                      </div> */}

                      <div
                        style={{
                          width: '1px',
                          height: '909px',
                          position: 'relative',
                          backgroundColor: 'rgb(255,255,255)',
                          transform: ' rotate(-90deg)',
                          flexShrink: '0',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: '1178px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  gap: '6px',
                  maxWidth: '100%',
                  fontSize: '16px',
                  color: '#131313',
                }}
              >
                <div
                  style={{
                    width: '797px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '0px 20px',
                    boxSizing: 'border-box',
                    maxWidth: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      gap: '15px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        padding: '2px 0px 0px',
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: 'stretch',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    maxWidth: '100%',
                    gap: '20px',
                    color: 'rgb(19,19,19)',
                  }}
                >
                  <div
                    style={{
                      height: '103px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: '10px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                          padding: '3px 0px 0px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '7px',
                          }}
                        >
                          <div
                            style={{
                              position: 'relative',
                              color: 'rgb(19,19,19)',
                              display: 'inline-block',
                              minWidth: '86px',
                            }}
                          >
                            {/*here*/}
                            {/* @DannyCao */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '942px',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      gap: '16px',
                      maxWidth: '100%',
                    }}
                  >
                    <div
                      style={{
                        height: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    ></div>
                    <div
                      style={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        minWidth: '591px',
                        maxWidth: '100%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: '989px',
                width: '1px',
                position: 'relative',
                backgroundColor: '#ffffff',
                zIndex: '2',
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: '373px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '20px',
            maxWidth: '100%',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '11px',
              maxWidth: '100%',
            }}
          >
            {/* <div
              style={{
                alignSelf: 'stretch',
                borderRadius: '31px',
                backgroundColor: '#eff3f4',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '15px 20px 16px',
                boxSizing: 'border-box',
                gap: '20px',
                maxWidth: '100%',
              }}
            >
              <div
                style={{
                  height: '55px',
                  width: '373px',
                  position: 'relative',
                  borderRadius: '31px',
                  backgroundColor: '#eff3f4',
                  display: 'none',
                  maxWidth: '100%',
                }}
              />
              <img
                style={{
                  height: '24px',
                  width: '24px',
                  position: 'relative',
                  zIndex: '1',
                }}
                alt=""
                src="/search.svg"
              />
              <input
                style={{
                  width: '96px',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Roboto',
                  fontSize: '18px',
                  backgroundColor: 'transparent',
                  height: '18px',
                  position: 'relative',
                  color: '#5c6c79',
                  textAlign: 'left',
                  display: 'inline-block',
                  padding: '0',
                  zIndex: '1',
                }}
                placeholder="Search Echo"
                type="text"
              />
            </div> */}
            <div
              style={{
                alignSelf: 'stretch',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                minHeight: '178px',
              }}
            ></div>
          </div>
          <GroupComponent2 />
          <GroupComponent />
        </div>
      </section>
      <Parentheses />
    </div>
  );
};

export default Profile;
