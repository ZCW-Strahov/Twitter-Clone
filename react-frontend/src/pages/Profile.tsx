import { FunctionComponent } from 'react';
import TweetCard from '../components/TweetCard';
import GroupComponent2 from '../components/GroupComponent2';
import GroupComponent from '../components/GroupComponent';
import Parentheses from '../components/Parentheses';
import NavigationBar from '../components/NavigationBar';
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
        padding: '0px 155px 208px',
        gap: '4px',
        lineHeight: 'normal',
        letterSpacing: 'normal',
      }}
    >
      {/* <NavigationBar /> */}
      {/* <img
        style={{
          width: '2065px',
          position: 'relative',
          maxHeight: '100%',
          objectFit: 'cover',
          display: 'none',
          maxWidth: '100%',
          zIndex: '0',
        }}
        alt=""
        src="/screen-shot-20210817-at-2057-1@2x.png"
      /> */}
      {/* <div
        style={{
          width: '5px',
          height: '59px',
          position: 'absolute',
          margin: '0',
          top: '706px',
          left: '489px',
          borderRadius: '4px',
          backgroundColor: '#1da1f2',
          transform: ' rotate(-90deg)',
          transformOrigin: '0 0',
          zIndex: '1',
        }}
      /> */}
      <section
        style={{
          width: '1595px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          gap: '28px',
          maxWidth: '100%',
          textAlign: 'left',
          fontSize: '20px',
          color: '#000',
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
                    width: '1178px',
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
                      padding: '22px 31px 17px',
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
                    >
                      {/* <img
                        style={{
                          width: '20px',
                          height: '0px',
                          position: 'relative',
                          objectFit: 'contain',
                          zIndex: '1',
                        }}
                        alt=""
                        src="/arrow-1.svg"
                      /> */}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: '6px',
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                          minWidth: '56px',
                          zIndex: '1',
                        }}
                      >
                        Danny
                      </div>
                      <div
                        style={{
                          position: 'relative',
                          fontSize: '16px',
                          color: 'rgba(0, 0, 0, 0.6)',
                          display: 'inline-block',
                          minWidth: '84px',
                          zIndex: '1',
                        }}
                      >
                        1,070 Posts
                      </div>
                    </div>
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
                              src="/home-outline.svg"
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
                              src="/profile-fill.svg"
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
                            <button
                              style={{
                                cursor: 'pointer',
                                border: 'none',
                                padding: '15px 89px 22px',
                                backgroundColor: '#f21d1d',
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
                                  backgroundColor: '#f21d1d',
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
                            {/* <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/explore.svg"
                            /> */}
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            >
                              {/* <div
                                style={{
                                  position: 'relative',
                                  display: 'inline-block',
                                  minWidth: '60px',
                                }}
                              >
                                Explore
                              </div> */}
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
                            {/* <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/notification.svg"
                            /> */}
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            >
                              {/* <div
                                style={{
                                  position: 'relative',
                                  display: 'inline-block',
                                  minWidth: '103px',
                                }}
                              >
                                Notifications
                              </div> */}
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
                            {/* <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/messages.svg"
                            /> */}
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            >
                              {/* <div
                                style={{
                                  position: 'relative',
                                  display: 'inline-block',
                                  minWidth: '83px',
                                }}
                              >
                                Messages
                              </div> */}
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
                            {/* <img
                              style={{
                                height: '28px',
                                width: '28px',
                                position: 'relative',
                              }}
                              alt=""
                              src="/more.svg"
                            /> */}
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: '3.5px 0px 0px',
                              }}
                            >
                              {/* <div
                                style={{
                                  position: 'relative',
                                  display: 'inline-block',
                                  minWidth: '42px',
                                }}
                              >
                                More
                              </div> */}
                            </div>
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
                          height: '280px',
                          flex: '1',
                          position: 'relative',
                          maxWidth: '100%',
                          overflow: 'hidden',
                          objectFit: 'cover',
                        }}
                        alt=""
                        src="/rectangle-13@2x.png"
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
                          height: '989px',
                          width: '1px',
                          position: 'absolute',
                          margin: '0',
                          bottom: '-622px',
                          left: '0px',
                          backgroundColor: '#c4c4c4',
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
                                color: '#000',
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
                            gap: '19px',
                            maxWidth: '100%',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '8px',
                              fontSize: '24px',
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
                              Danny
                            </div>
                            <div
                              style={{
                                position: 'relative',
                                fontSize: '16px',
                                color: 'rgba(0, 0, 0, 0.6)',
                                display: 'inline-block',
                                minWidth: '86px',
                              }}
                            >
                              @DannyCao
                            </div>
                          </div>
                          <div style={{ position: 'relative' }}>Student Developer @ ZCW</div>
                          <div
                            style={{
                              alignSelf: 'stretch',
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              gap: '28px',
                              maxWidth: '100%',
                              color: 'rgba(0, 0, 0, 0.6)',
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
                                  <img
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
                                  </div>
                                </div>
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    gap: '5px',
                                    color: '#f21d1d',
                                  }}
                                >
                                  <img
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
                                  <div style={{ position: 'relative' }}>github.com/ZCW-Strahov</div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'flex-start',
                                  justifyContent: 'flex-start',
                                  gap: '31px',
                                  color: '#000',
                                }}
                              >
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '102px',
                                  }}
                                >
                                  {/* <span>{`67 `}</span>
                                  <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Following</span>
                                </div>
                                <div
                                  style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    minWidth: '103px',
                                  }}
                                > */}
                                  {/* <span>{`47 `}</span>
                                  <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Followers</span> */}
                                </div>
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
                                <img
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
                                <div style={{ position: 'relative' }}>Born September 9, 1997</div>
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
                                <img
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
                                <div style={{ position: 'relative' }}>Joined May 2023</div>
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
                          padding: '0px 50px',
                          boxSizing: 'border-box',
                          maxWidth: '100%',
                        }}
                      >
                        <div
                          style={{
                            flex: '1',
                            backgroundColor: '#fff',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            maxWidth: '100%',
                            gap: '20px',
                          }}
                        >
                          {/* <div
                            style={{
                              position: 'relative',
                              display: 'inline-block',
                              minWidth: '59px',
                            }}
                          >
                            Tweets
                          </div> */}
                          {/* <div style={{ position: 'relative' }}>{`Tweets & replies`}</div> */}
                          {/* <div
                            style={{
                              position: 'relative',
                              display: 'inline-block',
                              minWidth: '50px',
                            }}
                          >
                            Media
                          </div> */}
                          {/* <div
                            style={{
                              position: 'relative',
                              display: 'inline-block',
                              minWidth: '42px',
                            }}
                          >
                            Likes
                          </div> */}
                        </div>
                      </div>

                      {/*All code must go here for profile tweets*/}
                      <div style={{ position: 'absolute', left: '17.3%', top: '33%', width: '80%', margin: '0 auto' }}>
                        <PaginatedTweets />
                      </div>

                      <div
                        style={{
                          width: '1px',
                          height: '909px',
                          position: 'relative',
                          backgroundColor: '#c4c4c4',
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
                  color: '#536471',
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
                    {/* <img
                      style={{
                        height: '20px',
                        width: '20px',
                        position: 'relative',
                        overflow: 'hidden',
                        flexShrink: '0',
                        minHeight: '20px',
                      }}
                      alt=""
                      src="/pin.svg"
                    /> */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        padding: '2px 0px 0px',
                      }}
                    >
                      {/* <div
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                          minWidth: '92px',
                        }}
                      >
                        Pinned Tweet
                      </div> */}
                    </div>
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
                    color: '#000',
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
                      {/* <img
                        style={{
                          height: '50px',
                          width: '50px',
                          position: 'relative',
                          borderRadius: '50%',
                          objectFit: 'cover',
                        }}
                        loading="lazy"
                        alt=""
                        src="/ellipse-3@2x.png"
                      /> */}
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
                          {/* icone user*/}
                          {/* <div
                            style={{
                              position: 'relative',
                              display: 'inline-block',
                              minWidth: '45px',
                            }}
                          >
                            Danny
                          </div> */}
                          <div
                            style={{
                              position: 'relative',
                              color: 'rgba(0, 0, 0, 0.6)',
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
                    >
                      {/* <img
                        style={{
                          width: '17px',
                          height: '4px',
                          position: 'relative',
                        }}
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      /> */}
                    </div>
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
                backgroundColor: '#c4c4c4',
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
            <div
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
            </div>
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
            >
              {/* <img
                style={{
                  height: '88px',
                  width: '123px',
                  position: 'relative',
                  borderRadius: '10px 0px 0px 0px',
                  objectFit: 'cover',
                }}
                loading="lazy"
                alt=""
                src="/rectangle-15@2x.png"
              /> */}
              {/* <img
                style={{
                  height: '88px',
                  width: '123px',
                  position: 'relative',
                  objectFit: 'contain',
                }}
                loading="lazy"
                alt=""
                src="/rectangle-16@2x.png"
              /> */}
              {/* <img
                style={{
                  height: '88px',
                  width: '123px',
                  position: 'relative',
                  borderRadius: '0px 10px 0px 0px',
                  objectFit: 'cover',
                }}
                loading="lazy"
                alt=""
                src="/rectangle-17@2x.png"
              /> */}
              {/* <img
                style={{
                  height: '88px',
                  width: '123px',
                  position: 'relative',
                  borderRadius: '0px 0px 0px 10px',
                  objectFit: 'cover',
                }}
                loading="lazy"
                alt=""
                src="/rectangle-15-1@2x.png"
              /> */}
              {/* <img
                style={{
                  height: '88px',
                  width: '123px',
                  position: 'relative',
                  objectFit: 'cover',
                }}
                loading="lazy"
                alt=""
                src="/rectangle-16-1@2x.png"
              /> */}
              {/* <img
                style={{
                  height: '88px',
                  width: '123px',
                  position: 'relative',
                  borderRadius: '0px 0px 10px 0px',
                  objectFit: 'cover',
                }}
                loading="lazy"
                alt=""
                src="/rectangle-17-1@2x.png"
              /> */}
            </div>
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
