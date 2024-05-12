import { FunctionComponent } from 'react';
import MediaTweetButton from './MediaTweetButton';
import Tweet from './Tweet';
import ReplyButton from './ReplyButton';
import RepostButton from './RepostButton';
import LikeButton from './LikeButton';

// const Timeline: FunctionComponent = () => {
//   return (
//     <div className="self-stretch h-[1024px] bg-black overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[1023px] box-border relative max-w-full text-left text-xl text-gray font-lato lg:pb-[665px] lg:box-border mq1050:pb-[432px] mq1050:box-border mq450:h-auto mq750:pb-[281px] mq750:box-border">
//       <div className="self-stretch bg-black overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border gap-[9px] [debug_commit:1de1738] max-w-full text-white">
//         <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
//           <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
//             <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
//               <div className="flex flex-row items-start justify-start">
//                 <b className="relative inline-block min-w-[55px] mq450:text-base">Home</b>
//               </div>
//             </div>
//             <img
//               className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0"
//               loading="lazy"
//               alt=""
//               src="/butonstoptweets.svg"
//             />
//           </div>
//         </div>
//         <div className="self-stretch h-px relative bg-border-color" />
//       </div>
//       <div className="self-stretch bg-black overflow-hidden shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border gap-[15px] [debug_commit:1de1738] max-w-full">
//         <div className="flex flex-row items-start justify-start py-0 px-4">
//           <div className="flex flex-row items-end justify-start gap-[12px]">
//             <img
//               className="h-12 w-12 relative rounded-21xl overflow-hidden shrink-0 object-cover"
//               loading="lazy"
//               alt=""
//               src="/profilephoto-1@2x.png"
//             />
//             <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
//               <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-0">
//                 <div className="relative mq450:text-base">What’s happening?</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="self-stretch flex flex-col items-end justify-start gap-[3px] max-w-full">
//           <div className="w-[548px] flex flex-row items-start justify-end py-0 px-3.5 box-border max-w-full">
//             <div className="flex-1 bg-black overflow-hidden flex flex-row items-end justify-between pt-3 px-0.5 pb-0 box-border max-w-full gap-[20px] mq450:flex-wrap">
//               <div className="flex flex-row items-start justify-start">
//                 <MediaTweetButton />
//                 <img
//                   className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 min-h-[34px]"
//                   loading="lazy"
//                   alt=""
//                   src="/butonstoptweets-2.svg"
//                 />
//                 <img
//                   className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 min-h-[34px]"
//                   loading="lazy"
//                   alt=""
//                   src="/butonstoptweets-3.svg"
//                 />
//                 <img
//                   className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 min-h-[34px]"
//                   loading="lazy"
//                   alt=""
//                   src="/butonstoptweets-4.svg"
//                 />
//                 <img
//                   className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 min-h-[34px]"
//                   loading="lazy"
//                   alt=""
//                   src="/butonstoptweets-5.svg"
//                 />
//               </div>
//               <button className="cursor-pointer [border:none] py-[9px] px-4 bg-blue w-[74px] rounded-17xl overflow-hidden shrink-0 flex flex-row items-start justify-start box-border opacity-[0.5] hover:bg-tomato">
//                 <Tweet />
//               </button>
//             </div>
//           </div>
//           <div className="self-stretch h-px relative bg-border-color" />
//         </div>
//       </div>
//       <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full shrink-0 text-mini">
//         <div className="flex-1 flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738] max-w-full">
//           <div className="self-stretch flex flex-col items-start justify-start max-w-full text-text">
//             <div className="self-stretch bg-black overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-4 box-border gap-[12px] max-w-full">
//               <img className="h-12 w-12 relative object-contain" loading="lazy" alt="" src="/tweetprofilephoto@2x.png" />
//               <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[329px] max-w-full">
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
//                   <nav className="m-0 flex flex-row items-start justify-start gap-[3.7px] text-left text-mini text-gray font-lato">
//                     <div className="flex flex-row items-start justify-start gap-[1px] text-text">
//                       <b className="relative inline-block min-w-[128px]">Marques Brownlee</b>
//                       <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt="" src="/iconsverified.svg" />
//                     </div>
//                     <div className="relative font-light inline-block min-w-[69px]">@MKBHD</div>
//                     <div className="relative font-light inline-block min-w-[4px]">.</div>
//                     <div className="relative font-light inline-block min-w-[21px]">7m</div>
//                   </nav>
//                   <div className="self-stretch flex flex-row items-start justify-start max-w-full">
//                     <div className="flex-1 relative inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] max-w-full">
//                       <p className="m-0">
//                         On one hand: It seems like it's only a matter of time before Apple starts making major AI-related moves around the
//                         iPhone and iOS and buries these AI-in-a-box gadgets extremely quickly
//                       </p>
//                       <p className="m-0">&nbsp;</p>
//                       <p className="m-0">On the other hand: Have you used Siri lately?</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-start justify-start gap-[13px] max-w-full text-smi text-gray">
//                   <img
//                     className="h-[283.5px] w-[506px] relative rounded-17xl overflow-hidden shrink-0 object-cover hidden max-w-full"
//                     alt=""
//                   />
//                   <div className="flex-1 flex flex-row items-start justify-start gap-[51.7px] max-w-full mq450:gap-[26px] mq750:flex-wrap">
//                     <div className="bg-black flex flex-row items-start justify-start py-0 pr-px pl-0">
//                       <ReplyButton />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3">
//                           <div className="relative font-light inline-block min-w-[16px]">57</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-black flex flex-row items-start justify-start">
//                       <RepostButton />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3 shrink-0 [debug_commit:1de1738]">
//                           <div className="relative font-light inline-block min-w-[23px]">144</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-black flex flex-row items-start justify-start">
//                       <LikeButton />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3 shrink-0 [debug_commit:1de1738]">
//                           <div className="relative font-light inline-block min-w-[23px]">184</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0"
//                         loading="lazy"
//                         alt=""
//                         src="/tweetrepliesbuton-3.svg"
//                       />
//                       <div className="h-4 bg-black hidden flex-row items-center justify-center py-0 px-3 box-border">
//                         <div className="self-stretch relative font-light">36</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="self-stretch h-px relative bg-border-color" />
//           </div>
//           <div className="self-stretch flex flex-col items-start justify-start max-w-full">
//             <div className="self-stretch bg-black overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-4 box-border gap-[12px] max-w-full">
//               <img className="h-12 w-12 relative object-contain" loading="lazy" alt="" src="/tweetprofilephoto-1@2x.png" />
//               <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[329px] max-w-full">
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
//                   <div className="flex flex-row items-start justify-start gap-[4px]">
//                     <div className="flex flex-row items-start justify-start gap-[2px] text-text">
//                       <b className="relative inline-block min-w-[71px]">Elon Musk</b>
//                       <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt="" src="/iconsverified.svg" />
//                     </div>
//                     <div className="relative font-light inline-block min-w-[74px]">@elonmusk</div>
//                     <div className="relative font-light inline-block min-w-[4px]">.</div>
//                     <div className="relative font-light inline-block min-w-[17px]">2h</div>
//                   </div>
//                   <div className="self-stretch flex flex-row items-start justify-start max-w-full text-text">
//                     <div className="flex-1 relative inline-block max-w-full">It’s inevitable</div>
//                   </div>
//                 </div>
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-smi">
//                   <img
//                     className="self-stretch h-[283.5px] relative rounded-17xl max-w-full overflow-hidden shrink-0 object-cover"
//                     loading="lazy"
//                     alt=""
//                     src="/tweetbodyimg@2x.png"
//                   />
//                   <div className="self-stretch flex flex-row items-start justify-start gap-[51.7px] mq450:gap-[26px] mq750:flex-wrap">
//                     <div className="bg-black flex flex-row items-start justify-start py-0 pr-px pl-0">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0"
//                         loading="lazy"
//                         alt=""
//                         src="/tweetrepliesbuton-4.svg"
//                       />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3">
//                           <div className="relative font-light inline-block min-w-[16px]">19</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-black flex flex-row items-start justify-start py-0 pr-px pl-0">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0"
//                         alt=""
//                         src="/tweetrepliesbuton-5.svg"
//                       />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3">
//                           <div className="relative font-light inline-block min-w-[16px]">48</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-black flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]"
//                         loading="lazy"
//                         alt=""
//                         src="/tweetrepliesbuton-6.svg"
//                       />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3 shrink-0 [debug_commit:1de1738]">
//                           <div className="relative font-light inline-block min-w-[23px]">482</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0"
//                         loading="lazy"
//                         alt=""
//                         src="/tweetrepliesbuton-7.svg"
//                       />
//                       <div className="h-4 bg-black hidden flex-row items-center justify-center py-0 px-3 box-border">
//                         <div className="self-stretch relative font-light">36</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="self-stretch h-px relative bg-border-color" />
//           </div>
//           <div className="self-stretch flex flex-col items-start justify-start max-w-full">
//             <div className="self-stretch bg-black overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-4 box-border gap-[12px] max-w-full">
//               <img className="h-12 w-12 relative object-contain" loading="lazy" alt="" src="/tweetprofilephoto-2@2x.png" />
//               <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[329px] max-w-full">
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
//                   <div className="flex flex-row items-start justify-start gap-[4px]">
//                     <div className="flex flex-row items-start justify-start gap-[2px] text-text">
//                       <b className="relative inline-block min-w-[35px]">ZCW</b>
//                       <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt="" src="/iconsverified-2.svg" />
//                     </div>
//                     <div className="relative font-light inline-block min-w-[47px]">@ZCW</div>
//                     <div className="relative font-light inline-block min-w-[4px]">.</div>
//                     <div className="relative font-light inline-block min-w-[41px]">{`May 8 `}</div>
//                   </div>
//                   <div className="self-stretch flex flex-row items-start justify-start max-w-full text-text">
//                     <div className="flex-1 relative inline-block max-w-full">WHO’S READY FOR #DEMODAY?</div>
//                   </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-start justify-start gap-[13px] max-w-full text-smi">
//                   <img
//                     className="h-[283.5px] w-[506px] relative rounded-17xl overflow-hidden shrink-0 object-cover hidden max-w-full"
//                     alt=""
//                   />
//                   <div className="flex-1 flex flex-row items-start justify-start gap-[51.7px] max-w-full mq450:gap-[26px] mq750:flex-wrap">
//                     <button className="cursor-pointer [border:none] p-0 bg-black w-[75px] flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]"
//                         alt=""
//                         src="/tweetrepliesbuton-8.svg"
//                       />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3 shrink-0 [debug_commit:1de1738]">
//                           <div className="relative text-smi font-light font-lato text-gray text-left inline-block min-w-[27px]">6.8K</div>
//                         </div>
//                       </div>
//                     </button>
//                     <button className="cursor-pointer [border:none] p-0 bg-black w-[75px] flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]"
//                         alt=""
//                         src="/tweetrepliesbuton-5.svg"
//                       />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3 shrink-0 [debug_commit:1de1738]">
//                           <div className="relative text-smi font-light font-lato text-gray text-left inline-block min-w-[34px]">36.6K</div>
//                         </div>
//                       </div>
//                     </button>
//                     <button className="cursor-pointer [border:none] p-0 bg-black w-[75px] flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]"
//                         alt=""
//                         src="/tweetrepliesbuton-10.svg"
//                       />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3 shrink-0 [debug_commit:1de1738]">
//                           <div className="relative text-smi font-light font-lato text-gray text-left inline-block min-w-[42px]">267.1K</div>
//                         </div>
//                       </div>
//                     </button>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0"
//                         alt=""
//                         src="/tweetrepliesbuton-11.svg"
//                       />
//                       <div className="h-4 bg-black hidden flex-row items-center justify-center py-0 px-3 box-border">
//                         <div className="self-stretch relative font-light">36</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="self-stretch h-px relative bg-border-color" />
//           </div>
//           <div className="self-stretch flex flex-col items-start justify-start max-w-full">
//             <div className="self-stretch bg-black overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-4 box-border gap-[12px] max-w-full">
//               <img className="h-12 w-12 relative object-contain" loading="lazy" alt="" src="/tweetprofilephoto-2@2x.png" />
//               <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[329px] max-w-full">
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
//                   <div className="flex flex-row items-start justify-start gap-[4px]">
//                     <div className="flex flex-row items-start justify-start gap-[2px] text-text">
//                       <b className="relative inline-block min-w-[35px]">ZCW</b>
//                       <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt="" src="/iconsverified-2.svg" />
//                     </div>
//                     <div className="relative font-light inline-block min-w-[47px]">@ZCW</div>
//                     <div className="relative font-light inline-block min-w-[4px]">.</div>
//                     <div className="relative font-light inline-block min-w-[41px]">{`May 4 `}</div>
//                   </div>
//                   <div className="self-stretch flex flex-row items-start justify-start max-w-full text-text">
//                     <div className="flex-1 relative inline-block max-w-full">hello, world!</div>
//                   </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-start justify-start gap-[13px] max-w-full text-smi">
//                   <img
//                     className="h-[283.5px] w-[506px] relative rounded-17xl overflow-hidden shrink-0 object-cover hidden max-w-full"
//                     alt=""
//                   />
//                   <div className="flex-1 flex flex-row items-start justify-start gap-[51.7px] max-w-full mq450:gap-[26px] mq750:flex-wrap">
//                     <button className="cursor-pointer [border:none] p-0 bg-black w-[75px] flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]"
//                         alt=""
//                         src="/tweetrepliesbuton-8.svg"
//                       />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3 shrink-0 [debug_commit:1de1738]">
//                           <div className="relative text-smi font-light font-lato text-gray text-left inline-block min-w-[42px]">118.7K</div>
//                         </div>
//                       </div>
//                     </button>
//                     <button className="cursor-pointer [border:none] p-0 bg-black w-[75px] flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]"
//                         alt=""
//                         src="/tweetrepliesbuton-5.svg"
//                       />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3 shrink-0 [debug_commit:1de1738]">
//                           <div className="relative text-smi font-light font-lato text-gray text-left inline-block min-w-[42px]">785.4K</div>
//                         </div>
//                       </div>
//                     </button>
//                     <button className="cursor-pointer [border:none] p-0 bg-black w-[75px] flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]"
//                         alt=""
//                         src="/tweetrepliesbuton-10.svg"
//                       />
//                       <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//                         <div className="bg-black flex flex-row items-start justify-start py-0 px-3 shrink-0 [debug_commit:1de1738]">
//                           <div className="relative text-smi font-light font-lato text-gray text-left inline-block min-w-[30px]">3.3M</div>
//                         </div>
//                       </div>
//                     </button>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img
//                         className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0"
//                         alt=""
//                         src="/tweetrepliesbuton-11.svg"
//                       />
//                       <div className="h-4 bg-black hidden flex-row items-center justify-center py-0 px-3 box-border">
//                         <div className="self-stretch relative font-light">36</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="self-stretch h-px relative bg-border-color" />
//           </div>
//           <div className="self-stretch flex flex-col items-start justify-start max-w-full">
//             <div className="self-stretch bg-black overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-4 box-border gap-[12px] max-w-full">
//               <img className="h-12 w-12 relative object-contain" loading="lazy" alt="" src="/tweetprofilephoto-4@2x.png" />
//               <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[329px] max-w-full">
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
//                   <div className="flex flex-row items-start justify-start gap-[4px]">
//                     <div className="flex flex-row items-start justify-start gap-[2px] text-text">
//                       <b className="relative inline-block min-w-[48px]">Google</b>
//                       <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt="" src="/iconsverified-2.svg" />
//                     </div>
//                     <div className="relative font-light inline-block min-w-[59px]">@Google</div>
//                     <div className="relative font-light inline-block min-w-[4px]">.</div>
//                     <div className="relative font-light inline-block min-w-[41px]">{`May 4 `}</div>
//                   </div>
//                   <div className="self-stretch flex flex-row items-start justify-start max-w-full text-text">
//                     <div className="h-[18px] flex-1 relative inline-block max-w-full">hello literally everyone</div>
//                   </div>
//                 </div>
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-smi">
//                   <img
//                     className="self-stretch h-[283.5px] relative rounded-17xl max-w-full overflow-hidden shrink-0 object-cover"
//                     alt=""
//                     src="/tweetbodyimg-1@2x.png"
//                   />
//                   <div className="self-stretch flex flex-row items-start justify-start gap-[51.7px] mq450:gap-[26px] mq750:flex-wrap">
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]" alt="" />
//                       <div className="w-[66px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border shrink-0">
//                         <div className="self-stretch h-4 bg-black flex flex-row items-start justify-start py-0 px-3 box-border shrink-0 [debug_commit:1de1738]">
//                           <div className="self-stretch flex-1 relative font-light">118.7K</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]" alt="" />
//                       <div className="w-[66px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border shrink-0">
//                         <div className="self-stretch h-4 bg-black flex flex-row items-start justify-start py-0 px-3 box-border shrink-0 [debug_commit:1de1738]">
//                           <div className="self-stretch flex-1 relative font-light">785.4K</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]" alt="" />
//                       <div className="w-[54px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border shrink-0">
//                         <div className="self-stretch h-4 bg-black flex flex-row items-start justify-start py-0 px-3 box-border shrink-0 [debug_commit:1de1738]">
//                           <div className="self-stretch flex-1 relative font-light">3.3M</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0" alt="" />
//                       <div className="h-4 bg-black hidden flex-row items-center justify-center py-0 px-3 box-border">
//                         <div className="self-stretch relative font-light">36</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="self-stretch h-px relative bg-border-color" />
//           </div>
//           <div className="self-stretch flex flex-col items-start justify-start max-w-full">
//             <div className="self-stretch bg-black overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-4 box-border gap-[12px] max-w-full">
//               <img className="h-12 w-12 relative object-cover" alt="" src="/tweetprofilephoto-5@2x.png" />
//               <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[329px] max-w-full">
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
//                   <div className="w-[180px] flex flex-row items-start justify-start gap-[3.3px]">
//                     <div className="flex-1 flex flex-row items-start justify-start text-text">
//                       <b className="h-[18px] flex-1 relative inline-block">Twitter</b>
//                       <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt="" />
//                     </div>
//                     <div className="h-[18px] w-[59px] relative font-light inline-block">@Twitter</div>
//                     <div className="h-[18px] w-1 relative font-light inline-block">.</div>
//                     <div className="h-[18px] w-[37px] relative font-light inline-block">{`Oct 4 `}</div>
//                   </div>
//                   <div className="self-stretch flex flex-row items-start justify-start max-w-full text-text">
//                     <div className="h-[18px] flex-1 relative inline-block max-w-full">hello literally everyone</div>
//                   </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-start justify-start gap-[13px] max-w-full text-smi">
//                   <img
//                     className="h-[283.5px] w-[506px] relative rounded-17xl overflow-hidden shrink-0 object-cover hidden max-w-full"
//                     alt=""
//                   />
//                   <div className="flex-1 flex flex-row items-start justify-start gap-[51.7px] max-w-full mq450:gap-[26px] mq750:flex-wrap">
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]" alt="" />
//                       <div className="w-[66px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border shrink-0">
//                         <div className="self-stretch h-4 bg-black flex flex-row items-start justify-start py-0 px-3 box-border shrink-0 [debug_commit:1de1738]">
//                           <div className="self-stretch flex-1 relative font-light">118.7K</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]" alt="" />
//                       <div className="w-[66px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border shrink-0">
//                         <div className="self-stretch h-4 bg-black flex flex-row items-start justify-start py-0 px-3 box-border shrink-0 [debug_commit:1de1738]">
//                           <div className="self-stretch flex-1 relative font-light">785.4K</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0 [debug_commit:1de1738]" alt="" />
//                       <div className="w-[54px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border shrink-0">
//                         <div className="self-stretch h-4 bg-black flex flex-row items-start justify-start py-0 px-3 box-border shrink-0 [debug_commit:1de1738]">
//                           <div className="self-stretch flex-1 relative font-light">3.3M</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[75px] bg-black flex flex-row items-start justify-start">
//                       <img className="h-[34px] w-[34px] relative rounded-15xl overflow-hidden shrink-0" alt="" />
//                       <div className="h-4 bg-black hidden flex-row items-center justify-center py-0 px-3 box-border">
//                         <div className="self-stretch relative font-light">36</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="self-stretch h-px relative bg-border-color" />
//           </div>
//         </div>
//       </div>
//       <div className="w-px h-[calc(100%_+_411px)] absolute !m-[0] top-[0px] right-[0px] bottom-[-411px] bg-border-color z-[1]" />
//       <div className="w-px h-[calc(100%_+_411px)] absolute !m-[0] top-[0px] bottom-[-411px] left-[0px] bg-border-color z-[1]" />
//     </div>
//   );
// };

