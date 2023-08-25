
const EventScroll = () => {

    return <div className="h-[70vh] flex justify-center bg-[#0f0f0f] w-full">
            <div className="w-[70%] relative rounded-2xl h-[28.2rem]">
                <img className=" h-full w-full " src={'/9dedfab832f2fabaf5ac7cc50abf939c.jpeg'}/>
                <div className="font-[700] tracking-wide text-white absolute top-[35px] left-[102px] text-[3.26rem]">Engifest</div>
                <p className="absolute tracking-wide top-[96px] font-[400] left-[102px] text-white">CC DTU</p>
                <p className="absolute tracking-wide bottom-[112px] font-[400] left-[102px] text-white">BR Auditorium</p>
                <p className="absolute tracking-wide bottom-[90px] font-[400] left-[102px] text-white">12/08/24</p>
                <p className="absolute tracking-wide bottom-[68px] font-[400] left-[102px] text-white">12:00 PM</p>
                <div className="border-[1px] absolute w-[120px] flex justify-center items-center bottom-[68px] rounded-md pb-[14px]  pt-[14px] pl-[54px] pr-[54px] text-white font-[500] right-[87px] h-[46.24px]">
                    Register
                </div>
                <img src={"/Vector.svg"} className="absolute top-[210px] left-[22px]" />
                <img src={"/Vector.svg"} className="absolute top-[210px] rotate-180 right-[22px]" />
                <div className="flex absolute bottom-[5px] gap-1 left-[50%]">
                    <div className="w-[60px] h-[5px] rounded-[40%] bg-[#ED592A]"></div>
                    <div className="w-[7px] h-[5px] rounded-[40%] bg-white"></div>
                    <div className="w-[7px] h-[5px] rounded-[40%] bg-white"></div>
                </div>
            </div>

    </div>

}

export default EventScroll