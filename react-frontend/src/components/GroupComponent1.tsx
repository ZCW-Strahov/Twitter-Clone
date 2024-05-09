import { FunctionComponent, useMemo, type CSSProperties } from 'react';

export type GroupComponent1Type = {
  trendingInDelaware?: string;
  demoDay?: string;
  kTweets?: string;

  /** Style props */
  propDisplay?: CSSProperties['display'];
  propMinWidth?: CSSProperties['minWidth'];
  propMinWidth1?: CSSProperties['minWidth'];
  propMinWidth2?: CSSProperties['minWidth'];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === '') return;
  return { [key]: value };
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  trendingInDelaware,
  demoDay,
  kTweets,
  propDisplay,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const trendingInDelawareStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue('display', propDisplay),
      ...getStyleValue('minWidth', propMinWidth),
    };
  }, [propDisplay, propMinWidth]);

  const demoDayStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue('minWidth', propMinWidth1),
    };
  }, [propMinWidth1]);

  const kTweetsStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue('minWidth', propMinWidth2),
    };
  }, [propMinWidth2]);

  return (
    <div
      style={{
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '0px 0px 5px',
        gap: '20px',
        zIndex: '1',
        textAlign: 'left',
        fontSize: '16px',
        color: 'rgba(57, 59, 65, 0.6)',
        fontFamily: 'Roboto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '5.5px',
        }}
      >
        <div style={{ position: 'relative', ...trendingInDelawareStyle }}>{trendingInDelaware}</div>
        <div
          style={{
            position: 'relative',
            fontSize: '20px',
            color: '#000',
            display: 'inline-block',
            minWidth: '99px',
            ...demoDayStyle,
          }}
        >
          {demoDay}
        </div>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            minWidth: '76px',
            ...kTweetsStyle,
          }}
        >
          {kTweets}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '17px 0px 0px',
        }}
      >
        <img style={{ width: '17px', height: '4px', position: 'relative' }} alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

export default GroupComponent1;
