import { FunctionComponent, useCallback } from 'react';
import EchoSecretButton from '../components/EchoSecretButton';
import SignUpWith from '../components/SignUpWith';
import LogIn from '../components/LogInLanding';
import { useNavigate } from 'react-router-dom';

const EchoLandingPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const onAlreadyHaveAnClick = useCallback(() => {
    navigate('/login');
  }, []);
  navigate('/login');

  // NEED TO REWRITE AND SHORTEN CODE

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 pb-[18px] pr-[119px] pl-0 box-border gap-[18px] leading-[normal] tracking-[normal] text-left text-smi text-black font-roboto mq750:pr-[29px] mq750:box-border mq1050:pr-[59px] mq1050:box-border">
      <main className="self-stretch flex flex-row items-start justify-start max-w-full">
        <section className="h-[1025px] w-[1743px] flex flex-row items-end justify-start pt-[200px] pb-0 pr-0 pl-[1155px] box-border gap-[41px] max-w-full text-left text-[84px] text-black font-roboto lg:pl-[577px] lg:box-border mq450:pl-5 mq450:box-border mq750:gap-[20px] mq750:pl-72 mq750:pt-[84px] mq750:box-border mq1050:pt-[130px] mq1050:box-border">
          <img
            className="ml-[-1162px] h-[1028px] w-[1121px] relative object-cover shrink-0 [debug_commit:1de1738] max-w-[191%]"
            alt=""
            src="/echobackground.png"
          />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[187px] box-border min-h-[825px] max-w-full shrink-0 mq450:pb-[79px] mq450:box-border mq1050:pb-[122px] mq1050:box-border">
            <div className="flex flex-col items-start justify-start gap-[57px] shrink-0 [debug_commit:1de1738] max-w-full mq750:gap-[28px]">
              <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                <img className="h-[41px] w-[50px] relative object-cover" loading="lazy" alt="" src="/echologo.png" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[46px] max-w-full mq750:gap-[23px]">
                <h1 className="m-0 relative text-inherit font-black font-inherit mq450:text-6xl mq1050:text-23xl">Happening now</h1>
                <div className="flex flex-col items-start justify-start gap-[20px] max-w-full text-23xl">
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                    <h1 className="m-0 relative text-inherit font-black font-inherit mq450:text-6xl mq1050:text-[34px]">
                      <span>{`Join `}</span>
                      <EchoSecretButton />
                      <span> today.</span>
                    </h1>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full text-xl">
                    <div className="flex flex-col items-start justify-start gap-[23px] max-w-full">
                      <div className="w-[403px] overflow-x-auto flex flex-col items-start justify-start gap-[14px] max-w-full">
                        {/* <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[403px] overflow-hidden flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-center pt-3.5 pb-4 pr-5 pl-[42px] box-border relative gap-[3px] max-w-full">
                            <img className="h-8 w-[31px] relative object-cover min-h-[32px]" alt="" src="/googleicon-1@2x.png" />
                            <div className="w-[197px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                              <div className="self-stretch relative text-xl font-medium font-roboto text-black text-left mq450:text-base">
                                Sign up with Google
                              </div>
                            </div>
                            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-23xl bg-silver box-border opacity-[0.8] z-[1] border-[1px] border-solid border-black" />
                          </div>
                        </button> */}
                        <div className="w-[403px] flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-start pt-[18px] pb-3 pr-[69px] pl-[100px] box-border relative gap-[6px] max-w-full">
                            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-23xl bg-silver box-border opacity-[0.78] border-[1px] border-solid border-black" />
                            {/* <img className="h-8 w-[31px] relative object-cover min-h-[32px] z-[1]" alt="" src="/logoapple-1@2x.png" /> */}
                            <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[128px]">
                              <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit z-[1] mq450:text-base">
                                <a href="/login" style={{ color: 'black', textDecoration: 'none', fontSize: '30px' }}>
                                  Log in
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="w-[403px] flex flex-row items-start justify-start">
                          <div className="flex flex-row items-start justify-start pt-5 pb-[19px] pr-[73px] pl-20 box-border relative whitespace-nowrap max-w-full">
                            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-23xl bg-red-200 box-border border-[1px] border-solid border-black" />
                            <SignUpWith />
                          </div>
                        </div>
                      </div>
                      <div className="w-[373px] relative text-[14px] leading-[20px] inline-block max-w-full text-red-100">
                        <span className="text-darkslategray" style={{ color: 'black' }}>{`By singing up you agree to the `}</span>
                        <span style={{ color: 'black' }}>Terms of Service</span>
                        <span className="text-black">{` `}</span>
                        <span className="text-darkslategray" style={{ color: 'black' }}>
                          and
                        </span>
                        <span className="text-black">{` `}</span>
                        <span style={{ color: 'black' }}>Privacy</span>
                        <span className="text-cornflowerblue">{` `}</span>
                        <span style={{ color: 'black' }}>Policy</span>
                        <span className="text-darkslategray" style={{ color: 'black' }}>
                          , including
                        </span>
                        <span className="text-black">{` `}</span>
                        <span style={{ color: 'black' }}>Cookie</span>
                        <span className="text-cornflowerblue">{` `}</span>
                        <span style={{ color: 'black' }}>Use</span>
                        <span className="text-black">.</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[9px] text-base">
                    <div className="relative cursor-pointer" onClick={onAlreadyHaveAnClick}>
                      {/* <span>{`Already have an account? `}</span>
                      <a href="../components/LogInLanding" style={{ color: 'black' }}>
                        LogIn
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-[1501px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[19px] max-w-full lg:hidden">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          {/* <div className="relative inline-block min-w-[40px]">About</div> */}
        </div>
        {/* <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[70px] whitespace-nowrap">Help Center</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[101px] whitespace-nowrap">Terms of Service</div>
        </div>
        <div className="relative inline-block min-w-[82px] whitespace-nowrap">Privacy Policy</div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[82px] whitespace-nowrap">Cookie Policy</div>
        </div>
        <div className="relative inline-block min-w-[49px] whitespace-nowrap">Ads info</div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="relative inline-block min-w-[29px]">Blog</div>
        </div>
        <div className="w-[43px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch relative">Status</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[43px]">Carrres</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="relative inline-block min-w-[103px] whitespace-nowrap">Brand Resources</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[66px]">Advertsing</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[66px]">Marketing</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[116px] whitespace-nowrap">Twitter for Business</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[65px]">Developers</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[55px]">Directory</div>
        </div>
        <div className="w-[55px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <div className="self-stretch relative">Settings</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="self-stretch relative whitespace-nowrap">© 2024 Echo, Inc.</div>
        </div> */}
      </div>
    </div>
  );
};

export default EchoLandingPage;
