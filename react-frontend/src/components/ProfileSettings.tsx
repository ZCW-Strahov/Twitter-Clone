import { FunctionComponent } from 'react';

const ProfileSettings: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-45xl bg-black overflow-hidden flex flex-row items-end justify-start p-3 gap-[12px] text-left text-mini text-text font-lato">
      <div className="flex-1 flex flex-col items-start justify-end pt-0 pb-px pr-[21px] pl-0">
        <div className="self-stretch h-[37px] relative">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[2px]"></div>
          <div className="absolute top-[19px] left-[0px] flex flex-row items-start justify-start z-[1] text-gray">{/*here */}</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5"></div>
    </div>
  );
};

export default ProfileSettings;
