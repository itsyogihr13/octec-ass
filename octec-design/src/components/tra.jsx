import Button from "@mui/material/Button";
import { Bar } from "react-chartjs-2";

export const ApplicationRecieved = () => {
  const data = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    datasets: [
      {
        label: "Ratio",
        data: [
          10, 11, 14, 16, 17, 19, 10, 7, 5, 9, 11, 14, 17, 12, 11, 10, 14, 20,
          22, 30, 11, 9, 20, 10,
        ],
        backgroundColor: "#94E6D4",
        borderColor: "#EFF6FF",
        borderWidth: 2,
      },
      {
        label: "Ratio 2",

        data: [
          20, 22, 21, 25, 22, 27, 11, 14, 19, 29, 28, 20, 24, 25, 11, 19, 10,
          33, 33, 24, 36, 29, 20,
        ],
        backgroundColor: "#EFF6FF",
        borderColor: "#EFF6FF",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        gridLines: { display: false },
      },

      y: {
        beginAtZero: true,
        stacked: true,

        max: 60,
      },
    },
  };
  return (
    <div>
      <div className="flex justify-between w-[80%] m-auto items-center">
        <p className=" font-bold text-[16px] leading-[21px]">
          Applications Received
        </p>
        <div className="flex ">
          <Button variant="outlined">Weekly</Button>
          <Button variant="outlined">Monthly</Button>
        </div>
      </div>
      <div className="w-[80%] flex m-auto border-[2px] border-brown p-2 mt-4">
        <Bar data={data} options={options} height={70} />
      </div>
    </div>
  );
};
