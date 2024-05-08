import { FunctionComponent, useMemo, type CSSProperties } from 'react';

export type AccountFollowType = {
  profilePhoto?: string;
  theNewYorkTimes?: string;
  nytimes?: string;

  /** Style props */
  propMinWidth?: CSSProperties['minWidth'];
  propMinWidth1?: CSSProperties['minWidth'];
};

const AccountFollow: FunctionComponent<AccountFollowType> = ({ profilePhoto, theNewYorkTimes, nytimes, propMinWidth, propMinWidth1 }) => {
  const accaountNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const nytimesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="self-stretch bg-trends-color flex flex-row flex-wrap items-start justify-start py-3 px-4 gap-[12px] text-left text-mini text-text font-lato">
      <img
        className="h-12 w-12 relative rounded-21xl overflow-hidden shrink-0 object-cover min-h-[48px]"
        loading="lazy"
        alt=""
        src={profilePhoto}
      />
      <div
        className="flex-1 flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border min-w-[168px] gap-[20px]"
        style={accaountNameStyle}
      >
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start py-[5px] px-0">
            <div className="flex flex-row items-start justify-start gap-[3px]">
              <div className="relative inline-block min-w-[38px]">{theNewYorkTimes}</div>
              <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" loading="lazy" alt="" src="/iconsverified.svg" />
            </div>
            <div className="relative font-light text-gray inline-block min-w-[110px]" style={nytimesStyle}>
              {nytimes}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-[9px] px-0 pb-2">
          <button className="cursor-pointer [border:none] py-[7px] px-[15px] bg-whitesmoke rounded-13xl overflow-hidden flex flex-row items-start justify-start hover:bg-gainsboro">
            <div className="relative text-sm font-lato text-gray1 text-left inline-block min-w-[41px]">Follow</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountFollow;
