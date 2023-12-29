import React from 'react'

const Navbar = () => {
  return (
    <div className="absolute right-0 top-0 flex h-14 w-[1199px] items-center justify-center text-left leading-[normal] tracking-[0.1px]" >
    <div className="absolute inset-0 h-14 w-[1199px]">
      <div className="absolute left-[1199px] top-0 flex h-[1199px] w-[58px] origin-top-left items-start bg-white [transform:rotate(90deg)]" />
    </div>
    <div className="relative flex flex-grow items-center justify-end self-stretch py-3 pl-14 pr-8" >
      <div className="absolute inset-0 h-14 w-[1199px]">
        <div className="absolute left-[1199px] top-0 flex h-[1199px] w-[58px] origin-top-left items-start bg-white [transform:rotate(90deg)]" />
      </div>
      <div className="relative ml-[-1141px] flex flex-grow items-center justify-between gap-x-3 self-stretch" >
        <div className="flex flex-grow items-center justify-between gap-x-3.5 self-stretch" >
          <div className="flex flex-grow items-center justify-center self-stretch" >
            {/* <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch" >
              <div className="flex flex-grow items-center justify-center gap-x-3 self-stretch text-black" >
                <div className="flex items-center self-stretch text-sm font-medium leading-[normal]" >
                  Free Trial
                </div>
                <div className="flex items-center self-stretch text-sm font-medium leading-[normal]" >
                  <span>
                    <br />
                  </span>
                </div>
                <div className="flex items-center self-stretch text-[10px] font-normal leading-[normal]" >
                  2days left
                </div>
              </div>
              <div className="flex items-center text-[10px] font-medium leading-[normal] text-orange-500" >
                Extend free trail
              </div>
            </div> */}
          </div>
          <div className="Frame90 w-[214px] h-9 justify-start items-center gap-3 inline-flex">
    <div className="Frame82 justify-start items-start gap-3.5 flex">
        <div className="Frame81 flex-col justify-start items-start gap-2 inline-flex">
            <div className="Frame1 justify-start items-center gap-[11px] inline-flex">
                <div className="FreeTrial text-black text-sm font-medium font-['Work Sans'] tracking-tight">Free Trial</div>
                <div className=" text-black text-sm font-medium font-['Work Sans'] tracking-tight">|</div>
                <div className="DaysLeft text-black text-[10px] font-normal font-['Work Sans'] tracking-tight">2days left</div>
            </div>
            <div className="ExtendFreeTrail text-orange-500 text-[10px] font-medium font-['Work Sans'] tracking-tight">Extend free trail</div>
        </div>
    </div>
</div>
          <div className="h-9 w-9">
            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><circle cx="18" cy="18" r="18" fill="#D9D9D9"/><circle cx="18" cy="18" r="18" fill="url(#pattern-101:74-0)"/><defs><pattern id="pattern-101:74-0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_101_74" transform="translate(-0.254717) scale(0.00314465)"/></pattern><image id="image0_101_74" width="480" height="318" xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/SVG_IMAGE_101:74_0.webp"/></defs></svg>
          </div>
        </div>
        <div className="h-1.5 w-3">
          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.41421 0C1.52331 0 1.07714 1.07714 1.70711 1.70711L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L10.2929 1.70711C10.9229 1.07714 10.4767 0 9.58579 0H2.41421Z" fill="black"/></svg>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar