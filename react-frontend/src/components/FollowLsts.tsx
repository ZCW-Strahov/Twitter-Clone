import { FunctionComponent } from 'react';
import FollowButton from './FollowButton';
import AccountFollow from './AccountFollow';

const FollowLsts: FunctionComponent = () => {
  return (
    <div className="flex-1 rounded-mini overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-mini text-text font-lato">
      <div className="self-stretch bg-trends-color overflow-hidden flex flex-row items-start justify-start text-xl">
        <div className="w-[280px] flex flex-row items-start justify-start py-3 px-4 box-border">
          <b className="relative inline-block min-w-[128px] mq450:text-base">Who to follow</b>
        </div>
        <div className="bg-trends-color overflow-hidden hidden flex-row items-start justify-start py-0 pr-[30px] pl-3.5">
          <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" />
        </div>
      </div>
      <div className="self-stretch bg-trends-color flex flex-row flex-wrap items-start justify-start py-3 px-4 gap-[12px]">
        <img
          className="h-12 w-12 relative rounded-21xl overflow-hidden shrink-0 object-cover min-h-[48px]"
          loading="lazy"
          alt=""
          src="/profilephoto-2@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border min-w-[131px] gap-[20px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start py-[5px] px-0">
              <div className="flex flex-row items-start justify-start gap-[2px]">
                <div className="relative inline-block min-w-[38px]">React</div>
                <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" loading="lazy" alt="" src="/iconsverified.svg" />
              </div>
              <div className="relative font-light text-gray inline-block min-w-[56px]">@reactjs</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-[9px] px-0 pb-2">
            <FollowButton />
          </div>
        </div>
      </div>
      <AccountFollow profilePhoto="/profilephoto-3@2x.png" theNewYorkTimes="Mosh" nytimes="@moshhamedani" />
      <AccountFollow profilePhoto="/profilephoto-4@2x.png" theNewYorkTimes="ZCW" nytimes="@ZCW" propMinWidth="129px" propMinWidth1="47px" />
      <div className="self-stretch bg-trends-color overflow-hidden flex flex-row items-start justify-start text-blue">
        <div className="flex flex-row items-start justify-start p-4">
          <b className="relative inline-block min-w-[76px]">Show more</b>
        </div>
      </div>
    </div>
  );
};

export default FollowLsts;
