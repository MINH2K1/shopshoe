import React from "react";
import carousel from "../../data/constants/carousel";
import style from "./Home.module.css";
import ContentDetail from "../../components/container/ContentDetail/ContentDetail";
import Gallery from "../../components/container/Gallrery/Gallery";
import Slider from "../../components/container/Slider/Slider";
import data from "../../service/productApi/productlistapi";
import paragrap from "../../data/constants/paragrap";
import TextHeading from "../../components/common/TextHeading/TextHeading";
import getApi from "../../service/userApi/getApi";

function Home() {
  const slider = carousel.reduce((items, item) => {
    return [item.url, ...items];
  }, []);
  const gallery = data;
  getApi();
  return (
    <div className={style.container}>
      {/* slider */}
      <Slider slider={slider} />

      {/*slider gallery  */}
      <div
        style={{ textAlign: "center", paddingBottom: "0px !importaint" }}
        className={style.lock_content}
      >
        <TextHeading>SẢN PHẨM BÁN CHẠY</TextHeading>
        <Gallery gallery={gallery} />
      </div>

      {/*  Introduce Ang slider */}
      <div className={style.lock_content}>
        <ContentDetail paragrap={paragrap[0]} />
        <Gallery gallery={gallery} />
      </div>

      <div className={style.lock_content}>
        <ContentDetail convers paragrap={paragrap[1]} />
        <Gallery gallery={gallery} />
      </div>
    </div>
  );
}

export default Home;
