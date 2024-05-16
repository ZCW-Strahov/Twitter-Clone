import { FunctionComponent } from 'react';

const SearchBar: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-23xl bg-trends-color overflow-hidden flex flex-row items-start justify-start [row-gap:20px] text-left text-mini text-gray font-lato mq450:flex-wrap">
      <img
        className="h-[50px] w-[50px] relative rounded-23xl overflow-hidden shrink-0 min-h-[42px]"
        loading="lazy"
        alt=""
        src="/searchicon.svg"
      />
      <div className="flex flex-row items-start justify-start p-3">
        <div className="relative inline-block min-w-[100px]">Search Echo</div>
      </div>
    </div>
  );
};

export default SearchBar;
