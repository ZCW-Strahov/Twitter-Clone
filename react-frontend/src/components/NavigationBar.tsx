import { FunctionComponent } from 'react';

const NavigationBar: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-lgi text-text font-lato">
      <a href="/homepage" className="rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="Home Icon" src="/iconshomefill.svg" />
        <b className="relative inline-block min-w-[52px]" style={{ color: 'white' }}>
          Home
        </b>
      </a>
      {/* <a href="/explore" className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0" alt="Explore Icon" src="/iconsexplore.svg" />
        <b className="relative inline-block min-w-[66px]" style={{ color: 'white' }}>
          Explore
        </b>
      </a> */}
      {/* <a
        href="/notifications"
        className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]"
      >
        <img className="h-6 w-6 relative overflow-hidden shrink-0" alt="Notifications Icon" src="/iconsnotifications.svg" />
        <b className="relative inline-block min-w-[111px]" style={{ color: 'white' }}>
          Notifications
        </b>
      </a> */}
      {/* <a href="/messages" className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0" alt="Messages Icon" src="/iconsmessages.svg" />
        <b className="relative inline-block min-w-[83px]" style={{ color: 'white' }}>
          Messages
        </b>
      </a> */}
      {/* <a
        href="/bookmarks"
        className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]"
      >
        <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="Bookmarks Icon" src="/iconsbookmarks.svg" />
        <b className="relative inline-block min-w-[97px]" style={{ color: 'white' }}>
          Bookmarks
        </b>
      </a> */}

      <a href="/profile" className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="Profile Icon" src="/iconsprofile.svg" />
        <b className="relative inline-block min-w-[58px]" style={{ color: 'white' }}>
          Profile
        </b>
      </a>
      {/* <a href="/more" className="self-stretch rounded-31xl overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[20px]">
        <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="More Icon" src="/iconsmore.svg" />
        <b className="relative inline-block min-w-[47px]" style={{ color: 'white' }}>
          More
        </b>
      </a> */}
    </div>
  );
};

export default NavigationBar;
