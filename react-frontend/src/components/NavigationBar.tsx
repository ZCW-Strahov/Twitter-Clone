import { FunctionComponent } from 'react';

const NavigationBar: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-lgi text-text font-lato">
      <div className="rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="" />
        <b className="h-0 w-[52px] relative hidden">Home</b>
        <div className="h-[18px] w-[18px] relative rounded-lg bg-blue box-border overflow-hidden shrink-0 hidden text-2xs text-white border-[1px] border-solid border-black">
          <b className="absolute top-[2px] left-[6px]">1</b>
        </div>
      </div>
      <div className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" alt="" src="/iconshomefill.svg" />
        <b className="relative inline-block min-w-[52px] whitespace-nowrap">Home</b>
        <div className="h-[18px] w-[18px] relative rounded-lg bg-blue box-border overflow-hidden shrink-0 hidden text-2xs text-white border-[1px] border-solid border-black">
          <b className="absolute top-[2px] left-[6px]">1</b>
        </div>
      </div>
      <div className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" alt="" src="/iconsexplore.svg" />
        <b className="relative inline-block min-w-[66px]">Explore</b>
        <div className="h-[18px] w-[18px] relative rounded-lg bg-blue box-border overflow-hidden shrink-0 hidden text-2xs text-white border-[1px] border-solid border-black">
          <b className="absolute top-[2px] left-[6px]">1</b>
        </div>
      </div>
      <div className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" alt="" src="/iconsnotifications.svg" />
        <b className="relative inline-block min-w-[111px]">Notifications</b>
        <div className="h-[18px] w-[18px] relative rounded-lg bg-blue box-border overflow-hidden shrink-0 hidden text-2xs text-white border-[1px] border-solid border-black">
          <b className="absolute top-[2px] left-[6px]">1</b>
        </div>
      </div>
      <div className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" alt="" src="/iconsmessages.svg" />
        <b className="relative inline-block min-w-[83px]">Messages</b>
        <div className="h-[18px] w-[18px] relative rounded-lg bg-blue box-border overflow-hidden shrink-0 hidden text-2xs text-white border-[1px] border-solid border-black">
          <b className="absolute top-[2px] left-[6px]">1</b>
        </div>
      </div>
      <div className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" loading="lazy" alt="" src="/iconsbookmarks.svg" />
        <b className="relative inline-block min-w-[97px]">Bookmarks</b>
        <div className="h-[18px] w-[18px] relative rounded-lg bg-blue box-border overflow-hidden shrink-0 hidden text-2xs text-white border-[1px] border-solid border-black">
          <b className="absolute top-[2px] left-[6px]">1</b>
        </div>
      </div>
      <div className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <input className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" type="checkbox" />
        <b className="relative inline-block min-w-[39px]">Lists</b>
        <div className="h-[18px] w-[18px] relative rounded-lg bg-blue box-border overflow-hidden shrink-0 hidden text-2xs text-white border-[1px] border-solid border-black">
          <b className="absolute top-[2px] left-[6px]">1</b>
        </div>
      </div>
      <div className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" loading="lazy" alt="" src="/iconsprofile.svg" />
        <b className="relative inline-block min-w-[58px]">Profile</b>
        <div className="h-[18px] w-[18px] relative rounded-lg bg-blue box-border overflow-hidden shrink-0 hidden text-2xs text-white border-[1px] border-solid border-black">
          <b className="absolute top-[2px] left-[6px]">1</b>
        </div>
      </div>
      <div className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" loading="lazy" alt="" src="/iconsmore.svg" />
        <b className="relative inline-block min-w-[47px]">More</b>
        <div className="h-[18px] w-[18px] relative rounded-lg bg-blue box-border overflow-hidden shrink-0 hidden text-2xs text-white border-[1px] border-solid border-black">
          <b className="absolute top-[2px] left-[6px]">1</b>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
