import React, { FunctionComponent, useMemo, type CSSProperties } from 'react';

export type TrendingSectionType = {
  subtitle?: string;
  tag?: string;
  count?: string;
  /** Style props */
  propDisplay?: CSSProperties['display'];
  propMinWidth?: CSSProperties['minWidth'];
  propMinWidth1?: CSSProperties['minWidth'];
  propDisplay1?: CSSProperties['display'];
  style?: React.CSSProperties;
  fontStyle?: React.CSSProperties;
};

const TrendingSection: FunctionComponent<TrendingSectionType> = ({
  subtitle,
  tag,
  count,
  propDisplay,
  propMinWidth,
  propMinWidth1,
  propDisplay1,
  style,
}) => {
  const subtitleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const tagStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      display: propDisplay1,
    };
  }, [propMinWidth1, propDisplay1]);

  const fontStyle: CSSProperties = { fontFamily: 'Roboto, sans-serif' }; // Define the style object for the font
  return (
    <div className="self-stretch bg-trends-color overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] text-left text-smi text-gray font-lato">
      <div className="flex-1 flex flex-col items-start justify-start py-3 px-4 box-border gap-[4px] min-w-[200px]">
        <div className="relative inline-block min-w-[121px]" style={subtitleStyle}>
          {subtitle}
        </div>
        <b className="relative text-mini inline-block text-text min-w-[86px]" style={tagStyle}>
          {tag}
        </b>
        <div className="relative inline-block min-w-[77px]">{count}</div>
      </div>
      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
        <div className="bg-trends-color overflow-hidden flex flex-row items-start justify-start py-0 pr-4 pl-2">
          <img className="h-[18px] w-[18px] relative overflow-hidden shrink-0" alt="" src="/iconsmore2-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
