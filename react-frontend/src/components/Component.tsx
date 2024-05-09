import { FunctionComponent, useMemo, type CSSProperties } from 'react';

export type ComponentType = {
  multiplication?: string;
  asia?: string;
  asianBurton?: string;

  /** Style props */
  propMinWidth?: CSSProperties['minWidth'];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === '') return;
  return { [key]: value };
};

const Component: FunctionComponent<ComponentType> = ({ multiplication, asia, asianBurton, propMinWidth }) => {
  const asianBurtonStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue('minWidth', propMinWidth),
    };
  }, [propMinWidth]);

  return (
    <div
      style={{
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '0px 16px 0px 0px',
        gap: '20px',
        zIndex: '1',
        textAlign: 'left',
        fontSize: '18px',
        color: '#000',
        fontFamily: 'Roboto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '13px',
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
          src={multiplication}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '5px 0px 0px',
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
                height: '18px',
                position: 'relative',
                lineHeight: '22px',
                display: 'inline-block',
                minWidth: '33px',
              }}
            >
              {asia}
            </div>
            <div
              style={{
                height: '18px',
                position: 'relative',
                lineHeight: '22px',
                color: 'rgba(0, 0, 0, 0.6)',
                display: 'inline-block',
                minWidth: '111px',
                ...asianBurtonStyle,
              }}
            >
              {asianBurton}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '11px 0px 0px',
        }}
      >
        <button
          style={{
            cursor: 'pointer',
            border: 'none',
            padding: '10px 18px',
            backgroundColor: '#000',
            borderRadius: '50px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              position: 'relative',
              fontSize: '18px',
              lineHeight: '100%',
              fontFamily: 'Roboto',
              color: '#fff',
              textAlign: 'left',
              display: 'inline-block',
              minWidth: '53px',
            }}
          >
            Follow
          </div>
        </button>
      </div>
    </div>
  );
};

export default Component;
