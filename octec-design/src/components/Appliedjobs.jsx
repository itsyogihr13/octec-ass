import greentick from "../assets/greentick.svg";
import newpost from "../assets/newpost.svg";
import review from "../assets/review.svg";
import shortlist from "../assets/shortlist.svg";

export const AppliedJobs = () => {
  const PostData = [
    {
      post: 180,
      status: "Active Jobs",
      img: greentick,
    },
    {
      post: 180,
      status: "New Application",
      img: newpost,
    },
    {
      post: 22,
      status: "Candidate To be Reviwed",
      img: review,
    },
    {
      post: 178,
      status: "Shortlisted",
      img: shortlist,
    },
  ];
  return (
    <div className="w-full relative bg-[#122443] pb-12">
      <div className="flex  m-auto px-6 py-8 justify-between w-[80%] content-center">
        <p className="text-[24px] leading-[31px] font-bold text-white">
          Hello, Paramedic Medical Supplies
        </p>
        <button className="bg-[#54BDA5] text-white py-2 px-4 rounded-[5px] ">
          Post a Job
        </button>
      </div>
      <div className="flex absolute top-[100px] left-[10%] justify-between w-[80%] m-auto">
        {PostData.map((el, index) => (
          <div
            className={`bg-white p-[2%] w-[22%] ${
              index === 0
                ? "border-b-4 border-[#B9ECD4]"
                : index === 1
                ? "border-b-4 border-[#ECD3B9]"
                : index === 2
                ? "border-b-4 border-[#ECB9B9]"
                : index === 3
                ? "border-b-4 border-[#8C97AB]"
                : ""
            } `}
            key={index}
          >
            <p className="text-center leading-[28px] font-bold text-[22px] mb-2">
              {el.post}
            </p>
            <div className="flex justify-evenly m-auto items-center w-[70%]">
              <img src={el.img} alt="" />
              <p className="text-center leading-[19px] font-bold text-[15px]">
                {el.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
