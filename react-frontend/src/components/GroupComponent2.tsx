import { FunctionComponent } from 'react';
import Component from './Component';

const GroupComponent2: FunctionComponent = () => {
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
        padding: '20px 0px 25px 15px',
        boxSizing: 'border-box',
        gap: '29.5px',
        maxWidth: '100%',
        textAlign: 'left',
        fontSize: '18px',
        color: '#000',
        fontFamily: 'Roboto',
      }}
    >
      <div
        style={{
          width: '373px',
          height: '295px',
          position: 'relative',
          borderRadius: '10px',
          backgroundColor: '#f7f9f9',
          display: 'none',
          maxWidth: '100%',
          fontFamily: 'Roboto',
        }}
      />
      {<div style={{ position: 'relative', fontSize: '24px', zIndex: '1' }}>You might like</div>}
      <div
        style={{
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '25px',
          fontFamily: 'Roboto',
        }}
      >
        <Component multiplication="/ellipse-5@2x.png" asia="Asia" asianBurton="@AsianBurton" />
        <Component multiplication="/ellipse-5-1@2x.png" asia="Dan" asianBurton="@DanMoffett" propMinWidth="105px" />
      </div>
      {
        <div
          style={{
            position: 'relative',
            lineHeight: '100%',
            color: 'rgba(7,181,244,0.94)',
            display: 'inline-block',
            minWidth: '86px',
            zIndex: '1',
            fontFamily: 'Roboto',
          }}
        >
          Show more
        </div>
      }
    </div>
  );
};

export default GroupComponent2;
