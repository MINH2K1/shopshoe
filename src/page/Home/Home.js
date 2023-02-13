import React from "react";

import carousel from "../../data/carousel";
import style from "./Home.module.css";

import ContentDetail from "../../components/ContentDetail/ContentDetail";
import Gallery from "../../components/Gallrery/Gallery";
import data from "../../data/productlistapi";
import paragrap from "../../data/paragrap";
import TextHeading from "../../components/common/TextHeading/TextHeading";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
function Home() {
  const slider = carousel.reduce((items, item) => {
    return [item.url, ...items];
  }, []);
  const gallery = data;

  return (
    <div className={style.container}>
      <Slider slider={slider} />
      <div
        style={{ textAlign: "center", paddingBottom: "0px !importaint" }}
        className={style.lock_content}
      >
        <TextHeading>SẢN PHẨM BÁN CHẠY</TextHeading>
        <Gallery gallery={gallery} />
      </div>
      <div className={style.lock_content}>
        <ContentDetail paragrap={paragrap[0]} />
        <Gallery gallery={gallery} />
      </div>

      <div className={style.lock_content}>
        <ContentDetail convers paragrap={paragrap[1]} />
        <Gallery gallery={gallery} />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
