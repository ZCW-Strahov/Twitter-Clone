import { FunctionComponent, useMemo, type CSSProperties } from 'react';

export type TweetCardType = {
  may1?: string;
  dudeICantWaitToGoFISHING?: string;
  retweet?: string;
  prop?: string;
  like?: string;
  prop1?: string;
  showDiv?: boolean;

  /** Style props */
  propWidth?: CSSProperties['width'];
  propMinWidth?: CSSProperties['minWidth'];
  propWidth1?: CSSProperties['width'];
  propColor?: CSSProperties['color'];
  propOverflow?: CSSProperties['overflow'];
  propColor1?: CSSProperties['color'];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === '') return;
  return { [key]: value };
};

const TweetCard: FunctionComponent<TweetCardType> = ({
  may1,
  dudeICantWaitToGoFISHING,
  retweet,
  prop,
  like,
  prop1,
  showDiv,
  propWidth,
  propMinWidth,
  propWidth1,
  propColor,
  propOverflow,
  propColor1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue('width', propWidth),
    };
  }, [propWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue('minWidth', propMinWidth),
      ...getStyleValue('width', propWidth1),
    };
  }, [propMinWidth, propWidth1]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue('color', propColor),
    };
  }, [propColor]);

  const likeIconStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue('overflow', propOverflow),
    };
  }, [propOverflow]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue('color', propColor1),
    };
  }, [propColor1]);

  return (
    <div
      style={{
        alignSelf: 'stretch',
        height: '124px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '10px 0px 0px',
        boxSizing: 'border-box',
        gap: '20px',
        maxWidth: '100%',
        textAlign: 'left',
        fontSize: '20px',
        color: '#000',
        fontFamily: 'Roboto',
      }}
    >
      <div
        style={{
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '0px 25px',
          boxSizing: 'border-box',
          maxWidth: '100%',
          flexShrink: '0',
        }}
      >
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '0px 37px 0px 0px',
            boxSizing: 'border-box',
            position: 'relative',
            gap: '15px',
            maxWidth: '100%',
          }}
        >
          <img
            style={{
              height: '60px',
              width: '60px',
              position: 'relative',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            loading="lazy"
            alt=""
            src="/ellipse-6@2x.png"
          />
          <img
            style={{
              height: '4px',
              width: '17px',
              position: 'absolute',
              margin: '0',
              top: '11px',
              right: '0px',
            }}
            alt=""
            src="/vector.svg"
          />
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '22px',
              minWidth: '486px',
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
                gap: '5px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  gap: '5px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    minWidth: '56px',
                  }}
                >
                  Danny
                </div>
                <div
                  style={{
                    position: 'relative',
                    fontSize: '18px',
                    lineHeight: '22px',
                    color: 'rgba(0, 0, 0, 0.6)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>@</span>
                  <span>DannyCao</span>
                  <span>{may1}</span>
                </div>
              </div>
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  fontSize: '18px',
                }}
              >
                {dudeICantWaitToGoFISHING}
              </div>
            </div>
            <div
              style={{
                width: '579px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '20px',
                maxWidth: '100%',
                fontSize: '16px',
                color: '#536471',
                ...frameDivStyle,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '9px',
                }}
              >
                <img
                  style={{
                    height: '24px',
                    width: '24px',
                    position: 'relative',
                  }}
                  loading="lazy"
                  alt=""
                  src="/comment.svg"
                />
                {showDiv && (
                  <div
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                      minWidth: '16px',
                      ...divStyle,
                    }}
                  >
                    10
                  </div>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '7px',
                }}
              >
                <img
                  style={{
                    height: '24px',
                    width: '24px',
                    position: 'relative',
                  }}
                  loading="lazy"
                  alt=""
                  src={retweet}
                />
                <div
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    minWidth: '8px',
                    ...div1Style,
                  }}
                >
                  {prop}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '10px',
                }}
              >
                <img
                  loading="lazy"
                  alt=""
                  src={like}
                  style={{
                    height: '24px',
                    width: '24px',
                    position: 'relative',
                    ...likeIconStyle,
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    minWidth: '9px',
                    ...div2Style,
                  }}
                >
                  {prop1}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '10px',
                }}
              >
                <img
                  style={{
                    height: '24px',
                    width: '24px',
                    position: 'relative',
                  }}
                  loading="lazy"
                  alt=""
                  src="/share.svg"
                />
                <div
                  style={{
                    width: '15px',
                    position: 'relative',
                    display: 'none',
                  }}
                >
                  10
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '10px',
                }}
              >
                <img
                  style={{
                    height: '24px',
                    width: '24px',
                    position: 'relative',
                  }}
                  alt=""
                  src="/statistics.svg"
                />
                <div
                  style={{
                    width: '15px',
                    position: 'relative',
                    display: 'none',
                  }}
                >
                  10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '1px',
          height: '909px',
          position: 'relative',
          backgroundColor: '#e6e6e6',
          transform: ' rotate(-90deg)',
          flexShrink: '0',
        }}
      />
    </div>
  );
};

export default TweetCard;
