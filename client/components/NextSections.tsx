import { Link } from "react-router-dom";

export default function NextSections() {
  return (
    <section className="relative z-[2] w-full bg-white" style={{ paddingLeft: "8%", paddingRight: "8%" }}>
      <div className="mx-auto w-full">
        <div className="relative grid w-full grid-cols-1 md:grid-cols-2">
          {/* Left column */}
          <div className="relative flex items-stretch justify-center text-center">
            {/* Rotating seal top-right */}
            <div className="pointer-events-none absolute right-0 top-0 z-[100] min-w-[175px] translate-x-[87.5px] -translate-y-[88px]">
              <div className="relative inline-block max-w-[175px]">
                <img
                  src="https://megaharvest.org/wp-content/uploads/2022/12/GEN.png"
                  alt="Seal"
                  className="mx-auto inline h-auto w-[274px] max-w-full animate-loop-rotate select-none"
                  decoding="async"
                />
              </div>
            </div>

            {/* Dark block with background image */}
            <div className="relative w-full bg-black">
              <div className="absolute inset-0 -z-[1] overflow-hidden" />
              <div className="absolute inset-0 z-[1]">
                <div
                  className="absolute inset-0 -z-[1] bg-cover bg-center"
                  style={{ backgroundImage: "url('https://megaharvest.org/wp-content/uploads/2023/12/kkkk.jpg')" }}
                />
              </div>
              <div className="relative z-[10] px-6 py-24 md:py-36" />
            </div>
          </div>

          {/* Right column */}
          <div className="relative flex flex-col md:pl-24 lg:pl-36">
            {/* Vision */}
            <div className="mb-10 pt-20">
              <div className="relative">
                <p className="pb-[27px]"><strong className="font-semibold">VISION</strong></p>
                <h5 className="text-[16px] font-semibold leading-[26px]">
                  To be on the frontline of global evangelism
                </h5>
              </div>
            </div>

            {/* Mission */}
            <div className="mb-10 pt-20">
              <div className="relative">
                <p className="pb-[27px]"><strong className="font-semibold">MISSION</strong></p>
                <h5 className="text-[16px] font-semibold leading-[26px]">
                  To announce Jesus Christ to the Nations untill he is believed throughout the world – 1Tim:3:16
                </h5>
              </div>
            </div>

            {/* About title */}
            <div className="mb-10">
              <h2 className="text-[38px] leading-[48px] font-semibold md:text-[46px] md:leading-[56px]">
                <strong className="font-semibold">About</strong>
                <br />
                <strong className="font-semibold">Preacher Jay</strong>
              </h2>
            </div>

            {/* About body */}
            <div className="mb-10 pt-4 z-[100] relative">
              <p className="text-[15.687px] leading-[25.0992px] text-neutral-800">
                Evangelist Joseph Achanya is the pioneer of Mega Harvest. He is the host of “Heal the Sick” radio/ TV broadcast and is an active member of Revival Today Evangelistic Association, USA. Evangelist Joseph Achanya believes that people today need to see Jesus the same as people in Bible days. For this reason, he has conducted numerous international open air crusades and outreaches with the theme “THIS SAME JESUS”.
              </p>
            </div>

            {/* Read more + motto */}
            <div className="mb-10 pt-4 z-[100] relative text-center">
              <Link to="/about" className="inline-block font-semibold text-[21.663px] leading-[28.1619px] hover:underline">
                READ MORE
              </Link>
              <div className="mx-auto my-6 h-[17px] w-[1px] bg-black" />
              <div className="text-[21.663px] leading-[28.1619px]">
                <strong className="block font-semibold">MOTTO</strong>
                Our generation shall be shaken!
              </div>
            </div>

            {/* Right image band */}
            <div className="pt-8 relative">
              <div className="relative">
                <div className="absolute inset-0 -z-[1] overflow-hidden" />
                <div className="absolute inset-0 z-[1]">
                  <div
                    className="absolute inset-0 -z-[1] bg-cover bg-right"
                    style={{ backgroundImage: "url('https://megaharvest.org/wp-content/uploads/2023/12/replace--scaled.jpg')" }}
                  />
                </div>
                <div className="h-[485.767px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
