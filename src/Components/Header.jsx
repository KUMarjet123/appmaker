import React from "react";
import { useState } from "react";

import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mouseMove = (yes) => {
    console.log(yes, "Open ho rha  hai");

    setIsOpen(yes);
  };
  return (
    <>
      <header
        id="_header-10-8"
        className="oxy-header-wrapper oxy-sticky-header oxy-overlay-header oxy-header"
      >
        <div id="_header_row-11-8" className="oxy-header-row">
          <div className="oxy-header-container lazyloaded">
            <div id="_header_left-12-8" className="oxy-header-left">
              <a
                id="link-15-8"
                className="ct-link"
                href="https://appmakersla.com/"
                target="_self"
              >
                <img
                  id="image-16-8"
                  alt="App Makers-4"
                  srcSet=""
                  sizes="(max-width: 148px) 100vw, 148px"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-46.svg"
                  className="ct-image lazyloaded"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Group-46.svg"
                />
              </a>
              <div id="div_block-996-8" className="ct-div-block">
                <div
                  id="div_block-997-8"
                  className="ct-div-block cstm_menu_wrapper"
                >
                  <a
                    id="link-998-8"
                    href="https://appmakersla.com/"
                    className="ct-link cstm_menu_item lazyloaded"
                  >
                    <div id="text_block-999-8" className="ct-text-block">
                      Home
                    </div>
                  </a>
                  <div
                    id="div_block-1000-8"
                    className="ct-div-block cstm_menu_item"
                  >
                    <a
                      id="div_block-1001-8"
                      className="ct-link"
                      href="https://appmakersla.com/services"
                    >
                      <div id="text_block-1002-8" className="ct-text-block">
                        Services
                      </div>
                      <img
                        id="image-1003-8"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 12px) 100vw, 12px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow.svg"
                        className="ct-image cstm_dropdown_icon lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow.svg"
                      />
                    </a>
                    <div
                      id="div_block-1004-8"
                      className="ct-div-block cstm_menu_item_dropdown_wrapper"
                    >
                      <div
                        id="div_block-1005-8"
                        className="ct-div-block cstm_menu_item_dropdown"
                      >
                        <div
                          id="div_block-1006-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab"
                        >
                          <a
                            id="link-1007-8"
                            className="ct-link active"
                            href="https://appmakersla.com/services"
                            data-tab="services"
                          >
                            <img
                              id="image-1008-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 27px) 100vw, 27px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-1.svg"
                              className="ct-image lazyloaded"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-1.svg"
                            />
                            <div
                              id="text_block-1009-8"
                              className="ct-text-block"
                            >
                              Services
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1010-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content active"
                          data-content="services"
                        >
                          <div id="div_block-1011-8" className="ct-div-block">
                            <a
                              id="link-1012-8"
                              className="ct-link"
                              href="https://appmakersla.com/services/custom-software-development/"
                            >
                              <div
                                id="div_block-1013-8"
                                className="ct-div-block"
                              >
                                <img
                                  id="image-1014-8"
                                  alt=""
                                  srcSet=""
                                  sizes="(max-width: 42px) 100vw, 42px"
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/code-circle.svg"
                                  className="ct-image lazyloaded"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/code-circle.svg"
                                />
                              </div>
                              <div
                                id="div_block-1015-8"
                                className="ct-div-block"
                              >
                                <div
                                  id="text_block-1016-8"
                                  className="ct-text-block cstm_mm_services_title"
                                >
                                  Custom Software Development
                                </div>
                                <div
                                  id="text_block-1017-8"
                                  className="ct-text-block"
                                >
                                  Elevate your business with our bespoke
                                  software development services.
                                </div>
                              </div>
                            </a>
                            <a
                              id="link-1018-8"
                              className="ct-link"
                              href="https://appmakersla.com/services/mobile-app-development/"
                            >
                              <div
                                id="div_block-1019-8"
                                className="ct-div-block"
                              >
                                <img
                                  id="image-1020-8"
                                  alt=""
                                  srcSet=""
                                  sizes="(max-width: 38px) 100vw, 38px"
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/mobile.svg"
                                  className="ct-image lazyloaded"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/mobile.svg"
                                />
                              </div>
                              <div
                                id="div_block-1021-8"
                                className="ct-div-block"
                              >
                                <div
                                  id="text_block-1022-8"
                                  className="ct-text-block cstm_mm_services_title"
                                >
                                  Mobile App Development
                                </div>
                                <div
                                  id="text_block-1023-8"
                                  className="ct-text-block"
                                >
                                  Elevate your business with our expert Mobile
                                  App Development Services.
                                </div>
                              </div>
                            </a>
                            <a
                              id="link-1024-8"
                              className="ct-link"
                              href="https://appmakersla.com/services/web-development/"
                            >
                              <div
                                id="div_block-1025-8"
                                className="ct-div-block"
                              >
                                <img
                                  id="image-1026-8"
                                  alt=""
                                  srcSet=""
                                  sizes="(max-width: 30px) 100vw, 30px"
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-1-1.svg"
                                  className="ct-image nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  src="data:image/svg+xml;nitro-empty-id=image-1026-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMjciIHdpZHRoPSIzMCIgaGVpZ2h0PSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />
                              </div>
                              <div
                                id="div_block-1027-8"
                                className="ct-div-block"
                              >
                                <div
                                  id="text_block-1028-8"
                                  className="ct-text-block cstm_mm_services_title"
                                >
                                  Web App Development
                                </div>
                                <div
                                  id="text_block-1029-8"
                                  className="ct-text-block"
                                >
                                  Explore our comprehensive web development
                                  services designed to elevate your online
                                  presence.
                                </div>
                              </div>
                            </a>
                            <a
                              id="link-1030-8"
                              className="ct-link nitro-offscreen"
                              href="https://appmakersla.com/services/artificial-intelligence/"
                            >
                              <div
                                id="div_block-1031-8"
                                className="ct-div-block"
                              >
                                <img
                                  id="image-1032-8"
                                  alt=""
                                  srcSet=""
                                  sizes="(max-width: 37px) 100vw, 37px"
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153359.svg"
                                  className="ct-image nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  src="data:image/svg+xml;nitro-empty-id=image-1032-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzcgMzgiIHdpZHRoPSIzNyIgaGVpZ2h0PSIzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />
                              </div>
                              <div
                                id="div_block-1033-8"
                                className="ct-div-block"
                              >
                                <div
                                  id="text_block-1034-8"
                                  className="ct-text-block cstm_mm_services_title"
                                >
                                  Artificial Intelligence
                                </div>
                                <div
                                  id="text_block-1035-8"
                                  className="ct-text-block"
                                >
                                  From intelligent automation to machine
                                  learning, we tailor AI solutions to meet your
                                  app's unique needs.
                                </div>
                              </div>
                            </a>
                          </div>
                          <div id="div_block-1036-8" className="ct-div-block">
                            <a
                              id="link-1037-8"
                              className="ct-link"
                              href="https://appmakersla.com/services/low-code-no-code/"
                            >
                              <div
                                id="div_block-1038-8"
                                className="ct-div-block"
                              >
                                <img
                                  id="image-1039-8"
                                  alt=""
                                  srcSet=""
                                  sizes="(max-width: 42px) 100vw, 42px"
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/code-circle-1.svg"
                                  className="ct-image lazyloaded"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/code-circle-1.svg"
                                />
                              </div>
                              <div
                                id="div_block-1040-8"
                                className="ct-div-block"
                              >
                                <div
                                  id="text_block-1041-8"
                                  className="ct-text-block cstm_mm_services_title"
                                >
                                  Low-Code/No-Code
                                </div>
                                <div
                                  id="text_block-1042-8"
                                  className="ct-text-block"
                                >
                                  Empower your organization with cutting-edge
                                  apps without the complexities of traditional
                                  coding.
                                </div>
                              </div>
                            </a>
                            <a
                              id="link-1043-8"
                              className="ct-link"
                              href="https://appmakersla.com/services/ios-development/"
                            >
                              <div
                                id="div_block-1044-8"
                                className="ct-div-block"
                              >
                                <img
                                  id="image-1045-8"
                                  alt=""
                                  srcSet=""
                                  sizes="(max-width: 30px) 100vw, 30px"
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Apple.svg"
                                  className="ct-image lazyloaded"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Apple.svg"
                                />
                              </div>
                              <div
                                id="div_block-1046-8"
                                className="ct-div-block"
                              >
                                <div
                                  id="text_block-1047-8"
                                  className="ct-text-block cstm_mm_services_title"
                                >
                                  iOS Development
                                </div>
                                <div
                                  id="text_block-1048-8"
                                  className="ct-text-block"
                                >
                                  Explore cutting-edge iOS app development with
                                  AppMakersLA.
                                </div>
                              </div>
                            </a>
                            <a
                              id="link-1049-8"
                              className="ct-link nitro-offscreen"
                              href="https://appmakersla.com/services/android-development/"
                            >
                              <div
                                id="div_block-1050-8"
                                className="ct-div-block"
                              >
                                <img
                                  id="image-1051-8"
                                  alt=""
                                  srcSet=""
                                  sizes="(max-width: 32px) 100vw, 32px"
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/noun-android-5375924-1.svg"
                                  className="ct-image nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  src="data:image/svg+xml;nitro-empty-id=image-1051-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />
                              </div>
                              <div
                                id="div_block-1052-8"
                                className="ct-div-block"
                              >
                                <div
                                  id="text_block-1053-8"
                                  className="ct-text-block cstm_mm_services_title"
                                >
                                  Android Development
                                </div>
                                <div
                                  id="text_block-1054-8"
                                  className="ct-text-block"
                                >
                                  Our team merges expertise and innovation to
                                  create bespoke solutions that redefine user
                                  experiences.
                                </div>
                              </div>
                            </a>
                            <a
                              id="link-1055-8"
                              className="ct-link nitro-offscreen"
                              href="https://appmakersla.com/services/staff-augmentation/"
                            >
                              <div
                                id="div_block-1056-8"
                                className="ct-div-block"
                              >
                                <img
                                  id="image-1057-8"
                                  alt=""
                                  srcSet=""
                                  sizes="(max-width: 39px) 100vw, 39px"
                                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/people.svg"
                                  className="ct-image nitro-lazy"
                                  decoding="async"
                                  nitro-lazy-empty=""
                                  src="data:image/svg+xml;nitro-empty-id=image-1057-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzkgMzkiIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                                />
                              </div>
                              <div
                                id="div_block-1058-8"
                                className="ct-div-block"
                              >
                                <div
                                  id="text_block-1059-8"
                                  className="ct-text-block cstm_mm_services_title"
                                >
                                  Staff Augmentation
                                </div>
                                <div
                                  id="text_block-1060-8"
                                  className="ct-text-block"
                                >
                                  Unlock the full potential of your projects by
                                  integrating our Staff Augmentation services.
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    id="link-1061-8"
                    className="ct-link cstm_menu_item"
                    href="https://appmakersla.com/our-process/"
                  >
                    <div id="text_block-1062-8" className="ct-text-block">
                      Our Process
                    </div>
                  </a>
                  <div
                    id="div_block-1063-8"
                    className="ct-div-block cstm_menu_item"
                  >
                    <a
                      id="div_block-1064-8"
                      className="ct-link"
                      href="https://appmakersla.com/portfolio"
                    >
                      <div id="text_block-1065-8" className="ct-text-block">
                        Portfolio
                      </div>
                      <img
                        id="image-1066-8"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 12px) 100vw, 12px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow.svg"
                        className="ct-image cstm_dropdown_icon lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow.svg"
                      />
                    </a>
                    <div
                      id="div_block-1067-8"
                      className="ct-div-block cstm_menu_item_dropdown_wrapper"
                    >
                      <div
                        id="div_block-1068-8"
                        className="ct-div-block cstm_menu_item_dropdown"
                      >
                        <div
                          id="div_block-1069-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab"
                        >
                          <a
                            id="link-1070-8"
                            className="ct-link active"
                            href="#"
                            target="_self"
                            data-tab="dating"
                          >
                            <img
                              id="image-1071-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152444.svg"
                              className="ct-image lazyloaded"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152444.svg"
                            />
                            <div
                              id="text_block-1072-8"
                              className="ct-text-block"
                            >
                              Dating
                            </div>
                          </a>
                          <a
                            id="link-1073-8"
                            className="ct-link"
                            href="#"
                            target="_self"
                            data-tab="E-Commerce"
                          >
                            <img
                              id="image-1074-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Online-shop.svg"
                              className="ct-image lazyloaded"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Online-shop.svg"
                            />
                            <div
                              id="text_block-1075-8"
                              className="ct-text-block"
                            >
                              E-Commerce
                            </div>
                          </a>
                          <a
                            id="link-1076-8"
                            className="ct-link"
                            href="#"
                            target="_self"
                            data-tab="Education"
                          >
                            <img
                              id="image-1077-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152443.svg"
                              className="ct-image lazyloaded"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152443.svg"
                            />
                            <div
                              id="text_block-1078-8"
                              className="ct-text-block"
                            >
                              Education
                            </div>
                          </a>
                          <a
                            id="link-1079-8"
                            className="ct-link nitro-offscreen"
                            href="#"
                            target="_self"
                            data-tab="Games"
                          >
                            <img
                              id="image-1080-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 26px) 100vw, 26px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Puzzle.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1080-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYgMjYiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1081-8"
                              className="ct-text-block"
                            >
                              Games
                            </div>
                          </a>
                          <a
                            id="link-1082-8"
                            className="ct-link nitro-offscreen"
                            href="#"
                            target="_self"
                            data-tab="Entertainment"
                          >
                            <img
                              id="image-1083-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 28px) 100vw, 28px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/solar_star-shine-outline.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1083-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1084-8"
                              className="ct-text-block"
                            >
                              Entertainment
                            </div>
                          </a>
                          <a
                            id="link-1085-8"
                            className="ct-link nitro-offscreen"
                            href="#"
                            target="_self"
                            data-tab="Fashion"
                          >
                            <img
                              id="image-1086-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Clothes-hanger.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1086-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1087-8"
                              className="ct-text-block"
                            >
                              Fashion
                            </div>
                          </a>
                          <a
                            id="link-1337-8"
                            className="ct-link nitro-offscreen"
                            href="https://appmakersla.com/portfolio"
                            target="_self"
                            data-tab="Fashion"
                          >
                            <div
                              id="text_block-1339-8"
                              className="ct-text-block"
                            >
                              All Categories
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1088-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content active"
                          data-content="dating"
                        >
                          <div id="text_block-1089-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=AstroDate"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="AstroDate"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/01/AstroDate-300x216.png"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjQwNDoxMjA=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/01/AstroDate-300x216.png"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      AstroDate
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Where the stars align to spark cosmic
                                      connections.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Krush: Curated Date Community"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Krush: Curated Date Community"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Krush-300x216.png"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjQxNToxMzY=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Krush-300x216.png"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Krush: Curated Date Community
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Referral-based curated dating community
                                      for those with high Asian standards
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Flercha"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Flercha"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Flercha-1-300x216.png"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjQyNjoxMTg=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Flercha-1-300x216.png"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Flercha
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description nitro-offscreen">
                                      Dating App for Adults Near Me
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Official: The Relationship app"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Official: The Relationship app"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Official-300x216.png"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjQzNzoxNDA=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Official-300x216.png"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Official: The Relationship app
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Plan a Date: Swipe through ideas, match
                                      with your partner, and plan your next date
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item nitro-offscreen">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Meetby: Local Dating Meet"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Meetby: Local Dating Meet"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/03/Meetby-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjQ0ODoxMzM=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjQ0ODoxMzM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Meetby: Local Dating Meet
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Dating App for Adults Near Me
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item nitro-offscreen">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Single to Saddled"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Single to Saddled"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-14-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjQ1OToxMzk=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjQ1OToxMzk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Single to Saddled
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Dating app connecting country lovers near
                                      you
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1090-8"
                            className="ct-link nitro-offscreen"
                            href="https://appmakersla.com/portfolio"
                          >
                            <div id="div_block-1091-8" className="ct-div-block">
                              <div
                                id="text_block-1092-8"
                                className="ct-text-block"
                              >
                                We’ve developed apps in 20+ more categories
                              </div>
                            </div>
                            <div id="div_block-1093-8" className="ct-div-block">
                              <div
                                id="text_block-1094-8"
                                className="ct-text-block"
                              >
                                View all Projects
                              </div>
                              <img
                                id="image-1095-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1095-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1096-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="E-Commerce"
                        >
                          <div id="text_block-1097-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Walmart"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Walmart"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Walmart-2-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjQ3MDoxMTg=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjQ3MDoxMTg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Walmart
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Easy Pickup, Grocery Delivery
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Eksperience"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Eksperience"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/EKS-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjQ4MToxMTY=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjQ4MToxMTY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Eksperience
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Connecting celebrities and their fans
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1098-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio"
                          >
                            <div id="div_block-1099-8" className="ct-div-block">
                              <div
                                id="text_block-1100-8"
                                className="ct-text-block"
                              >
                                We’ve developed apps in 20+ more categories
                              </div>
                            </div>
                            <div id="div_block-1101-8" className="ct-div-block">
                              <div
                                id="text_block-1102-8"
                                className="ct-text-block"
                              >
                                View all Projects
                              </div>
                              <img
                                id="image-1103-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1103-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1104-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="Education"
                        >
                          <div id="text_block-1105-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Number Hive"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Number Hive"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-1-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjQ5MjoxMzI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjQ5MjoxMzI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Number Hive
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Practice, learn and master elementary math
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=ClassCalc"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="ClassCalc"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-21-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjUwMzoxMzE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjUwMzoxMzE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      ClassCalc
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      A powerful graphing calculator app
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=BookClub"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="BookClub"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-9-1-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjUxNDoxMzE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjUxNDoxMzE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      BookClub
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Connecting authors, readers and book
                                      lovers
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=ASL Flurry"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="ASL Flurry"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Property-1Default-20-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjUyNToxMzI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjUyNToxMzI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      ASL Flurry
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Learn, practice and advance your sign
                                      language
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Varsity Learning"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Varsity Learning"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-6-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjUzNjoxMzc=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjUzNjoxMzc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Varsity Learning
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      An Education LMS that powers learning
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=XYZ Homework"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="XYZ Homework"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-5-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjU0NzoxMzM=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjU0NzoxMzM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      XYZ Homework
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      An Education LMS that powers learning
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=italki"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="italki"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/italki-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjU1ODoxMTQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjU1ODoxMTQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      italki
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Learn languages with native teachers
                                      flexibly.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Japanese Language Learning"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Japanese Language Learning"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Japanese-Language-Learning-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjU2OToxNTQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjU2OToxNTQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Japanese Language Learning
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Fun Japanese learning with illustrated
                                      vocabulary and quick sessions.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1106-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio"
                          >
                            <div id="div_block-1107-8" className="ct-div-block">
                              <div
                                id="text_block-1108-8"
                                className="ct-text-block"
                              >
                                We’ve developed apps in 20+ more categories
                              </div>
                            </div>
                            <div id="div_block-1109-8" className="ct-div-block">
                              <div
                                id="text_block-1110-8"
                                className="ct-text-block"
                              >
                                View all Projects
                              </div>
                              <img
                                id="image-1111-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1111-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1112-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="Games"
                        >
                          <div id="text_block-1113-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=ASL Flurry"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="ASL Flurry"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Property-1Default-20-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjU4MDoxMzI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjU4MDoxMzI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      ASL Flurry
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Learn, practice and advance your sign
                                      language
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Stick Cricket"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Stick Cricket"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-4-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjU5MToxMzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjU5MToxMzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Stick Cricket
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Play the game of Cricket with other people
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Checkers"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Checkers"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Checkers-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjYwMjoxMTg=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjYwMjoxMTg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Checkers
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Play Checkers online free with global
                                      multiplayer.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Cashmania Slots: Casino Pokies"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Cashmania Slots: Casino Pokies"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Cashmania-Slots_-Casino-Pokies-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjYxMzoxNjI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjYxMzoxNjI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Cashmania Slots: Casino Pokies
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Offers Vegas-style slots with massive
                                      bonuses.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Board Games of Two"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Board Games of Two"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Board-Games-of-Two-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjYyNDoxMzg=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjYyNDoxMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Board Games of Two
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Play multiple board games in one app.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Jackpotland: Casino Slots"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Jackpotland: Casino Slots"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Jackpotland_-Casino-Slots-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjYzNToxNTI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjYzNToxNTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Jackpotland: Casino Slots
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Experience Vegas slots with 2M coins,
                                      thrilling updates.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Trivia Puzzle Fortune Games!"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Trivia Puzzle Fortune Games!"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Trivia-Puzzle-Fortune-Games-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjY0NjoxNTc=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjY0NjoxNTc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Trivia Puzzle Fortune Games!
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Addictive fill-in quiz game with 1000+
                                      levels.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Trivia Crack 2"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Trivia Crack 2"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Trivia-Crack-3-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjY1NzoxMzA=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjY1NzoxMzA=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Trivia Crack 2
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Diverse topics, real-time challenges, team
                                      play.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1114-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio"
                          >
                            <div id="div_block-1115-8" className="ct-div-block">
                              <div
                                id="text_block-1116-8"
                                className="ct-text-block"
                              >
                                We’ve developed apps in 20+ more categories
                              </div>
                            </div>
                            <div id="div_block-1117-8" className="ct-div-block">
                              <div
                                id="text_block-1118-8"
                                className="ct-text-block"
                              >
                                View all Projects
                              </div>
                              <img
                                id="image-1119-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1119-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1120-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="Entertainment"
                        >
                          <div id="text_block-1121-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Eksperience"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Eksperience"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/EKS-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjY2ODoxMTY=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjY2ODoxMTY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Eksperience
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Connecting celebrities and their fans
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=BLIP"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="BLIP"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/11/Blip-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjY3OToxMTA=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjY3OToxMTA=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      BLIP
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      A music-making community.
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Stick Cricket"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Stick Cricket"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-4-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjY5MDoxMzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjY5MDoxMzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Stick Cricket
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Play the game of Cricket with other people
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=The Fortune Teller"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="The Fortune Teller"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-7-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjcwMToxMzk=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjcwMToxMzk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      The Fortune Teller
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Get your fortune and mood read
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Trivia King"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Trivia King"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-10-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjcxMjoxMzM=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjcxMjoxMzM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Trivia King
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Challenging the mind and entertaining the
                                      soul
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1122-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio"
                          >
                            <div id="div_block-1123-8" className="ct-div-block">
                              <div
                                id="text_block-1124-8"
                                className="ct-text-block"
                              >
                                We’ve developed apps in 20+ more categories
                              </div>
                            </div>
                            <div id="div_block-1125-8" className="ct-div-block">
                              <div
                                id="text_block-1126-8"
                                className="ct-text-block"
                              >
                                View all Projects
                              </div>
                              <img
                                id="image-1127-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1127-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1128-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="Fashion"
                        >
                          <div id="text_block-1129-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="/portfolio?portfolio=Los Angeles Apparel"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Los Angeles Apparel"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Property-1Default-15-300x216.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjcyMzoxNDE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjcyMzoxNDE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDIxNiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_title">
                                      Los Angeles Apparel
                                    </div>{" "}
                                    <div className="cstm_mm_portfolio_description">
                                      Inventory tracking software for an
                                      e-commerce store
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1130-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio"
                          >
                            <div id="div_block-1131-8" className="ct-div-block">
                              <div
                                id="text_block-1132-8"
                                className="ct-text-block"
                              >
                                We’ve developed apps in 20+ more categories
                              </div>
                            </div>
                            <div id="div_block-1133-8" className="ct-div-block">
                              <div
                                id="text_block-1134-8"
                                className="ct-text-block"
                              >
                                View all Projects
                              </div>
                              <img
                                id="image-1135-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1135-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="div_block-1136-8"
                    className="ct-div-block cstm_menu_item"
                  >
                    <a
                      id="div_block-1137-8"
                      className="ct-link"
                      href="https://appmakersla.com/faq/"
                    >
                      <div id="text_block-1138-8" className="ct-text-block">
                        FAQ
                      </div>
                      <img
                        id="image-1139-8"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 12px) 100vw, 12px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow.svg"
                        className="ct-image cstm_dropdown_icon lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow.svg"
                      />
                    </a>
                    <div
                      id="div_block-1140-8"
                      className="ct-div-block cstm_menu_item_dropdown_wrapper"
                    >
                      <div
                        id="div_block-1141-8"
                        className="ct-div-block cstm_menu_item_dropdown"
                      >
                        <div
                          id="div_block-1142-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab"
                        >
                          <div id="text_block-1143-8" className="ct-text-block">
                            {" "}
                            <a
                              className="cstm_faq_title active"
                              data-tab={1}
                              href="#"
                            >
                              {" "}
                              <img
                                alt="Logo"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153358.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="MjczMjoxMDg=-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153358.svg"
                              />{" "}
                              <div className="faq-title">
                                What services do you offer?
                              </div>{" "}
                            </a>{" "}
                            <a className="cstm_faq_title" data-tab={2} href="#">
                              {" "}
                              <img
                                alt="Logo"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153358.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="MjczNjoxMDg=-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153358.svg"
                              />{" "}
                              <div className="faq-title">
                                How much do you charge for your services?
                              </div>{" "}
                            </a>{" "}
                            <a className="cstm_faq_title" data-tab={3} href="#">
                              {" "}
                              <img
                                alt="Logo"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153358.svg"
                                className="lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="Mjc0MDoxMDg=-1"
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153358.svg"
                              />{" "}
                              <div className="faq-title">
                                Do you build websites too?
                              </div>{" "}
                            </a>{" "}
                            <a
                              className="cstm_faq_title nitro-offscreen"
                              data-tab={4}
                              href="#"
                            >
                              {" "}
                              <img
                                alt="Logo"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153358.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="Mjc0NDoxMDg=-1"
                                src="data:image/svg+xml;nitro-empty-id=Mjc0NDoxMDg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="faq-title">
                                Do your services include manual QA?
                              </div>{" "}
                            </a>{" "}
                            <a
                              className="cstm_faq_title nitro-offscreen"
                              data-tab={5}
                              href="#"
                            >
                              {" "}
                              <img
                                alt="Logo"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153358.svg"
                                className="nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                id="Mjc0ODoxMDg=-1"
                                src="data:image/svg+xml;nitro-empty-id=Mjc0ODoxMDg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                              />{" "}
                              <div className="faq-title">
                                Will you sign a confidentiality agreement?
                              </div>{" "}
                            </a>
                          </div>
                        </div>
                        <div
                          id="div_block-1144-8"
                          className="ct-div-block "
                          data-content="dating"
                        >
                          <div id="text_block-1145-8" className="ct-text-block">
                            <div className="faq-wrapper">
                              {" "}
                              <div
                                className="cstm_menu_item_dropdown_tab_content faq-item active"
                                data-content={1}
                              >
                                {" "}
                                <div className="faq-title">
                                  What services do you offer?
                                </div>{" "}
                                <div className="faq-description">
                                  We are a Los Angeles app and web development
                                  company. As such, we offer: 1) Design for
                                  Apps, Webapps and Websites 2) Mobile App
                                  Development for iPhone Apps, Android Apps and
                                  iPad Apps &amp; Web Development for Webapps.
                                  Each project includes full QA Services as well
                                  as a product manager.
                                </div>{" "}
                              </div>{" "}
                              <div
                                className="cstm_menu_item_dropdown_tab_content faq-item"
                                data-content={2}
                              >
                                {" "}
                                <div className="faq-title">
                                  How much do you charge for your services?
                                </div>{" "}
                                <div className="faq-description">
                                  Our cost varies depending on the project.
                                  Please contact us for a{" "}
                                  <a href="https://appmakersla.com/our-process/">
                                    mobile app development consulting
                                  </a>{" "}
                                  session and we will get you an estimate +
                                  analysis pronto.
                                </div>{" "}
                              </div>{" "}
                              <div
                                className="cstm_menu_item_dropdown_tab_content faq-item"
                                data-content={3}
                              >
                                {" "}
                                <div className="faq-title">
                                  Do you build websites too?
                                </div>{" "}
                                <div className="faq-description">
                                  Yes, we build both websites and webapps.
                                </div>{" "}
                              </div>{" "}
                              <div
                                className="cstm_menu_item_dropdown_tab_content faq-item"
                                data-content={4}
                              >
                                {" "}
                                <div className="faq-title">
                                  Do your services include manual QA?
                                </div>{" "}
                                <div className="faq-description">
                                  Yes, anything we built is tested thoroughly on
                                  over 20 devices. We believe that quality QA is
                                  essnential to building a quality app.
                                </div>{" "}
                              </div>{" "}
                              <div
                                className="cstm_menu_item_dropdown_tab_content faq-item"
                                data-content={5}
                              >
                                {" "}
                                <div className="faq-title">
                                  Will you sign a confidentiality agreement?
                                </div>{" "}
                                <div className="faq-description">
                                  We would be happy to sign a non-disclosure
                                  agreement in order to keep all information
                                  safe.
                                </div>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1146-8"
                            className="ct-link"
                            href="https://appmakersla.com/faq/"
                          >
                            <div id="div_block-1147-8" className="ct-div-block">
                              <div
                                id="text_block-1148-8"
                                className="ct-text-block"
                              >
                                Discover 30+ more FAQs
                              </div>
                            </div>
                            <div id="div_block-1149-8" className="ct-div-block">
                              <div
                                id="text_block-1150-8"
                                className="ct-text-block"
                              >
                                View all FAQs
                              </div>
                              <img
                                id="image-1151-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image lazyloaded"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="div_block-1152-8"
                    className="ct-div-block cstm_menu_item"
                  >
                    <a
                      id="div_block-1153-8"
                      className="ct-link"
                      href="https://appmakersla.com/blog/"
                    >
                      <div id="text_block-1154-8" className="ct-text-block">
                        Blog
                      </div>
                      <img
                        id="image-1155-8"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 12px) 100vw, 12px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow.svg"
                        className="ct-image cstm_dropdown_icon lazyloaded"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow.svg"
                      />
                    </a>
                    <div
                      id="div_block-1156-8"
                      className="ct-div-block cstm_menu_item_dropdown_wrapper"
                    >
                      <div
                        id="div_block-1157-8"
                        className="ct-div-block cstm_menu_item_dropdown"
                      >
                        <div
                          id="div_block-1158-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab"
                        >
                          <a
                            id="link-1159-8"
                            className="ct-link active"
                            href="#"
                            target="_self"
                            data-tab="App Development"
                          >
                            <img
                              id="image-1160-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 23px) 100vw, 23px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/mobile-1.svg"
                              className="ct-image lazyloaded"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/mobile-1.svg"
                            />
                            <div
                              id="text_block-1161-8"
                              className="ct-text-block"
                            >
                              App Development
                            </div>
                          </a>
                          <a
                            id="link-1162-8"
                            className="ct-link "
                            href="#"
                            target="_self"
                            data-tab="Game Development"
                          >
                            <img
                              id="image-1163-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 26px) 100vw, 26px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Group.svg"
                              className="ct-image lazyloaded"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Group.svg"
                            />
                            <div
                              id="text_block-1164-8"
                              className="ct-text-block"
                            >
                              Game Development
                            </div>
                          </a>
                          <a
                            id="link-1165-8"
                            className="ct-link "
                            href="#"
                            target="_self"
                            data-tab="Popular Apps"
                          >
                            <img
                              id="image-1166-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 28px) 100vw, 28px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153362.svg"
                              className="ct-image lazyloaded"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153362.svg"
                            />
                            <div
                              id="text_block-1167-8"
                              className="ct-text-block"
                            >
                              Popular Apps
                            </div>
                          </a>
                          <a
                            id="link-1168-8"
                            className="ct-link nitro-offscreen"
                            href="#"
                            target="_self"
                            data-tab="Social Media"
                          >
                            <img
                              id="image-1169-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 28px) 100vw, 28px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/solar_star-shine-outline-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1169-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1170-8"
                              className="ct-text-block"
                            >
                              Social Media
                            </div>
                          </a>
                          <a
                            id="link-1171-8"
                            className="ct-link nitro-offscreen"
                            href="#"
                            target="_self"
                            data-tab="Software Development"
                          >
                            <img
                              id="image-1172-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 25px) 100vw, 25px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/code-circle-2.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1172-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjUgMjYiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1173-8"
                              className="ct-text-block"
                            >
                              Software Development
                            </div>
                          </a>
                          <a
                            id="link-1174-8"
                            className="ct-link nitro-offscreen"
                            href="#"
                            target="_self"
                            data-tab="Web Development"
                          >
                            <img
                              id="image-1175-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Clothes-hanger-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1175-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1176-8"
                              className="ct-text-block"
                            >
                              Web Development
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1177-8"
                          className="ct-div-block active cstm_menu_item_dropdown_tab_content"
                          data-content="App Development"
                        >
                          <div id="text_block-1178-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/app-development/dating-app-development-cost/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Dating App Development Cost — How Much Can Full Development Cost You?"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/Dating-App-Development-Cost-300x181.jpg"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjc3NDoyMDA=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/Dating-App-Development-Cost-300x181.jpg"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Dating App Development Cost — How Much Can
                                      Full Development Cost You?
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/app-development/hard-launch-meaning/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Hard Launch Meaning Explained: How to Execute a Perfect Launch"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Hard-Launch-Meaning-300x181.jpg"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjc4NDoxODM=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Hard-Launch-Meaning-300x181.jpg"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Hard Launch Meaning Explained: How to
                                      Execute a Perfect Launch
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/app-development/kubernetes-vs-docker/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Kubernetes Vs. Docker: A Comprehensive Guide to Containerization Tools"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/image-3-2-300x181.png"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjc5NDoxODE=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/image-3-2-300x181.png"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Kubernetes Vs. Docker: A Comprehensive
                                      Guide to Containerization Tools
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/app-development/what-is-firebase-used-for/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="What is Firebase Used For - An Explanation From App Expert"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/11/what-is-firebase-used-for-300x181.png"
                                      className="lazyloaded"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjgwNDoxODU=-1"
                                      src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/11/what-is-firebase-used-for-300x181.png"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      What is Firebase Used For - An Explanation
                                      From App Expert
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item nitro-offscreen">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/app-development/growing-industries-2024-25/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Growing Industries 2024/25"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/11/image-1-1-300x182.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjgxNDoxMzc=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjgxNDoxMzc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Growing Industries 2024/25
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item nitro-offscreen">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/app-development/rapid-application-development/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Rapid Application Development (RAD) Explained: A Guide to Agile Success"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/11/Picture1-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjgyNDoxODE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjgyNDoxODE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Rapid Application Development (RAD)
                                      Explained: A Guide to Agile Success
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item nitro-offscreen">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/app-development/what-is-digital-secure/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="What Is Digital Secure? How It Safeguards Your Online Privacy"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Picture1-3-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjgzNDoxNzM=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjgzNDoxNzM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      What Is Digital Secure? How It Safeguards
                                      Your Online Privacy
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item nitro-offscreen">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/app-development/ios-app-development-trends/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="The iOS App Development Trends You Can’t Ignore | App Makers LA"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/The-2024-iOS-App-Development-Trends-You-Cant-Ignore-_-App-Makers-LA-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjg0NDoyMzQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjg0NDoyMzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      The iOS App Development Trends You Can’t
                                      Ignore | App Makers LA
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1179-8"
                            className="ct-link nitro-offscreen"
                            href="https://appmakersla.com/blog/"
                          >
                            <div id="div_block-1180-8" className="ct-div-block">
                              <div
                                id="text_block-1181-8"
                                className="ct-text-block"
                              >
                                Explore 30+ more blogs
                              </div>
                            </div>
                            <div id="div_block-1182-8" className="ct-div-block">
                              <div
                                id="text_block-1183-8"
                                className="ct-text-block"
                              >
                                View all Blogs
                              </div>
                              <img
                                id="image-1184-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1184-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1185-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="Game Development"
                        >
                          <div id="text_block-1186-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/game-development/godot-vs-unity/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Godot vs. Unity: A Developer's Guide to Choosing the Best Game Engine"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Godot-vs.-Unity_-A-Developers-Guide-to-Choosing-the-Best-Game-Engine-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjg1NDoyNDQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjg1NDoyNDQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Godot vs. Unity: A Developer's Guide to
                                      Choosing the Best Game Engine
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/game-development/how-to-make-a-mobile-game/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="From Idea to Launch: How to Make a Mobile Game"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/From-Idea-to-Launch_-How-to-Make-a-Mobile-Game-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjg2NDoxOTQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjg2NDoxOTQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      From Idea to Launch: How to Make a Mobile
                                      Game
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1187-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/"
                          >
                            <div id="div_block-1188-8" className="ct-div-block">
                              <div
                                id="text_block-1189-8"
                                className="ct-text-block"
                              >
                                Explore 30+ more blogs
                              </div>
                            </div>
                            <div id="div_block-1190-8" className="ct-div-block">
                              <div
                                id="text_block-1191-8"
                                className="ct-text-block"
                              >
                                View all Blogs
                              </div>
                              <img
                                id="image-1192-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1192-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1193-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="Popular Apps"
                        >
                          <div id="text_block-1194-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/popular-apps/apps-like-canva/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="10 Best Apps Like Canva: Alternatives for Stunning Designs (Free & Paid)"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/03/apps-like-canva-300x182.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjg3NDoxOTM=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjg3NDoxOTM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MiIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      10 Best Apps Like Canva: Alternatives for
                                      Stunning Designs (Free &amp; Paid)
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/popular-apps/apps-like-whatsapp/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Apps Like WhatsApp: Find the Right Messaging App for You"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/03/Apps-Like-WhatsApp-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjg4NDoxNzY=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjg4NDoxNzY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Apps Like WhatsApp: Find the Right
                                      Messaging App for You
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/popular-apps/apps-like-zoom/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Apps Like Zoom: Feature-Rich Video Conferencing Solutions Compared"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/03/Apps-Like-Zoom-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjg5NDoxODI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjg5NDoxODI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Apps Like Zoom: Feature-Rich Video
                                      Conferencing Solutions Compared
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/popular-apps/how-airbnb-earns-income/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="How Airbnb Earns Income: Exploring Its Monetization Tactics"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/How-Airbnb-Earns-Income-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjkwNDoxODQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjkwNDoxODQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      How Airbnb Earns Income: Exploring Its
                                      Monetization Tactics
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/popular-apps/how-linkedin-monetizes/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="How LinkedIn Monetizes: Breaking Down Its Revenue Streams"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/How-Linkedin-Monetizes-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjkxNDoxODE=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjkxNDoxODE=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      How LinkedIn Monetizes: Breaking Down Its
                                      Revenue Streams
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/popular-apps/how-pinterest-generates-profits/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="How Pinterest Generates Profits: Money-Making Formula Explained"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/How-Pinterest-Generates-Profits-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjkyNDoxOTY=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjkyNDoxOTY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      How Pinterest Generates Profits:
                                      Money-Making Formula Explained
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/popular-apps/offline-music-apps/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="No Wi-Fi, No Problem: Offline Music Apps That Keep the Party Going"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Offline-Music-Apps-1-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MjkzNDoxODg=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MjkzNDoxODg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      No Wi-Fi, No Problem: Offline Music Apps
                                      That Keep the Party Going
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/popular-apps/apps-like-tiktok/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Apps Like Tiktok: Discover the Best Alternatives for Short Video Content"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Apps-Like-Tiktok-4-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjk0NDoxOTI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjk0NDoxOTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Apps Like Tiktok: Discover the Best
                                      Alternatives for Short Video Content
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1195-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/"
                          >
                            <div id="div_block-1196-8" className="ct-div-block">
                              <div
                                id="text_block-1197-8"
                                className="ct-text-block"
                              >
                                Explore 30+ more blogs
                              </div>
                            </div>
                            <div id="div_block-1198-8" className="ct-div-block">
                              <div
                                id="text_block-1199-8"
                                className="ct-text-block"
                              >
                                View all Blogs
                              </div>
                              <img
                                id="image-1200-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1200-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1201-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="Social Media"
                        >
                          <div id="text_block-1202-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/social-media/how-snapchat-makes-money/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="How Snapchat Makes Money - Breaking Down The Business of Snaps"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/How-Snapchat-Makes-Money-Breaking-Down-The-Business-of-Snaps-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjk1NDoyMjQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjk1NDoyMjQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      How Snapchat Makes Money - Breaking Down
                                      The Business of Snaps
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1203-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/"
                          >
                            <div id="div_block-1204-8" className="ct-div-block">
                              <div
                                id="text_block-1205-8"
                                className="ct-text-block"
                              >
                                Explore 30+ more blogs
                              </div>
                            </div>
                            <div id="div_block-1206-8" className="ct-div-block">
                              <div
                                id="text_block-1207-8"
                                className="ct-text-block"
                              >
                                View all Blogs
                              </div>
                              <img
                                id="image-1208-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1208-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1209-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="Software Development"
                        >
                          <div id="text_block-1210-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/software-development/what-is-a-tech-stack/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="What is a Tech Stack? Breaking Down the Backbone of Digital Products"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/What-Is-a-Tech-Stack-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjk2NDoxOTA=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjk2NDoxOTA=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      What is a Tech Stack? Breaking Down the
                                      Backbone of Digital Products
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/software-development/cloud-migration-strategy/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Crafting a Seamless Cloud Migration Strategy"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/12/image-1-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjk3NDoxNTM=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjk3NDoxNTM=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Crafting a Seamless Cloud Migration
                                      Strategy
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/software-development/what-is-enterprise-software/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="What Is Enterprise Software - An In-Depth Guide"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/11/Picture1-4-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjk4NDoxNTk=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjk4NDoxNTk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      What Is Enterprise Software - An In-Depth
                                      Guide
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/software-development/development-models/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Development Models in Software Engineering: What You Need to Know"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Development-Models-in-Software-Engineering_-What-You-Need-to-Know-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="Mjk5NDoyMzI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=Mjk5NDoyMzI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Development Models in Software
                                      Engineering: What You Need to Know
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/software-development/api-vs-sdk/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Api Vs Sdk Explained: Tools for Seamless Software Integration"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Api-Vs-Sdk-Explained_-Tools-for-Seamless-Software-Integration-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzAwNDoyMjQ=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzAwNDoyMjQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Api Vs Sdk Explained: Tools for Seamless
                                      Software Integration
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/software-development/gitlab-vs-github/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="GitHab Vs. GitHub: Which Platform Aligns Best with Your Development Needs?"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Gitlab-Vs.-Github_-Which-Platform-Aligns-Best-with-Your-Development-Needs_-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzAxNDoyNTA=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzAxNDoyNTA=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      GitHab Vs. GitHub: Which Platform Aligns
                                      Best with Your Development Needs?
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/software-development/off-the-shelf-software-vs-custom-solutions/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Off-the-Shelf Software vs. Custom Solutions: Which is Right for Your Business?"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Off-the-Shelf-Software-vs.-Custom-Solutions_-Which-is-Right-for-Your-Business_-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzAyNDoyNTg=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzAyNDoyNTg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Off-the-Shelf Software vs. Custom
                                      Solutions: Which is Right for Your
                                      Business?
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1211-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/"
                          >
                            <div id="div_block-1212-8" className="ct-div-block">
                              <div
                                id="text_block-1213-8"
                                className="ct-text-block"
                              >
                                Explore 30+ more blogs
                              </div>
                            </div>
                            <div id="div_block-1214-8" className="ct-div-block">
                              <div
                                id="text_block-1215-8"
                                className="ct-text-block"
                              >
                                View all Blogs
                              </div>
                              <img
                                id="image-1216-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1216-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          id="div_block-1217-8"
                          className="ct-div-block cstm_menu_item_dropdown_tab_content"
                          data-content="Web Development"
                        >
                          <div id="text_block-1218-8" className="ct-text-block">
                            <div className="cstm_mm_portfolio_wrapper">
                              {" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/web-development/best-programming-language-for-web-development/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Best Programming Language for Web Development - Pros, Cons & Recommendations"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/02/Best-Programming-Language-for-Web-Development-1-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzAzNDoyMjk=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzAzNDoyMjk=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Best Programming Language for Web
                                      Development - Pros, Cons &amp;
                                      Recommendations
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/web-development/custom-wordpress-website-design/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Custom WordPress Website Design: Building a Platform That Grows With You"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Custom-WordPress-Website-Design-300x181.jpg"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzA0NDoyMDU=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzA0NDoyMDU=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Custom WordPress Website Design: Building
                                      a Platform That Grows With You
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/web-development/python-vs-java/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Python vs. Java: Which Language Should You Choose for Your Project?"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Python-vs.-Java_-Which-Language-Should-You-Choose-for-Your-Project_-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzA1NDoyMzY=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzA1NDoyMzY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Python vs. Java: Which Language Should You
                                      Choose for Your Project?
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/web-development/angular-vs-angularjs/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Angular Vs. AngularJS: Choosing the Right Framework for Your Project"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Angular-Vs.-AngularJS_-Choosing-the-Right-Framework-for-Your-Project-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzA2NDoyMzg=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzA2NDoyMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Angular Vs. AngularJS: Choosing the Right
                                      Framework for Your Project
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/web-development/modern-web-design-trends/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Modern Web Design Essentials for Your Website"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Modern-Web-Design-Essentials-for-Your-Website-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzA3NDoxOTI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzA3NDoxOTI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Modern Web Design Essentials for Your
                                      Website
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/web-development/flask-vs-django/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Flask Vs. Django: Which Python Framework Is Right for Your Next Project?"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Flask-Vs.-Django_-Which-Python-Framework-Is-Right-for-Your-Next-Project_-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzA4NDoyNDY=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzA4NDoyNDY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Flask Vs. Django: Which Python Framework
                                      Is Right for Your Next Project?
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/web-development/react-vs-node/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="React vs Node.js: A Comprehensive Guide for Web Developers"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/React-vs-Node.js_-A-Comprehensive-Guide-for-Web-Developers-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzA5NDoyMTg=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzA5NDoyMTg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      React vs Node.js: A Comprehensive Guide
                                      for Web Developers
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="cstm_mm_portfolio_item">
                                {" "}
                                <a
                                  href="https://appmakersla.com/blog/web-development/web-application-development/"
                                  className="cstm_mm_portfolio_link"
                                >
                                  {" "}
                                  <div className="cstm_mm_portfolio_image">
                                    {" "}
                                    <img
                                      alt="Web Application Development Explained: From Concept to Launch with App Makers LA"
                                      nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/optimized/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/10/Web-Application-Development-Explained_-From-Concept-to-Launch-with-App-Makers-LA-300x181.png"
                                      className="nitro-lazy"
                                      decoding="async"
                                      nitro-lazy-empty=""
                                      id="MzEwNDoyNjI=-1"
                                      src="data:image/svg+xml;nitro-empty-id=MzEwNDoyNjI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDE4MSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                    />{" "}
                                  </div>{" "}
                                  <div className="cstm_mm_portfolio_details">
                                    {" "}
                                    <div className="cstm_mm_portfolio_description cstm_mm_margin cstm_mm_blog_title">
                                      Web Application Development Explained:
                                      From Concept to Launch with App Makers LA
                                    </div>{" "}
                                  </div>{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <br />
                          </div>
                          <a
                            id="link-1219-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/"
                          >
                            <div id="div_block-1220-8" className="ct-div-block">
                              <div
                                id="text_block-1221-8"
                                className="ct-text-block"
                              >
                                Explore 30+ more blogs
                              </div>
                            </div>
                            <div id="div_block-1222-8" className="ct-div-block">
                              <div
                                id="text_block-1223-8"
                                className="ct-text-block"
                              >
                                View all Blogs
                              </div>
                              <img
                                id="image-1224-8"
                                alt=""
                                srcSet=""
                                sizes="(max-width: 6px) 100vw, 6px"
                                nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector-2.svg"
                                className="ct-image nitro-lazy"
                                decoding="async"
                                nitro-lazy-empty=""
                                src="data:image/svg+xml;nitro-empty-id=image-1224-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="div_block-1225-8"
                className="ct-div-block cstm_mbl_menu_main_wrapper"
              >
                <div id="div_block-1226-8" className="ct-div-block">
                  <div id="div_block-1227-8" className="ct-div-block">
                    <div
                      id="div_block-1228-8"
                      className="ct-div-block cstm_mbl_menu_dropdown_links"
                    >
                      <div id="div_block-1229-8" className="ct-div-block">
                        <a
                          id="link_text-1230-8"
                          className="ct-link-text"
                          href="https://appmakersla.com/"
                        >
                          Home
                        </a>
                      </div>
                      <div id="div_block-1231-8" className="ct-div-block">
                        <a
                          id="link_text-1232-8"
                          className="ct-link-text"
                          href="https://appmakersla.com/services/"
                        >
                          Services
                        </a>
                        <img
                          id="image-1233-8"
                          alt=""
                          srcSet=""
                          sizes="(max-width: 15px) 100vw, 15px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/plus.svg"
                          className="ct-image cstm_mbl_menu_dropdown_plus nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1233-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUgMTYiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <img
                          id="image-1234-8"
                          alt=""
                          srcSet=""
                          sizes="(max-width: 15px) 100vw, 15px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/minus.svg"
                          className="ct-image cstm_mbl_menu_dropdown_minus nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1234-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUgMiIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                        <div
                          id="div_block-1235-8"
                          className="ct-div-block cstm_mbl_menu_dropdown_wrapper"
                        >
                          <a
                            id="link-1236-8"
                            className="ct-link"
                            href="https://appmakersla.com/services/custom-software-development/"
                          >
                            <img
                              id="image-1237-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 20px) 100vw, 20px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/code-circle-3.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1237-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1238-8"
                              className="ct-text-block"
                            >
                              Custom Software Development
                            </div>
                            <img
                              id="image-1239-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1239-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1240-8"
                            className="ct-link"
                            href="https://appmakersla.com/services/low-code-no-code/"
                          >
                            <img
                              id="image-1241-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 20px) 100vw, 20px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/code-circle-1-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1241-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1242-8"
                              className="ct-text-block"
                            >
                              Low-Code/No-Code
                            </div>
                            <img
                              id="image-1243-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1243-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1244-8"
                            className="ct-link"
                            href="https://appmakersla.com/services/mobile-app-development/"
                          >
                            <img
                              id="image-1245-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 18px) 100vw, 18px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/mobile-2.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1245-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1246-8"
                              className="ct-text-block"
                            >
                              Mobile App Development
                            </div>
                            <img
                              id="image-1247-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1247-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1248-8"
                            className="ct-link"
                            href="https://appmakersla.com/services/ios-development/"
                          >
                            <img
                              id="image-1249-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 14px) 100vw, 14px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Apple-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1249-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTgiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1250-8"
                              className="ct-text-block"
                            >
                              iOS Development
                            </div>
                            <img
                              id="image-1251-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1251-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1252-8"
                            className="ct-link"
                            href="https://appmakersla.com/services/web-development/"
                          >
                            <img
                              id="image-1253-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 15px) 100vw, 15px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Vector.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1253-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUgMTQiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1254-8"
                              className="ct-text-block"
                            >
                              Web App Development
                            </div>
                            <img
                              id="image-1255-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1255-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1256-8"
                            className="ct-link"
                            href="https://appmakersla.com/services/android-development/"
                          >
                            <img
                              id="image-1257-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/noun-android-5375924-1-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1257-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1258-8"
                              className="ct-text-block"
                            >
                              Android Development
                            </div>
                            <img
                              id="image-1259-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1259-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1260-8"
                            className="ct-link"
                            href="https://appmakersla.com/services/artificial-intelligence/"
                          >
                            <img
                              id="image-1261-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 18px) 100vw, 18px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153359-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1261-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1262-8"
                              className="ct-text-block"
                            >
                              Artificial Intelligence
                            </div>
                            <img
                              id="image-1263-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1263-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1264-8"
                            className="ct-link"
                            href="https://appmakersla.com/services/staff-augmentation/"
                          >
                            <img
                              id="image-1265-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 19px) 100vw, 19px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/people-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1265-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1266-8"
                              className="ct-text-block"
                            >
                              Staff Augmentation
                            </div>
                            <img
                              id="image-1267-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1267-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                        </div>
                      </div>
                      <div id="div_block-1268-8" className="ct-div-block">
                        <a
                          id="link_text-1269-8"
                          className="ct-link-text"
                          href="https://appmakersla.com/our-process/"
                        >
                          Our process
                        </a>
                      </div>
                      <div id="div_block-1270-8" className="ct-div-block">
                        <a
                          id="link_text-1271-8"
                          className="ct-link-text"
                          href="https://appmakersla.com/portfolio/"
                        >
                          Portfolio
                        </a>
                        <img
                          id="image-1272-8"
                          alt=""
                          srcSet=""
                          sizes="(max-width: 15px) 100vw, 15px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/plus.svg"
                          className="ct-image cstm_mbl_menu_dropdown_plus nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1272-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUgMTYiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <img
                          id="image-1273-8"
                          alt=""
                          srcSet=""
                          sizes="(max-width: 15px) 100vw, 15px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/minus.svg"
                          className="ct-image cstm_mbl_menu_dropdown_minus nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1273-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUgMiIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                        <div
                          id="div_block-1274-8"
                          className="ct-div-block cstm_mbl_menu_dropdown_wrapper"
                        >
                          <a
                            id="link-1275-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio/?category=dating"
                          >
                            <img
                              id="image-1276-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152444-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1276-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1277-8"
                              className="ct-text-block"
                            >
                              Dating
                            </div>
                            <img
                              id="image-1278-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1278-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1279-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio/?category=e-commerce"
                          >
                            <img
                              id="image-1280-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Online-shop-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1280-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1281-8"
                              className="ct-text-block"
                            >
                              E-Commerce
                            </div>
                            <img
                              id="image-1282-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1282-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1283-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio/?category=education"
                          >
                            <img
                              id="image-1284-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261152443-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1284-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1285-8"
                              className="ct-text-block"
                            >
                              Education
                            </div>
                            <img
                              id="image-1286-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1286-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1287-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio/?category=games"
                          >
                            <img
                              id="image-1288-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 26px) 100vw, 26px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Puzzle-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1288-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYgMjYiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1289-8"
                              className="ct-text-block"
                            >
                              Games
                            </div>
                            <img
                              id="image-1290-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1290-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1291-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio/?category=entertainment"
                          >
                            <img
                              id="image-1292-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 28px) 100vw, 28px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/solar_star-shine-outline-2.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1292-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1293-8"
                              className="ct-text-block"
                            >
                              Entertainment
                            </div>
                            <img
                              id="image-1294-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1294-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1295-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio/?category=fashion"
                          >
                            <img
                              id="image-1296-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Clothes-hanger-2.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1296-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1297-8"
                              className="ct-text-block"
                            >
                              Fashion
                            </div>
                            <img
                              id="image-1298-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1298-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1340-8"
                            className="ct-link"
                            href="https://appmakersla.com/portfolio"
                          >
                            <div
                              id="text_block-1342-8"
                              className="ct-text-block"
                            >
                              {" "}
                              20+ more categories
                            </div>
                            <img
                              id="image-1343-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1343-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                        </div>
                      </div>
                      <div id="div_block-1299-8" className="ct-div-block">
                        <a
                          id="link_text-1300-8"
                          className="ct-link-text"
                          href="https://appmakersla.com/faq/"
                        >
                          FAQ
                        </a>
                      </div>
                      <div id="div_block-1301-8" className="ct-div-block">
                        <a
                          id="link_text-1302-8"
                          className="ct-link-text"
                          href="https://appmakersla.com/blog/"
                        >
                          Blog
                        </a>
                        <img
                          id="image-1303-8"
                          alt=""
                          srcSet=""
                          sizes="(max-width: 15px) 100vw, 15px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/plus.svg"
                          className="ct-image cstm_mbl_menu_dropdown_plus nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1303-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUgMTYiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                        />
                        <img
                          id="image-1304-8"
                          alt=""
                          srcSet=""
                          sizes="(max-width: 15px) 100vw, 15px"
                          nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/minus.svg"
                          className="ct-image cstm_mbl_menu_dropdown_minus nitro-lazy"
                          decoding="async"
                          nitro-lazy-empty=""
                          src="data:image/svg+xml;nitro-empty-id=image-1304-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUgMiIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                        <div
                          id="div_block-1305-8"
                          className="ct-div-block cstm_mbl_menu_dropdown_wrapper"
                        >
                          <a
                            id="link-1306-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/category/app-development/"
                          >
                            <img
                              id="image-1307-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 23px) 100vw, 23px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/mobile-1-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1307-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjMgMjQiIHdpZHRoPSIyMyIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1308-8"
                              className="ct-text-block"
                            >
                              App Development
                            </div>
                            <img
                              id="image-1309-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1309-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1310-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/category/game-development/"
                          >
                            <img
                              id="image-1311-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 26px) 100vw, 26px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Group.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1311-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYgMjYiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1312-8"
                              className="ct-text-block"
                            >
                              Game Development
                            </div>
                            <img
                              id="image-1313-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1313-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1314-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/category/popular-apps/"
                          >
                            <img
                              id="image-1315-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 28px) 100vw, 28px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Frame-1261153362-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1315-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1316-8"
                              className="ct-text-block"
                            >
                              Popular Apps
                            </div>
                            <img
                              id="image-1317-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1317-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1318-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/category/social-media/"
                          >
                            <img
                              id="image-1319-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 28px) 100vw, 28px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/solar_star-shine-outline-1-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1319-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1320-8"
                              className="ct-text-block"
                            >
                              Social Media
                            </div>
                            <img
                              id="image-1321-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1321-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1322-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/category/software-development/"
                          >
                            <img
                              id="image-1323-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 25px) 100vw, 25px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/code-circle-2-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1323-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjUgMjYiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1324-8"
                              className="ct-text-block"
                            >
                              Software Development
                            </div>
                            <img
                              id="image-1325-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1325-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                          <a
                            id="link-1326-8"
                            className="ct-link"
                            href="https://appmakersla.com/blog/category/web-development/"
                          >
                            <img
                              id="image-1327-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 24px) 100vw, 24px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Clothes-hanger-1-1.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1327-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                            <div
                              id="text_block-1328-8"
                              className="ct-text-block"
                            >
                              Web Development
                            </div>
                            <img
                              id="image-1329-8"
                              alt=""
                              srcSet=""
                              sizes="(max-width: 16px) 100vw, 16px"
                              nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/arrow-left.svg"
                              className="ct-image nitro-lazy"
                              decoding="async"
                              nitro-lazy-empty=""
                              src="data:image/svg+xml;nitro-empty-id=image-1329-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="div_block-1330-8" className="ct-div-block">
                    <a
                      id="link-1331-8"
                      className="ct-link"
                      href="https://appmakersla.com/contact-us/"
                    >
                      <div id="text_block-1332-8" className="ct-text-block">
                        Contact us
                      </div>
                    </a>
                    <a
                      id="link-1333-8"
                      className="ct-link"
                      href="tel:+1%20310%20388%206435"
                    >
                      <img
                        id="image-1334-8"
                        alt=""
                        srcSet=""
                        sizes="(max-width: 18px) 100vw, 18px"
                        nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/Call.svg"
                        className="ct-image nitro-lazy"
                        decoding="async"
                        nitro-lazy-empty=""
                        src="data:image/svg+xml;nitro-empty-id=image-1334-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                      />
                      <div id="text_block-1335-8" className="ct-text-block">
                        +1 310 388 6435
                      </div>
                    </a>
                    <div id="text_block-1336-8" className="ct-text-block">
                      We answer within 30 minutes
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="_header_center-13-8" className="oxy-header-center" />
            <div id="_header_right-14-8" className="oxy-header-right">
              <a
                id="link_button-20-8"
                className="ct-link-button btn"
                href="https://appmakersla.com/contact-us/"
              >
                Contact us
              </a>
              <a
                id="link-63-8"
                className="ct-link"
                href="https://appmakersla.com/contact-us/"
              >
                <img
                  id="image-65-8"
                  alt="sms Icon"
                  srcSet=""
                  sizes="(max-width: 24px) 100vw, 24px"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/sms.svg"
                  className="ct-image nitro-lazy"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="data:image/svg+xml;nitro-empty-id=image-65-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                />
              </a>
              <a
                id="link-66-8"
                className="ct-link"
                href="tel:+1%20310%20388%206435"
                target="_self"
              >
                <img
                  id="image-67-8"
                  alt="Call Icon"
                  srcSet=""
                  sizes="(max-width: 24px) 100vw, 24px"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/11/Call.svg"
                  className="ct-image nitro-lazy"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="data:image/svg+xml;nitro-empty-id=image-67-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                />
              </a>
              <div id="div_block-57-8" className="ct-div-block">
                <a
                  id="link-24-8"
                  className="ct-link"
                  href="tel:+1%20310%20388%206435"
                  target="_blank"
                >
                  <img
                    id="image-27-8"
                    alt="Call"
                    srcSet=""
                    sizes="(max-width: 18px) 100vw, 18px"
                    nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Call.svg"
                    className="ct-image lazyloaded"
                    decoding="async"
                    nitro-lazy-empty=""
                    src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2023/10/Call.svg"
                  />
                  <div id="text_block-28-8" className="ct-text-block">
                    <span id="span-83-8" className="ct-span">
                      +1 310 388 6435
                    </span>
                  </div>
                </a>
                <div id="text_block-58-8" className="ct-text-block">
                  We answer our phones!
                </div>
              </div>
              <div
                id="div_block-52-8"
                className="ct-div-block new_class_for_close"
              >
                <img
                  id="image-425-8"
                  alt=""
                  srcSet=""
                  sizes="(max-width: 37px) 100vw, 37px"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2025/01/hamburder.svg"
                  className="ct-image cstm_mbl_open_menu nitro-lazy"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="data:image/svg+xml;nitro-empty-id=image-425-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzcgMzIiIHdpZHRoPSIzNyIgaGVpZ2h0PSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                />
                <img
                  id="image-426-8"
                  alt=""
                  srcSet=""
                  sizes="(max-width: 37px) 100vw, 37px"
                  nitro-lazy-src="https://cdn-ilchebh.nitrocdn.com/tddUaqtYoWmRfDTHlxtxPMGaFYrSAorD/assets/images/source/rev-c1c5b98/appmakersla.com/wp-content/uploads/2024/02/Frame-1261152687.svg"
                  className="ct-image cstm_mbl_close_menu nitro-lazy"
                  decoding="async"
                  nitro-lazy-empty=""
                  src="data:image/svg+xml;nitro-empty-id=image-426-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzcgMzIiIHdpZHRoPSIzNyIgaGVpZ2h0PSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4="
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
