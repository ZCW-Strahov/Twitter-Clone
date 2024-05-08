import { FunctionComponent } from 'react';
import NavigationBar from '../components/NavigationBar';
import ProfileSettings from '../components/ProfileSettings';
import Timeline from '../components/Timeline';
import SearchBar from '../components/SearchBar';
import TrendingLists from '../components/TrendingLists';
import FollowLsts from '../components/FollowLsts';

const HomeFeedPage: FunctionComponent = () => {
  return (
    <div className="w-full h-[1024px] relative bg-black overflow-hidden flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border leading-[normal] tracking-[normal] text-left text-smi text-gray font-lato mq450:h-auto">
      <div className="w-[275px] bg-black overflow-hidden shrink-0 flex flex-col items-start justify-start pt-1 px-3 pb-3 box-border gap-[362px] lg:hidden mq1050:hidden mq450:gap-[181px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <NavigationBar />
          <button className="cursor-pointer [border:none] pt-4 px-[86px] pb-[15px] bg-blue w-[225px] rounded-[52px] overflow-hidden flex flex-row items-start justify-center box-border hover:bg-tomato mq450:pl-5 mq450:pr-5 mq450:box-border">
            <b className="relative text-[17px] inline-block font-lato text-white text-left min-w-[38px]">Echo</b>
          </button>
        </div>
        <ProfileSettings />
      </div>
      <div className="w-[630px] flex flex-col items-start justify-start py-0 pr-[30px] pl-0 box-border min-h-[1435px] max-w-[calc(100%_-_635px)] shrink-0 lg:hidden mq1050:max-w-full">
        <Timeline />
      </div>
      <div className="w-[360px] bg-black overflow-hidden shrink-0 flex flex-col items-start justify-start pt-1.5 pb-[152px] pr-2.5 pl-0 box-border gap-[12px] max-w-[calc(100%_-_905px)] lg:max-w-full mq1050:hidden mq1050:pt-5 mq1050:pb-[99px] mq1050:box-border mq450:pb-16 mq450:box-border">
        <SearchBar />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
          <TrendingLists />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
          <FollowLsts />
        </div>
        <div className="bg-black overflow-hidden flex flex-row items-start justify-start py-0 px-4">
          <div className="flex flex-row items-start justify-start py-0 pr-4 pl-0 gap-[1px] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start py-0.5 pr-3 pl-0">
                <div className="relative font-light inline-block min-w-[93px]">Terms of Service</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[3px]">
                <div className="flex flex-row items-start justify-start py-0.5 pr-3 pl-0">
                  <div className="relative font-light inline-block min-w-[40px]">Imprint</div>
                </div>
                <div className="flex flex-row items-start justify-start py-0.5 pr-3 pl-0">
                  <div className="relative font-light inline-block min-w-[46px]">Ads info</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[7px]">
                <div className="flex flex-row items-start justify-start py-0.5 pr-3 pl-0">
                  <div className="relative font-light inline-block min-w-[77px]">Privacy Policy</div>
                </div>
                <div className="flex flex-row items-start justify-start py-0.5 pr-3 pl-0">
                  <div className="relative font-light inline-block min-w-[76px]">Cookie Policy</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                <div className="flex flex-row items-start justify-start gap-[3px]">
                  <div className="flex flex-row items-start justify-start py-0.5 pr-3 pl-0">
                    <div className="relative font-light inline-block min-w-[43px]">More ...</div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0.5 pr-[25px] pl-0">
                    <div className="relative font-light inline-block min-w-[102px]">© 2024 Echo, Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeedPage;