import React, { useState } from 'react';
import './Timeline.css'; // Import the CSS file
import PostTweets from '../pages/postTweets';
import PaginatedTweets from '../pages/timelinefeed';

// Define the Post interface
interface Post {
  id: number;
  text: string;
  image?: string;
  likes: number;
  liked: boolean;
  comments: string[];
  isCommenting: boolean;
  createdAt: number;
}

const YourComponent: React.FC = () => {
  const [feedInputText, setFeedInputText] = useState<string>(''); // State for main feed input
  const [commentInputText, setCommentInputText] = useState<string>(''); // State for comment input
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleFeedInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedInputText(event.target.value);
  };

  const handleCommentInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInputText(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  const handlePost = () => {
    if (feedInputText.trim() !== '' || imageFile) {
      const newPost: Post = {
        id: posts.length + 1,
        text: feedInputText,
        image: imageFile ? URL.createObjectURL(imageFile) : undefined,
        likes: 0,
        liked: false,
        comments: [],
        isCommenting: false,
        createdAt: Date.now(),
      };
      setPosts([newPost, ...posts]); // Add new post to the beginning of the array
      setFeedInputText('');
      setImageFile(null);
      window.location.reload(); // Reload the page
    }
  };

  const handleLike = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
            liked: !post.liked,
          };
        }
        return post;
      }),
    );
  };

  const handleComment = (postId: number) => {
    setPosts(prevPosts => prevPosts.map(post => (post.id === postId ? { ...post, isCommenting: !post.isCommenting } : post)));
  };

  const handleAddComment = (postId: number, commentText: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, commentText], // Add new comment to the existing comments array
              isCommenting: false,
            }
          : post,
      ),
    );
    setCommentInputText(''); // Clear comment input after posting comment
  };

  const handleDeleteComment = (postId: number, commentIndex: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter((_, index) => index !== commentIndex), // Remove comment at commentIndex
            }
          : post,
      ),
    );
  };

  const handleDeletePost = (postId: number) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          left: '31.7%', // You can adjust this value for the initial position
          top: '-37%',
          width: '30.5%', // Width remains unchanged
          height: '59%', // Adjust height as needed to crop the bottom part
          overflow: 'hidden', // Ensures that any content extending past this div's height is not shown
          backgroundColor: 'black', // Changes the background color of the div to black
        }}
      >
        <div
          style={{
            marginLeft: '-50%', // Set negative margin to half of the width to crop from the left
            width: 'calc(100% + 27.7%)', // Dynamically calculate the width to include both sides
            height: '100%', // Height set to 100% to fill the parent container
            backgroundColor: 'inherit', // Inherit the background color of the parent div
          }}
        >
          <div
            style={{
              marginLeft: '27.7%', // Set positive margin to offset the cropping from the left
              width: '100%', // Width set to 100% to fill the parent container
              height: '100%', // Height set to 100% to fill the parent container
              backgroundColor: 'inherit', // Inherit the background color of the parent div
            }}
          >
            <PostTweets /> {/* Assuming PostTweets is the component to be displayed */}
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '31.8%',
          top: '22.4%',
          width: '55.5%',
          transform: 'scaleY(1.3)', // Scale vertically to make it 20% taller
          transformOrigin: 'top', // Ensure scaling happens from the top
        }}
      >
        <PaginatedTweets /> {/* Call the PaginatedTweets component */}
      </div>
    </div>
  );
};

export default YourComponent;
