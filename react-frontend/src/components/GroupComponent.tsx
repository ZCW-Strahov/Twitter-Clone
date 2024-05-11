import { FunctionComponent } from 'react';
import GroupComponent1 from './GroupComponent1';

const GroupComponent: FunctionComponent = () => {
  return (
    <div
      style={{
        alignSelf: 'stretch',
        borderRadius: '10px',
        backgroundColor: '#f7f9f9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '20px 15px 30px',
        boxSizing: 'border-box',
        gap: '30px',
        maxWidth: '100%',
        textAlign: 'left',
        fontSize: '24px',
        color: '#000',
        fontFamily: 'Roboto',
      }}
    >
      <div
        style={{
          width: '373px',
          height: '402px',
          position: 'relative',
          borderRadius: '10px',
          backgroundColor: '#f7f9f9',
          display: 'none',
          maxWidth: '100%',
        }}
      />
      <div
        style={{
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '24px',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          {/* <div style={{ position: 'relative', zIndex: '1' }}>Trends for you</div> */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: '4px 0px 0px',
            }}
          >
            {/* <img
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                zIndex: '1',
              }}
              alt=""
              src="/settings.svg"
            /> */}
          </div>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '15px',
            fontSize: '16px',
            color: 'rgba(57, 59, 65, 0.6)',
          }}
        >
          {/* <GroupComponent1 trendingInDelaware="Trending in Pennsylvania " demoDay="#DemoDay" kTweets="4.7K Echos" />
          <GroupComponent1
            trendingInDelaware="Trending in Delaware"
            demoDay="#ZipCode"
            kTweets="2.5K Echos"
            propDisplay="unset"
            propMinWidth="unset"
            propMinWidth1="87px"
            propMinWidth2="77px"
          />
          <GroupComponent1
            trendingInDelaware="Trending in US"
            demoDay="#Java"
            kTweets="90.2K Echos"
            propDisplay="inline-block"
            propMinWidth="103px"
            propMinWidth1="55px"
            propMinWidth2="86px"
          /> */}
        </div>
      </div>
      {/* <div
        style={{
          position: 'relative',
          fontSize: '18px',
          lineHeight: '100%',
          color: '#f21d1d',
          display: 'inline-block',
          minWidth: '91px',
          zIndex: '1',
        }}
      >
        Show more
      </div> */}
    </div>
  );
};

export default GroupComponent;
