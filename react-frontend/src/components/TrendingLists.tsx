import { CSSProperties, FunctionComponent } from 'react';
import TrendingSection from './TrendingSection';

const TrendingLists: FunctionComponent = () => {
  const fontStyle: CSSProperties = {
    fontFamily: 'Roboto, sans-serif',
  };
  return (
    <div
      className="flex-1 rounded-mini overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-lgi text-text"
      style={{ fontFamily: 'Roboto, sans-serif', fontSize: '22px' }}
    >
      <div className="self-stretch bg-trends-color overflow-hidden flex flex-row flex-wrap items-end justify-start pt-0 px-0 pb-px gap-[6px]">
        <div className="flex-1 flex flex-row items-start justify-start py-3 px-[15px] box-border min-w-[122px]">
          <b className="relative inline-block min-w-[122px]">Trends for you</b>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
          <div className="bg-trends-color overflow-hidden flex flex-row items-start justify-start py-0 pr-[30px] pl-3.5">
            <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" src="/iconssettings.svg" />
          </div>
        </div>
      </div>
      {
        <TrendingSection
          subtitle="Trending in Delaware"
          tag="#DEMODAY"
          count="2,066 Echos"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '22px' }} // Adjusting font size to 18px
        />
      }
      {
        <TrendingSection
          subtitle="Trending in California"
          tag="#JHipster"
          count="1,292 Echos"
          propDisplay="inline-block"
          propMinWidth="123px"
          propMinWidth1="66px"
          propDisplay1="inline-block"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '22px' }} // Adjusting font size to 18px
        />
      }
      {
        <TrendingSection
          subtitle="Trending in Pennsylvania "
          tag="#ZipCodeWilmington"
          count="2,066 Echos"
          propDisplay="unset"
          propMinWidth="unset"
          propMinWidth1="unset"
          propDisplay1="unset"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '22px' }} // Adjusting font size to 18px
        />
      }
      {
        <TrendingSection
          subtitle="Trending in Maryland"
          tag="#Hackathon"
          count="5,219 Echos"
          propDisplay="inline-block"
          propMinWidth="121px"
          propMinWidth1="83px"
          propDisplay1="inline-block"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '22px' }} // Adjusting font size to 18px
        />
      }
      <div className="self-stretch bg-trends-color overflow-hidden flex flex-row items-start justify-start text-mini text-blue">
        <div className="flex flex-row items-start justify-start p-4"></div>
      </div>
    </div>
  );
};

export default TrendingLists;
