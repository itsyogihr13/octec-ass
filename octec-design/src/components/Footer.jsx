import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twit.svg";
import logo from "../assets/logo.svg";
export const Footer = () => {
  const img = [insta, twitter, facebook];
  return (
    <div className="flex justify-center py-4">
      <div className="w-[80%] ">
        <div className="flex gap-4 items-center mt-8">
          <img src={logo} alt="" />{" "}
          <p className=" font-bold text-[25px] ">Like Hire</p>
        </div>
        <div className=" flex items-center justify-between w-full mt-4">
          <div className=" flex items-center justify-between w-[45%] footer-text-div">
            <p>Home</p>
            <p>About</p> <p>Contact</p> <p>FAQ</p> <p>Privacy Policy</p>
            <p>Terms & conditions</p>
          </div>
          <div className=" flex items-center justify-end gap-4  footer-text-div">
            <img src={phone} alt="" /> <p>89898978700-33</p>{" "}
            <img src={mail} alt="" srcset="" /> <p>Customercare@likehire.com</p>
          </div>
        </div>
        <div className="footer-text-div flex justify-between w-full mt-4 items-center">
          <p>@2020 Like Hire . All right reserved</p>
          <div className=" flex justify-end gap-4">
            {img.map((el) => (
              <img src={el} alt="" srcset="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
