import Switcher from "./components/Switcher";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import reactImage from "./assets/react.svg";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
const App = () => {
  const [age, setAge] = useState("");
  const { i18n, t } = useTranslation();

  const handleChange = (event) => {
    setAge(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="dark:bg-[black] bg-[white]">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"en"}>Eng</MenuItem>
          <MenuItem value={"ru"}>Rus</MenuItem>
          <MenuItem value={"tj"}>Taj</MenuItem>
        </Select>
      </FormControl>
      <Typography>{t("Hello")}</Typography>
      <Switcher />
      <Swiper
        slidesPerView={1}
        spaceBetween={200}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="h-[500px]">
          <img src={reactImage} alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[500px]">
          <img src={reactImage} alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[100px]">
          <img src={reactImage} alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[100px]">
          <img src={reactImage} alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[100px]">Slide 5</SwiperSlide>
        <SwiperSlide className="h-[100px]">Slide 6</SwiperSlide>
        <SwiperSlide className="h-[100px]">Slide 7</SwiperSlide>
        <SwiperSlide className="h-[100px]">Slide 8</SwiperSlide>
        <SwiperSlide className="h-[100px]">Slide 9</SwiperSlide>
      </Swiper>
      <div className=" flex justify-between mt-10">
        <div
          data-aos="zoom-out-left"
          className="h-[200px] w-[200px] my-20 bg-slate-600 "
        ></div>
        <div
          data-aos="zoom-out-right"
          className="h-[200px] w-[200px] my-20 bg-slate-600 "
        ></div>
      </div>
    </div>
  );
};

export default App;
