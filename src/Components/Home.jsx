import React from "react";
import "./Home.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const trackRef = useRef(null);

  // Added

  useEffect(() => {
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        x: "-100%", // Move to left
        duration: 50, // Duration of one loop
        ease: "linear",
        repeat: -1, // Infinite repeat
      });
    }
  }, []);

  return (
    <div>
      <div id="inner_content-51-8" className="ct-inner-content">
        <section id="section-1081-22" className="ct-section lazyloaded">
          <div className="ct-section-inner-wrap ">
            <div id="div_block-1082-22" className="ct-div-block">
              <img
                id="image-1083-22"
                alt="Ellipse-8"
                sizes="(max-width: 735px) 100vw, 735px"
                nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-1.png 735w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-1-300x298.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-1-150x150.png 150w"
                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-1.png"
                className="ct-image lazyloaded"
                decoding="async"
                nitro-lazy-empty=""
                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-1.png"
                srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-1.png 735w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-1-300x298.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-1-150x150.png 150w"
              />
              <div id="div_block-1084-22" className="ct-div-block">
                <h1 id="headline-1085-22" className="ct-headline h1">
                  Leading Los Angeles{" "}
                  <span id="span-1086-22" className="ct-span lazyloaded">
                    Mobile App
                  </span>{" "}
                  Developers
                </h1>
                <div id="div_block-1087-22" className="ct-div-block" />
              </div>
              <div
                id="div_block-1088-22"
                className="ct-div-block nitro-offscreen"
              >
                <img
                  id="image-1089-22"
                  alt="Ellipse-1"
                  sizes="(max-width: 488px) 100vw, 488px"
                  nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30.png 488w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30-300x300.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30-150x150.png 150w"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30.png"
                  className="ct-image lazyloaded"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30.png"
                  srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30.png 488w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30-300x300.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30-150x150.png 150w"
                />
                <img
                  id="image-1090-22"
                  alt="Rectangle-2"
                  sizes="(max-width: 285px) 100vw, 285px"
                  nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-917-1-1.png 285w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-917-1-1-147x300.png 147w"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-917-1-1.png"
                  className="ct-image lazyloaded"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-917-1-1.png"
                  srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-917-1-1.png 285w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-917-1-1-147x300.png 147w"
                />
                <div id="div_block-1091-22" className="ct-div-block heroSlider">
                  <div id="shortcode-1092-22" className="ct-shortcode">
                    {" "}
                    <div className="homepageSlider slick-initialized slick-slider">
                      <button
                        className="slick-prev slick-arrow"
                        aria-label="Previous"
                        type="button"
                        style={{}}
                      >
                        Previous
                      </button>{" "}
                      <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: 3367,
                            transform: "translate3d(-1295px, 0px, 0px)",
                          }}
                        >
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Number-Hive.png"
                            className="slick-slide slick-cloned lazyloaded"
                            decoding="async"
                            nitro-lazy-empty=""
                            id=""
                            src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Number-Hive.png"
                            data-slick-index={-1}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Eksperience-2.webp"
                            className="lazyloaded slick-slide"
                            decoding="async"
                            nitro-lazy-empty=""
                            id="MzE1Nzo2Ng==-1"
                            src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Eksperience-2.webp"
                            data-slick-index={0}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/iPermit.png"
                            className="slick-slide lazyloaded"
                            decoding="async"
                            nitro-lazy-empty=""
                            id="MzE1ODo1OQ==-1"
                            src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/iPermit.png"
                            data-slick-index={1}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Bayut.png"
                            className="slick-slide lazyloaded"
                            decoding="async"
                            nitro-lazy-empty=""
                            id="MzE1OTo1Nw==-1"
                            src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Bayut.png"
                            data-slick-index={2}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/ClassCalc.png"
                            className="slick-slide lazyloaded"
                            decoding="async"
                            nitro-lazy-empty=""
                            id="MzE2MDo2MQ==-1"
                            src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/ClassCalc.png"
                            data-slick-index={3}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Book-Club.png"
                            className="slick-slide lazyloaded slick-current slick-active"
                            decoding="async"
                            nitro-lazy-empty=""
                            id="MzE2MTo2MQ==-1"
                            src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Book-Club.png"
                            data-slick-index={4}
                            aria-hidden="false"
                            style={{ width: 259 }}
                            tabIndex={0}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Number-Hive.png"
                            className="slick-slide lazyloaded"
                            decoding="async"
                            nitro-lazy-empty=""
                            id="MzE2Mjo2Mw==-1"
                            src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Number-Hive.png"
                            data-slick-index={5}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Eksperience-2.webp"
                            className="lazyloaded slick-slide slick-cloned"
                            decoding="async"
                            nitro-lazy-empty=""
                            id=""
                            src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Eksperience-2.webp"
                            data-slick-index={6}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/iPermit.png"
                            className="nitro-lazy slick-slide slick-cloned"
                            decoding="async"
                            nitro-lazy-empty=""
                            id=""
                            src="data:image/svg+xml;nitro-empty-id=MzE1ODo1OQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            data-slick-index={7}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Bayut.png"
                            className="nitro-lazy slick-slide slick-cloned"
                            decoding="async"
                            nitro-lazy-empty=""
                            id=""
                            src="data:image/svg+xml;nitro-empty-id=MzE1OTo1Nw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            data-slick-index={8}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/ClassCalc.png"
                            className="nitro-lazy slick-slide slick-cloned"
                            decoding="async"
                            nitro-lazy-empty=""
                            id=""
                            src="data:image/svg+xml;nitro-empty-id=MzE2MDo2MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            data-slick-index={9}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Book-Club.png"
                            className="nitro-lazy slick-slide slick-cloned"
                            decoding="async"
                            nitro-lazy-empty=""
                            id=""
                            src="data:image/svg+xml;nitro-empty-id=MzE2MTo2MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            data-slick-index={10}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                          <img
                            nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Number-Hive.png"
                            className="nitro-lazy slick-slide slick-cloned"
                            decoding="async"
                            nitro-lazy-empty=""
                            id=""
                            src="data:image/svg+xml;nitro-empty-id=MzE2Mjo2Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            data-slick-index={11}
                            aria-hidden="true"
                            style={{ width: 259 }}
                            tabIndex={-1}
                          />
                        </div>
                      </div>{" "}
                      <button
                        className="slick-next slick-arrow"
                        aria-label="Next"
                        type="button"
                        style={{}}
                      >
                        Next
                      </button>
                    </div>{" "}
                  </div>
                </div>
                <div id="div_block-1093-22" className="ct-div-block slideText">
                  <div
                    id="div_block-1094-22"
                    className="ct-div-block"
                    data-slide={0}
                  >
                    <img
                      id="image-1095-22"
                      alt="People-2"
                      srcSet=""
                      sizes="(max-width: 75px) 100vw, 75px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533.svg"
                    />
                    <div id="div_block-1096-22" className="ct-div-block">
                      <h2 id="headline-1097-22" className="ct-headline h6">
                        Team of 30 App Experts
                      </h2>
                      <div
                        id="text_block-1098-22"
                        className="ct-text-block small cstm_seo_anchor_wrapper"
                      >
                        You will be assigned our top{" "}
                        <a href="https://appmakersla.com/services/mobile-app-development/">
                          Los Angeles
                          <br />
                          developers
                        </a>{" "}
                        to build your software
                      </div>
                    </div>
                    <div id="code_block-1099-22" className="ct-code-block">
                      <svg
                        width={424}
                        height={38}
                        viewBox="0 0 424 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M0.5 0V37H423.5"
                          stroke="#F0175E"
                          className="svg-elem-1"
                        />{" "}
                      </svg>{" "}
                    </div>
                    <img
                      id="image-1100-22"
                      alt="Vector 13"
                      srcSet=""
                      sizes="(max-width: 424px) 100vw, 424px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-13.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-13.svg"
                    />
                  </div>
                  <div
                    id="div_block-1101-22"
                    className="ct-div-block"
                    data-slide={1}
                  >
                    <div id="div_block-1102-22" className="ct-div-block">
                      <h2 id="headline-1103-22" className="ct-headline h6">
                        Privacy &amp; Cybersecurity
                      </h2>
                      <div
                        id="text_block-1104-22"
                        className="ct-text-block small"
                      >
                        Your ideas are kept confidential, and your
                        <br />
                        code will include best security practices.
                      </div>
                    </div>
                    <img
                      id="image-1105-22"
                      alt="Lock"
                      srcSet=""
                      sizes="(max-width: 73px) 100vw, 73px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-1-1.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-1-1.svg"
                    />
                    <img
                      id="image-1106-22"
                      alt="Vector-3"
                      srcSet=""
                      sizes="(max-width: 432px) 100vw, 432px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-14.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-14.svg"
                    />
                    <div id="code_block-1107-22" className="ct-code-block">
                      <svg
                        width={432}
                        height={38}
                        viewBox="0 0 432 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M431.5 0V37H0.49999"
                          stroke="#F0175E"
                          className="svg-elem-l-1"
                        />{" "}
                      </svg>{" "}
                    </div>
                  </div>
                  <div
                    id="div_block-1108-22"
                    className="ct-div-block"
                    data-slide={2}
                  >
                    <img
                      id="image-1109-22"
                      alt="Headphones"
                      srcSet=""
                      sizes="(max-width: 75px) 100vw, 75px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-1.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-1.svg"
                    />
                    <div id="div_block-1110-22" className="ct-div-block">
                      <h2 id="headline-1111-22" className="ct-headline h6">
                        1-ON-1, In Person
                      </h2>
                      <div
                        id="text_block-1112-22"
                        className="ct-text-block small"
                      >
                        In-person meetings with project
                        <br />
                        managers, guiding every step together
                      </div>
                    </div>
                    <img
                      id="image-1113-22"
                      alt="Vector 13"
                      srcSet=""
                      sizes="(max-width: 424px) 100vw, 424px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-13.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-13.svg"
                    />
                    <div id="code_block-1114-22" className="ct-code-block">
                      <svg
                        width={424}
                        height={38}
                        viewBox="0 0 424 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M0.5 0V37H423.5"
                          stroke="#F0175E"
                          className="svg-elem-1"
                        />{" "}
                      </svg>{" "}
                    </div>
                  </div>
                  <div
                    id="div_block-1115-22"
                    className="ct-div-block"
                    data-slide={3}
                  >
                    <div id="div_block-1116-22" className="ct-div-block">
                      <h2 id="headline-1117-22" className="ct-headline h6">
                        Cross Platform Development
                      </h2>
                      <div
                        id="text_block-1118-22"
                        className="ct-text-block small cstm_seo_anchor_wrapper"
                      >
                        <a href="https://appmakersla.com/services/ios-development/">
                          iOS
                        </a>{" "}
                        and{" "}
                        <a href="https://appmakersla.com/services/android-development/">
                          Android development
                        </a>{" "}
                        for the
                        <br />
                        price of 1. We also build off existing apps.
                      </div>
                    </div>
                    <img
                      id="image-1119-22"
                      alt="Thumbs up"
                      srcSet=""
                      sizes="(max-width: 75px) 100vw, 75px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-4.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-4.svg"
                    />
                    <img
                      id="image-1120-22"
                      alt="Vector-3"
                      srcSet=""
                      sizes="(max-width: 432px) 100vw, 432px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-14.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-14.svg"
                    />
                    <div id="code_block-1121-22" className="ct-code-block">
                      <svg
                        width={432}
                        height={38}
                        viewBox="0 0 432 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M431.5 0V37H0.49999"
                          stroke="#F0175E"
                          className="svg-elem-l-1"
                        />{" "}
                      </svg>{" "}
                    </div>
                  </div>
                  <div
                    id="div_block-1122-22"
                    className="ct-div-block active"
                    data-slide={4}
                  >
                    <img
                      id="image-1123-22"
                      alt="Heart-1"
                      srcSet=""
                      sizes="(max-width: 75px) 100vw, 75px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-2.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-2.svg"
                    />
                    <div id="div_block-1124-22" className="ct-div-block">
                      <h2 id="headline-1125-22" className="ct-headline h6">
                        Best Code Practices
                      </h2>
                      <div
                        id="text_block-1126-22"
                        className="ct-text-block small"
                      >
                        Keeping your code healthy and ready for
                        <br />
                        growth &amp; scale
                      </div>
                    </div>
                    <img
                      id="image-1127-22"
                      alt="Vector 13"
                      srcSet=""
                      sizes="(max-width: 424px) 100vw, 424px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-13.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-1127-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDI0IDM4IiB3aWR0aD0iNDI0IiBoZWlnaHQ9IjM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=="
                    />
                    <div id="code_block-1128-22" className="ct-code-block">
                      <svg
                        width={424}
                        height={38}
                        viewBox="0 0 424 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M0.5 0V37H423.5"
                          stroke="#F0175E"
                          className="svg-elem-1"
                        />{" "}
                      </svg>{" "}
                    </div>
                  </div>
                  <div
                    id="div_block-1129-22"
                    className="ct-div-block"
                    data-slide={5}
                  >
                    <div id="div_block-1130-22" className="ct-div-block">
                      <h2 id="headline-1131-22" className="ct-headline h6">
                        {" "}
                        Support &amp; Maintenance
                      </h2>
                      <div
                        id="text_block-1132-22"
                        className="ct-text-block small"
                      >
                        Get the best support while building your mobile app,
                        <br />
                        and the best on-going maintenance afterwards.
                      </div>
                    </div>
                    <img
                      id="image-1133-22"
                      alt="star"
                      srcSet=""
                      sizes="(max-width: 73px) 100vw, 73px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-6.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-6.svg"
                    />
                    <img
                      id="image-1134-22"
                      alt="Vector-3"
                      srcSet=""
                      sizes="(max-width: 432px) 100vw, 432px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-14.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-1134-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDMyIDM4IiB3aWR0aD0iNDMyIiBoZWlnaHQ9IjM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=="
                    />
                    <div id="code_block-1135-22" className="ct-code-block">
                      <svg
                        width={432}
                        height={38}
                        viewBox="0 0 432 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M431.5 0V37H0.49999"
                          stroke="#F0175E"
                          className="svg-elem-l-1"
                        />{" "}
                      </svg>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div id="div_block-1136-22" className="ct-div-block">
                <div id="div_block-1137-22" className="ct-div-block">
                  <div id="div_block-1138-22" className="ct-div-block">
                    <img
                      id="image-1139-22"
                      alt="Ellipse-1"
                      sizes="(max-width: 488px) 100vw, 488px"
                      nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30.png 488w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30-300x300.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30-150x150.png 150w"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-30.png"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-1139-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDg4IDQ4NyIgd2lkdGg9IjQ4OCIgaGVpZ2h0PSI0ODciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                    />
                    <img
                      id="image-1140-22"
                      alt="Rectangle-2"
                      sizes="(max-width: 285px) 100vw, 285px"
                      nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-917-1-1.png 285w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-917-1-1-147x300.png 147w"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-917-1-1.png"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-1140-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjg1IDU4MyIgd2lkdGg9IjI4NSIgaGVpZ2h0PSI1ODMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                    />
                    <div
                      id="div_block-1141-22"
                      className="ct-div-block heroSliderTablet"
                    >
                      <div id="shortcode-1142-22" className="ct-shortcode">
                        {" "}
                        <div className="homepageSliderTablet slick-initialized slick-slider">
                          <button
                            className="slick-prev slick-arrow"
                            aria-label="Previous"
                            type="button"
                            style={{}}
                          >
                            Previous
                          </button>{" "}
                          <div className="slick-list draggable">
                            <div
                              className="slick-track"
                              style={{
                                opacity: 1,
                                width: 0,
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            >
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Number-Hive.png"
                                className="nitro-lazy slick-slide slick-cloned"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="data:image/svg+xml;nitro-empty-id=MzE4ODo2Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={-1}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Eksperience-2.webp"
                                className="nitro-lazy slick-slide"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="MzE4Mzo2Nw==-1"
                                src="data:image/svg+xml;nitro-empty-id=MzE4Mzo2Nw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTE4IDExMjIiIHdpZHRoPSI1MTgiIGhlaWdodD0iMTEyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={0}
                                aria-hidden="true"
                                style={{ width: 0 }}
                                tabIndex={-1}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/iPermit.png"
                                className="nitro-lazy slick-slide"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="MzE4NDo1OQ==-1"
                                src="data:image/svg+xml;nitro-empty-id=MzE4NDo1OQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={1}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Bayut.png"
                                className="nitro-lazy slick-slide"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="MzE4NTo1Nw==-1"
                                src="data:image/svg+xml;nitro-empty-id=MzE4NTo1Nw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={2}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/ClassCalc.png"
                                className="nitro-lazy slick-slide"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="MzE4Njo2MQ==-1"
                                src="data:image/svg+xml;nitro-empty-id=MzE4Njo2MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={3}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Book-Club.png"
                                className="nitro-lazy slick-slide slick-current slick-active"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="MzE4Nzo2MQ==-1"
                                src="data:image/svg+xml;nitro-empty-id=MzE4Nzo2MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={4}
                                aria-hidden="false"
                                tabIndex={0}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Number-Hive.png"
                                className="nitro-lazy slick-slide"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="MzE4ODo2Mw==-1"
                                src="data:image/svg+xml;nitro-empty-id=MzE4ODo2Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={5}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Eksperience-2.webp"
                                className="nitro-lazy slick-slide slick-cloned"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="data:image/svg+xml;nitro-empty-id=MzE4Mzo2Nw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTE4IDExMjIiIHdpZHRoPSI1MTgiIGhlaWdodD0iMTEyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={6}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/iPermit.png"
                                className="nitro-lazy slick-slide slick-cloned"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="data:image/svg+xml;nitro-empty-id=MzE4NDo1OQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={7}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Bayut.png"
                                className="nitro-lazy slick-slide slick-cloned"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="data:image/svg+xml;nitro-empty-id=MzE4NTo1Nw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={8}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/ClassCalc.png"
                                className="nitro-lazy slick-slide slick-cloned"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="data:image/svg+xml;nitro-empty-id=MzE4Njo2MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={9}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Book-Club.png"
                                className="nitro-lazy slick-slide slick-cloned"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="data:image/svg+xml;nitro-empty-id=MzE4Nzo2MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={10}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Number-Hive.png"
                                className="nitro-lazy slick-slide slick-cloned"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="data:image/svg+xml;nitro-empty-id=MzE4ODo2Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE2MjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iMTYyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                data-slick-index={11}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{ width: 0 }}
                              />
                            </div>
                          </div>{" "}
                          <button
                            className="slick-next slick-arrow"
                            aria-label="Next"
                            type="button"
                            style={{}}
                          >
                            Next
                          </button>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    id="div_block-1143-22"
                    className="ct-div-block slideTextTablet"
                  >
                    <div
                      id="div_block-1144-22"
                      className="ct-div-block heroTabletBox"
                      data-slide={0}
                    >
                      <div
                        id="div_block-1145-22"
                        className="ct-div-block heroTabletIconBox"
                      >
                        <img
                          id="image-1146-22"
                          alt="People-2"
                          srcSet=""
                          sizes="(max-width: 75px) 100vw, 75px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533.svg"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1146-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUgNzMiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <div
                          id="div_block-1147-22"
                          className="ct-div-block tabletLine"
                        />
                      </div>
                      <div id="div_block-1148-22" className="ct-div-block">
                        <h3
                          id="headline-1149-22"
                          className="ct-headline heroTabletHeading black"
                        >
                          Team of 30 App Experts
                        </h3>
                        <div
                          id="text_block-1150-22"
                          className="ct-text-block cstm_seo_anchor_wrapper"
                        >
                          You will be assigned our top{" "}
                          <a href="https://appmakersla.com/services/mobile-app-development/">
                            Los Angeles developers
                          </a>{" "}
                          to take build your software
                        </div>
                      </div>
                    </div>
                    <div
                      id="div_block-1151-22"
                      className="ct-div-block heroTabletBox"
                      data-slide={1}
                    >
                      <div
                        id="div_block-1152-22"
                        className="ct-div-block heroTabletIconBox"
                      >
                        <img
                          id="image-1153-22"
                          alt="Headphones"
                          srcSet=""
                          sizes="(max-width: 75px) 100vw, 75px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-1.svg"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1153-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUgNzMiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <div
                          id="div_block-1154-22"
                          className="ct-div-block tabletLine"
                        />
                      </div>
                      <div id="div_block-1155-22" className="ct-div-block">
                        <h3
                          id="headline-1156-22"
                          className="ct-headline heroTabletHeading black"
                        >
                          1-ON-1, In Person
                        </h3>
                        <div id="text_block-1157-22" className="ct-text-block">
                          In-person meetings with project managers, guiding
                          every step together
                        </div>
                      </div>
                    </div>
                    <div
                      id="div_block-1158-22"
                      className="ct-div-block heroTabletBox"
                      data-slide={2}
                    >
                      <div
                        id="div_block-1159-22"
                        className="ct-div-block heroTabletIconBox"
                      >
                        <img
                          id="image-1160-22"
                          alt="Heart-1"
                          srcSet=""
                          sizes="(max-width: 75px) 100vw, 75px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-2.svg"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1160-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUgNzMiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <div
                          id="div_block-1161-22"
                          className="ct-div-block tabletLine"
                        />
                      </div>
                      <div id="div_block-1162-22" className="ct-div-block">
                        <h3
                          id="headline-1163-22"
                          className="ct-headline heroTabletHeading black"
                        >
                          Best Code Practices
                        </h3>
                        <div id="text_block-1164-22" className="ct-text-block">
                          Keeping your code healthy and ready for growth &amp;
                          scale
                        </div>
                      </div>
                    </div>
                    <div
                      id="div_block-1165-22"
                      className="ct-div-block heroTabletBox"
                      data-slide={3}
                    >
                      <div
                        id="div_block-1166-22"
                        className="ct-div-block heroTabletIconBox"
                      >
                        <img
                          id="image-1167-22"
                          alt="Lock-1"
                          srcSet=""
                          sizes="(max-width: 75px) 100vw, 75px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-3.svg"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1167-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUgNzMiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <div
                          id="div_block-1168-22"
                          className="ct-div-block tabletLine"
                        />
                      </div>
                      <div id="div_block-1169-22" className="ct-div-block">
                        <h3
                          id="headline-1170-22"
                          className="ct-headline heroTabletHeading black"
                        >
                          Privacy &amp; Cybersecurity
                        </h3>
                        <div id="text_block-1171-22" className="ct-text-block">
                          Your ideas are kept confidential, and your code will
                          include best security practices.
                        </div>
                      </div>
                    </div>
                    <div
                      id="div_block-1172-22"
                      className="ct-div-block heroTabletBox"
                      data-slide={4}
                    >
                      <div
                        id="div_block-1173-22"
                        className="ct-div-block heroTabletIconBox"
                      >
                        <img
                          id="image-1174-22"
                          alt="Thumbs up"
                          srcSet=""
                          sizes="(max-width: 75px) 100vw, 75px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-4.svg"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1174-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUgNzMiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <div
                          id="div_block-1175-22"
                          className="ct-div-block tabletLine"
                        />
                      </div>
                      <div id="div_block-1176-22" className="ct-div-block">
                        <h3
                          id="headline-1177-22"
                          className="ct-headline heroTabletHeading black"
                        >
                          Cross Platform Development
                        </h3>
                        <div
                          id="text_block-1178-22"
                          className="ct-text-block cstm_seo_anchor_wrapper"
                        >
                          <a href="https://appmakersla.com/services/ios-development/">
                            iOS
                          </a>{" "}
                          and{" "}
                          <a href="https://appmakersla.com/services/android-development/">
                            Android development
                          </a>{" "}
                          for the price of 1. We also build off existing apps.
                        </div>
                      </div>
                    </div>
                    <div
                      id="div_block-1179-22"
                      className="ct-div-block heroTabletBox"
                      data-slide={5}
                    >
                      <div
                        id="div_block-1180-22"
                        className="ct-div-block heroTabletIconBox"
                      >
                        <img
                          id="image-1181-22"
                          alt="Star-1"
                          srcSet=""
                          sizes="(max-width: 75px) 100vw, 75px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152533-5.svg"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1181-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUgNzMiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <div
                          id="div_block-1182-22"
                          className="ct-div-block tabletLine"
                        />
                      </div>
                      <div id="div_block-1183-22" className="ct-div-block">
                        <h3
                          id="headline-1184-22"
                          className="ct-headline heroTabletHeading black"
                        >
                          {" "}
                          Support &amp; Maintenance
                        </h3>
                        <div id="text_block-1185-22" className="ct-text-block">
                          Get the best support while building your mobile app,
                          and the best on-going maintenance afterwards.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="div_block-1186-22"
                className="ct-div-block nitro-offscreen"
              >
                <div id="div_block-1187-22" className="ct-div-block">
                  <div id="div_block-1188-22" className="ct-div-block">
                    <div id="div_block-1189-22" className="ct-div-block">
                      <img
                        id="image-1190-22"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 56px) 100vw, 56px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153378.svg"
                        className="ct-image nitro-lazy"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="data:image/svg+xml;nitro-empty-id=image-1190-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTYgNTUiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                      />
                    </div>
                    <div id="div_block-1191-22" className="ct-div-block">
                      <div id="text_block-1192-22" className="ct-text-block">
                        100+
                      </div>
                      <div id="text_block-1193-22" className="ct-text-block">
                        APPS LAUNCHED
                      </div>
                    </div>
                  </div>
                  <div id="div_block-1194-22" className="ct-div-block">
                    <div id="div_block-1195-22" className="ct-div-block">
                      <img
                        id="image-1196-22"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 56px) 100vw, 56px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153379.svg"
                        className="ct-image nitro-lazy"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="data:image/svg+xml;nitro-empty-id=image-1196-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTYgNTUiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                      />
                    </div>
                    <div id="div_block-1197-22" className="ct-div-block">
                      <div id="text_block-1198-22" className="ct-text-block">
                        10 M+
                      </div>
                      <div id="text_block-1199-22" className="ct-text-block">
                        TOTAL USERS
                      </div>
                    </div>
                  </div>
                  <div id="div_block-1200-22" className="ct-div-block">
                    <div id="div_block-1201-22" className="ct-div-block">
                      <img
                        id="image-1202-22"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 56px) 100vw, 56px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153380.svg"
                        className="ct-image nitro-lazy"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="data:image/svg+xml;nitro-empty-id=image-1202-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTYgNTUiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                      />
                    </div>
                    <div id="div_block-1203-22" className="ct-div-block">
                      <div id="text_block-1204-22" className="ct-text-block">
                        $100M
                      </div>
                      <div id="text_block-1205-22" className="ct-text-block">
                        RAISED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="div_block-1206-22"
              className="ct-div-block nitro-offscreen  "
            >
              <div
                id="div_block-1207-22"
                className="ct-div-block cstm_marquee_wrapper flex justify-center  "
              >
                <div
                  id="div_block-1208-22"
                  className="ct-div-block cstm_marquee slick-initialized slick-slider"
                >
                  <div className="slick-list draggable">
                    <div
                      className="slick-track "
                      style={{
                        opacity: 1,
                        width: "45000px",
                        transform: "translate3d(-3255px, 0px, 0px)",
                        transition: "transform 6000ms linear",
                      }}
                      ref={trackRef}
                    >
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={-8}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 257px) 100vw, 257px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png 257w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-36x15.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-48x21.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1212-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU3IDExMCIgd2lkdGg9IjI1NyIgaGVpZ2h0PSIxMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={-7}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 340px) 100vw, 340px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png 340w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-300x97.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-24x8.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-36x12.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-48x16.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1214-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQwIDExMCIgd2lkdGg9IjM0MCIgaGVpZ2h0PSIxMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={-6}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 110px) 100vw, 110px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png 110w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-24x24.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-36x36.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-48x48.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1216-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTEwIDExMCIgd2lkdGg9IjExMCIgaGVpZ2h0PSIxMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={-5}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 379px) 100vw, 379px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png 379w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-300x87.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-24x7.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-36x10.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-48x14.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1218-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzc5IDExMCIgd2lkdGg9IjM3OSIgaGVpZ2h0PSIxMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={-4}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 118px) 100vw, 118px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png 118w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-24x22.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-36x34.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-48x45.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1220-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTE4IDExMCIgd2lkdGg9IjExOCIgaGVpZ2h0PSIxMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={-3}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 211px) 100vw, 211px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png 211w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-24x13.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-36x19.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-48x25.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png 211w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-24x13.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-36x19.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-48x25.png 48w"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={-2}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 255px) 100vw, 255px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png 255w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-36x16.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-48x21.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png 255w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-36x16.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-48x21.png 48w"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={-1}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 305px) 100vw, 305px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png 305w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-300x108.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-24x9.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-36x13.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-48x17.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png 305w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-300x108.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-24x9.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-36x13.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-48x17.png 48w"
                        />
                      </div>
                      <div
                        id="div_block-1209-22"
                        className="ct-div-block slick-slide"
                        data-slick-index={0}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id="image-1210-22"
                          alt=""
                          sizes="(max-width: 355px) 100vw, 355px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1.png 355w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-300x93.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-24x7.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-36x11.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-48x15.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1.png 355w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-300x93.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-24x7.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-36x11.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-48x15.png 48w"
                        />
                      </div>
                      <div
                        id="div_block-1211-22"
                        className="ct-div-block slick-slide"
                        data-slick-index={1}
                        aria-hidden="true"
                        tabIndex={0}
                      >
                        <img
                          id="image-1212-22"
                          alt=""
                          sizes="(max-width: 257px) 100vw, 257px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png 257w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-36x15.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-48x21.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png 257w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-36x15.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-48x21.png 48w"
                        />
                      </div>
                      <div
                        id="div_block-1213-22"
                        className="ct-div-block slick-slide slick-current slick-active"
                        data-slick-index={2}
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <img
                          id="image-1214-22"
                          alt=""
                          sizes="(max-width: 340px) 100vw, 340px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png 340w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-300x97.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-24x8.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-36x12.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-48x16.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png 340w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-300x97.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-24x8.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-36x12.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-48x16.png 48w"
                        />
                      </div>
                      <div
                        id="div_block-1215-22"
                        className="ct-div-block slick-slide slick-active"
                        data-slick-index={3}
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <img
                          id="image-1216-22"
                          alt=""
                          sizes="(max-width: 110px) 100vw, 110px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png 110w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-24x24.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-36x36.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-48x48.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png 110w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-24x24.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-36x36.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-48x48.png 48w"
                        />
                      </div>
                      <div
                        id="div_block-1217-22"
                        className="ct-div-block slick-slide slick-active"
                        data-slick-index={4}
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <img
                          id="image-1218-22"
                          alt=""
                          sizes="(max-width: 379px) 100vw, 379px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png 379w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-300x87.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-24x7.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-36x10.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-48x14.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png 379w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-300x87.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-24x7.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-36x10.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-48x14.png 48w"
                        />
                      </div>
                      <div
                        id="div_block-1219-22"
                        className="ct-div-block slick-slide slick-active"
                        data-slick-index={5}
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <img
                          id="image-1220-22"
                          alt=""
                          sizes="(max-width: 118px) 100vw, 118px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png 118w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-24x22.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-36x34.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-48x45.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png 118w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-24x22.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-36x34.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-48x45.png 48w"
                        />
                      </div>
                      <div
                        id="div_block-1221-22"
                        className="ct-div-block slick-slide slick-active"
                        data-slick-index={6}
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <img
                          id="image-1222-22"
                          alt=""
                          sizes="(max-width: 211px) 100vw, 211px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png 211w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-24x13.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-36x19.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-48x25.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png 211w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-24x13.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-36x19.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-48x25.png 48w"
                        />
                      </div>
                      <div
                        id="div_block-1223-22"
                        className="ct-div-block slick-slide slick-active"
                        data-slick-index={7}
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <img
                          id="image-1224-22"
                          alt=""
                          sizes="(max-width: 255px) 100vw, 255px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png 255w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-36x16.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-48x21.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png 255w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-36x16.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-48x21.png 48w"
                        />
                      </div>
                      <div
                        id="div_block-1225-22"
                        className="ct-div-block slick-slide slick-active"
                        data-slick-index={8}
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <img
                          id="image-1226-22"
                          alt=""
                          sizes="(max-width: 305px) 100vw, 305px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png 305w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-300x108.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-24x9.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-36x13.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-48x17.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png 305w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-300x108.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-24x9.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-36x13.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-48x17.png 48w"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned slick-active"
                        data-slick-index={9}
                        aria-hidden="false"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 355px) 100vw, 355px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1.png 355w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-300x93.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-24x7.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-36x11.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-48x15.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1.png 355w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-300x93.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-24x7.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-36x11.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-1-48x15.png 48w"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={10}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 257px) 100vw, 257px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png 257w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-36x15.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-48x21.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940.png 257w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-36x15.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152940-48x21.png 48w"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={11}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 340px) 100vw, 340px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png 340w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-300x97.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-24x8.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-36x12.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-48x16.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415.png 340w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-300x97.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-24x8.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-36x12.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153415-48x16.png 48w"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={12}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 110px) 100vw, 110px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png 110w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-24x24.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-36x36.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-48x48.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414.png 110w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-24x24.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-36x36.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153414-48x48.png 48w"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={13}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 379px) 100vw, 379px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png 379w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-300x87.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-24x7.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-36x10.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-48x14.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412.png 379w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-300x87.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-24x7.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-36x10.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153412-48x14.png 48w"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={14}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 118px) 100vw, 118px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png 118w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-24x22.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-36x34.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-48x45.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png"
                          className="ct-image lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png"
                          srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018.png 118w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-24x22.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-36x34.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153018-48x45.png 48w"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={15}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 211px) 100vw, 211px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png 211w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-24x13.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-36x19.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016-48x25.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153016.png"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1222-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjExIDExMCIgd2lkdGg9IjIxMSIgaGVpZ2h0PSIxMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={16}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 255px) 100vw, 255px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png 255w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-24x10.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-36x16.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1-48x21.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-1.png"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1224-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU1IDExMCIgd2lkdGg9IjI1NSIgaGVpZ2h0PSIxMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                      </div>
                      <div
                        id=""
                        className="ct-div-block slick-slide slick-cloned"
                        data-slick-index={17}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          id=""
                          alt=""
                          sizes="(max-width: 305px) 100vw, 305px"
                          nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png 305w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-300x108.png 300w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-24x9.png 24w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-36x13.png 36w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967-48x17.png 48w"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152967.png"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1226-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzA1IDExMCIgd2lkdGg9IjMwNSIgaGVpZ2h0PSIxMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-11-22" className="ct-section lazyloaded">
          <div className="ct-section-inner-wrap">
            <div id="div_block-12-22" className="ct-div-block">
              <div id="div_block-13-22" className="ct-div-block">
                <h2 id="headline-14-22" className="ct-headline h1">
                  Decade of Innovation and Impact
                </h2>
                <div id="div_block-19-22" className="ct-div-block" />
                <div id="text_block-16-22" className="ct-text-block">
                  At AppMakers, we take pride in our decades of unwavering
                  dedication to innovation and our profound impact on the
                  app-making industry. As one of the top mobile app &amp; web
                  development companies in Los Angeles, we’ve helped shape the
                  landscape over the last decade.
                </div>
              </div>
            </div>
            <img
              id="image-575-22"
              alt=""
              srcSet=""
              sizes="(max-width: 393px) 100vw, 393px"
              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/Group-1000004128.svg"
              className="ct-image lazyloaded"
              decoding="async"
              nitro-lazy-empty=""
              src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/Group-1000004128.svg"
            />
          </div>
        </section>
        <section id="section-133-22" className=" ct-section">
          <div className="ct-section-inner-wrap">
            <div id="div_block-138-22" className="ct-div-block">
              <h2 id="headline-139-22" className="ct-headline h1">
                What Clients Are Saying About AppMakers
              </h2>
              <div id="div_block-141-22" className="ct-div-block" />
            </div>
            <div id="div_block-142-22" className="ct-div-block">
              <div id="shortcode-273-22" className="ct-shortcode">
                {" "}
                <div className="custom-tabs">
                  {" "}
                  <ul className="tab-titles reviewTabs">
                    {" "}
                    <li className="active reviewTab" data-tab="tab-48">
                      {" "}
                      <div className="reviewLogo">
                        {" "}
                        <img
                          alt="Clutch"
                          style={{ height: 44 }}
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/clutch-co-vector-logo-removebg-preview-1.png"
                          className="lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="MzQ1NjoxNzY=-1"
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/clutch-co-vector-logo-removebg-preview-1.png"
                        />{" "}
                      </div>{" "}
                      <div className="reviewStarCount">
                        {" "}
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                          className="lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="MzQ1OTo4OQ==-1"
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                        />{" "}
                        <span>68 Reviews</span>{" "}
                      </div>{" "}
                    </li>{" "}
                    <li data-tab="tab-46" className="reviewTab lazyloaded">
                      {" "}
                      <div className="reviewLogo">
                        {" "}
                        <img
                          alt="Design Rush"
                          style={{ height: 44 }}
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Frame-1261153109.svg"
                          className="lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="MzQ2NjoxNTc=-1"
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Frame-1261153109.svg"
                        />{" "}
                      </div>{" "}
                      <div className="reviewStarCount">
                        {" "}
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                          className="lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="MzQ2OTo4OQ==-1"
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                        />{" "}
                        <span>42 Reviews</span>{" "}
                      </div>{" "}
                    </li>{" "}
                    <li className=" reviewTab" data-tab="tab-50">
                      {" "}
                      <div className="reviewLogo">
                        {" "}
                        <img
                          alt="Good Firm"
                          style={{ height: 44 }}
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Good-Firm.svg"
                          className="lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="MzQ3NjoxNDg=-1"
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Good-Firm.svg"
                        />{" "}
                      </div>{" "}
                      <div className="reviewStarCount">
                        {" "}
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                          className="lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="MzQ3OTo4OQ==-1"
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                        />{" "}
                        <span>67 Reviews</span>{" "}
                      </div>{" "}
                    </li>{" "}
                    <li className=" reviewTab" data-tab="tab-49">
                      {" "}
                      <div className="reviewLogo">
                        {" "}
                        <img
                          alt="Google"
                          style={{ height: 44 }}
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Google.svg"
                          className="lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="MzQ4NjoxNDI=-1"
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Google.svg"
                        />{" "}
                      </div>{" "}
                      <div className="reviewStarCount">
                        {" "}
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                          className="lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="MzQ4OTo4OQ==-1"
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                        />{" "}
                        <span>56 Reviews</span>{" "}
                      </div>{" "}
                    </li>{" "}
                  </ul>{" "}
                  <div className="tab-content reviewContent">
                    {" "}
                    <div className="tab-panel active" id="tab-48">
                      {" "}
                      <div className="reviewTabPanelHeading">
                        {" "}
                        <div className="headngPanel">
                          AppMakersLA Reviews on Clutch
                        </div>{" "}
                        <div className="viewAllBtn">
                          <a href="https://clutch.co/profile/app-makers-la?page=1#highlights">
                            See All <span className="cstm_span">Reviews</span>{" "}
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgimg"
                            >
                              {" "}
                              <path
                                d="M9.24145 8.14011L5.58444 4.48311C5.51136 4.41656 5.45237 4.33601 5.41096 4.24625C5.36956 4.15649 5.34659 4.05933 5.3434 3.96053C5.34022 3.86173 5.35689 3.76329 5.39242 3.67105C5.42796 3.57881 5.48164 3.49463 5.55029 3.42351C5.61894 3.35238 5.70116 3.29575 5.79209 3.25697C5.88302 3.21819 5.9808 3.19804 6.07965 3.19773C6.1785 3.19741 6.27641 3.21693 6.36759 3.25513C6.45876 3.29333 6.54134 3.34943 6.61044 3.42011L6.62844 3.43811L10.8084 7.61711C10.947 7.7557 11.0248 7.94364 11.0248 8.13961C11.0248 8.33558 10.947 8.52353 10.8084 8.66211L6.62945 12.8411C6.56201 12.9109 6.48149 12.9667 6.39248 13.0054C6.30347 13.0441 6.20771 13.0649 6.11067 13.0665C6.01364 13.0682 5.91722 13.0508 5.82693 13.0152C5.73664 12.9796 5.65424 12.9265 5.58445 12.8591C5.51465 12.7917 5.45882 12.7112 5.42014 12.6221C5.38146 12.5331 5.36069 12.4374 5.35902 12.3403C5.35735 12.2433 5.37481 12.1469 5.4104 12.0566C5.44599 11.9663 5.49901 11.8839 5.56645 11.8141L5.58445 11.7961L9.24145 8.14011Z"
                                fill="#F0175E"
                                stroke="#F0175E"
                                strokeWidth="0.5"
                              />{" "}
                            </svg>{" "}
                          </a>
                        </div>{" "}
                      </div>{" "}
                      <div
                        id="reviewSlider-48"
                        className="reviewSlider slick-initialized slick-slider"
                      >
                        <button
                          className="slick-prev slick-arrow slick-disabled"
                          aria-label="Previous"
                          type="button"
                          aria-disabled="true"
                          style={{}}
                        >
                          Previous
                        </button>{" "}
                        <div className="slick-list draggable">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              width: 3825,
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          >
                            <div
                              className="reviewInner slick-slide slick-current slick-active"
                              style={{ width: 405 }}
                              data-slick-index={0}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzUxMToxNjE=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Rebecca Raoufpur
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Realtor, Century 21
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzUxOToxMTE=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                  />{" "}
                                  From{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzUxOToyMTY=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                AppMakers USA’s efforts increased operational
                                efficiency and met expectations. Their
                                organized, responsive, and communicative
                                approach resulted in a positive partnership.
                                They offered high customer service in addition
                                to their technical expertise.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide slick-active"
                              style={{ width: 405 }}
                              data-slick-index={1}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzUzMDoxNjE=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Julian Sproul
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      CEO &amp; Founder, Talent for Good
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzUzODoxMTE=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                  />{" "}
                                  From{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzUzODoyMTY=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                App Makers USA has successfully delivered a
                                prototype wireframe for the client. The team has
                                offered impressive integrity and communication
                                via virtual calls and email. However, the client
                                has decided to end the project soon, as they've
                                gone in a different direction with their
                                development budget.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide slick-active"
                              style={{ width: 405 }}
                              data-slick-index={2}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzU0OToxNjE=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Anonymous
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Software Engineer, Consulting Co
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzU1NzoxMTE=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                  />{" "}
                                  From{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzU1NzoyMTY=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                App Makers USA's work provided the client with a
                                clear path forward and helped to focus on key
                                elements to improve the site's UX. The team was
                                punctual, responsive, and transparent about
                                timelines. Moreover, the team's adaptability
                                stood out. Overall, the team's attention to
                                detail was impressive.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 405 }}
                              data-slick-index={3}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzU2ODoxNjE=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Anonymous
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Senior Associate, Real Estate Company
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzU3NjoxMTE=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                  />{" "}
                                  From{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzU3NjoyMTY=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                App Makers USA's work set the client up for
                                success. They anticipated a 25% increase in
                                productivity and a smoother way of tracking
                                deals. The team was transparent about costs and
                                timelines, responsive, and adaptive to the
                                client's needs. Overall, the team's performance
                                satisfied the client.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 405 }}
                              data-slick-index={4}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzU4NzoxNjE=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Anonymous
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Former Lead Therapist, Healthcare Company
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzU5NToxMTE=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                  />{" "}
                                  From{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                    className="lazyloaded"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzU5NToyMTY=-1"
                                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                App Makers USA's analysis enabled the client to
                                cut unnecessary expenses while enhancing the
                                effectiveness of key website features. The team
                                managed the project well, ensuring timely
                                delivery and strict budget compliance. They also
                                abundantly offered their time and resources,
                                impressing the client.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 405 }}
                              data-slick-index={5}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzYwNjoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzYwNjoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Rachel Schipper
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Consultant, Consulting Company
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzYxNDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzYxNDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzYxNDoyMTY=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzYxNDoyMTY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMjAiIHdpZHRoPSIxOSIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                App Makers USA's work set the client up for
                                success. The team recommended features such as
                                automation and reporting tools to increase the
                                client's operational efficiency. They delivered
                                on time and managed the project well. Their
                                attention to detail and business understanding
                                were also impressive.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 405 }}
                              data-slick-index={6}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzYyNToxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzYyNToxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Josh Aaron
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Co-Founder, Sexy Time
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzYzMzoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzYzMzoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzYzMzoyMTY=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzYzMzoyMTY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMjAiIHdpZHRoPSIxOSIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                App Makers USA has successfully delivered
                                beautiful wireframes and designs that exceed the
                                client's expectations. The team consistently
                                delivers on time and promptly addresses needs
                                and concerns. Their effective communication,
                                hands-on approach, and meticulous attention to
                                detail stand out.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 405 }}
                              data-slick-index={7}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzY0NDoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzY0NDoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Anonymous
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Former Consultant, Media Company
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzY1MjoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzY1MjoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzY1MjoyMTY=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzY1MjoyMTY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMjAiIHdpZHRoPSIxOSIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                App Makers USA delivered a roadmap that gave the
                                client a clear vision for creating a digital
                                platform that enhances their audience's
                                experience. The team's suggestions influenced
                                how the client planned to organize and present
                                content. App Makers USA was highly responsive,
                                adaptable, and timely.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 405 }}
                              data-slick-index={8}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzY2MzoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzY2MzoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Rachel Riley
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Health Analyst, Cigna
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzY3MToxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzY3MToxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Screenshot_2023-09-22_at_11.43-1.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzY3MToyMTY=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzY3MToyMTY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMjAiIHdpZHRoPSIxOSIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Thanks to App Makers USA's analysis, the client
                                is equipped with a robust framework to improve
                                their lead management processes. The team
                                delivers every milestone on time and
                                communicates consistently throughout the
                                process. Their responsiveness and flexibility
                                ensure the project stays on track.{" "}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                        <button
                          className="slick-next slick-arrow"
                          aria-label="Next"
                          type="button"
                          style={{}}
                          aria-disabled="false"
                        >
                          Next
                        </button>
                      </div>{" "}
                    </div>{" "}
                    <template data-nitro-marker-id="48235e601a7ca71bb494ce1a7517f4cf-1" />{" "}
                    <div className="tab-panel " id="tab-46">
                      {" "}
                      <div className="reviewTabPanelHeading">
                        {" "}
                        <div className="headngPanel">
                          AppMakersLA Reviews on Design Rush
                        </div>{" "}
                        <div className="viewAllBtn">
                          <a href="https://www.designrush.com/agency/profile/app-makers-la#services">
                            See All <span className="cstm_span">Reviews</span>{" "}
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M9.24145 8.14011L5.58444 4.48311C5.51136 4.41656 5.45237 4.33601 5.41096 4.24625C5.36956 4.15649 5.34659 4.05933 5.3434 3.96053C5.34022 3.86173 5.35689 3.76329 5.39242 3.67105C5.42796 3.57881 5.48164 3.49463 5.55029 3.42351C5.61894 3.35238 5.70116 3.29575 5.79209 3.25697C5.88302 3.21819 5.9808 3.19804 6.07965 3.19773C6.1785 3.19741 6.27641 3.21693 6.36759 3.25513C6.45876 3.29333 6.54134 3.34943 6.61044 3.42011L6.62844 3.43811L10.8084 7.61711C10.947 7.7557 11.0248 7.94364 11.0248 8.13961C11.0248 8.33558 10.947 8.52353 10.8084 8.66211L6.62945 12.8411C6.56201 12.9109 6.48149 12.9667 6.39248 13.0054C6.30347 13.0441 6.20771 13.0649 6.11067 13.0665C6.01364 13.0682 5.91722 13.0508 5.82693 13.0152C5.73664 12.9796 5.65424 12.9265 5.58445 12.8591C5.51465 12.7917 5.45882 12.7112 5.42014 12.6221C5.38146 12.5331 5.36069 12.4374 5.35902 12.3403C5.35735 12.2433 5.37481 12.1469 5.4104 12.0566C5.44599 11.9663 5.49901 11.8839 5.56645 11.8141L5.58445 11.7961L9.24145 8.14011Z"
                                fill="#F0175E"
                                stroke="#F0175E"
                                strokeWidth="0.5"
                              />{" "}
                            </svg>{" "}
                          </a>
                        </div>{" "}
                      </div>{" "}
                      <div
                        id="reviewSlider-46"
                        className="reviewSlider slick-initialized slick-slider"
                      >
                        <button
                          className="slick-prev slick-arrow slick-disabled"
                          aria-label="Previous"
                          type="button"
                          aria-disabled="true"
                          style={{}}
                        >
                          Previous
                        </button>{" "}
                        <div className="slick-list draggable">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              width: 0,
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          >
                            <div
                              className="reviewInner slick-slide slick-current slick-active"
                              style={{ width: 0 }}
                              data-slick-index={0}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/1695750171348-user-avatar.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mzc1MjoxNzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mzc1MjoxNzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ1IDE0NSIgd2lkdGg9IjE0NSIgaGVpZ2h0PSIxNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Yonah Nimmer
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      CEO at Oceas
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzc2MDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzc2MDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/designRush.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzc2MDoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzc2MDoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgNTUiIHdpZHRoPSIzMyIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Working with AppMakersLA on our outdoor
                                equipment e-commerce platform was a game-changer
                                for our Los Angeles-based business. Their
                                expertise in web and app development shone
                                through from day one, delivering a user-friendly
                                site that has significantly boosted our online
                                sales. The team's skill in iPhone app
                                development and their knack for startup app
                                development strategies were evident, making the
                                entire process seamless and effective. If you're
                                in LA looking for a top-tier dev agency that
                                truly understands the needs of a growing
                                business, AppMakersLA is your go-to team.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide slick-active"
                              style={{ width: 0 }}
                              data-slick-index={1}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/1528316022503-user-avatar.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mzc3MDoxNzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mzc3MDoxNzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ1IDE0NSIgd2lkdGg9IjE0NSIgaGVpZ2h0PSIxNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Sarah Keren
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      CFO at Bennys Educational Toys
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzc3ODoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzc3ODoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/designRush.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzc3ODoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzc3ODoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgNTUiIHdpZHRoPSIzMyIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Benny's Educational Toys, based in New Jersey,
                                partnered with AppMakersLA to develop a
                                cutting-edge marketplace app for our Jewish
                                educational toys. Since the launch of the app,
                                we've seen a significant 250% increase in user
                                engagement, leading to a substantial boost in
                                sales and revenue. AppMakersLA's team
                                demonstrated exceptional expertise in mobile app
                                development, delivering a seamless and intuitive
                                platform that has elevated our brand presence.
                                Their dedication to customer satisfaction and
                                their ability to deliver results make them the
                                premier choice for startups seeking app
                                development services.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide slick-active"
                              style={{ width: 0 }}
                              data-slick-index={2}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/1681141614289-user-avatar.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mzc4ODoxNzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mzc4ODoxNzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ1IDE0NSIgd2lkdGg9IjE0NSIgaGVpZ2h0PSIxNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Elisa Hoffman
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Marketing Intern at Larson Packaging
                                      Company
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzc5NjoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzc5NjoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/designRush.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzc5NjoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzc5NjoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgNTUiIHdpZHRoPSIzMyIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                As a startup focusing on a niche market, we were
                                thrilled to find AppMakersLA for our dating app
                                project targeting Rugby Players. Located in the
                                heart of Los Angeles, their expertise in mobile
                                app development was evident from day one. Not
                                only did they bring our vision to life, but they
                                also helped us achieve a 150% increase in user
                                engagement within the first three months of
                                launch. The team at AppMakersLA truly
                                understands the intricacies of iPhone app
                                development and web development. If you're in LA
                                and need a top-notch dev agency, I highly
                                recommend AppMakersLA.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={3}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/1712259399011-user-avatar.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzgwNjoxNzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzgwNjoxNzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ1IDE0NSIgd2lkdGg9IjE0NSIgaGVpZ2h0PSIxNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Rebecca Raoufpur
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Realtor at CENTURY 21 Affiliated
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzgxNDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzgxNDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/designRush.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzgxNDoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzgxNDoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgNTUiIHdpZHRoPSIzMyIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                We hired AppMakersLA to develop a robust backend
                                system to efficiently track our clients and
                                manage transactions for our real estate
                                portfolio.AppMakersLA developed a comprehensive
                                backend system over three months, delivering key
                                features such as client tracking, transaction
                                management, and real-time data analytics, all
                                tailored to meet our specific needs.The new
                                system led to a serious, yet unquantified
                                increase in operational efficiency.
                                AppMakersLA's project management was
                                outstanding; they consistently delivered
                                milestones on time and were highly responsive to
                                our feedback and requirements.We were
                                particularly impressed by AppMakersLAs deep
                                understanding of our industry needs and their
                                ability to create a custom solution that
                                significantly improved our operations! Great
                                experience.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={4}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzgyNDoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzgyNDoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Leorah A.
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Product Manager at Home Depot
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzgzMjoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzgzMjoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/designRush.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzgzMjoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzgzMjoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgNTUiIHdpZHRoPSIzMyIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Home Depot specializes in providing a vast range
                                of home improvement materials and services,
                                facilitating customers with both online and
                                in-store shopping experiences. We enlisted
                                AppMakersLA to develop a comprehensive website
                                and app that enables customers to easily create
                                accounts, browse materials across various
                                branches, and place orders seamlessly.
                                AppMakersLA was tasked with creating a
                                user-friendly website and mobile application,
                                incorporating features for account creation,
                                material viewing by branch, and order placement,
                                ensuring a smooth, integrated shopping
                                experience. They handled everything from UI/UX
                                design to development, deployment, and QA. The
                                goal was to create a website and app that would
                                be deemed usable and easily navigable by our
                                customers. The feedback was immensely positive,
                                indicating that the new website and app were a
                                significant improvement. AppMakersLA showcased
                                exemplary project management skills, delivering
                                all components on schedule and exhibiting
                                exceptional responsiveness to our needs. What
                                sets AppMakersLA apart is their deep
                                understanding of our business needs, coupled
                                with their expertise in app and web development,
                                making them a valuable partner in our digital
                                transformation journey. Instead of jumping
                                straight into development, they took the time to
                                really understand our company, our project, and
                                our goals, then delivered on those with
                                competence and efficiency.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={5}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/Talia-Herzberg-sheher-user-avatar.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mzg0MjoxODI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mzg0MjoxODI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ1IDE0NSIgd2lkdGg9IjE0NSIgaGVpZ2h0PSIxNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Talia Herzberg (she/her)
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Owner/Operator at Talia's Challahs
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzg1MDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzg1MDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/designRush.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzg1MDoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzg1MDoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgNTUiIHdpZHRoPSIzMyIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Talias Challahs specializes in providing freshly
                                baked challahs available for order and delivery
                                daily. We hired AppMakersLA to conduct a
                                technical product review to analyze the cost,
                                resources, time, and approach needed to build an
                                app for our daily challah ordering service. They
                                provided a detailed analysis covering the
                                estimated budget, resource allocation,
                                development timeline, and strategic approach for
                                building our app. Their deliverables included a
                                comprehensive report and a roadmap that clearly
                                outlined each phase of the app development
                                process. This review has given us a clear
                                understanding of what it would take to develop
                                our app, leading to a more refined app concept
                                that is currently in beta and showing great
                                potential. AppMakersLA demonstrated excellent
                                project management skills, delivering all the
                                requested analysis on time and maintaining open
                                communication throughout the process. They were
                                always responsive to our questions and needs,
                                ensuring a smooth and collaborative experience.
                                What impressed us most was their deep
                                understanding of our vision and their ability to
                                provide a thorough and actionable analysis.
                                Their expertise in app development and
                                commitment to our project made them an
                                invaluable partner in our journey to bring our
                                app idea to life.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={6}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/1718597222097-user-avatar.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mzg2MDoxNzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mzg2MDoxNzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ1IDE0NSIgd2lkdGg9IjE0NSIgaGVpZ2h0PSIxNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Laurèn B.
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Project Engineer at Finiti
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzg2ODoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzg2ODoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/designRush.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzg2ODoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzg2ODoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgNTUiIHdpZHRoPSIzMyIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Our company specializes in creating tools that
                                empower QA engineers to conduct effective and
                                efficient software testing. We hired AppMakersLA
                                to conduct a technical product review, analyzing
                                the cost, resources, time, and approach required
                                to build our app idea. AppMakersLA provided a
                                thorough analysis, including a detailed cost
                                breakdown, resource requirements, and a
                                strategic approach, delivering all required
                                materials on time. The clarity and insights from
                                their review have led to internal improvements,
                                and the app is currently in beta with promising
                                feedback. We were particularly impressed by
                                their deep understanding of our vision and their
                                expertise in app development, making them a
                                standout partner in our journey.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={7}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/1705527062533-user-avatar.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mzg3ODoxNzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mzg3ODoxNzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ1IDE0NSIgd2lkdGg9IjE0NSIgaGVpZ2h0PSIxNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Lauren Gutin
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Director of Marketing at NAI San Diego
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzg4NjoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzg4NjoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/designRush.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzg4NjoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzg4NjoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgNTUiIHdpZHRoPSIzMyIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                NAI San Diego is a commercial real estate
                                services firm that provides strategic solutions
                                to help clients maximize the value of their real
                                estate investments. We hired AppMakersLA to
                                conduct a technical product review, analyzing
                                the cost, resources, time, and approach needed
                                to develop an app for QA engineers. AppMakersLA
                                provided a comprehensive analysis, including a
                                detailed breakdown of costs and a strategic
                                development roadmap. The insights from their
                                review have significantly improved our planning
                                process, and the app is currently in beta with
                                positive internal feedback. AppMakersLA
                                demonstrated exceptional project management,
                                delivering on time and maintaining constant
                                communication. We were particularly impressed by
                                their ability to understand our vision and
                                translate it into a detailed, actionable plan,
                                making them an invaluable partner in our
                                project.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={8}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/1715404149803-user-avatar.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mzg5NjoxNzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mzg5NjoxNzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ1IDE0NSIgd2lkdGg9IjE0NSIgaGVpZ2h0PSIxNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Dar Halevy Feldman
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      director at faces of october seventh
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzkwNDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzkwNDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/designRush.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="MzkwNDoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=MzkwNDoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgNTUiIHdpZHRoPSIzMyIgaGVpZ2h0PSI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Faces of October Seventh is building a dynamic
                                website to celebrate and showcase the diverse
                                and inspiring aspects of Israel. We brought in
                                AppMakersLA to help us figure out the cost,
                                resources, and timeline needed to bring our
                                vision to life. They provided a detailed
                                breakdown of costs, resources, and a
                                step-by-step roadmap, giving us clarity and
                                confidence. Although the website isnt live yet,
                                their guidance has already improved our planning
                                and we expect it to drive strong engagement.
                                Their project management was top-notch, with
                                timely deliveries and excellent responsiveness.
                                What really impressed me was how well they
                                understood our vision and turned it into a
                                practical, actionable plan, making them true
                                partners in our project.{" "}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                        <button
                          className="slick-next slick-arrow"
                          aria-label="Next"
                          type="button"
                          style={{}}
                          aria-disabled="false"
                        >
                          Next
                        </button>
                      </div>{" "}
                    </div>{" "}
                    <template data-nitro-marker-id="1b76cc924e10dd717666d69ad585658d-1" />{" "}
                    <div className="tab-panel " id="tab-50">
                      {" "}
                      <div className="reviewTabPanelHeading">
                        {" "}
                        <div className="headngPanel">
                          AppMakersLA Reviews on Good Firm
                        </div>{" "}
                        <div className="viewAllBtn">
                          <a href="https://www.goodfirms.co/company/app-makers-la ">
                            See All <span className="cstm_span">Reviews</span>{" "}
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M9.24145 8.14011L5.58444 4.48311C5.51136 4.41656 5.45237 4.33601 5.41096 4.24625C5.36956 4.15649 5.34659 4.05933 5.3434 3.96053C5.34022 3.86173 5.35689 3.76329 5.39242 3.67105C5.42796 3.57881 5.48164 3.49463 5.55029 3.42351C5.61894 3.35238 5.70116 3.29575 5.79209 3.25697C5.88302 3.21819 5.9808 3.19804 6.07965 3.19773C6.1785 3.19741 6.27641 3.21693 6.36759 3.25513C6.45876 3.29333 6.54134 3.34943 6.61044 3.42011L6.62844 3.43811L10.8084 7.61711C10.947 7.7557 11.0248 7.94364 11.0248 8.13961C11.0248 8.33558 10.947 8.52353 10.8084 8.66211L6.62945 12.8411C6.56201 12.9109 6.48149 12.9667 6.39248 13.0054C6.30347 13.0441 6.20771 13.0649 6.11067 13.0665C6.01364 13.0682 5.91722 13.0508 5.82693 13.0152C5.73664 12.9796 5.65424 12.9265 5.58445 12.8591C5.51465 12.7917 5.45882 12.7112 5.42014 12.6221C5.38146 12.5331 5.36069 12.4374 5.35902 12.3403C5.35735 12.2433 5.37481 12.1469 5.4104 12.0566C5.44599 11.9663 5.49901 11.8839 5.56645 11.8141L5.58445 11.7961L9.24145 8.14011Z"
                                fill="#F0175E"
                                stroke="#F0175E"
                                strokeWidth="0.5"
                              />{" "}
                            </svg>{" "}
                          </a>
                        </div>{" "}
                      </div>{" "}
                      <div
                        id="reviewSlider-50"
                        className="reviewSlider slick-initialized slick-slider"
                      >
                        <button
                          className="slick-prev slick-arrow slick-disabled"
                          aria-label="Previous"
                          type="button"
                          aria-disabled="true"
                          style={{}}
                        >
                          Previous
                        </button>{" "}
                        <div className="slick-list draggable">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              width: 0,
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          >
                            <div
                              className="reviewInner slick-slide slick-current slick-active"
                              style={{ width: 0 }}
                              data-slick-index={0}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mzk4NDoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mzk4NDoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Anonymous
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzk5MjoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzk5MjoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/Vector.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="Mzk5MjoyMTU=-1"
                                    src="data:image/svg+xml;nitro-empty-id=Mzk5MjoyMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Every milestone was delivered on time, and they
                                were proactive in addressing our questions and
                                adapting to our needs. The team’s ability to
                                keep everything organized and aligned with our
                                goals was remarkable.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide slick-active"
                              style={{ width: 0 }}
                              data-slick-index={1}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDAwMjoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDAwMjoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      David Krutonog
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Founder &amp; CMO at tlv.agency
                                      🌴Freelance Product Marketing &amp; Brand
                                      Manager 💫
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDAxMDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDAxMDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/Vector.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDAxMDoyMTU=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDAxMDoyMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                When we first imagined adding a chatbot to our
                                website, it felt like a daunting task. We wanted
                                something that could offer real value to our
                                visitors without feeling clunky or impersonal.
                                After struggling to figure out where to start,
                                we connected with AppMakersLA. From the first
                                meeting, it was clear we were in great hands.
                                They asked all the right questions and helped us
                                understand what was possible. Their expertise
                                took our vague idea and turned it into a clear,
                                actionable plan that fit seamlessly into our
                                business. Beyond the technical aspects, they
                                made us feel supported every step of the way.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide slick-active"
                              style={{ width: 0 }}
                              data-slick-index={2}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDAyMToxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDAyMToxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Anonymous
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDAyOToxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDAyOToxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/Vector.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDAyOToyMTU=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDAyOToyMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Overall AppMakers were hardworking,
                                communicative, and easy to work with! They
                                understand our vision and worked diligently to
                                meet our needs. AppMakersLA’s ability to
                                understand the academic environment and tailor
                                solutions to our research requirements was
                                remarkable. They combined technical expertise
                                with a genuine interest in supporting student
                                success, which made the collaboration incredibly
                                rewarding.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={3}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDAzOToxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDAzOToxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      RN HEDIS
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Telephone Triage | Expert in High Risk
                                      OB/GYN and Patient Education at SCAN
                                      Health
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDA0NzoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDA0NzoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/Vector.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDA0NzoyMTU=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDA0NzoyMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                SCAN partnered with AppMakersLA to assess the
                                development of a healthcare app for seniors to
                                connect with providers. They delivered a
                                detailed roadmap, suggesting features like
                                telehealth integration and intuitive navigation
                                tailored for older users. Their project
                                management was seamless, and their empathy for
                                our mission was remarkable. The insights they
                                provided have set us up to create a tool that
                                will truly enhance healthcare access for
                                seniors. We couldn’t have asked for a better
                                partner!{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={4}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDA1NjoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDA1NjoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Talya Malka
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      Marketing at CLD PR
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDA2NDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDA2NDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/Vector.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDA2NDoyMTU=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDA2NDoyMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                We partnered with AppMakersLA to explore
                                automating client services like reporting and
                                task tracking. They provided a clear and
                                detailed roadmap for building software tailored
                                to our needs, complete with features like client
                                dashboards and real-time analytics. Their
                                project management was seamless, and their
                                ability to combine technical know-how with
                                industry insight was outstanding. Their work has
                                set us up to optimize our workflows and better
                                serve our clients. We couldn’t be more impressed
                                with the collaboration!{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={5}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDA3MzoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDA3MzoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Daniel Sokol
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      {" "}
                                      CTO at OceanPads
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDA4MToxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDA4MToxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/Vector.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDA4MToyMTU=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDA4MToyMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                To the client’s delight, the beta version of the
                                site has received positive feedback,
                                highlighting the success of the project.
                                AppMakers LA’s project management was
                                outstanding—they adhered to deadlines, made
                                quick adjustments to changes, and responded
                                promptly to any concerns and requests. Their
                                expertise was clear throughout the development
                                process, allowing us to create a site that not
                                only looks great but also functions smoothly for
                                our users.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={6}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDA5MDoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDA5MDoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Teddy Wagnac
                                    </div>{" "}
                                    <div className="desgAuthor">
                                      CEO at TedWag
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDA5ODoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDA5ODoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/Vector.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDA5ODoyMTU=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDA5ODoyMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                App Makers LA helped bring my app idea to life
                                and ensured its success on the App Store. They
                                designed the app from concept to completion,
                                utilizing tools like Admob, Apple Developer
                                Account, and WordPress. The technical team’s
                                expertise was evident as they met the rigorous
                                standards required for the App Store. The app
                                launched successfully, achieving a top 100
                                ranking for its keyword within the first week.
                                Their reactivity was impressive, especially
                                considering the international nature of our
                                collaboration. Regular updates via Skype and
                                email ensured that communication was seamless,
                                allowing for timely adjustments and clear
                                execution of the project.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={7}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDEwOToxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDEwOToxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Anonymous
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDExNzoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDExNzoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/Vector.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDExNzoyMTU=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDExNzoyMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                AppMakersLA provided a comprehensive technical
                                review, presenting a detailed breakdown of the
                                project scope and making excellent feature
                                suggestions. Their recommendations, such as an
                                intuitive user dashboard and a streamlined
                                submission process, were insightful and
                                well-aligned with our goals. They helped us
                                focus on the most critical features, ensuring we
                                had a clear, efficient roadmap for moving
                                forward.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={8}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDEyNjoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDEyNjoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Anonymous
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDEzNDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDEzNDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/Vector.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDEzNDoyMTU=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDEzNDoyMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                AppMakersLA conducted a comprehensive analysis
                                of the project, outlining development costs,
                                required resources, and a clear timeline for
                                implementation. They suggested innovative
                                features such as real-time commenting and
                                interactive notifications, which aligned
                                perfectly with our vision. Their structured
                                roadmap offered a balanced and actionable plan
                                that addressed our objectives while staying
                                within budget.{" "}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                        <button
                          className="slick-next slick-arrow"
                          aria-label="Next"
                          type="button"
                          style={{}}
                          aria-disabled="false"
                        >
                          Next
                        </button>
                      </div>{" "}
                    </div>{" "}
                    <template data-nitro-marker-id="9f511e9de535a34200ff543e36d36ddb-1" />{" "}
                    <div className="tab-panel " id="tab-49">
                      {" "}
                      <div className="reviewTabPanelHeading">
                        {" "}
                        <div className="headngPanel">
                          AppMakersLA Reviews on Google
                        </div>{" "}
                        <div className="viewAllBtn">
                          <a href=" https://www.google.com/search?q=google+business+app+makers+la&sca_esv=586033817&biw=1309&bih=718&sxsrf=AM9HkKkIXGNe7_F6H964Aoe2rv_vbiu0Yw%3A1701200539164&ei=m0JmZZTECfyfkPIP4dqqkA8&ved=0ahUKEwjU_c_uueeCAxX8D0QIHWGtCvIQ4dUDCBA&uact=5&oq=google+business+app+makers+la&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWdvb2dsZSBidXNpbmVzcyBhcHAgbWFrZXJzIGxhMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRirAkjqB1C7AljgBHABeAGQAQCYAZIBoAGhA6oBAzAuM7gBA8gBAPgBAcICChAAGEcY1gQYsAPCAggQIRgWGB4YHeIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp#lrd=0x80c2c7ce7e59a4eb:0xe214a000281c5287,1">
                            See All <span className="cstm_span">Reviews</span>{" "}
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M9.24145 8.14011L5.58444 4.48311C5.51136 4.41656 5.45237 4.33601 5.41096 4.24625C5.36956 4.15649 5.34659 4.05933 5.3434 3.96053C5.34022 3.86173 5.35689 3.76329 5.39242 3.67105C5.42796 3.57881 5.48164 3.49463 5.55029 3.42351C5.61894 3.35238 5.70116 3.29575 5.79209 3.25697C5.88302 3.21819 5.9808 3.19804 6.07965 3.19773C6.1785 3.19741 6.27641 3.21693 6.36759 3.25513C6.45876 3.29333 6.54134 3.34943 6.61044 3.42011L6.62844 3.43811L10.8084 7.61711C10.947 7.7557 11.0248 7.94364 11.0248 8.13961C11.0248 8.33558 10.947 8.52353 10.8084 8.66211L6.62945 12.8411C6.56201 12.9109 6.48149 12.9667 6.39248 13.0054C6.30347 13.0441 6.20771 13.0649 6.11067 13.0665C6.01364 13.0682 5.91722 13.0508 5.82693 13.0152C5.73664 12.9796 5.65424 12.9265 5.58445 12.8591C5.51465 12.7917 5.45882 12.7112 5.42014 12.6221C5.38146 12.5331 5.36069 12.4374 5.35902 12.3403C5.35735 12.2433 5.37481 12.1469 5.4104 12.0566C5.44599 11.9663 5.49901 11.8839 5.56645 11.8141L5.58445 11.7961L9.24145 8.14011Z"
                                fill="#F0175E"
                                stroke="#F0175E"
                                strokeWidth="0.5"
                              />{" "}
                            </svg>{" "}
                          </a>
                        </div>{" "}
                      </div>{" "}
                      <div
                        id="reviewSlider-49"
                        className="reviewSlider slick-initialized slick-slider"
                      >
                        <button
                          className="slick-prev slick-arrow slick-disabled"
                          aria-label="Previous"
                          type="button"
                          aria-disabled="true"
                          style={{}}
                        >
                          Previous
                        </button>{" "}
                        <div className="slick-list draggable">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              width: 0,
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          >
                            <div
                              className="reviewInner slick-slide slick-current slick-active"
                              style={{ width: 0 }}
                              data-slick-index={0}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDIxNDoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDIxNDoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Eli Wolkenfeld
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDIyMjoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDIyMjoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/googleLogo.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDIyMjoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDIyMjoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                We brought in AppMakersLA to research and plan
                                the complete rebuild of our accounting system.
                                They provided a thorough roadmap with insightful
                                recommendations, focusing on automation, data
                                management, and efficiency. Their project
                                management was seamless, and their understanding
                                of our needs was outstanding. There was no room
                                for improvement—they delivered beyond
                                expectations and set us on the right track for
                                success.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide slick-active"
                              style={{ width: 0 }}
                              data-slick-index={1}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/unnamed-16.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDIzMToxNTk=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDIzMToxNTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMzYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Miller Williams
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDIzOToxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDIzOToxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/googleLogo.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDIzOToyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDIzOToyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Maui Health provides therapy and counseling
                                services focused on mental well-being and
                                holistic care. We hired AppMakersLA to help us
                                determine the cost, resources, and time needed
                                to build a website for our clinic. They
                                delivered a detailed analysis and suggested
                                features like online booking, helping us
                                prioritize what mattered most. Their guidance
                                has already streamlined our planning, and we are
                                starting to see an approximately 20% increase in
                                client engagement. Their project management was
                                excellent, with everything delivered on time and
                                with complete transparency. What stood out most
                                was their genuine interest in our success and
                                their attention to detail, which exceeded our
                                expectations.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide slick-active"
                              style={{ width: 0 }}
                              data-slick-index={2}
                              aria-hidden="false"
                              tabIndex={0}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/unnamed-15.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDI0ODoxNTk=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDI0ODoxNTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMzYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      David Krutonog
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDI1NjoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDI1NjoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/googleLogo.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDI1NjoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDI1NjoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                When we first imagined adding a chatbot to our
                                website, it felt like a daunting task. We wanted
                                something that could offer real value to our
                                visitors without feeling clunky or impersonal.
                                After struggling to figure out where to start,
                                we connected with AppMakersLA. From the first
                                meeting, it was clear we were in great hands.
                                They asked all the right questions and helped us
                                understand what was possible. Their expertise
                                took our vague idea and turned it into a clear,
                                actionable plan that fit seamlessly into our
                                business. Beyond the technical aspects, they
                                made us feel supported every step of the way.
                                Now, we’re more confident than ever about moving
                                forward with the chatbot. This project has set
                                us on a path to transforming how we engage with
                                our audience, and we couldn’t have done it
                                without AppMakersLA. Their impact has been
                                invaluable.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={3}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDI2OToxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDI2OToxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Talya Malka
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDI3NzoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDI3NzoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/googleLogo.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDI3NzoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDI3NzoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                We partnered with AppMakersLA to explore
                                automating client services like reporting and
                                task tracking. They provided a clear and
                                detailed roadmap for building software tailored
                                to our needs, complete with features like client
                                dashboards and real-time analytics. Their
                                project management was seamless, and their
                                ability to combine technical know-how with
                                industry insight was outstanding. Their work has
                                set us up to optimize our workflows and better
                                serve our clients. We couldn’t be more impressed
                                with the collaboration!{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={4}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/unnamed-14.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDI4NjoxNTk=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDI4NjoxNTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMzYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Adelle Hadar
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDI5NDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDI5NDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/googleLogo.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDI5NDoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDI5NDoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                I couldn’t be happier with the amazing website
                                this company built for my business! Daniel took
                                the time to truly understand my vision and
                                executed it perfectly without cutting any
                                corners. His attention to detail and dedication
                                to making everything just right really stood
                                out. The result was exactly what I dreamed of—a
                                professional, functional, and visually stunning
                                website. If you’re looking to create a business
                                website, I highly recommend working with them.
                                Their expertise and care make all the
                                difference!{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={5}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/unnamed-13.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDMwNToxNTk=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDMwNToxNTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMzYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Daniel
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDMxMzoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDMxMzoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/googleLogo.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDMxMzoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDMxMzoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                We hired AppMakersLA to create custom billing
                                software that could scale with our business.
                                They helped us prioritize critical features,
                                delivered on time, and offered excellent
                                suggestions like data visualization tools. Since
                                implementing the system, we’ve seen a 35%
                                productivity increase and a significant
                                reduction in payment delays. Their project
                                management was flawless—honest, adaptable, and
                                always transparent. What stood out most was
                                their deep understanding of our business and the
                                seamless, enjoyable partnership they built with
                                us.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={6}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDMyMjoxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDMyMjoxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Josh Aaron
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDMzMDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDMzMDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/googleLogo.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDMzMDoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDMzMDoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                I highly recommend choosing App Makers LA for
                                your next App project! Dan and the team has
                                taken my idea and exceeded my expectations with
                                what they created. - Deliverables: everything
                                they have brought to the table in regards to our
                                wireframe and designs were even better than I
                                could have imagined. It really is amazing what
                                they have done! - Cost: after having interviewed
                                multiple agencies to develop my app, App Makers
                                LA was BY FAR the most reasonable in cost. And
                                again, let it be known that cost has had ZERO
                                effect on the quality. - Quality of Insight: Dan
                                and his team have been able to find gaps that I
                                personally did not see and they were also able
                                to provide solutions for each. They helped
                                better my product in many ways. - Culture Fit:
                                If you're looking for real people without all of
                                the egotistical fluff, App Makers LA is your
                                spot. I was careful with who I hired, I wanted
                                to work with a team that fit our brand and
                                overall personality. They are fun, personable,
                                yet professional and effective. Again, highly
                                recommend!{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={7}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Group-1000004112.svg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDM0NToxNjE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDM0NToxNjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Yarden Abed
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDM1MzoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDM1MzoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/googleLogo.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDM1MzoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDM1MzoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Quantum Metric provides a tool that helps
                                businesses optimize their website performance.
                                We hired AppMakersLA to help us rebuild our
                                admin website, which is key to our operations.
                                They delivered a detailed analysis, suggested
                                excellent features, and helped us streamline our
                                approach, resulting in a projected 20% reduction
                                in operational costs. Their project management
                                was outstanding—they were transparent,
                                adaptable, and always delivered on time. What
                                impressed us most was their understanding of our
                                business and their commitment to helping us
                                succeed.{" "}
                              </div>{" "}
                            </div>
                            <div
                              className="reviewInner slick-slide"
                              style={{ width: 0 }}
                              data-slick-index={8}
                              aria-hidden="true"
                              tabIndex={-1}
                            >
                              {" "}
                              <div className="reviewAuthorInfo">
                                {" "}
                                <div className="logoAndName">
                                  {" "}
                                  <div className="AuthorInnerReviewLogo">
                                    {" "}
                                    <img
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/unnamed-12.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="NDM2MjoxNTk=-1"
                                      src="data:image/svg+xml;nitro-empty-id=NDM2MjoxNTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMzYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                    />{" "}
                                  </div>{" "}
                                  <div className="nameAndDesg">
                                    {" "}
                                    <div className="nameAuthor">
                                      Lindsay Engel
                                    </div>{" "}
                                    <div className="desgAuthor" />{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="reviewInnerStarsDiv">
                                  {" "}
                                  5{" "}
                                  <img
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDM3MDoxMTE=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDM3MDoxMTE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  From{" "}
                                  <img
                                    style={{ maxWidth: 19 }}
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/googleLogo.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDM3MDoyMTk=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDM3MDoyMTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                </div>{" "}
                              </div>{" "}
                              <div className="reviewText">
                                {" "}
                                Life Enrichment Services provides supportive
                                resources to improve lives. We hired AppMakersLA
                                to help us plan the creation of a client portal,
                                and they delivered a clear, comprehensive
                                roadmap tailored to our needs. Their project
                                management was seamless, and their team’s
                                empathy and understanding of our mission
                                exceeded our expectations. The insights they
                                provided have set us on the path to delivering a
                                portal that will make a real difference for our
                                clients.{" "}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                        <button
                          className="slick-next slick-arrow"
                          aria-label="Next"
                          type="button"
                          style={{}}
                          aria-disabled="false"
                        >
                          Next
                        </button>
                      </div>{" "}
                    </div>{" "}
                    <template data-nitro-marker-id="8213e84ea4789b472fdda8bac4156356-1" />{" "}
                  </div>{" "}
                </div>{" "}
                <template data-nitro-marker-id="f013f6663a69ef3c084e3f353f1ce980-1" />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="section-23-22" className=" ct-section">
          <div className="ct-section-inner-wrap">
            <div id="div_block-31-22" className="ct-div-block">
              <h2 id="headline-32-22" className="ct-headline h1">
                Our Mobile App and Web Development Services
              </h2>
              <div id="div_block-34-22" className="ct-div-block" />
              <div
                id="text_block-36-22"
                className="ct-text-block cstm_seo_anchor_wrapper"
              >
                Our comprehensive services are built to suit your needs, whether
                you are a startup looking for{" "}
                <a href="https://appmakersla.com/services/mobile-app-development/">
                  <span id="span-1231-22" className="ct-span">
                    app development services
                  </span>
                </a>{" "}
                or a Fortune-500 company in need of website maintenance.{" "}
              </div>
            </div>
            <div id="div_block-37-22" className="ct-div-block">
              <div id="div_block-38-22" className="ct-div-block ">
                <div id="div_block-39-22" className="ct-div-block">
                  <img
                    id="image-40-22"
                    alt="Screen-3"
                    srcSet=""
                    sizes="(max-width: 65px) 100vw, 65px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152652.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152652.svg"
                  />
                </div>
                <div id="div_block-41-22" className="ct-div-block">
                  <h3 id="headline-42-22" className="ct-headline h4 black">
                    App and Web Design
                  </h3>
                  <div
                    id="_rich_text-965-22"
                    className="oxy-rich-text small linkText"
                  >
                    <p>
                      After digesting your idea/project, our professional mobile
                      app designers will build out a beautiful{" "}
                      <a
                        href="https://www.figma.com/file/tZ0b6FATnEZtrlxsTholyJ/HRMS-Project?type=design&node-id=533-3096&mode=design&t=CR3DGmlBK4tAj1rv-0"
                        target="_blank"
                        rel="noopener"
                      >
                        Wireframe
                      </a>{" "}
                      &amp;{" "}
                      <a
                        href="https://www.figma.com/proto/tZ0b6FATnEZtrlxsTholyJ/HRMS-Project?node-id=533-1084&scaling=scale-down&page-id=0%3A1&starting-point-node-id=533%3A3166"
                        target="_blank"
                        rel="noopener"
                      >
                        Clickable Prototype
                      </a>{" "}
                      to bring your project to life with color and brand.
                    </p>
                    <p>
                      Average Time: 2 weeks
                      <br />
                      Average Cost: $5,000
                    </p>
                  </div>
                </div>
              </div>
              <div id="div_block-45-22" className="ct-div-block ">
                <div id="div_block-46-22" className="ct-div-block">
                  <img
                    id="image-47-22"
                    alt="Screen-2"
                    srcSet=""
                    sizes="(max-width: 65px) 100vw, 65px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152651.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152651.svg"
                  />
                </div>
                <div id="div_block-48-22" className="ct-div-block">
                  <h3 id="headline-49-22" className="ct-headline h4 black">
                    App Development
                  </h3>
                  <div id="_rich_text-63-22" className="oxy-rich-text small">
                    <p>
                      Have our top developers build your iPhone, android or iPad
                      app.
                    </p>
                    <ol>
                      <li>
                        Custom Code - Ideal for apps that will scale to many
                        users and long term use. We use React, React Native,
                        Flutter, Python, Java, Swift, Node, Mongo, MySQL, AWS
                        &amp; GCP and much more.
                      </li>
                      <li>
                        MVP with Low-Code (Ideal for apps being used to test out
                        an idea) Bubble, Webflow
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div id="div_block-51-22" className="ct-div-block ">
                <div id="div_block-52-22" className="ct-div-block">
                  <img
                    id="image-53-22"
                    alt="Screen-1"
                    srcSet=""
                    sizes="(max-width: 65px) 100vw, 65px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152650.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152650.svg"
                  />
                </div>
                <div id="div_block-54-22" className="ct-div-block">
                  <h3 id="headline-55-22" className="ct-headline h4 black">
                    Webapp Development
                  </h3>
                  <div
                    id="_rich_text-65-22"
                    className="oxy-rich-text small linkText"
                  >
                    <p>Top Web Development in Los Angeles</p>
                    <ol>
                      <li>
                        Webapp: Build a web-version of your app idea so your
                        users can access your content from their computers.{" "}
                        <a
                          href="https://play.numberhive.org/"
                          target="_blank"
                          rel="noopener"
                        >
                          Example
                        </a>
                      </li>
                      <li>
                        Website: Build a low cost website with Wordpress, Wix or
                        Shopify to market and showcase your awesome product.{" "}
                        <a
                          href="https://hive.com/"
                          target="_blank"
                          rel="noopener"
                        >
                          Example
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-66-22" className=" ct-section">
          <div className="ct-section-inner-wrap">
            <div id="div_block-72-22" className="ct-div-block">
              <h2 id="headline-73-22" className="ct-headline h1">
                At a Glance
              </h2>
              <div id="div_block-75-22" className="ct-div-block" />
            </div>
            <div id="div_block-78-22" className="ct-div-block">
              <div id="div_block-79-22" className="ct-div-block portfolioDiv">
                <img
                  id="image-80-22"
                  alt=""
                  sizes="(max-width: 628px) 100vw, 628px"
                  nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1.png 628w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1-221x300.png 221w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1-18x24.png 18w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1-26x36.png 26w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1-35x48.png 35w"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1.png"
                  className="ct-image lazyloaded"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1.png"
                  srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1.png 628w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1-221x300.png 221w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1-18x24.png 18w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1-26x36.png 26w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Number-Hive-1-35x48.png 35w"
                />
                <div id="div_block-81-22" className="ct-div-block">
                  <h4 id="headline-82-22" className="ct-headline h5">
                    Number Hive
                  </h4>
                  <div id="text_block-83-22" className="ct-text-block">
                    Number Hive is the best, most enjoyable and simple way to
                    practice, learn and master multiplication, addition,
                    decimals, fractions and other pieces of elementary math.
                    With over 150,000 users, Number Hive is on its way to the
                    top.
                  </div>
                  <div id="div_block-85-22" className="ct-div-block">
                    <a
                      id="link-966-22"
                      className="ct-link"
                      href="https://play.google.com/store/apps/details?id=com.numberhive"
                      target="_blank"
                    >
                      <img
                        id="image-86-22"
                        alt="Google Play-1"
                        srcSet=""
                        sizes="(max-width: 118px) 100vw, 118px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Frame-1261152647.svg"
                        className="ct-image lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Frame-1261152647.svg"
                      />
                    </a>
                    <img
                      id="image-87-22"
                      alt="Vector-19"
                      srcSet=""
                      sizes="(max-width: 2px) 100vw, 2px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-18.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-18.svg"
                    />
                    <a
                      id="link-967-22"
                      className="ct-link"
                      href="https://apps.apple.com/us/app/number-hive/id1636921061"
                      target="_blank"
                    >
                      <img
                        id="image-88-22"
                        alt="Checker"
                        srcSet=""
                        sizes="(max-width: 113px) 100vw, 113px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Frame-1261152648.svg"
                        className="ct-image lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Frame-1261152648.svg"
                      />
                    </a>
                    <img
                      id="image-1039-22"
                      alt="Vector-19"
                      srcSet=""
                      sizes="(max-width: 2px) 100vw, 2px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-18.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-18.svg"
                    />
                    <a
                      id="link-1017-22"
                      className="ct-link"
                      href="https://play.numberhive.org/"
                      target="_blank"
                    >
                      <img
                        id="image-1018-22"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 115px) 100vw, 115px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Frame-1261153345-1.svg"
                        className="ct-image lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Frame-1261153345-1.svg"
                      />
                    </a>
                  </div>
                  <a
                    id="link-89-22"
                    className="ct-link"
                    href="https://appmakersla.com/portfolio/"
                  >
                    <div id="text_block-90-22" className="ct-text-block">
                      See More
                    </div>
                    <img
                      id="image-91-22"
                      alt="Chevron-3"
                      srcSet=""
                      sizes="(max-width: 16px) 100vw, 16px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.right_.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.right_.svg"
                    />
                  </a>
                </div>
              </div>
              <div id="div_block-92-22" className="ct-div-block portfolioDiv">
                <img
                  id="image-93-22"
                  alt="Walmart"
                  sizes="(max-width: 628px) 100vw, 628px"
                  nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart.png 628w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart-220x300.png 220w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart-18x24.png 18w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart-26x36.png 26w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart-35x48.png 35w"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart.png"
                  className="ct-image lazyloaded"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart.png"
                  srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart.png 628w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart-220x300.png 220w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart-18x24.png 18w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart-26x36.png 26w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart-35x48.png 35w"
                />
                <div id="div_block-94-22" className="ct-div-block">
                  <h4 id="headline-95-22" className="ct-headline h5">
                    Walmart
                  </h4>
                  <div id="text_block-96-22" className="ct-text-block">
                    Walmart is a global retail leader offering a wide range of
                    products at low prices. It provides fresh groceries,
                    household essentials, and electronics, enhancing the
                    shopping experience with online ordering, curbside pickup,
                    and home delivery.
                    <br />
                  </div>
                  <div id="div_block-97-22" className="ct-div-block">
                    <a
                      id="link-1001-22"
                      className="ct-link"
                      href="https://play.google.com/store/apps/details?id=com.walmart.android&hl=en_IN"
                      target="_blank"
                    >
                      <img
                        id="image-1002-22"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 129px) 100vw, 129px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Frame-1261152647.svg"
                        className="ct-image lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Frame-1261152647.svg"
                      />
                    </a>
                    <img
                      id="image-1010-22"
                      alt=""
                      srcSet=""
                      sizes="(max-width: 2px) 100vw, 2px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Vector-18.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Vector-18.svg"
                    />
                    <a
                      id="link-1006-22"
                      className="ct-link"
                      href="https://play.google.com/store/apps/details?id=com.walmart.android&hl=en_IN"
                      target="_blank"
                    >
                      <img
                        id="image-1007-22"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 111px) 100vw, 111px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Frame-1261152648.svg"
                        className="ct-image lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Frame-1261152648.svg"
                      />
                    </a>
                    <img
                      id="image-1013-22"
                      alt=""
                      srcSet=""
                      sizes="(max-width: 2px) 100vw, 2px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Vector-18.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Vector-18.svg"
                    />
                    <a
                      id="link-971-22"
                      className="ct-link"
                      href="https://www.walmart.com/"
                      target="_blank"
                    >
                      <img
                        id="image-970-22"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 111px) 100vw, 111px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Frame-1261153345.svg"
                        className="ct-image lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Frame-1261153345.svg"
                      />
                    </a>
                  </div>
                  <a
                    id="link-101-22"
                    className="ct-link"
                    href="https://appmakersla.com/portfolio/"
                  >
                    <div id="text_block-102-22" className="ct-text-block">
                      See More
                    </div>
                    <img
                      id="image-103-22"
                      alt="Chevron-1"
                      srcSet=""
                      sizes="(max-width: 16px) 100vw, 16px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.svg"
                    />
                  </a>
                </div>
              </div>
              <div id="div_block-104-22" className="ct-div-block portfolioDiv">
                <img
                  id="image-105-22"
                  alt=""
                  sizes="(max-width: 628px) 100vw, 628px"
                  nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1.png 628w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1-220x300.png 220w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1-18x24.png 18w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1-26x36.png 26w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1-35x48.png 35w"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1.png"
                  className="ct-image lazyloaded"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1.png"
                  srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1.png 628w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1-220x300.png 220w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1-18x24.png 18w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1-26x36.png 26w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/EKS-1-35x48.png 35w"
                />
                <div id="div_block-106-22" className="ct-div-block">
                  <h4 id="headline-107-22" className="ct-headline h5">
                    Eksperience
                  </h4>
                  <div id="text_block-108-22" className="ct-text-block">
                    Founded by NFL's Austin Ekeler, Eksperience is your
                    celebrity connection hub. From signed jerseys to gaming with
                    actors and personalized messages, Eksperience brings stars
                    and fans together effortlessly.
                    <br />
                    <br />
                  </div>
                  <div id="div_block-109-22" className="ct-div-block">
                    <a
                      id="link-968-22"
                      className="ct-link"
                      href="https://play.google.com/store/apps/details?id=net.eksperience.myapp"
                      target="_blank"
                    >
                      <img
                        id="image-110-22"
                        alt="Google Play"
                        srcSet=""
                        sizes="(max-width: 118px) 100vw, 118px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Frame-1261152647-1.svg"
                        className="ct-image lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Frame-1261152647-1.svg"
                      />
                    </a>
                    <img
                      id="image-111-22"
                      alt="Vector-18"
                      srcSet=""
                      sizes="(max-width: 2px) 100vw, 2px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-18-1.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-18-1.svg"
                    />
                    <a
                      id="link-969-22"
                      className="ct-link"
                      href="https://apps.apple.com/us/app/eksperiences/id1621713479"
                      target="_blank"
                    >
                      <img
                        id="image-112-22"
                        alt="App Store"
                        srcSet=""
                        sizes="(max-width: 114px) 100vw, 114px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Frame-1261152648-2.svg"
                        className="ct-image lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Frame-1261152648-2.svg"
                      />
                    </a>
                  </div>
                  <a
                    id="link-113-22"
                    className="ct-link"
                    href="https://appmakersla.com/portfolio/"
                  >
                    <div id="text_block-114-22" className="ct-text-block">
                      See More
                    </div>
                    <img
                      id="image-115-22"
                      alt="Chevron-1"
                      srcSet=""
                      sizes="(max-width: 16px) 100vw, 16px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-gray-100 flex flex-col items-center  ">
          <div className="max-w-6xl w-full text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
              Let's turn your vision into digital reality.
            </h2>
            <div className="mt-4 sm:mt-6 h-1 w-16 bg-blue-500 mx-auto"></div>
          </div>
          <img
            src="./images/bgimage.jpg"
            alt="Tablet preview"
            className="mt-6 w-full  shadow-lg object-cover"
          />
        </section>
        <section id="section-124-636" className=" ct-section">
          <div className="ct-section-inner-wrap">
            <img
              id="image-125-636"
              alt="Ellipse-5"
              sizes="(max-width: 642px) 100vw, 642px"
              nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34.png 642w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34-184x300.png 184w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34-628x1024.png 628w"
              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34.png"
              className="ct-image lazyloaded"
              decoding="async"
              nitro-lazy-empty=""
              src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34.png"
              srcSet="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34.png 642w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34-184x300.png 184w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34-628x1024.png 628w"
            />
            <div id="div_block-126-636" className="ct-div-block">
              <h3 id="headline-127-636" className="ct-headline h1">
                Our Mobile App and Web Development Process
              </h3>
              <div id="div_block-129-636" className="ct-div-block" />
            </div>
            <div id="div_block-130-636" className="ct-div-block">
              <h6
                id="headline-131-636"
                className="ct-headline h1 reveal-type"
                data-bg-color="#FBC3D5"
                data-fg-color="#F0175E"
              >
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  P
                </div>
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  H
                </div>
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  A
                </div>
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  S
                </div>
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  E
                </div>{" "}
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  A
                </div>
              </h6>
              <div id="code_block-132-636" className="ct-code-block">
                <svg
                  width={72}
                  height={2400}
                  viewBox="0 0 72 2400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    id="animatedPath"
                    d="M71.1736 0.625489L13.1744 0.625488C6.54697 0.625489 1.17439 5.99807 1.17439 12.6255L1.17383 2399.37"
                    stroke="#FF5AA8"
                    strokeOpacity="0.5"
                    style={{ strokeDasharray: "2463.6", strokeDashoffset: 0 }}
                  />{" "}
                </svg>
              </div>
            </div>
            <div id="div_block-133-636" className="ct-div-block main">
              <div id="div_block-134-636" className="ct-div-block sidebar">
                <div
                  id="div_block-135-636"
                  className="ct-div-block sidebar__inner"
                >
                  <p
                    id="headline-136-636"
                    className="ct-headline h1 reveal-type phaseHeading"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    A
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    1
                  </div>
                  <p />
                  <div
                    id="div_block-137-636"
                    className="ct-div-block phaseCircle"
                  />
                </div>
              </div>
              <div id="div_block-138-636" className="ct-div-block content">
                <div id="div_block-139-636" className="ct-div-block">
                  <div id="div_block-140-636" className="ct-div-block">
                    <img
                      id="image-141-636"
                      alt="search-status-4"
                      srcSet=""
                      sizes="(max-width: 50px) 100vw, 50px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/search-status.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/search-status.svg"
                    />
                  </div>
                </div>
                <h3
                  id="headline-142-636"
                  className="ct-headline h3 black reveal-type"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    S
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    p
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    c
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    f
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    c
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    a
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    t
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    o
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    n
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    s
                  </div>{" "}
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    &amp;
                  </div>{" "}
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    P
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    l
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    a
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    n
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    n
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    n
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    g
                  </div>
                </h3>
                <div
                  id="text_block-143-636"
                  className="ct-text-block black"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  Dive into the specs to:
                  <br />
                  1. Solidify what is being built so we are aligned.
                  <br />
                  2. Research libraries and services that will be integrated
                  with the software.
                  <br />
                  3. Decide on coding language architecture and other unique
                  elements
                </div>
                <a
                  id="link-144-636"
                  className="ct-link"
                  href="https://docs.google.com/document/d/135p-ntxdirzLluY73p_AVs9FtbYQUA1xZVrfw5Ako2c/edit"
                  target="_blank"
                >
                  <img
                    id="image-145-636"
                    alt=""
                    srcSet=""
                    sizes="(max-width: 24px) 100vw, 24px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/link.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/link.svg"
                  />
                  <div id="text_block-146-636" className="ct-text-block">
                    View Specifications
                  </div>
                </a>
              </div>
            </div>
            <div id="div_block-147-636" className="ct-div-block main">
              <div id="div_block-148-636" className="ct-div-block sidebar">
                <div
                  id="div_block-149-636"
                  className="ct-div-block sidebar__inner"
                >
                  <p
                    id="headline-150-636"
                    className="ct-headline h1 reveal-type phaseHeading"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    A
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    2
                  </div>
                  <p />
                  <div
                    id="div_block-151-636"
                    className="ct-div-block phaseCircle"
                  />
                </div>
              </div>
              <div id="div_block-152-636" className="ct-div-block content">
                <div id="div_block-153-636" className="ct-div-block">
                  <img
                    id="image-154-636"
                    alt="designtools-1"
                    srcSet=""
                    sizes="(max-width: 49px) 100vw, 49px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/designtools.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/designtools.svg"
                  />
                </div>
                <h3
                  id="headline-155-636"
                  className="ct-headline h3 black reveal-type"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    D
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    s
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    g
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    n
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    s
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    ,
                  </div>{" "}
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    W
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    r
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    f
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    r
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    a
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    m
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>{" "}
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    &amp;
                  </div>{" "}
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    P
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    r
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    o
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    t
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    o
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    t
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    y
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    p
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                </h3>
                <div
                  id="text_block-156-636"
                  className="ct-text-block black"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  Build out designs to determine what the software/app/website
                  will look like, and how it will function (and make it
                  beautiful).
                </div>
                <div id="div_block-157-636" className="ct-div-block">
                  <a
                    id="link-158-636"
                    className="ct-link"
                    href="https://www.figma.com/file/tZ0b6FATnEZtrlxsTholyJ/HRMS-Project?type=design&node-id=533-3166&mode=design"
                    target="_blank"
                  >
                    <img
                      id="image-159-636"
                      alt=""
                      srcSet=""
                      sizes="(max-width: 24px) 100vw, 24px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/link.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/link.svg"
                    />
                    <div id="text_block-160-636" className="ct-text-block">
                      Wireframe
                    </div>
                  </a>
                  <a
                    id="link-161-636"
                    className="ct-link"
                    href="https://www.figma.com/proto/tZ0b6FATnEZtrlxsTholyJ/HRMS-Project?node-id=533-3096&scaling=scale-down&page-id=0%3A1&starting-point-node-id=533%3A3166"
                    target="_blank"
                  >
                    <img
                      id="image-162-636"
                      alt=""
                      srcSet=""
                      sizes="(max-width: 24px) 100vw, 24px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/link.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/link.svg"
                    />
                    <div id="text_block-163-636" className="ct-text-block">
                      Prototype
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div id="div_block-164-636" className="ct-div-block main">
              <div id="div_block-165-636" className="ct-div-block sidebar">
                <div
                  id="div_block-166-636"
                  className="ct-div-block sidebar__inner"
                >
                  <p
                    id="headline-167-636"
                    className="ct-headline h1 reveal-type phaseHeading"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    A
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    3
                  </div>
                  <p />
                  <div
                    id="div_block-168-636"
                    className="ct-div-block phaseCircle"
                  />
                </div>
              </div>
              <div id="div_block-169-636" className="ct-div-block content">
                <div id="div_block-170-636" className="ct-div-block">
                  <img
                    id="image-171-636"
                    alt="timer"
                    srcSet=""
                    sizes="(max-width: 49px) 100vw, 49px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/timer.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/timer.svg"
                  />
                </div>
                <h3
                  id="headline-172-636"
                  className="ct-headline h3 black reveal-type"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    E
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    s
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    t
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    m
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    a
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    t
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    s
                  </div>{" "}
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    &amp;
                  </div>{" "}
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    T
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    m
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    l
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    n
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                </h3>
                <div
                  id="text_block-173-636"
                  className="ct-text-block black"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  Using all the information from the specs and designs, we build
                  a spreadsheet estimating all the tasks involved, timeline and
                  total cost.
                </div>
              </div>
            </div>
            <div id="div_block-174-636" className="ct-div-block">
              <h3
                id="headline-175-636"
                className="ct-headline h1 reveal-type"
                data-bg-color="#FBC3D5"
                data-fg-color="#F0175E"
              >
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  P
                </div>
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  H
                </div>
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  A
                </div>
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  S
                </div>
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  E
                </div>{" "}
                <div
                  className="char"
                  style={{
                    display: "inline-block",
                    color: "rgb(251, 195, 213)",
                  }}
                >
                  B
                </div>
              </h3>
              <div id="div_block-176-636" className="ct-div-block" />
            </div>
            <div id="div_block-177-636" className="ct-div-block main">
              <div id="div_block-178-636" className="ct-div-block sidebar">
                <div
                  id="div_block-179-636"
                  className="ct-div-block sidebar__inner"
                >
                  <p
                    id="headline-180-636"
                    className="ct-headline h1 reveal-type phaseHeading"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    1
                  </div>
                  <p />
                  <div
                    id="div_block-181-636"
                    className="ct-div-block phaseCircle"
                  />
                </div>
              </div>
              <div id="div_block-182-636" className="ct-div-block content">
                <div id="div_block-183-636" className="ct-div-block">
                  <img
                    id="image-184-636"
                    alt="Document code"
                    srcSet=""
                    sizes="(max-width: 51px) 100vw, 51px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/document-code.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/document-code.svg"
                  />
                </div>
                <h3
                  id="headline-185-636"
                  className="ct-headline h3 black reveal-type"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    u
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    l
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    d
                  </div>
                </h3>
                <div
                  id="text_block-186-636"
                  className="ct-text-block black cstm_seo_anchor_wrapper"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  Engineers{" "}
                  <a href="https://appmakersla.com/services/custom-software-development/">
                    build the software
                  </a>
                  , adding new features, fixing old features &amp; constantly
                  improving code architecture &amp; scalability.
                </div>
              </div>
              <img
                id="image-187-636"
                alt="Arrows"
                srcSet=""
                sizes="(max-width: 194px) 100vw, 194px"
                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-1000004084.svg"
                className="ct-image lazyloaded"
                decoding="async"
                nitro-lazy-empty=""
                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-1000004084.svg"
              />
              <div
                id="text_block-188-636"
                className="ct-text-block h3 extrabold"
                data-bg-color="#FBC3D5"
                data-fg-color="#F0175E"
              >
                WE&nbsp; REPEAT&nbsp; UNTIL&nbsp; FINSIHED
              </div>
            </div>
            <div id="div_block-189-636" className="ct-div-block main">
              <div id="div_block-190-636" className="ct-div-block sidebar">
                <div
                  id="div_block-191-636"
                  className="ct-div-block sidebar__inner"
                >
                  <p
                    id="headline-192-636"
                    className="ct-headline h1 reveal-type phaseHeading"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    2
                  </div>
                  <p />
                  <div
                    id="div_block-193-636"
                    className="ct-div-block phaseCircle"
                  />
                </div>
              </div>
              <div id="div_block-194-636" className="ct-div-block content">
                <div id="div_block-195-636" className="ct-div-block">
                  <img
                    id="image-196-636"
                    alt="Tick-2"
                    srcSet=""
                    sizes="(max-width: 47px) 100vw, 47px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152654.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152654.svg"
                  />
                </div>
                <h3
                  id="headline-197-636"
                  className="ct-headline h3 black reveal-type"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    T
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    s
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    t
                  </div>
                </h3>
                <div
                  id="text_block-198-636"
                  className="ct-text-block black"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  QA tests the latest build, identifying any bugs that need to
                  be fixed or features that need improving.
                </div>
              </div>
            </div>
            <div id="div_block-199-636" className="ct-div-block main">
              <div id="div_block-200-636" className="ct-div-block sidebar">
                <div
                  id="div_block-201-636"
                  className="ct-div-block sidebar__inner"
                >
                  <p
                    id="headline-202-636"
                    className="ct-headline h1 reveal-type phaseHeading"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    3
                  </div>
                  <p />
                  <div
                    id="div_block-203-636"
                    className="ct-div-block phaseCircle"
                  />
                </div>
              </div>
              <div id="div_block-204-636" className="ct-div-block content">
                <div id="div_block-205-636" className="ct-div-block">
                  <img
                    id="image-206-636"
                    alt="Align right-2"
                    srcSet=""
                    sizes="(max-width: 50px) 100vw, 50px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-1000004085.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-1000004085.svg"
                  />
                </div>
                <h3
                  id="headline-207-636"
                  className="ct-headline h3 black reveal-type"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    D
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    p
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    l
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    o
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    y
                  </div>
                </h3>
                <div
                  id="text_block-208-636"
                  className="ct-text-block black"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  Our deployment engineers release the newest build to the
                  testing platforms, or live, to the App Store, Google Play
                  store or website.
                </div>
              </div>
            </div>
            <div id="div_block-209-636" className="ct-div-block main">
              <div id="div_block-210-636" className="ct-div-block sidebar">
                <div
                  id="div_block-211-636"
                  className="ct-div-block sidebar__inner"
                >
                  <p
                    id="headline-212-636"
                    className="ct-headline h1 reveal-type phaseHeading"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    4
                  </div>
                  <p />
                  <div
                    id="div_block-213-636"
                    className="ct-div-block phaseCircle"
                  />
                </div>
              </div>
              <div id="div_block-214-636" className="ct-div-block content">
                <div id="div_block-215-636" className="ct-div-block">
                  <img
                    id="image-216-636"
                    alt="Rulerpen"
                    srcSet=""
                    sizes="(max-width: 29px) 100vw, 29px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/rulerpen.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/rulerpen.svg"
                  />
                </div>
                <h3
                  id="headline-217-636"
                  className="ct-headline h3 black reveal-type"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    M
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    a
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    s
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    u
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    r
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    e
                  </div>
                </h3>
                <div
                  id="text_block-218-636"
                  className="ct-text-block black"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  Our product team measures the progress &amp; effectiveness of
                  the latest build.
                </div>
              </div>
            </div>
            <div id="div_block-219-636" className="ct-div-block main">
              <div id="div_block-220-636" className="ct-div-block sidebar">
                <div
                  id="div_block-221-636"
                  className="ct-div-block sidebar__inner"
                >
                  <p
                    id="headline-222-636"
                    className="ct-headline h1 reveal-type phaseHeading"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(251, 195, 213)",
                    }}
                  >
                    5
                  </div>
                  <p />
                  <div
                    id="div_block-223-636"
                    className="ct-div-block phaseCircle"
                  />
                </div>
              </div>
              <div id="div_block-224-636" className="ct-div-block content">
                <div id="div_block-225-636" className="ct-div-block">
                  <img
                    id="image-226-636"
                    alt="Align right"
                    srcSet=""
                    sizes="(max-width: 53px) 100vw, 53px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/align-right.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/align-right.svg"
                  />
                </div>
                <h3
                  id="headline-227-636"
                  className="ct-headline h3 black reveal-type"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    M
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    a
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    n
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    t
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    a
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    i
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(155, 155, 155)",
                    }}
                  >
                    n
                  </div>
                </h3>
                <div
                  id="text_block-228-636"
                  className="ct-text-block black"
                  data-bg-color="#9B9B9B"
                  data-fg-color="#000"
                >
                  Should we exit the software development loop, we have
                  lightweight plans available for continued, long-term
                  maintenance.
                </div>
              </div>
              <img
                id="image-229-636"
                alt="Vector-24"
                srcSet=""
                sizes="(max-width: 4px) 100vw, 4px"
                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-24.svg"
                className="ct-image lazyloaded"
                decoding="async"
                nitro-lazy-empty=""
                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector-24.svg"
              />
            </div>
            <div id="div_block-230-636" className="ct-div-block">
              <div id="div_block-231-636" className="ct-div-block" />
              <a
                id="link-232-636"
                className="ct-link whiteBtn"
                href="https://appmakersla.com/our-process/"
              >
                <div
                  id="text_block-233-636"
                  className="ct-text-block whiteBtnText"
                >
                  Deep Dive Into Our Process
                </div>
                <img
                  id="image-234-636"
                  alt="Chevron-1"
                  srcSet=""
                  sizes="(max-width: 16px) 100vw, 16px"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.svg"
                  className="ct-image lazyloaded"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.svg"
                />
              </a>
            </div>
          </div>
        </section>

        <section id="section-710-22" className=" ct-section">
          <div className="ct-section-inner-wrap">
            <img
              id="image-711-22"
              alt="Ellipse-5"
              sizes="(max-width: 642px) 100vw, 642px"
              nitro-lazy-srcset="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34.png 642w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34-184x300.png 184w, https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34-628x1024.png 628w"
              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Ellipse-34.png"
              className="ct-image nitro-lazy"
              decoding="async"
              nitro-lazy-empty=""
              src="data:image/svg+xml;nitro-empty-id=image-711-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQyIDEwNDYiIHdpZHRoPSI2NDIiIGhlaWdodD0iMTA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
            />

            <div id="div_block-712-22" className="ct-div-block">
              <h2 id="headline-713-22" className="ct-headline h1">
                Our Mobile App and Web Development Process
                <br />
              </h2>
              <div id="div_block-715-22" className="ct-div-block" />
            </div>
            <div id="div_block-794-22" className="ct-div-block">
              <div id="div_block-795-22" className="ct-div-block">
                <div id="headline-796-22" className="ct-headline extrabold">
                  PHASE A
                </div>
              </div>
              <div id="code_block-798-22" className="ct-code-block">
                <svg
                  width={35}
                  height={2093}
                  viewBox="0 0 35 2093"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    id="animatedPathMobile"
                    d="M35.0024 0.5L13.0039 0.5C6.37653 0.5 1.00395 5.87258 1.00395 12.5L1.00395 980.5C1.00395 987.127 6.37653 992.5 13.0039 992.5L20.0024 992.5C26.6298 992.5 32.0024 997.873 32.0024 1004.5L32.0024 2092.5"
                    stroke="#FBC3D5"
                    style={{ strokeDasharray: "2141.55", strokeDashoffset: 0 }}
                  />{" "}
                </svg>{" "}
              </div>
              <div id="div_block-799-22" className="ct-div-block">
                <div
                  id="div_block-800-22"
                  className="ct-div-block mobilePhaseHeadingBox"
                >
                  <p
                    id="headline-801-22"
                    className="ct-headline reveal-type mobilePhaseHeading extrabold noMargin"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    A
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    1
                  </div>
                  <p />
                  <div
                    id="div_block-804-22"
                    className="ct-div-block mobilePhaseCircle"
                  />
                </div>
                <div id="div_block-805-22" className="ct-div-block">
                  <div id="div_block-808-22" className="ct-div-block">
                    <img
                      id="image-809-22"
                      alt="search-status-4"
                      srcSet=""
                      sizes="(max-width: 50px) 100vw, 50px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/search-status.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-809-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                    />
                  </div>
                  <div id="div_block-810-22" className="ct-div-block">
                    <h3
                      id="headline-811-22"
                      className="ct-headline black"
                      data-bg-color="#333333"
                      data-fg-color="#000000"
                    >
                      Specifications &amp;
                      <br />
                      Planning
                    </h3>
                    <div
                      id="text_block-813-22"
                      className="ct-text-block "
                      data-bg-color="#333333"
                      data-fg-color="#000"
                    >
                      Dive into the specs to:
                      <br />
                      1. Solidify what is being built so we are aligned.
                      <br />
                      2. Research libraries and services that will be integrated
                      with the software.
                      <br />
                      3. Decide on coding language architecture and other unique
                      elements.
                    </div>
                    <a
                      id="link-100-637"
                      className="ct-link"
                      href="https://docs.google.com/document/d/135p-ntxdirzLluY73p_AVs9FtbYQUA1xZVrfw5Ako2c/edit"
                      target="_blank"
                    >
                      <img
                        id="image-101-637"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 24px) 100vw, 24px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/link.svg"
                        className="ct-image nitro-lazy"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="data:image/svg+xml;nitro-empty-id=image-101-637;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                      />
                      <div id="text_block-102-637" className="ct-text-block">
                        View Specifications
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div id="div_block-815-22" className="ct-div-block">
                <div
                  id="div_block-816-22"
                  className="ct-div-block mobilePhaseHeadingBox"
                >
                  <p
                    id="headline-817-22"
                    className="ct-headline reveal-type mobilePhaseHeading extrabold noMargin"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    A
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    2
                  </div>
                  <p />
                  <div
                    id="div_block-818-22"
                    className="ct-div-block mobilePhaseCircle"
                  />
                </div>
                <div id="div_block-819-22" className="ct-div-block">
                  <div id="div_block-820-22" className="ct-div-block">
                    <img
                      id="image-821-22"
                      alt="Designtools"
                      srcSet=""
                      sizes="(max-width: 28px) 100vw, 28px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/designtools-1.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-821-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                    />
                  </div>
                  <div id="div_block-822-22" className="ct-div-block">
                    <h3 id="headline-823-22" className="ct-headline black">
                      Design, Wireframe
                      <br />
                      &amp; Prototype
                    </h3>
                    <div id="text_block-824-22" className="ct-text-block">
                      Build out designs to determine what the
                      software/app/website will look like, and how it will
                      function (and make it beautiful).
                    </div>
                    <div id="div_block-104-637" className="ct-div-block">
                      <a
                        id="link-105-637"
                        className="ct-link"
                        href="https://www.figma.com/file/tZ0b6FATnEZtrlxsTholyJ/HRMS-Project?type=design&node-id=533-3166&mode=design"
                        target="_blank"
                      >
                        <img
                          id="image-106-637"
                          alt=""
                          srcSet=""
                          sizes="(max-width: 24px) 100vw, 24px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/link.svg"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-106-637;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <div id="text_block-107-637" className="ct-text-block">
                          Wireframe
                        </div>
                      </a>
                      <a
                        id="link-108-637"
                        className="ct-link"
                        href="https://www.figma.com/proto/tZ0b6FATnEZtrlxsTholyJ/HRMS-Project?node-id=533-3096&scaling=scale-down&page-id=0%3A1&starting-point-node-id=533%3A3166"
                        target="_blank"
                      >
                        <img
                          id="image-109-637"
                          alt=""
                          srcSet=""
                          sizes="(max-width: 24px) 100vw, 24px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/link.svg"
                          className="ct-image nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-109-637;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <div id="text_block-110-637" className="ct-text-block">
                          Prototype
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="div_block-832-22" className="ct-div-block">
                <div
                  id="div_block-833-22"
                  className="ct-div-block mobilePhaseHeadingBox"
                >
                  <p
                    id="headline-834-22"
                    className="ct-headline reveal-type mobilePhaseHeading extrabold noMargin"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    A
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    3
                  </div>
                  <p />
                  <div
                    id="div_block-835-22"
                    className="ct-div-block mobilePhaseCircle"
                  />
                </div>
                <div id="div_block-836-22" className="ct-div-block">
                  <div id="div_block-837-22" className="ct-div-block">
                    <img
                      id="image-838-22"
                      alt="Timer"
                      srcSet=""
                      sizes="(max-width: 28px) 100vw, 28px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/timer-1.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-838-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                    />
                  </div>
                  <div id="div_block-839-22" className="ct-div-block">
                    <h3 id="headline-840-22" className="ct-headline black">
                      Estimates &amp; Timeline
                    </h3>
                    <div id="text_block-841-22" className="ct-text-block">
                      Using all the information from the specs and designs, we
                      build a spreadsheet estimating all the tasks involved,
                      timeline and total cost.
                    </div>
                  </div>
                </div>
              </div>
              <div id="div_block-845-22" className="ct-div-block">
                <div id="div_block-849-22" className="ct-div-block">
                  <div id="div_block-852-22" className="ct-div-block">
                    <div id="headline-856-22" className="ct-headline extrabold">
                      PHASE B
                    </div>
                  </div>
                </div>
              </div>
              <div id="div_block-867-22" className="ct-div-block">
                <div
                  id="div_block-868-22"
                  className="ct-div-block mobilePhaseHeadingBox"
                >
                  <p
                    id="headline-869-22"
                    className="ct-headline reveal-type mobilePhaseHeading extrabold noMargin"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    1
                  </div>
                  <p />
                  <div
                    id="div_block-870-22"
                    className="ct-div-block mobilePhaseCircle"
                  />
                </div>
                <div id="div_block-871-22" className="ct-div-block">
                  <div id="div_block-872-22" className="ct-div-block">
                    <img
                      id="image-873-22"
                      alt="Document code"
                      srcSet=""
                      sizes="(max-width: 28px) 100vw, 28px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/document-code-1.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-873-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                    />
                  </div>
                  <div id="div_block-874-22" className="ct-div-block">
                    <h3 id="headline-875-22" className="ct-headline black">
                      Build
                    </h3>
                    <div
                      id="text_block-876-22"
                      className="ct-text-block cstm_seo_anchor_wrapper"
                    >
                      Engineers{" "}
                      <a href="https://appmakersla.com/services/custom-software-development/">
                        build the software
                      </a>
                      , adding new features, fixing old features &amp;
                      constantly improving code architecture &amp; scalability.
                    </div>
                  </div>
                </div>
              </div>
              <div id="div_block-881-22" className="ct-div-block">
                <div
                  id="div_block-882-22"
                  className="ct-div-block mobilePhaseHeadingBox"
                >
                  <p
                    id="headline-883-22"
                    className="ct-headline reveal-type mobilePhaseHeading extrabold noMargin"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    2
                  </div>
                  <p />
                  <div
                    id="div_block-884-22"
                    className="ct-div-block mobilePhaseCircle"
                  />
                </div>
                <div id="div_block-885-22" className="ct-div-block">
                  <div id="div_block-886-22" className="ct-div-block">
                    <img
                      id="image-887-22"
                      alt="Rulerpen-2"
                      srcSet=""
                      sizes="(max-width: 29px) 100vw, 29px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1261152654-1.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-887-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjkgMjgiIHdpZHRoPSIyOSIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                    />
                  </div>
                  <div id="div_block-888-22" className="ct-div-block">
                    <h3 id="headline-889-22" className="ct-headline black">
                      Test
                    </h3>
                    <div id="text_block-890-22" className="ct-text-block">
                      QA tests the latest build, identifying any bugs that need
                      to be fixed or features that need improving.
                    </div>
                  </div>
                </div>
              </div>
              <div id="div_block-906-22" className="ct-div-block">
                <div
                  id="div_block-907-22"
                  className="ct-div-block mobilePhaseHeadingBox"
                >
                  <p
                    id="headline-908-22"
                    className="ct-headline reveal-type mobilePhaseHeading extrabold noMargin"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    3
                  </div>
                  <p />
                  <div
                    id="div_block-909-22"
                    className="ct-div-block mobilePhaseCircle"
                  />
                </div>
                <div id="div_block-910-22" className="ct-div-block">
                  <div id="div_block-911-22" className="ct-div-block">
                    <img
                      id="image-912-22"
                      alt="Rulerpen-1"
                      srcSet=""
                      sizes="(max-width: 27px) 100vw, 27px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-1000004088.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-912-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjcgMjYiIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                    />
                  </div>
                  <div id="div_block-913-22" className="ct-div-block">
                    <h3 id="headline-914-22" className="ct-headline black">
                      Deploy
                    </h3>
                    <div id="text_block-915-22" className="ct-text-block">
                      Our deployment engineers release the newest build to the
                      testing platforms, or live, to the App Store, Google Play
                      store or website.
                    </div>
                  </div>
                </div>
              </div>
              <div id="div_block-919-22" className="ct-div-block">
                <div
                  id="div_block-920-22"
                  className="ct-div-block mobilePhaseHeadingBox"
                >
                  <p
                    id="headline-921-22"
                    className="ct-headline reveal-type mobilePhaseHeading extrabold noMargin"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    4
                  </div>
                  <p />
                  <div
                    id="div_block-922-22"
                    className="ct-div-block mobilePhaseCircle"
                  />
                </div>
                <div id="div_block-923-22" className="ct-div-block">
                  <div id="div_block-924-22" className="ct-div-block">
                    <img
                      id="image-925-22"
                      alt="Rulerpen"
                      srcSet=""
                      sizes="(max-width: 29px) 100vw, 29px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/rulerpen.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-925-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjkgMjgiIHdpZHRoPSIyOSIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                    />
                  </div>
                  <div id="div_block-926-22" className="ct-div-block">
                    <h3 id="headline-927-22" className="ct-headline black">
                      Measure
                    </h3>
                    <div id="text_block-928-22" className="ct-text-block">
                      Our product team measures the progress &amp; effectiveness
                      of the latest build.
                    </div>
                  </div>
                </div>
              </div>
              <div id="div_block-932-22" className="ct-div-block">
                <div
                  id="div_block-933-22"
                  className="ct-div-block mobilePhaseHeadingBox"
                >
                  <p
                    id="headline-934-22"
                    className="ct-headline reveal-type mobilePhaseHeading extrabold noMargin"
                    data-bg-color="#FBC3D5"
                    data-fg-color="#F0175E"
                  />
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    B
                  </div>
                  <div
                    className="char"
                    style={{
                      display: "inline-block",
                      color: "rgb(240, 23, 94)",
                    }}
                  >
                    5
                  </div>
                  <p />
                  <div
                    id="div_block-935-22"
                    className="ct-div-block mobilePhaseCircle"
                  />
                </div>
                <div id="div_block-936-22" className="ct-div-block">
                  <div id="div_block-937-22" className="ct-div-block">
                    <img
                      id="image-938-22"
                      alt="Align right"
                      srcSet=""
                      sizes="(max-width: 38px) 100vw, 38px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/align-right-1.svg"
                      className="ct-image nitro-lazy"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="data:image/svg+xml;nitro-empty-id=image-938-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzggNDAiIHdpZHRoPSIzOCIgaGVpZ2h0PSI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                    />
                  </div>
                  <div id="div_block-939-22" className="ct-div-block">
                    <h3 id="headline-940-22" className="ct-headline black">
                      Maintain
                    </h3>
                    <div id="text_block-941-22" className="ct-text-block">
                      Should we exit the software development loop, we have
                      lightweight plans available for continued, long-term
                      maintenance.
                    </div>
                  </div>
                </div>
              </div>
              <div id="div_block-952-22" className="ct-div-block">
                <a
                  id="link-949-22"
                  className="ct-link whiteBtn"
                  href="https://appmakersla.com/our-process/"
                >
                  <div
                    id="text_block-950-22"
                    className="ct-text-block whiteBtnText"
                  >
                    Deep Dive Into Our Process
                  </div>
                  <img
                    id="image-951-22"
                    alt="Chevron-1"
                    srcSet=""
                    sizes="(max-width: 16px) 100vw, 16px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.svg"
                    className="ct-image nitro-lazy"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="data:image/svg+xml;nitro-empty-id=image-951-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="section-146-22" className="ct-section nitro-offscreen">
          <div className="ct-section-inner-wrap">
            <div id="div_block-151-22" className="ct-div-block">
              <h2 id="headline-152-22" className="ct-headline h1">
                Frequently Asked Questions (FAQ)
              </h2>
              <h2 id="headline-577-22" className="ct-headline h1">
                FAQ
              </h2>
              <div id="div_block-154-22" className="ct-div-block" />
            </div>
            <div id="div_block-157-22" className="ct-div-block faqsDiv">
              <div id="div_block-158-22" className="ct-div-block">
                <div
                  id="div_block-159-22"
                  className="ct-div-block oxel_accordion"
                >
                  <div id="code_block-160-22" className="ct-code-block" />
                  <button
                    id="div_block-161-22"
                    className="ct-div-block oxel_accordion__row"
                    aria-expanded="false"
                  >
                    <div
                      id="div_block-162-22"
                      className="ct-div-block oxel_accordion__row_left"
                    >
                      <div
                        id="text_block-164-22"
                        className="ct-text-block oxel_accordion__row__label"
                      >
                        What is mobile app development?
                      </div>
                    </div>
                    <div
                      id="fancy_icon-165-22"
                      className="ct-fancy-icon oxel_accordion__icon"
                    >
                      <svg id="svg-fancy_icon-165-22">
                        <use xlinkHref="#FontAwesomeicon-chevron-down" />
                      </svg>
                    </div>
                  </button>
                  <div
                    id="div_block-174-22"
                    className="ct-div-block oxel_accordion__content oxel_accordion__content__hidden"
                  >
                    <div id="div_block-175-22" className="ct-div-block">
                      <div
                        id="text_block-176-22"
                        className="ct-text-block cstm_seo_anchor_wrapper"
                      >
                        <a href="https://appmakersla.com/services/mobile-app-development/">
                          Mobile app development
                        </a>{" "}
                        is the process of creating software applications that
                        run on mobile devices, such as smartphones and tablets.
                        This intricate process involves writing code to create
                        the application, designing a user-friendly interface,
                        and ensuring the app functions properly on various
                        mobile platforms, such as iOS and Android.
                        <br />
                        <br />
                        Developers use a variety of programming languages and
                        frameworks, depending on the platform and specific app
                        requirements. For iOS, Swift and Objective-C are the
                        primary languages, while Android developers often use
                        Java or Kotlin.{" "}
                        <a href="https://appmakersla.com/services/custom-software-development/">
                          Cross-platform development
                        </a>{" "}
                        can involve frameworks like React Native or Flutter,
                        which allow for a single codebase to run on multiple
                        operating systems.
                        <br />
                        <br />
                        The development process encompasses several stages,
                        including planning, design, development, testing, and
                        deployment to app stores. Quality Assurance (QA) testing
                        is a critical phase where the app is rigorously tested
                        for usability, compatibility, security, and performance
                        issues.
                        <br />
                        <br />
                        With the increasing reliance on mobile devices,{" "}
                        <a href="https://appmakersla.com/services/mobile-app-development/">
                          mobile app development
                        </a>{" "}
                        plays a vital role in the digital strategy of
                        businesses, allowing them to offer personalized
                        experiences to users, reach a wider audience, and stay
                        competitive in the market.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="div_block-187-22"
                  className="ct-div-block oxel_accordion"
                >
                  <div id="code_block-188-22" className="ct-code-block" />
                  <button
                    id="div_block-189-22"
                    className="ct-div-block oxel_accordion__row"
                    aria-expanded="false"
                  >
                    <div
                      id="div_block-190-22"
                      className="ct-div-block oxel_accordion__row_left"
                    >
                      <div
                        id="text_block-191-22"
                        className="ct-text-block oxel_accordion__row__label"
                      >
                        What services do you offer?
                      </div>
                    </div>
                    <div
                      id="fancy_icon-192-22"
                      className="ct-fancy-icon oxel_accordion__icon"
                    >
                      <svg id="svg-fancy_icon-192-22">
                        <use xlinkHref="#FontAwesomeicon-chevron-down" />
                      </svg>
                    </div>
                  </button>
                  <div
                    id="div_block-193-22"
                    className="ct-div-block oxel_accordion__content oxel_accordion__content__hidden"
                  >
                    <div id="div_block-194-22" className="ct-div-block">
                      <div id="text_block-195-22" className="ct-text-block">
                        We are a{" "}
                        <a href="https://appmakersla.com/our-process/">
                          Los Angeles app and web development
                        </a>{" "}
                        company. As such, we offer: 1) Design for Apps, Webapps
                        and Websites 2) Mobile App Development for iPhone Apps,
                        Android Apps and iPad Apps &amp; Web Development for
                        Webapps. Each project includes full QA Services as well
                        as a product manager.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="div_block-196-22"
                  className="ct-div-block oxel_accordion"
                >
                  <div id="code_block-197-22" className="ct-code-block" />
                  <button
                    id="div_block-198-22"
                    className="ct-div-block oxel_accordion__row"
                    aria-expanded="false"
                  >
                    <div
                      id="div_block-199-22"
                      className="ct-div-block oxel_accordion__row_left"
                    >
                      <div
                        id="text_block-200-22"
                        className="ct-text-block oxel_accordion__row__label"
                      >
                        Do you have an office?
                      </div>
                    </div>
                    <div
                      id="fancy_icon-201-22"
                      className="ct-fancy-icon oxel_accordion__icon"
                    >
                      <svg id="svg-fancy_icon-201-22">
                        <use xlinkHref="#FontAwesomeicon-chevron-down" />
                      </svg>
                    </div>
                  </button>
                  <div
                    id="div_block-202-22"
                    className="ct-div-block oxel_accordion__content oxel_accordion__content__hidden"
                  >
                    <div id="div_block-203-22" className="ct-div-block">
                      <div id="text_block-204-22" className="ct-text-block">
                        Yes, we are centered around Los Angeles, California. We
                        have an office in Woodland Hills, Downtown Los Angeles
                        and New York. The address to our main office in Woodland
                        Hills is 20635 Ventura Blvd Woodland Hills, CA 91364.
                        Our second office address is 1250 S Los Angeles St. #223
                        Los Angeles, CA 90015.&nbsp;Get in touch with us for
                        exceptional services by one of the{" "}
                        <a href="https://appmakersla.com/contact-us/">
                          top mobile app development companies in Los Angeles
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="div_block-205-22"
                  className="ct-div-block oxel_accordion"
                >
                  <div id="code_block-206-22" className="ct-code-block" />
                  <button
                    id="div_block-207-22"
                    className="ct-div-block oxel_accordion__row"
                    aria-expanded="false"
                  >
                    <div
                      id="div_block-208-22"
                      className="ct-div-block oxel_accordion__row_left"
                    >
                      <div
                        id="text_block-209-22"
                        className="ct-text-block oxel_accordion__row__label"
                      >
                        Where are your app developers located?
                      </div>
                    </div>
                    <div
                      id="fancy_icon-210-22"
                      className="ct-fancy-icon oxel_accordion__icon"
                    >
                      <svg id="svg-fancy_icon-210-22">
                        <use xlinkHref="#FontAwesomeicon-chevron-down" />
                      </svg>
                    </div>
                  </button>
                  <div
                    id="div_block-211-22"
                    className="ct-div-block oxel_accordion__content oxel_accordion__content__hidden"
                  >
                    <div id="div_block-212-22" className="ct-div-block">
                      <div id="text_block-213-22" className="ct-text-block">
                        Our app developers are mainly located in Los Angeles,
                        though we have other offices around the world, and hire
                        the best developers wherever and whenever we find them.
                        If having engineers &amp; designers in Los Angeles is
                        critical to the project, we have the resources to make
                        that happen.&nbsp;Know more about one of the leading{" "}
                        <a href="https://appmakersla.com/">
                          Los Angeles Mobile App Developers
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                id="link-217-22"
                className="ct-link whiteBtn"
                href="https://appmakersla.com/faq/"
              >
                <div
                  id="text_block-218-22"
                  className="ct-text-block whiteBtnText"
                >
                  See more
                </div>
                <img
                  id="image-219-22"
                  alt="Chevron-1"
                  srcSet=""
                  sizes="(max-width: 16px) 100vw, 16px"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/chevron.svg"
                  className="ct-image nitro-lazy"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="data:image/svg+xml;nitro-empty-id=image-219-22;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                />
              </a>
            </div>
          </div>
        </section>
        <section id="section-1042-22" className=" ct-section">
          <div className="ct-section-inner-wrap">
            <div id="div_block-1043-22" className="ct-div-block">
              <h2 id="headline-1044-22" className="ct-headline h2 black">
                Try out some of the prototype versions of apps we’ve built
              </h2>
              <div id="div_block-1045-22" className="ct-div-block" />
            </div>
            <div id="div_block-1079-22" className="ct-div-block">
              <div id="shortcode-1080-22" className="ct-shortcode">
                {" "}
                <div className="tabsDiv">
                  {" "}
                  <div className="tabsDivMain">
                    {" "}
                    <div className="prevDiv">
                      {" "}
                      <img
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/prevSlide.svg"
                        className="lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        id="NDc2Njo5Mg==-1"
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/prevSlide.svg"
                      />{" "}
                    </div>{" "}
                    <div className="tabsHeadings slick-initialized slick-slider">
                      {" "}
                      <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: 40000,
                            transform: "translate3d(-1001px, 0px, 0px)",
                          }}
                        >
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="eksperience"
                            data-slick-index={-7}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/EKS_Logo2.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/EKS_Logo2.svg"
                              />
                            </div>
                            <div className="tabTitle">Eksperience</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="number-hive"
                            data-slick-index={-6}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/NumberHive_Logo.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/NumberHive_Logo.svg"
                              />
                            </div>
                            <div className="tabTitle">Number Hive</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="oceanpads"
                            data-slick-index={-5}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/OceanPads.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/OceanPads.svg"
                              />
                            </div>
                            <div className="tabTitle">OceanPads</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="local-locate"
                            data-slick-index={-4}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/LocalLocate-Logo.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/LocalLocate-Logo.svg"
                              />
                            </div>
                            <div className="tabTitle">Local Locate</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="fortune-teller"
                            data-slick-index={-3}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Fortune-Teller.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Fortune-Teller.svg"
                              />
                            </div>
                            <div className="tabTitle">Fortune Teller</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="asl-flurry"
                            data-slick-index={-2}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/ASL-Flurry.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/ASL-Flurry.svg"
                              />
                            </div>
                            <div className="tabTitle">ASL Flurry</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="sub-ly"
                            data-slick-index={-1}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Sub.ly-logo.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Sub.ly-logo.svg"
                              />
                            </div>
                            <div className="tabTitle">Sub.ly</div>
                          </div>
                          <div
                            className="tabsTab active slick-slide slick-current slick-active"
                            data-id="astrodate"
                            data-slick-index={0}
                            aria-hidden="false"
                            tabIndex={0}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Astro-Date-1.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDc3MDoxNjA=-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Astro-Date-1.svg"
                              />
                            </div>
                            <div className="tabTitle">AstroDate</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-active"
                            data-id="eksperience"
                            data-slick-index={1}
                            aria-hidden="false"
                            tabIndex={0}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/EKS_Logo2.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDc3MDozNTA=-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/EKS_Logo2.svg"
                              />
                            </div>
                            <div className="tabTitle">Eksperience</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-active"
                            data-id="number-hive"
                            data-slick-index={2}
                            aria-hidden="false"
                            tabIndex={0}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/NumberHive_Logo.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDc3MDo1NDg=-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/NumberHive_Logo.svg"
                              />
                            </div>
                            <div className="tabTitle">Number Hive</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-active"
                            data-id="oceanpads"
                            data-slick-index={3}
                            aria-hidden="false"
                            tabIndex={0}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/OceanPads.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDc3MDo3Mzg=-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/OceanPads.svg"
                              />
                            </div>
                            <div className="tabTitle">OceanPads</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-active"
                            data-id="local-locate"
                            data-slick-index={4}
                            aria-hidden="false"
                            tabIndex={0}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/LocalLocate-Logo.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDc3MDo5MzY=-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/LocalLocate-Logo.svg"
                              />
                            </div>
                            <div className="tabTitle">Local Locate</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-active"
                            data-id="fortune-teller"
                            data-slick-index={5}
                            aria-hidden="false"
                            tabIndex={0}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Fortune-Teller.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDc3MDoxMTM3-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Fortune-Teller.svg"
                              />
                            </div>
                            <div className="tabTitle">Fortune Teller</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-active"
                            data-id="asl-flurry"
                            data-slick-index={6}
                            aria-hidden="false"
                            tabIndex={0}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/ASL-Flurry.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDc3MDoxMzMy-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/ASL-Flurry.svg"
                              />
                            </div>
                            <div className="tabTitle">ASL Flurry</div>
                          </div>
                          <div
                            className="tabsTab slick-slide"
                            data-id="sub-ly"
                            data-slick-index={7}
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Sub.ly-logo.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDc3MDoxNTIw-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Sub.ly-logo.svg"
                              />
                            </div>
                            <div className="tabTitle">Sub.ly</div>
                          </div>
                          <div
                            className="tabsTab active slick-slide slick-cloned"
                            data-id="astrodate"
                            data-slick-index={8}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Astro-Date-1.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Astro-Date-1.svg"
                              />
                            </div>
                            <div className="tabTitle">AstroDate</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="eksperience"
                            data-slick-index={9}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/EKS_Logo2.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/EKS_Logo2.svg"
                              />
                            </div>
                            <div className="tabTitle">Eksperience</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="number-hive"
                            data-slick-index={10}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/NumberHive_Logo.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/NumberHive_Logo.svg"
                              />
                            </div>
                            <div className="tabTitle">Number Hive</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="oceanpads"
                            data-slick-index={11}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/OceanPads.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/OceanPads.svg"
                              />
                            </div>
                            <div className="tabTitle">OceanPads</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="local-locate"
                            data-slick-index={12}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/LocalLocate-Logo.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/LocalLocate-Logo.svg"
                              />
                            </div>
                            <div className="tabTitle">Local Locate</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="fortune-teller"
                            data-slick-index={13}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Fortune-Teller.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Fortune-Teller.svg"
                              />
                            </div>
                            <div className="tabTitle">Fortune Teller</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="asl-flurry"
                            data-slick-index={14}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/ASL-Flurry.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="data:image/svg+xml;nitro-empty-id=NDc3MDoxMzMy-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDkgNDkiIHdpZHRoPSI0OSIgaGVpZ2h0PSI0OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />
                            </div>
                            <div className="tabTitle">ASL Flurry</div>
                          </div>
                          <div
                            className="tabsTab slick-slide slick-cloned"
                            data-id="sub-ly"
                            data-slick-index={15}
                            id=""
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <div className="tabIcon">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Sub.ly-logo.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id=""
                                src="data:image/svg+xml;nitro-empty-id=NDc3MDoxNTIw-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDkgNDkiIHdpZHRoPSI0OSIgaGVpZ2h0PSI0OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />
                            </div>
                            <div className="tabTitle">Sub.ly</div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>{" "}
                    <div className="nextDiv">
                      {" "}
                      <img
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/nextSlide.svg"
                        className="lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        id="NDc3Mzo4OA==-1"
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/nextSlide.svg"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="dropdown cstm-ps-dropdown">
                    {" "}
                    <button className="dropbtn ">
                      Eksperience App{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={7}
                        viewBox="0 0 12 7"
                        fill="none"
                      >
                        {" "}
                        <path
                          d="M10.9981 0.326018L6.00008 5.19802L1.00208 0.326018C0.912778 0.238795 0.792903 0.189965 0.668076 0.189965C0.543249 0.189965 0.423374 0.238795 0.334076 0.326018C0.290838 0.368382 0.256488 0.418948 0.233038 0.474754C0.209588 0.53056 0.19751 0.590485 0.19751 0.651018C0.19751 0.711551 0.209588 0.771475 0.233038 0.827281C0.256488 0.883087 0.290838 0.933653 0.334076 0.976017L5.65108 6.16002C5.74445 6.25103 5.86968 6.30197 6.00008 6.30197C6.13047 6.30197 6.2557 6.25103 6.34908 6.16002L11.6661 0.977018C11.7096 0.934622 11.7442 0.883932 11.7679 0.82794C11.7915 0.771949 11.8037 0.711792 11.8037 0.651018C11.8037 0.590244 11.7915 0.530086 11.7679 0.474094C11.7442 0.418103 11.7096 0.367414 11.6661 0.325017C11.5768 0.237795 11.4569 0.188965 11.3321 0.188965C11.2072 0.188965 11.0874 0.237795 10.9981 0.325017V0.326018Z"
                          fill="#F0175E"
                        />{" "}
                      </svg>{" "}
                    </button>{" "}
                    <div id="myDropdown" className="dropdown-content">
                      {" "}
                      <a href="#" data-id="astrodate">
                        AstroDate
                      </a>
                      <a href="#" data-id="eksperience">
                        Eksperience
                      </a>
                      <a href="#" data-id="number-hive">
                        Number Hive
                      </a>
                      <a href="#" data-id="oceanpads">
                        OceanPads
                      </a>
                      <a href="#" data-id="local-locate">
                        Local Locate
                      </a>
                      <a href="#" data-id="fortune-teller">
                        Fortune Teller
                      </a>
                      <a href="#" data-id="asl-flurry">
                        ASL Flurry
                      </a>
                      <a href="#" data-id="sub-ly">
                        Sub.ly
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="tabsContent">
                    {" "}
                    <div className="tabsInnerContent active" id="astrodate">
                      <div className="backgroundImage">
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Astro-Date-cover.png"
                          className="lazyloaded"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="NDc5MDoxNzY=-1"
                          src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Astro-Date-cover.png"
                        />
                      </div>
                      <div className="portfolioAppDetails">
                        <div className="portfolioAppLeft">
                          <div className="appTitleandLogo">
                            <div className="appLogo">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/01/astro-date-2.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDc5MDozNzQ=-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/01/astro-date-2.svg"
                              />
                            </div>
                            <div className="appTitle">AstroDate</div>{" "}
                            <div className="categoriesApp">
                              {" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-10.svg"
                                  className="lazyloaded"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NDc5NDoxNDg=-1"
                                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-10.svg"
                                />{" "}
                                Dating{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                          <div className="portfolioAppDesc">
                            Where the stars align to spark cosmic connections.
                          </div>
                        </div>{" "}
                        <div className="portfolioAppRight"> </div>{" "}
                      </div>{" "}
                      <div
                        className="figmaEmbed"
                        data-iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UD2rYP0xMQQa0uueubKO6g/Figma-Widget---Prototypes?type=design&node-id=7-2236&t=CeCkQQRE4uxxuQuj-0&scaling=scale-down&page-id=7%3A2236&starting-point-node-id=17%3A38379"
                      >
                        {" "}
                        <div className="backgroundPlaceholderImage lazyloaded">
                          {" "}
                          <div className="placeholderInner">
                            {" "}
                            Ready to <span className="red">Explore?</span>{" "}
                            <div className="clickHereToOpen">
                              View App Prototype
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <iframe
                          style={{ border: "1px solid rgba(0,0,0,.1)" }}
                          width={1120}
                          height={705}
                          src=""
                          allowFullScreen=""
                          allow="autoplay; encrypted-media; gyroscope;"
                        />{" "}
                      </div>{" "}
                    </div>
                    <div className="tabsInnerContent" id="eksperience">
                      <div className="backgroundImage">
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/EKS_Cover-1.png"
                          className="nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="NDgxMToxNzY=-1"
                          src="data:image/svg+xml;nitro-empty-id=NDgxMToxNzY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ0MCAzNzIiIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjM3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                      </div>
                      <div className="portfolioAppDetails">
                        <div className="portfolioAppLeft">
                          <div className="appTitleandLogo">
                            <div className="appLogo">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/EKS-Logo-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDgxMTozNzI=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDgxMTozNzI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUzIDQwIiB3aWR0aD0iMTUzIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=="
                              />
                            </div>
                            <div className="appTitle">Eksperience</div>{" "}
                            <div className="categoriesApp">
                              {" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-9.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NDgxNToxNDc=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NDgxNToxNDc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                E-Commerce{" "}
                              </div>{" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-5.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NDgyMToxNDc=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NDgyMToxNDc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                E-Sports{" "}
                              </div>{" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-7.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NDgyNzoxNDc=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NDgyNzoxNDc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                Entertainment{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                          <div className="portfolioAppDesc">
                            Connecting celebrities and their fans
                          </div>
                        </div>{" "}
                        <div className="portfolioAppRight">
                          {" "}
                          <div className="potffolioAppGoogleRating">
                            {" "}
                            <a
                              href="https://play.google.com/store/apps/details?id=net.eksperience.myapp"
                              className="appLink "
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/googleplaylogo.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDgzNDoxMjE=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDgzNDoxMjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="ratingStar">
                                {" "}
                                Google Play{" "}
                                <div className="ratingStarText">
                                  {" "}
                                  <img
                                    alt=""
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5Stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDg0MToxMTI=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDg0MToxMTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgOSIgd2lkdGg9IjYxIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  5{" "}
                                </div>{" "}
                              </div>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="seperatorApp" />{" "}
                          <div className="portfolioAppStoreRating">
                            {" "}
                            <a
                              href="https://apps.apple.com/us/app/eksperiences/id1621713479"
                              className="appLink "
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Apple-logo.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDg0ODoxMTM=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDg0ODoxMTM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="ratingStar">
                                {" "}
                                Apple Store{" "}
                                <div className="ratingStarText">
                                  {" "}
                                  <img
                                    alt=""
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5Stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDg1NToxMTI=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDg1NToxMTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgOSIgd2lkdGg9IjYxIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  5{" "}
                                </div>{" "}
                              </div>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="seperatorApp" />{" "}
                          <div className="portfolioAppWebRating">
                            {" "}
                            <a
                              className=""
                              href="https://eksperience.net/"
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/visitwebsitewhite-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDg2MjoxMjI=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDg2MjoxMjI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTIgMTUiIHdpZHRoPSI5MiIgaGVpZ2h0PSIxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div
                        className="figmaEmbed"
                        data-iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UD2rYP0xMQQa0uueubKO6g/Figma-Widget---Prototypes?type=design&node-id=17-32116&t=hJF3CFpkdG2TeqgO-0&scaling=scale-down&page-id=7%3A2235&starting-point-node-id=17%3A32116"
                      >
                        {" "}
                        <div className="backgroundPlaceholderImage nitro-lazy">
                          {" "}
                          <div className="placeholderInner">
                            {" "}
                            Ready to <span className="red">Explore?</span>{" "}
                            <div className="clickHereToOpen">
                              View App Prototype
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <iframe
                          style={{ border: "1px solid rgba(0,0,0,.1)" }}
                          width={1120}
                          height={705}
                          src=""
                          allowFullScreen=""
                          allow="autoplay; encrypted-media; gyroscope;"
                        />{" "}
                      </div>{" "}
                    </div>
                    <div className="tabsInnerContent" id="number-hive">
                      <div className="backgroundImage">
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Number-Hive-Cover.png"
                          className="nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="NDg3NjoxODI=-1"
                          src="data:image/svg+xml;nitro-empty-id=NDg3NjoxODI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ0MCAzNzIiIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjM3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                      </div>
                      <div className="portfolioAppDetails">
                        <div className="portfolioAppLeft">
                          <div className="appTitleandLogo">
                            <div className="appLogo">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Frame-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDg3NjozNzU=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDg3NjozNzU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgMzYiIHdpZHRoPSI2NCIgaGVpZ2h0PSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />
                            </div>
                            <div className="appTitle">
                              <span style={{ color: "black" }}>
                                Number Hive
                              </span>
                            </div>{" "}
                            <div className="categoriesApp">
                              {" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-8.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NDg4MDoxNDc=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NDg4MDoxNDc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                Education{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                          <div className="portfolioAppDesc">
                            <span style={{ color: "black" }}>
                              Practice, learn and master elementary math
                            </span>
                          </div>
                        </div>{" "}
                        <div className="portfolioAppRight">
                          {" "}
                          <div className="potffolioAppGoogleRating">
                            {" "}
                            <a
                              href="https://play.google.com/store/apps/details?id=com.numberhive"
                              className="appLink darkText"
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/googleplaylogo.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDg4NzoxMjE=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDg4NzoxMjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="ratingStar">
                                {" "}
                                <span style={{ color: "black" }}>
                                  Google Play
                                </span>{" "}
                                <div className="ratingStarText">
                                  {" "}
                                  <img
                                    alt=""
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/4Stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDg5MjoxMTI=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDg5MjoxMTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgMTAiIHdpZHRoPSI2MSIgaGVpZ2h0PSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                  <span style={{ color: "black" }}>4.1</span>{" "}
                                </div>{" "}
                              </div>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="seperatorApp" />{" "}
                          <div className="portfolioAppStoreRating">
                            {" "}
                            <a
                              href="https://apps.apple.com/us/app/number-hive/id1636921061"
                              className="appLink darkText"
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Apple-logo-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDkwMToxMTU=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDkwMToxMTU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTMgMTYiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="ratingStar">
                                {" "}
                                <span style={{ color: "black" }}>
                                  Apple Store
                                </span>{" "}
                                <div className="ratingStarText">
                                  {" "}
                                  <img
                                    alt=""
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5Stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDkwODoxMTI=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDkwODoxMTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgOSIgd2lkdGg9IjYxIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  <span style={{ color: "black" }}>4.9</span>{" "}
                                </div>{" "}
                              </div>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="seperatorApp" />{" "}
                          <div className="portfolioAppWebRating">
                            {" "}
                            <a
                              className="darkText"
                              href="https://play.numberhive.org/"
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/visitwebsitewhite-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDkxNToxMjI=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDkxNToxMjI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTIgMTUiIHdpZHRoPSI5MiIgaGVpZ2h0PSIxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div
                        className="figmaEmbed"
                        data-iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UD2rYP0xMQQa0uueubKO6g/Figma-Widget---Prototypes?type=design&node-id=63-118953&t=CeCkQQRE4uxxuQuj-0&scaling=scale-down&page-id=17%3A41163&starting-point-node-id=63%3A118953"
                      >
                        {" "}
                        <div className="backgroundPlaceholderImage nitro-lazy">
                          {" "}
                          <div className="placeholderInner">
                            {" "}
                            Ready to <span className="red">Explore?</span>{" "}
                            <div className="clickHereToOpen">
                              View App Prototype
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <iframe
                          style={{ border: "1px solid rgba(0,0,0,.1)" }}
                          width={1120}
                          height={705}
                          src=""
                          allowFullScreen=""
                          allow="autoplay; encrypted-media; gyroscope;"
                        />{" "}
                      </div>{" "}
                    </div>
                    <div className="tabsInnerContent" id="oceanpads">
                      <div className="backgroundImage">
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Ocean-Pads-Cover-1.png"
                          className="nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="NDkyOToxODE=-1"
                          src="data:image/svg+xml;nitro-empty-id=NDkyOToxODE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ0MCAzNzIiIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjM3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                      </div>
                      <div className="portfolioAppDetails">
                        <div className="portfolioAppLeft">
                          <div className="appTitleandLogo">
                            <div className="appLogo">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/01/oceanPads_logo.png"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDkyOTozODE=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDkyOTozODE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQzIDIzIiB3aWR0aD0iMTQzIiBoZWlnaHQ9IjIzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=="
                              />
                            </div>
                            <div className="appTitle">OceanPads</div>{" "}
                            <div className="categoriesApp">
                              {" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-12.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NDkzMzoxNDg=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NDkzMzoxNDg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                Real-Estate{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                          <div className="portfolioAppDesc">
                            The best place to find an apartment or condo to Rent
                            or Buy in Miami.
                          </div>
                        </div>{" "}
                        <div className="portfolioAppRight">
                          {" "}
                          <div className="portfolioAppWebRating">
                            {" "}
                            <a
                              className=""
                              href="https://www.oceanpads.com/"
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/visitwebsitewhite-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDk0MToxMjI=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDk0MToxMjI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTIgMTUiIHdpZHRoPSI5MiIgaGVpZ2h0PSIxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div
                        className="figmaEmbed"
                        data-iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UD2rYP0xMQQa0uueubKO6g/Figma-Widget---Prototypes?type=design&node-id=17-96831&t=CeCkQQRE4uxxuQuj-0&scaling=scale-down&page-id=17%3A41165&starting-point-node-id=17%3A96831"
                      >
                        {" "}
                        <div className="backgroundPlaceholderImage nitro-lazy">
                          {" "}
                          <div className="placeholderInner">
                            {" "}
                            Ready to <span className="red">Explore?</span>{" "}
                            <div className="clickHereToOpen">
                              View App Prototype
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <iframe
                          style={{ border: "1px solid rgba(0,0,0,.1)" }}
                          width={1120}
                          height={705}
                          src=""
                          allowFullScreen=""
                          allow="autoplay; encrypted-media; gyroscope;"
                        />{" "}
                      </div>{" "}
                    </div>
                    <div className="tabsInnerContent" id="local-locate">
                      <div className="backgroundImage">
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Local-Locate-cover.png"
                          className="nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="NDk1NToxODQ=-1"
                          src="data:image/svg+xml;nitro-empty-id=NDk1NToxODQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ0MCAzNzIiIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjM3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                      </div>
                      <div className="portfolioAppDetails">
                        <div className="portfolioAppLeft">
                          <div className="appTitleandLogo">
                            <div className="appLogo">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/01/Local-Locate-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDk1NTozODQ=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDk1NTozODQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTMyIDI3IiB3aWR0aD0iMTMyIiBoZWlnaHQ9IjI3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=="
                              />
                            </div>
                            <div className="appTitle">Local Locate</div>{" "}
                            <div className="categoriesApp">
                              {" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-3.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NDk1OToxNDc=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NDk1OToxNDc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                Productivity{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                          <div className="portfolioAppDesc">
                            An app that simplifies your daily commute.
                          </div>
                        </div>{" "}
                        <div className="portfolioAppRight"> </div>{" "}
                      </div>{" "}
                      <div
                        className="figmaEmbed"
                        data-iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UD2rYP0xMQQa0uueubKO6g/Figma-Widget---Prototypes?type=design&node-id=17-61909&t=CeCkQQRE4uxxuQuj-0&scaling=scale-down&page-id=7%3A2237&starting-point-node-id=17%3A61909"
                      >
                        {" "}
                        <div className="backgroundPlaceholderImage nitro-lazy">
                          {" "}
                          <div className="placeholderInner">
                            {" "}
                            Ready to <span className="red">Explore?</span>{" "}
                            <div className="clickHereToOpen">
                              View App Prototype
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <iframe
                          style={{ border: "1px solid rgba(0,0,0,.1)" }}
                          width={1120}
                          height={705}
                          src=""
                          allowFullScreen=""
                          allow="autoplay; encrypted-media; gyroscope;"
                        />{" "}
                      </div>{" "}
                    </div>
                    <div className="tabsInnerContent" id="fortune-teller">
                      <div className="backgroundImage">
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/FortuneTeller-Cover.png"
                          className="nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="NDk3NjoxODc=-1"
                          src="data:image/svg+xml;nitro-empty-id=NDk3NjoxODc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ0MCAzNzIiIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjM3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                      </div>
                      <div className="portfolioAppDetails">
                        <div className="portfolioAppLeft">
                          <div className="appTitleandLogo">
                            <div className="appLogo">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/fortuneteller_logo_black_square-removebg-preview-1-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDk3Njo0MjU=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDk3Njo0MjU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTAgMzYiIHdpZHRoPSI5MCIgaGVpZ2h0PSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />
                            </div>
                            <div className="appTitle">Fortune Teller</div>{" "}
                            <div className="categoriesApp">
                              {" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-7.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NDk4MDoxNDc=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NDk4MDoxNDc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                Entertainment{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                          <div className="portfolioAppDesc">
                            Get your fortune and mood read
                          </div>
                        </div>{" "}
                        <div className="portfolioAppRight">
                          {" "}
                          <div className="potffolioAppGoogleRating">
                            {" "}
                            <a
                              href="https://play.google.com/store/apps/details?id=com.fullmoon.thefortuneteller.app&pli=1"
                              className="appLink "
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/googleplaylogo.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NDk4NzoxMjE=-1"
                                src="data:image/svg+xml;nitro-empty-id=NDk4NzoxMjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="ratingStar">
                                {" "}
                                Google Play{" "}
                                <div className="ratingStarText">
                                  {" "}
                                  <img
                                    alt=""
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/4Stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NDk5MjoxMTI=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NDk5MjoxMTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgMTAiIHdpZHRoPSI2MSIgaGVpZ2h0PSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                  4{" "}
                                </div>{" "}
                              </div>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="seperatorApp" />{" "}
                          <div className="portfolioAppStoreRating">
                            {" "}
                            <a
                              href="https://apps.apple.com/us/app/the-fortune-teller-tentacula/id6443819234"
                              className="appLink "
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Apple-logo.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NTAwMToxMTM=-1"
                                src="data:image/svg+xml;nitro-empty-id=NTAwMToxMTM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="ratingStar">
                                {" "}
                                Apple Store{" "}
                                <div className="ratingStarText">
                                  {" "}
                                  <img
                                    alt=""
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5Stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NTAwODoxMTI=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NTAwODoxMTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgOSIgd2lkdGg9IjYxIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  5{" "}
                                </div>{" "}
                              </div>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div
                        className="figmaEmbed"
                        data-iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UD2rYP0xMQQa0uueubKO6g/Figma-Widget---Prototypes?type=design&node-id=17-80150&t=CeCkQQRE4uxxuQuj-0&scaling=scale-down&page-id=8%3A2238&starting-point-node-id=17%3A79355"
                      >
                        {" "}
                        <div className="backgroundPlaceholderImage nitro-lazy">
                          {" "}
                          <div className="placeholderInner">
                            {" "}
                            Ready to <span className="red">Explore?</span>{" "}
                            <div className="clickHereToOpen">
                              View App Prototype
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <iframe
                          style={{ border: "1px solid rgba(0,0,0,.1)" }}
                          width={1120}
                          height={705}
                          src=""
                          allowFullScreen=""
                          allow="autoplay; encrypted-media; gyroscope;"
                        />{" "}
                      </div>{" "}
                    </div>
                    <div className="tabsInnerContent" id="asl-flurry">
                      <div className="backgroundImage">
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/ASL-cover.png"
                          className="nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="NTAyNDoxNzM=-1"
                          src="data:image/svg+xml;nitro-empty-id=NTAyNDoxNzM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ0MCAzNzIiIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjM3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                      </div>
                      <div className="portfolioAppDetails">
                        <div className="portfolioAppLeft">
                          <div className="appTitleandLogo">
                            <div className="appLogo">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/APP-LOGO.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NTAyNDozNjc=-1"
                                src="data:image/svg+xml;nitro-empty-id=NTAyNDozNjc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzYgNTIiIHdpZHRoPSI3NiIgaGVpZ2h0PSI1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />
                            </div>
                            <div className="appTitle">ASL Flurry</div>{" "}
                            <div className="categoriesApp">
                              {" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-8.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NTAyODoxNDc=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NTAyODoxNDc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                Education{" "}
                              </div>{" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-1.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NTAzNDoxNDc=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NTAzNDoxNDc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                Games{" "}
                              </div>{" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-14.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NTA0MDoxNDg=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NTA0MDoxNDg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                Wordpress{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                          <div className="portfolioAppDesc">
                            Learn, practice and advance your sign language
                          </div>
                        </div>{" "}
                        <div className="portfolioAppRight">
                          {" "}
                          <div className="potffolioAppGoogleRating">
                            {" "}
                            <a
                              href="https://play.google.com/store/apps/details?id=com.aslflurry.app"
                              className="appLink "
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/googleplaylogo.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NTA0NzoxMjE=-1"
                                src="data:image/svg+xml;nitro-empty-id=NTA0NzoxMjE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="ratingStar">
                                {" "}
                                Google Play{" "}
                                <div className="ratingStarText">
                                  {" "}
                                  <img
                                    alt=""
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/4Stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NTA1MjoxMTI=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NTA1MjoxMTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgMTAiIHdpZHRoPSI2MSIgaGVpZ2h0PSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                  />{" "}
                                  4{" "}
                                </div>{" "}
                              </div>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="seperatorApp" />{" "}
                          <div className="portfolioAppStoreRating">
                            {" "}
                            <a
                              href="https://apps.apple.com/us/app/asl-flurry/id1659464785"
                              className="appLink "
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Apple-logo.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NTA2MToxMTM=-1"
                                src="data:image/svg+xml;nitro-empty-id=NTA2MToxMTM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="ratingStar">
                                {" "}
                                Apple Store{" "}
                                <div className="ratingStarText">
                                  {" "}
                                  <img
                                    alt=""
                                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/5Stars.svg"
                                    className="nitro-lazy"
                                    decoding="async"
                                    nitro-lazy-empty=""
                                    id="NTA2ODoxMTI=-1"
                                    src="data:image/svg+xml;nitro-empty-id=NTA2ODoxMTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgOSIgd2lkdGg9IjYxIiBoZWlnaHQ9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                  />{" "}
                                  5{" "}
                                </div>{" "}
                              </div>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="seperatorApp" />{" "}
                          <div className="portfolioAppWebRating">
                            {" "}
                            <a
                              className=""
                              href="https://aslflurry.com/"
                              target="_blank"
                            >
                              {" "}
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/visitwebsitewhite-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NTA3NToxMjI=-1"
                                src="data:image/svg+xml;nitro-empty-id=NTA3NToxMjI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTIgMTUiIHdpZHRoPSI5MiIgaGVpZ2h0PSIxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div
                        className="figmaEmbed"
                        data-iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UD2rYP0xMQQa0uueubKO6g/Figma-Widget---Prototypes?type=design&node-id=17-89515&t=CeCkQQRE4uxxuQuj-0&scaling=scale-down&page-id=17%3A41164&starting-point-node-id=17%3A88516"
                      >
                        {" "}
                        <div className="backgroundPlaceholderImage nitro-lazy">
                          {" "}
                          <div className="placeholderInner">
                            {" "}
                            Ready to <span className="red">Explore?</span>{" "}
                            <div className="clickHereToOpen">
                              View App Prototype
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <iframe
                          style={{ border: "1px solid rgba(0,0,0,.1)" }}
                          width={1120}
                          height={705}
                          src=""
                          allowFullScreen=""
                          allow="autoplay; encrypted-media; gyroscope;"
                        />{" "}
                      </div>{" "}
                    </div>
                    <div className="tabsInnerContent" id="sub-ly">
                      <div className="backgroundImage">
                        <img
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Sub.ly-cover.png"
                          className="nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          id="NTA4OToxNzI=-1"
                          src="data:image/svg+xml;nitro-empty-id=NTA4OToxNzI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ0MCAzNzIiIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjM3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                      </div>
                      <div className="portfolioAppDetails">
                        <div className="portfolioAppLeft">
                          <div className="appTitleandLogo">
                            <div className="appLogo">
                              <img
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/01/Subly-1.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="NTA4OTozNjU=-1"
                                src="data:image/svg+xml;nitro-empty-id=NTA4OTozNjU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTYgMzAiIHdpZHRoPSI5NiIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />
                            </div>
                            <div className="appTitle">Sub.ly</div>{" "}
                            <div className="categoriesApp">
                              {" "}
                              <div className="categoryName">
                                {" "}
                                <img
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Mask-group-3.svg"
                                  className="nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  id="NTA5MzoxNDc=-1"
                                  src="data:image/svg+xml;nitro-empty-id=NTA5MzoxNDc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />{" "}
                                Productivity{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                          <div className="portfolioAppDesc">
                            Subscriptions &amp; Account Manager
                          </div>
                        </div>{" "}
                        <div className="portfolioAppRight"> </div>{" "}
                      </div>{" "}
                      <div
                        className="figmaEmbed"
                        data-iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UD2rYP0xMQQa0uueubKO6g/Figma-Widget---Prototypes?type=design&node-id=66-147054&t=CeCkQQRE4uxxuQuj-0&scaling=scale-down&page-id=8%3A2239&starting-point-node-id=66%3A146980&show-proto-sidebar=1"
                      >
                        {" "}
                        <div className="backgroundPlaceholderImage nitro-lazy">
                          {" "}
                          <div className="placeholderInner">
                            {" "}
                            Ready to <span className="red">Explore?</span>{" "}
                            <div className="clickHereToOpen">
                              View App Prototype
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <iframe
                          style={{ border: "1px solid rgba(0,0,0,.1)" }}
                          width={1120}
                          height={705}
                          src=""
                          allowFullScreen=""
                          allow="autoplay; encrypted-media; gyroscope;"
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <template data-nitro-marker-id="2839594fe94d6e8999485285744049a9-1" />{" "}
              </div>
            </div>
          </div>
        </section>

        <section id="section-220-22" className="ct-section lazyloaded">
          <div className="ct-section-inner-wrap">
            <div id="div_block-221-22" className="ct-div-block">
              <div id="div_block-222-22" className="ct-div-block">
                <h4 id="headline-226-22" className="ct-headline h2 black">
                  {" "}
                  Exploring Our App Development Services? <br />
                  <br />
                  <span id="span-227-22" className="ct-span">
                    Share Your Project Details!
                  </span>
                </h4>
                <div id="div_block-231-22" className="ct-div-block">
                  <img
                    id="image-232-22"
                    alt="Vector-60"
                    srcSet=""
                    sizes="(max-width: 27px) 100vw, 27px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Vector.svg"
                  />
                  <div
                    id="text_block-234-22"
                    className="ct-text-block h6 pink semibold"
                  >
                    We respond promptly, typically within 30 minutes!
                  </div>
                </div>
                <div id="div_block-236-22" className="ct-div-block">
                  <div id="div_block-241-22" className="ct-div-block">
                    <img
                      id="image-266-22"
                      alt="Tick-4"
                      srcSet=""
                      sizes="(max-width: 14px) 100vw, 14px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/%E2%9C%94%EF%B8%8F.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/%E2%9C%94%EF%B8%8F.svg"
                    />
                    <div
                      id="text_block-244-22"
                      className="ct-text-block small black medium"
                    >
                      &nbsp; We’ll hop on a call and hear out your idea,
                      protected by our NDA.
                    </div>
                  </div>
                  <div id="div_block-246-22" className="ct-div-block">
                    <img
                      id="image-268-22"
                      alt="Tick-4"
                      srcSet=""
                      sizes="(max-width: 14px) 100vw, 14px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/%E2%9C%94%EF%B8%8F.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/%E2%9C%94%EF%B8%8F.svg"
                    />
                    <div
                      id="text_block-248-22"
                      className="ct-text-block small black medium"
                    >
                      &nbsp; We’ll provide a free quote + our thoughts on the
                      best approach for you.
                    </div>
                  </div>
                  <div id="div_block-249-22" className="ct-div-block">
                    <img
                      id="image-271-22"
                      alt="Tick-4"
                      srcSet=""
                      sizes="(max-width: 14px) 100vw, 14px"
                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/%E2%9C%94%EF%B8%8F.svg"
                      className="ct-image lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/%E2%9C%94%EF%B8%8F.svg"
                    />
                    <div
                      id="text_block-251-22"
                      className="ct-text-block small black medium"
                    >
                      &nbsp; Even if we don’t work together, feel free to
                      consider us a free technical
                      <br />
                      &nbsp; resource to bounce your thoughts/questions off of.
                    </div>
                  </div>
                </div>
                <div id="text_block-255-22" className="ct-text-block small">
                  Alternatively, contact us via phone{" "}
                  <a
                    id="span-256-22"
                    className="ct-link-text pink bold"
                    href="tel:+1%20310%20388%206435"
                    target="_self"
                  >
                    +1 310 388 6435
                  </a>{" "}
                  or email{" "}
                  <a
                    id="span-261-22"
                    className="ct-link-text bold pink"
                    href="mailto:team@appmakersla.com"
                    target="_self"
                  >
                    team@appmakersla.com
                  </a>
                  .
                </div>
              </div>
              <div id="div_block-223-22" className="ct-div-block">
                <div id="shortcode-972-22" className="ct-shortcode">
                  <div id="cstm_form_ac" className="_form_7 cstm-form-classa">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "@import url(https://fonts.bunny.net/css?family=ibm-plex-sans:400,600);",
                      }}
                    />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n#_form_67D0C74586F7D_{font-size:14px;line-height:1.6;font-family:arial, helvetica, sans-serif;margin:0}#_form_67D0C74586F7D_ *{outline:0}._form_hide{display:none;visibility:hidden}._form_show{display:block;visibility:visible}#_form_67D0C74586F7D_._form-top{top:0}#_form_67D0C74586F7D_._form-bottom{bottom:0}#_form_67D0C74586F7D_._form-left{left:0}#_form_67D0C74586F7D_._form-right{right:0}#_form_67D0C74586F7D_ input[type="text"],#_form_67D0C74586F7D_ input[type="tel"],#_form_67D0C74586F7D_ input[type="date"],#_form_67D0C74586F7D_ textarea{padding:6px;height:auto;border:#979797 1px solid;border-radius:4px;color:#000000 !important;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#_form_67D0C74586F7D_ textarea{resize:none}#_form_67D0C74586F7D_ ._submit{-webkit-appearance:none;cursor:pointer;font-family:arial, sans-serif;font-size:14px;text-align:center;background:#004CFF !important;border:0 !important;-moz-border-radius:4px !important;-webkit-border-radius:4px !important;border-radius:4px !important;color:#FFFFFF !important;padding:10px !important}#_form_67D0C74586F7D_ ._submit:disabled{cursor:not-allowed;opacity:0.4}#_form_67D0C74586F7D_ ._submit.processing{position:relative}#_form_67D0C74586F7D_ ._submit.processing::before{content:"";width:1em;height:1em;position:absolute;z-index:1;top:50%;left:50%;border:double 3px transparent;border-radius:50%;background-image:linear-gradient(#004CFF, #004CFF), conic-gradient(#004CFF, #FFFFFF);background-origin:border-box;background-clip:content-box, border-box;animation:1200ms ease 0s infinite normal none running _spin}#_form_67D0C74586F7D_ ._submit.processing::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background:#004CFF !important;border:0 !important;-moz-border-radius:4px !important;-webkit-border-radius:4px !important;border-radius:4px !important;color:#FFFFFF !important;padding:10px !important}@keyframes _spin{0%{transform:translate(-50%, -50%) rotate(90deg)}100%{transform:translate(-50%, -50%) rotate(450deg)}}#_form_67D0C74586F7D_ ._close-icon{cursor:pointer;background-image:url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");background-repeat:no-repeat;background-size:14.2px 14.2px;position:absolute;display:block;top:11px;right:9px;overflow:hidden;width:16.2px;height:16.2px}#_form_67D0C74586F7D_ ._close-icon:before{position:relative}#_form_67D0C74586F7D_ ._form-body{margin-bottom:30px}#_form_67D0C74586F7D_ ._form-image-left{width:150px;float:left}#_form_67D0C74586F7D_ ._form-content-right{margin-left:164px}#_form_67D0C74586F7D_ ._form-branding{color:#fff;font-size:10px;clear:both;text-align:left;margin-top:30px;font-weight:100}#_form_67D0C74586F7D_ ._form-branding ._logo{display:block;width:130px;height:14px;margin-top:6px;background-image:url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");background-size:130px auto;background-repeat:no-repeat}#_form_67D0C74586F7D_ .form-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}#_form_67D0C74586F7D_ ._form-label,#_form_67D0C74586F7D_ ._form_element ._form-label{font-weight:bold;margin-bottom:5px;display:block}#_form_67D0C74586F7D_._dark ._form-branding{color:#333}#_form_67D0C74586F7D_._dark ._form-branding ._logo{background-image:url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png")}#_form_67D0C74586F7D_ ._form_element{position:relative;margin-bottom:10px;font-size:0;max-width:100%}#_form_67D0C74586F7D_ ._form_element *{font-size:14px}#_form_67D0C74586F7D_ ._form_element._clear{clear:both;width:100%;float:none}#_form_67D0C74586F7D_ ._form_element._clear:after{clear:left}#_form_67D0C74586F7D_ ._form_element input[type="text"],#_form_67D0C74586F7D_ ._form_element input[type="date"],#_form_67D0C74586F7D_ ._form_element select,#_form_67D0C74586F7D_ ._form_element textarea:not(.g-recaptcha-response){display:block;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit}#_form_67D0C74586F7D_ ._field-wrapper{position:relative}#_form_67D0C74586F7D_ ._inline-style{float:left}#_form_67D0C74586F7D_ ._inline-style input[type="text"]{width:150px}#_form_67D0C74586F7D_ ._inline-style:not(._clear)+._inline-style:not(._clear){margin-left:20px}#_form_67D0C74586F7D_ ._form_element img._form-image{max-width:100%}#_form_67D0C74586F7D_ ._form_element ._form-fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0}#_form_67D0C74586F7D_ ._clear-element{clear:left}#_form_67D0C74586F7D_ ._full_width{width:100%}#_form_67D0C74586F7D_ ._form_full_field{display:block;width:100%;margin-bottom:10px}#_form_67D0C74586F7D_ input[type="text"]._has_error,#_form_67D0C74586F7D_ textarea._has_error{border:#F37C7B 1px solid}#_form_67D0C74586F7D_ input[type="checkbox"]._has_error{outline:#F37C7B 1px solid}#_form_67D0C74586F7D_ ._show_be_error{float:left}#_form_67D0C74586F7D_ ._error{display:block;position:absolute;font-size:14px;z-index:10000001}#_form_67D0C74586F7D_ ._error._above{padding-bottom:4px;bottom:39px;right:0}#_form_67D0C74586F7D_ ._error._below{padding-top:8px;top:100%;right:0}#_form_67D0C74586F7D_ ._error._above ._error-arrow{bottom:-4px;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFDDDD}#_form_67D0C74586F7D_ ._error._below ._error-arrow{top:0;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFDDDD}#_form_67D0C74586F7D_ ._error-inner{padding:12px 12px 12px 36px;background-color:#FFDDDD;background-image:url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z\' fill=\'%23CA0000\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;font-size:14px;font-family:arial, sans-serif;font-weight:600;line-height:16px;color:#000;text-align:center;text-decoration:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;box-shadow:0px 1px 4px rgba(31, 33, 41, 0.298295)}@media only screen and (max-width:319px){#_form_67D0C74586F7D_ ._error-inner{padding:7px 7px 7px 25px;font-size:12px;line-height:12px;background-position:4px center;max-width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}#_form_67D0C74586F7D_ ._error-inner._form_error{margin-bottom:5px;text-align:left}#_form_67D0C74586F7D_ ._button-wrapper ._error-inner._form_error{position:static}#_form_67D0C74586F7D_ ._error-inner._no_arrow{margin-bottom:10px}#_form_67D0C74586F7D_ ._error-arrow{position:absolute;width:0;height:0}#_form_67D0C74586F7D_ ._error-html{margin-bottom:10px}.pika-single{z-index:10000001 !important}#_form_67D0C74586F7D_ input[type="text"].datetime_date{width:69%;display:inline}#_form_67D0C74586F7D_ select.datetime_time{width:29%;display:inline;height:32px}#_form_67D0C74586F7D_ input[type="date"].datetime_date{width:69%;display:inline-flex}#_form_67D0C74586F7D_ input[type="time"].datetime_time{width:29%;display:inline-flex}#_form_67D0C74586F7D_ .inline-form-content{max-width:510px}@media (min-width:320px) and (max-width:667px){::-webkit-scrollbar{display:none}#_form_67D0C74586F7D_{margin:0;width:100%;min-width:100%;max-width:100%;box-sizing:border-box}#_form_67D0C74586F7D_ *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:1em}#_form_67D0C74586F7D_ ._form-content{margin:0;width:100%}#_form_67D0C74586F7D_ ._form-inner{display:block;min-width:100%}#_form_67D0C74586F7D_ ._form-title,#_form_67D0C74586F7D_ ._inline-style{margin-top:0;margin-right:0;margin-left:0}#_form_67D0C74586F7D_ ._form-title{font-size:1.2em}#_form_67D0C74586F7D_ ._form_element{margin:0 0 20px;padding:0;width:100%}#_form_67D0C74586F7D_ ._form-element,#_form_67D0C74586F7D_ ._inline-style,#_form_67D0C74586F7D_ input[type="text"],#_form_67D0C74586F7D_ label,#_form_67D0C74586F7D_ p,#_form_67D0C74586F7D_ textarea:not(.g-recaptcha-response){float:none;display:block;width:100%}#_form_67D0C74586F7D_ ._row._checkbox-radio label{display:inline}#_form_67D0C74586F7D_ ._row,#_form_67D0C74586F7D_ p,#_form_67D0C74586F7D_ label{margin-bottom:0.7em;width:100%}#_form_67D0C74586F7D_ ._row input[type="checkbox"],#_form_67D0C74586F7D_ ._row input[type="radio"]{margin:0 !important;vertical-align:middle !important}#_form_67D0C74586F7D_ ._row input[type="checkbox"]+span label{display:inline}#_form_67D0C74586F7D_ ._row span label{margin:0 !important;width:initial !important;vertical-align:middle !important}#_form_67D0C74586F7D_ ._form-image{max-width:100%;height:auto !important}#_form_67D0C74586F7D_ input[type="text"]{padding-left:10px;padding-right:10px;font-size:16px;line-height:1.3em;-webkit-appearance:none}#_form_67D0C74586F7D_ input[type="radio"],#_form_67D0C74586F7D_ input[type="checkbox"]{display:inline-block;width:1.3em;height:1.3em;font-size:1em;margin:0 0.3em 0 0;vertical-align:baseline}#_form_67D0C74586F7D_ button[type="submit"]{padding:20px;font-size:1.5em}#_form_67D0C74586F7D_ ._inline-style{margin:20px 0 0 !important}#_form_67D0C74586F7D_ ._inline-style input[type="text"]{width:100%}}#_form_67D0C74586F7D_ .sms_consent_checkbox{position:relative;width:100%;display:flex;align-items:flex-start;padding:20px 0}#_form_67D0C74586F7D_ .sms_consent_checkbox input[type="checkbox"]{float:left;margin:5px 10px 10px 0}#_form_67D0C74586F7D_ .sms_consent_checkbox .sms_consent_message{display:inline;width:95%;float:left;text-align:left;margin-bottom:10px;font-size:10px;color:#7D8799}#_form_67D0C74586F7D_ .sms_consent_checkbox .sms_consent_message.sms_consent_mini{width:90%}#_form_67D0C74586F7D_ .sms_consent_checkbox ._error._above{right:auto;bottom:0}#_form_67D0C74586F7D_ .sms_consent_checkbox ._error._above ._error-arrow{right:auto;left:5px}@media (min-width:320px) and (max-width:667px){#_form_67D0C74586F7D_ .sms_consent_checkbox ._error._above{top:-30px;left:0;bottom:auto}}#_form_67D0C74586F7D_ .field-required{color:#FF0000}#_form_67D0C74586F7D_{position:relative;text-align:left;margin:25px auto 0;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:#FFFFFF !important;border:0px solid #B0B0B0 !important;max-width:500px;-moz-border-radius:0px !important;-webkit-border-radius:0px !important;border-radius:0px !important;color:#000000}#_form_67D0C74586F7D_ ._show_be_error{min-width:100%}#_form_67D0C74586F7D_._inline-form,#_form_67D0C74586F7D_._inline-form ._form-content{font-family:"IBM Plex Sans", Helvetica, sans-serif}#_form_67D0C74586F7D_._inline-form ._row span,#_form_67D0C74586F7D_._inline-form ._row label{font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:14px;font-weight:400;line-height:1.6em}#_form_67D0C74586F7D__inlineform input[type="text"],#_form_67D0C74586F7D__inlineform input[type="date"],#_form_67D0C74586F7D__inlineform input[type="tel"],#_form_67D0C74586F7D__inlineform select,#_form_67D0C74586F7D__inlineform textarea:not(.g-recaptcha-response){font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:14px;font-weight:400;font-color:#000000;line-height:1.6em}#_form_67D0C74586F7D_._inline-form ._html-code *:not(h1, h2, h3, h4, h5, h6),#_form_67D0C74586F7D_._inline-form .sms_consent_message,#_form_67D0C74586F7D_._inline-form ._form-thank-you{font-family:"IBM Plex Sans", Helvetica, sans-serif}#_form_67D0C74586F7D_._inline-form ._form-label,#_form_67D0C74586F7D_._inline-form ._form-emailidentifier,#_form_67D0C74586F7D_._inline-form ._form-checkbox-option-label{font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:14px;font-weight:700;line-height:1.6em}#_form_67D0C74586F7D_._inline-form ._submit{margin-top:12px;font-family:"IBM Plex Sans", Helvetica, sans-serif}#_form_67D0C74586F7D_._inline-form ._html-code h1,#_form_67D0C74586F7D_._inline-form ._html-code h2,#_form_67D0C74586F7D_._inline-form ._html-code h3,#_form_67D0C74586F7D_._inline-form ._html-code h4,#_form_67D0C74586F7D_._inline-form ._html-code h5,#_form_67D0C74586F7D_._inline-form ._html-code h6,#_form_67D0C74586F7D_._inline-form ._form-title{font-size:22px;line-height:normal;font-weight:600;margin-bottom:0;display:block}#_form_67D0C74586F7D_._inline-form ._form-branding{font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:13px;font-weight:100;font-style:normal;text-decoration:none}#_form_67D0C74586F7D_:before,#_form_67D0C74586F7D_:after{content:" ";display:table}#_form_67D0C74586F7D_:after{clear:both}#_form_67D0C74586F7D_._inline-style{width:auto;display:inline-block}#_form_67D0C74586F7D_._inline-style input[type="text"],#_form_67D0C74586F7D_._inline-style input[type="date"]{padding:10px 12px}#_form_67D0C74586F7D_._inline-style button._inline-style{position:relative;top:27px}#_form_67D0C74586F7D_._inline-style p{margin:0}#_form_67D0C74586F7D_._inline-style ._button-wrapper{position:relative;margin:16px 12.5px 0 20px}#_form_67D0C74586F7D_ ._form-thank-you{position:relative;left:0;right:0;text-align:center;font-size:18px}#_form_67D0C74586F7D_ ._form-pc-confirmation ._submit{margin-top:16px}@media (min-width:320px) and (max-width:667px){#_form_67D0C74586F7D_._inline-form._inline-style ._inline-style._button-wrapper{margin-top:20px !important;margin-left:0 !important}}#_form_67D0C74586F7D_ .iti{width:100%}#_form_67D0C74586F7D_ .iti.iti--allow-dropdown.iti--separate-dial-code{width:100%}#_form_67D0C74586F7D_ .iti input{width:100%;border:#979797 1px solid;border-radius:4px}#_form_67D0C74586F7D_ .iti--separate-dial-code .iti__selected-flag{background-color:#FFFFFF;border-radius:4px}#_form_67D0C74586F7D_ .iti--separate-dial-code .iti__selected-flag:hover{background-color:rgba(0, 0, 0, 0.05)}#_form_67D0C74586F7D_ .iti__country-list{border-radius:4px;margin-top:4px;min-width:460px}#_form_67D0C74586F7D_ .iti__country-list--dropup{margin-bottom:4px}#_form_67D0C74586F7D_ .phone-error-hidden{display:none}#_form_67D0C74586F7D_ .phone-error{color:#E40E49}#_form_67D0C74586F7D_ .phone-input-error{border:1px solid #E40E49 !important}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field fieldset{margin:0;margin-bottom:1.1428571429em;border:none;padding:0}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field fieldset:last-child{margin-bottom:0}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field legend{margin-bottom:1.1428571429em}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field label{display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:0.8571428571em}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field label:last-child{margin-bottom:0}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field input{margin:0;margin-right:8px}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label{display:block;font-weight:400;margin-top:-4px}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label-with-description{display:block;font-weight:700;margin-top:-4px}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-description{margin:0;font-size:0.8571428571em}#_form_67D0C74586F7D_._inline-form ._form-content ._form-list-subscriptions-field ._form-subscriptions-unsubscribe-all-description{line-height:normal;margin-top:-2px}',
                      }}
                    />
                    <form
                      method="POST"
                      action="https://appmakersla.activehosted.com/proc.php"
                      id="_form_67D0C74586F7D_"
                      className="_form _form_7 _inline-form  _dark"
                      noValidate=""
                      data-styles-version={5}
                    >
                      <input
                        type="hidden"
                        name="u"
                        defaultValue="67D0C74586F7D"
                        data-name="u"
                      />
                      <input
                        type="hidden"
                        name="f"
                        defaultValue={7}
                        data-name="f"
                      />
                      <input type="hidden" name="s" data-name="s" />
                      <input
                        type="hidden"
                        name="c"
                        defaultValue={0}
                        data-name="c"
                      />
                      <input
                        type="hidden"
                        name="m"
                        defaultValue={0}
                        data-name="m"
                      />
                      <input
                        type="hidden"
                        name="act"
                        defaultValue="sub"
                        data-name="act"
                      />
                      <input
                        type="hidden"
                        name="v"
                        defaultValue={2}
                        data-name="v"
                      />
                      <input
                        type="hidden"
                        name="or"
                        defaultValue="c018b85a3d715c6e4454604d95b01a83"
                        data-name="or"
                      />
                      <div className="_form-content ">
                        <div className="_form_element _x73656971 _full_width ">
                          <label htmlFor="fullname" className="_form-label">
                            Full Name<span className="field-required">*</span>{" "}
                          </label>
                          <div className="_field-wrapper">
                            <input
                              type="text"
                              id="fullname"
                              name="fullname"
                              placeholder="Enter Full Name"
                              required=""
                              data-name="fullname"
                            />
                          </div>
                        </div>
                        <div className="_form_element _x12424789 _full_width ">
                          <label htmlFor="email" className="_form-label">
                            Email<span className="field-required">*</span>{" "}
                          </label>
                          <div className="_field-wrapper">
                            <input
                              type="text"
                              id="email"
                              name="email"
                              placeholder="Enter Email"
                              required=""
                              data-name="email"
                            />
                          </div>
                        </div>
                        <div className="_form_element _x44619547 _full_width ">
                          <label htmlFor="phone" className="_form-label">
                            Phone Number
                            <span className="field-required">*</span>{" "}
                          </label>
                          <div className="_field-wrapper">
                            <input
                              type="text"
                              id="phone"
                              name="phone"
                              placeholder="Phone Number"
                              required=""
                              data-name="phone"
                            />
                          </div>
                        </div>
                        <div className="_form_element _x93907401 _full_width ">
                          <label htmlFor="field[4]" className="_form-label">
                            Budget<span className="field-required">*</span>{" "}
                          </label>
                          <div className="_field-wrapper">
                            <select
                              name="field[4]"
                              id="field[4]"
                              required=""
                              data-name="budget1"
                            >
                              <option selected="" />
                              <option value="20k - 25k">20k - 25k </option>
                              <option value="25k - 50k">25k - 50k </option>
                              <option value="50k - 100k">50k - 100k </option>
                              <option value="100k - 250k">100k - 250k </option>
                              <option value="250k+">250k+ </option>
                              <option value="Not Funded Yet">
                                Not Funded Yet{" "}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="_form_element _x29649288 _full_width ">
                          <fieldset className="_form-fieldset">
                            <div className="_row">
                              <legend
                                htmlFor="field[2][]"
                                className="_form-label"
                              >
                                Protect NDA{" "}
                              </legend>
                            </div>
                            <input
                              data-autofill="false"
                              type="hidden"
                              id="field[2][]"
                              name="field[2][]"
                              defaultValue="~|"
                              data-name="protect_nda"
                            />
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_2Protect Under NDA"
                                type="checkbox"
                                name="field[2][]"
                                defaultValue="Protect Under NDA"
                                data-name="protect_nda"
                              />
                              <span>
                                <label htmlFor="field_2Protect Under NDA">
                                  Protect Under NDA{" "}
                                </label>
                              </span>
                            </div>
                          </fieldset>
                        </div>
                        <div className="_form_element _x16258568 _full_width ">
                          <label htmlFor="field[3]" className="_form-label">
                            Description<span className="field-required">*</span>{" "}
                          </label>
                          <div className="_field-wrapper">
                            <textarea
                              id="field[3]"
                              name="field[3]"
                              placeholder="Enter Message"
                              required=""
                              data-name="description"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="_form_element _x88791009 _full_width ">
                          <input
                            type="hidden"
                            name="field[7]"
                            defaultValue="https://appmakersla.com/"
                            data-name="entry_url"
                          />
                        </div>
                        <div className="_form_element _x86738164 _full_width ">
                          <input
                            type="hidden"
                            name="field[6]"
                            defaultValue="https://appmakersla.com/"
                            data-name="submission_url"
                          />
                        </div>
                        <div className="_button-wrapper _full_width">
                          <button
                            id="_form_7_submit"
                            className="_submit"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                        <div className="_clear-element" />
                      </div>
                      <div
                        className="_form-thank-you"
                        style={{ display: "none" }}
                      />
                      <div className="_form-branding">
                        <div className="_marketing-by">Marketing by</div>
                        <a
                          href="https://www.activecampaign.com/?utm_medium=referral&utm_campaign=acforms"
                          className="_logo"
                        >
                          <span className="form-sr-only">ActiveCampaign</span>
                        </a>
                      </div>
                      <input
                        type="hidden"
                        id="ct_bot_detector_event_token_4710"
                        name="ct_bot_detector_event_token"
                        defaultValue="3e93f05dc7c16a0646a5e41b25b80d87245aa247b62fa1d27deb1e3779a826b4"
                      />
                      <input
                        name="action"
                        type="hidden"
                        defaultValue="cleantalk_force_ajax_check"
                      />
                      <input
                        name="ct_no_cookie_hidden_field"
                        defaultValue="_ct_no_cookie_data_eyJhcGJjdF9pZnJhbWVzX3Byb3RlY3RlZCI6W10sImN0X3NjcmVlbl9pbmZvIjoie1wiZnVsbFdpZHRoXCI6MTUxMyxcImZ1bGxIZWlnaHRcIjoxNTM3NixcInZpc2libGVXaWR0aFwiOjE0MjUsXCJ2aXNpYmxlSGVpZ2h0XCI6NDUwfSIsImN0X21vdXNlX21vdmVkIjp0cnVlLCJhcGJjdF9waXhlbF91cmwiOiJodHRwczovL21vZGVyYXRlOS5jbGVhbnRhbGsub3JnL3BpeGVsLzkyMzAzYjdhOTkxMGE0ZGQ2NzhiMWQ0MDE5NjYxNzIyLmdpZj9nY2xpZD05MjMwM2I3YTk5MTBhNGRkNjc4YjFkNDAxOTY2MTcyMiIsImFwYmN0X3BhZ2VfaGl0cyI6NDQsImN0X3BvaW50ZXJfZGF0YSI6IltbNDI2LDk0OCwxNTE5OF0sWzMyMywxMDkyLDE1MzA5XSxbNDM3LDgyNiwxNjI4OF0sWzI5NSwxMDE5LDE2MzU3XSxbMjIxLDEwNjcsMTY1MDldLFsxODMsMTA0OCwxNjkwMV0sWzQzMCw2NjEsOTAwNzJdLFsxODAsNjM3LDkwMTU3XSxbMSwzMTAsNTUxMDEzXSxbMTQ5LDM2MSw1NTExMDldLFsyNzQsNDM1LDU1MTMwMF0sWzIwMyw0MDcsNTUxNDA0XSxbMzUsMjgwLDU1MTU1Nl0sWzE1LDMwMiw1NTE3MDhdLFsxNywyODUsNTUxODUyXSxbMTgsMjc1LDU1MjAzNl0sWzEyLDI3MCw1NTIxNTZdLFs0LDQ0MSw1NzUwNzldLFs1Miw0NDMsNTc1MTEwXSxbNDQ4LDM2MSw1NzU0OTNdLFs0MTYsMzc3LDU3NTU1Nl0sWzQ0OSw1MzMsNTc1NzM1XSxbMzM4LDU3NCw1NzU4NjBdLFszMjgsNTc0LDU3NjM1N10sWzMzNCw1NzcsNTc2NDkwXSxbMzM4LDU3OSw1NzY5MTddLFszODYsNTQzLDU3NzA2Ml0sWzQ0Myw1NzUsNTc3MjA0XSxbNDQ4LDIxNSw1Nzg4MjBdLFszODUsNDExLDU3ODg2MF0sWzM0Miw4MDIsNTc5MDI4XSxbMzQ2LDgyMCw1NzkxOTZdLFszNDUsODIzLDU3OTQ2OV0sWzM0NSw4MjQsNTc5ODkyXSxbMzQ4LDgxNyw1ODI0NzFdLFsxNzQsMjUwLDU4NjU5MV0sWzIwNiwyNjksNTg2NjYyXSxbNDQ5LDY1MCw2MTI3OTldLFs0MzUsNjMxLDYxMjkwOV0sWzQzNyw2MjksNjEzMjMwXSxbNDQ4LDYyOSw2MTM1NDNdLFsyMjQsMCw2NTM4ODVdLFsyMjMsMCw2NTQxMzFdLFsxNzIsNDk2LDY1NzY2MF0sWzIyNiwxNDMsNjY2NzU3XSxbMjI0LDg0MCw3MzU5NTldLFsxODksNzMzLDczNjA2MF0sWzExNiw0NDMsNzM2MjEyXV0iLCJjdF9jaGVja2pzIjoiNWZhMWM4NjJkZmQ0ODlmZDcyYjRhMmE0NWJhMWZiYTA2MDZhZDUwNWQ0ZDRhZTM5ZTU1YjdiZTViZWMxY2VhOSIsImN0X3RpbWV6b25lIjo1LjUsImN0X2hhc19zY3JvbGxlZCI6dHJ1ZSwiY3RfY29va2llc190eXBlIjoibm9uZSIsImFwYmN0X3Zpc2libGVfZmllbGRzIjoiMCIsImN0X3BzX3RpbWVzdGFtcCI6MTc0MTc3MzM3MSwiYXBiY3RfaGVhZGxlc3MiOmZhbHNlLCJjdF9ma3BfdGltZXN0YW1wIjoxNzQxNzc0MzU5LCJjdF9jaGVja2VkX2VtYWlscyI6IjAiLCJhcGJjdF9zZXNzaW9uX2lkIjoiY3Ftd3ZpZHQiLCJhcGJjdF9zZXNzaW9uX2N1cnJlbnRfcGFnZSI6Imh0dHBzOi8vYXBwbWFrZXJzbGEuY29tLyIsImFwYmN0X3NpdGVfcmVmZXJlciI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTUwMC8iLCJhcGJjdF9wcmV2X3JlZmVyZXIiOiJodHRwczovL2FwcG1ha2Vyc2xhLmNvbS9jb250YWN0LXVzLyIsInR5cG8iOltdLCJmb3JtX2RlY29yYXRpb25fbW91c2VfZGF0YSI6W119"
                        type="hidden"
                        className="apbct_special_field ct_no_cookie_hidden_field"
                      />
                    </form>
                  </div>
                  <template data-nitro-marker-id="83b926d767a9ed3e82c910cc56deb9c5-1" />
                  <template data-nitro-marker-id="9f6c8d91886f059285fc1dba83e84451-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-981-22" className="ct-section lazyloaded">
          <div className="ct-section-inner-wrap">
            <div id="div_block-982-22" className="ct-div-block">
              <h2 id="headline-983-22" className="ct-headline h2 black">
                Book a{" "}
                <span id="span-984-22" className="ct-span">
                  Free Consultation
                </span>{" "}
                and get Customized{" "}
                <span id="span-987-22" className="ct-span">
                  Quote{" "}
                </span>
                &nbsp;from Our Expert Team
              </h2>
            </div>
            <div id="div_block-991-22" className="ct-div-block">
              <div id="code_block-992-22" className="ct-code-block">
                {" "}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/dan-aml/45min?primary_color=f0175e"
                  style={{ position: "relative", minWidth: 320, height: 700 }}
                  data-processed="true"
                >
                  <div className="calendly-spinner">
                    <div className="calendly-bounce1" />
                    <div className="calendly-bounce2" />
                    <div className="calendly-bounce3" />
                  </div>
                  <iframe
                    src="https://calendly.com/dan-aml/45min?embed_domain=appmakersla.com&embed_type=Inline&primary_color=f0175e"
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    title="Select a Date & Time - Calendly"
                  />
                </div>{" "}
                <template data-nitro-marker-id="4d9c46b5a5531247a82556044ec10f6d-1" />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="section-29-8" className=" ct-section">
          <div className="ct-section-inner-wrap">
            <div id="div_block-30-8" className="ct-div-block">
              <div id="div_block-68-8" className="ct-div-block">
                <a
                  id="link-33-8"
                  className="ct-link"
                  href="https://appmakersla.com/"
                  target="_self"
                >
                  <img
                    id="image-34-8"
                    alt="Group-46"
                    srcSet=""
                    sizes="(max-width: 149px) 100vw, 149px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-46-1.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-46-1.svg"
                  />
                </a>
                <div id="div_block-70-8" className="ct-div-block">
                  <div id="text_block-71-8" className="ct-text-block bold">
                    Locations:&nbsp;
                  </div>
                  <a
                    id="link_text-73-8"
                    className="ct-link-text"
                    href="/"
                    target="_self"
                  >
                    Los Angeles
                  </a>
                  <a
                    id="link_text-74-8"
                    className="ct-link-text"
                    href="https://appmakersla.com/san-diego/"
                  >
                    San Diego
                  </a>
                  <a
                    id="link_text-75-8"
                    className="ct-link-text"
                    href="https://appmakersla.com/new-york/"
                  >
                    New York
                  </a>
                </div>
              </div>
              <div id="div_block-69-8" className="ct-div-block">
                {" "}
                <div id="-pro-menu-36-8" className="oxy-pro-menu ">
                  <div
                    className="oxy-pro-menu-mobile-open-icon "
                    data-off-canvas-alignment=""
                  >
                    <svg id="-pro-menu-36-8-open-icon">
                      <use xlinkHref="#FontAwesomeicon-ellipsis-v" />
                    </svg>
                    Menu
                  </div>{" "}
                  <div
                    className="oxy-pro-menu-container oxy-pro-menu-dropdown-links-visible-on-mobile oxy-pro-menu-dropdown-links-toggle oxy-pro-menu-init"
                    data-aos-duration={400}
                    data-oxy-pro-menu-dropdown-animation="fade-up"
                    data-oxy-pro-menu-dropdown-animation-duration="0.4"
                    data-entire-parent-toggles-dropdown="true"
                    data-oxy-pro-menu-dropdown-links-on-mobile="toggle"
                  >
                    {" "}
                    <div className="menu-footer-menu-container">
                      <ul
                        id="menu-footer-menu"
                        className="oxy-pro-menu-list lazyloaded"
                      >
                        <li
                          id="menu-item-369"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-22 current_page_item menu-item-369"
                        >
                          <a
                            href="https://appmakersla.com/"
                            aria-current="page"
                          >
                            Home
                          </a>
                        </li>{" "}
                        <li
                          id="menu-item-370"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-370"
                        >
                          <a href="https://appmakersla.com/our-process/">
                            Our Process
                          </a>
                        </li>{" "}
                        <li
                          id="menu-item-477"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-477"
                        >
                          <a href="https://appmakersla.com/portfolio/">
                            Portfolio
                          </a>
                        </li>{" "}
                        <li
                          id="menu-item-2137"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2137"
                        >
                          <a href="https://appmakersla.com/blog/">Blog</a>
                        </li>{" "}
                        <li
                          id="menu-item-2339"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2339"
                        >
                          <a href="https://appmakersla.com/privacy-policy/">
                            Privacy Policy
                          </a>
                        </li>{" "}
                      </ul>
                    </div>{" "}
                    <div className="oxy-pro-menu-mobile-close-icon">
                      <svg id="svg--pro-menu-36-8">
                        <use xlinkHref="#FontAwesomeicon-close" />
                      </svg>
                      close
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <template data-nitro-marker-id="7730474e2b212b3882debdeb5d6884c6-1" />
              </div>
            </div>
            <div id="div_block-37-8" className="ct-div-block">
              <div id="div_block-38-8" className="ct-div-block">
                <div id="text_block-40-8" className="ct-text-block">
                  Copyright © 2025 AppMakers. All Rights Reserved.
                </div>
              </div>
              <div id="div_block-39-8" className="ct-div-block">
                <a
                  id="link-41-8"
                  className="ct-link"
                  href="https://www.instagram.com/appmakers.la/"
                  target="_blank"
                >
                  <img
                    id="image-42-8"
                    alt="instagram"
                    srcSet=""
                    sizes="(max-width: 20px) 100vw, 20px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/ri_instagram-fill.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/ri_instagram-fill.svg"
                  />
                </a>
                <a
                  id="link-47-8"
                  className="ct-link"
                  href="https://www.facebook.com/appmakersla"
                  target="_blank"
                >
                  <img
                    id="image-48-8"
                    alt="facebook"
                    srcSet=""
                    sizes="(max-width: 20px) 100vw, 20px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/bxl_facebook.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/bxl_facebook.svg"
                  />
                </a>
                <a
                  id="link-49-8"
                  className="ct-link"
                  href="https://www.linkedin.com/company/app-makers-la?trk=ppro_cprof"
                  target="_blank"
                >
                  <img
                    id="image-50-8"
                    alt="linkedin"
                    srcSet=""
                    sizes="(max-width: 20px) 100vw, 20px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/ri_linkedin-fill.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/ri_linkedin-fill.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div id="code_block-995-22" className="ct-code-block">
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
