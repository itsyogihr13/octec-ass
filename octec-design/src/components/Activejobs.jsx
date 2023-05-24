export const Activejob = () => {
  const ActivejobData = [
    {
      name: "Interventional Cardiologist",
      location: " New York City, USA",
      applied: "98 Applied",
      jobs: "128 Job Views",
      premium: "Free 7 Days left",
      extended: "Get more application by extending this job post. Go Premium",
      application: "See Applications",
      Posted: "Posted on: 25 May",
      Status: "Published",
    },
    {
      name: "Interventional Cardiologist",
      location: " New York City, USA",
      applied: "98 Applied",
      jobs: "128 Job Views",
      premium: "Free 7 Days left",
      extended: "Get more application by extending this job post. Go Premium",
      application: "See Applications",
      Posted: "Posted on: 25 May",
      Status: "Published",
    },
    {
      name: "Interventional Cardiologist",
      location: " New York City, USA",
      applied: "98 Applied",
      jobs: "128 Job Views",
      premium: "Free 7 Days left",
      extended: "Get more application by extending this job post. Go Premium",
      application: "See Applications",
      Posted: "Posted on: 25 May",
      Status: "Published",
    },
    {
      name: "Interventional Cardiologist",
      location: " New York City, USA",
      applied: "98 Applied",
      jobs: "128 Job Views",
      premium: "Free 7 Days left",
      extended: "Get more application by extending this job post. Go Premium",
      application: "See Applications",
      Posted: "Posted on: 25 May",
      Status: "Published",
    },
  ];
  return (
    <div>
      <div className="flex justify-between w-[80%] m-auto pt-8">
        <p className=" font-bold text-[16px] leading-[21px]">Active jobs</p>
        <select name="" id="">
          <option value="">Sort by Recent</option>
          <option value="">one</option>
        </select>
      </div>
      <div className=" w-[80%] m-auto ">
        {ActivejobData.map((el, index) => (
          <div class="border-l-4 border-[#B9ECD4] border-t border-r border-b mt-4 p-4">
            <div className="flex justify-between w-[63%]">
              <p className="font-bold text-[18px] leading-[23px] text-[#6390DF]">
                {el.name}
              </p>
              <button
                key={index}
                className={` ${
                  index === 0
                    ? "text-[#E86750] bg-red-400 bg-opacity-10"
                    : index === 1
                    ? "text-[#458677] bg-[#54BDA5] bg-opacity-10"
                    : index === 2
                    ? "text-[#C4A923] bg-[#EBCA24] bg-opacity-10"
                    : index === 3
                    ? "text-[#458677] bg-[#54BDA5] bg-opacity-10"
                    : ""
                } rounded-[10px] px-3 py-1`}
              >
                {el.premium}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p className="appliedjob-text">location :{el.location}</p>
              <p className="appliedjob-text">{el.applied}</p>
              <p className="appliedjob-text">{el.jobs}</p>
              <p className="appliedjob-text">{el.extended}</p>
              <button className="text-[#6390DF] bg-[#F5F8FE] rounded p-2">
                {el.application}
              </button>
              <p className="appliedjob-text">
                <select name="Active" id="">
                  <option value="">Active</option>
                </select>
              </p>
            </div>
            <div className="flex w-[25%] justify-between items-center">
              <p className="appliedjob-text">{el.Posted}</p>
              <p className="appliedjob-text">{el.Status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
