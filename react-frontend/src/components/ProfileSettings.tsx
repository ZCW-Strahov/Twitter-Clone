import { FunctionComponent } from 'react';

const ProfileSettings: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-45xl bg-black overflow-hidden flex flex-row items-end justify-start p-3 gap-[12px] text-left text-mini text-text font-lato">
      <img
        className="h-10 w-10 relative rounded-21xl overflow-hidden shrink-0 object-cover min-h-[40px]"
        loading="lazy"
        alt=""
        src="/profilephoto@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-end pt-0 pb-px pr-[21px] pl-0">
        <div className="self-stretch h-[37px] relative">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[2px]">
            <b className="relative inline-block min-w-[32px]">User</b>
            <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt="" src="/iconsprivate.svg" />
          </div>
          <div className="absolute top-[19px] left-[0px] flex flex-row items-start justify-start z-[1] text-gray">
            <b className="relative inline-block min-w-[79px]">@username</b>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
        <img className="w-5 h-5 relative overflow-hidden shrink-0" alt="" src="/iconsmore2.svg" />
      </div>
    </div>
  );
};

export default ProfileSettings;
