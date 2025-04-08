import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import front from "../assets/front.png";
import { useNavigate } from "react-router-dom";
import app_store from "../assets/app_store.png"; // Adjust the path as needed
import play_store from "../assets/play_store.png"; // Adjust the path as needed

const HereSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order Food Cake & Groceries anytime & anywhere
          </h1>
          <p className="text-gray-500">
            Our mission is to make food ordering easy and convenient for everyone.
            We believe that everyone should have access to delicious food, no matter where they are or what time it is.
          </p>
        </div>
        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            value={searchText}
            placeholder="Search restaurant by name, city & country"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 shadow-lg"
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2" />
          <Button onClick={() => navigate(`/search/${searchText}`)} >Search</Button>
        </div>
      </div>
      <div>
        <img src={front} alt="" className="object-cover w-full max-h-[500px]" />
        <div className=" mt-10 md:mt-0 flex flex-col gap-2 items-center ">
          <p className="font-bold md:font-extrabold md:text-1xl text-2xl">
            For a better experience, download our app
          </p>
          <img src={app_store} alt="" />
          <img src={play_store} alt="" />
        </div>
        


      </div>

      

    </div>

  );
};

export default HereSection;