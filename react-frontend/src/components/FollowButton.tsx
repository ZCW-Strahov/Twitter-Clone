import { FunctionComponent } from 'react';

const FollowButton: FunctionComponent = () => {
  return (
    <button className="cursor-pointer [border:none] py-[7px] px-[15px] bg-whitesmoke rounded-13xl overflow-hidden flex flex-row items-start justify-start hover:bg-gainsboro">
      <div className="relative text-sm font-lato text-gray1 text-left inline-block min-w-[41px]">Follow</div>
    </button>
  );
};

export default FollowButton;
