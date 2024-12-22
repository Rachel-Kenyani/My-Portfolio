import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export const CoreValues = () => {
  return (
    <div  className=" h-[95vh] mt-16">
      <h2 className="flex text-3xl text-themePrimary justify-center my-3">
        Why I'm Your Best Choice
      </h2>

      <div className="flex justify-center">
        <Image src="/images/Divider.png" alt="" width={200} height={200} />
      </div>

      <p className="flex text-themeAccent text-center px-44 my-3">
        With a proven track record of delivering high-quality work and a passion
        for innovative design, I am committed to turning your vision into
        reality, ensuring both aesthetic excellence and outstanding performance.
      </p>
      <div className="flex gap-6 justify-center py-24">
        <div className="flex-col justify-center item-center w-56 rounded-2xl py-10 shadow-outer-custom-1">
          <div className="flex justify-center ">
            <Image src="/images/User.png" alt="" width={75} height={75} />
          </div>
          <p className="text-center text-base poppins-medium">User-Centric</p>
          <p className="text-center poppins-medium">Approach</p>
        </div>

        <div className="flex-col justify-center item-center w-56 rounded-2xl py-10 shadow-outer-custom-1">
          <div className="flex justify-center">
            <Image
              src="/images/Reliability.png"
              alt=""
              width={75}
              height={75}
            />
          </div>
          <p className="text-center text-base poppins-medium">Reliability</p>
        </div>

        <div className="flex-col justify-center item-center w-56 rounded-2xl py-10 shadow-outer-custom-1">
          <div className="flex justify-center">
            <Image
              src="/images/Scalability.png"
              alt=""
              width={75}
              height={75}
            />
          </div>
          <p className="text-center text-base poppins-medium">Scalability</p>
        </div>

        <div className="flex-col justify-center item-center w-56 rounded-2xl py-10 shadow-outer-custom-1">
          <div className="flex justify-center">
            <Image src="/images/QA.png" alt="" width={75} height={75} />
          </div>
          <p className="text-center text-base poppins-medium">Quality</p>
          <p className="text-center text-base poppins-medium">Assurance</p>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <Button className="bg-gradient-to-r from-[#AD3869] via-themeSecondary to-[#590629] rounded-full shadow-xl shadow-[#AD3869] text-white w-48 py-3">
          Download CV <FileDownloadOutlinedIcon />
        </Button>
        <Button className="bg-gradient-to-r from-[#AD3869] via-themeSecondary to-[#590629] rounded-full shadow-xl shadow-[#AD3869] text-white w-48 py-3">
          My Rate card <ArrowForward />
        </Button>
      </div>
    </div>
  );
};
