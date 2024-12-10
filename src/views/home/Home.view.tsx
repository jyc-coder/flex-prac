"use client";
import React from "react";
import style from "./Home.view.module.scss";
import cn from "classnames/bind";
import Image from "next/image";
import Slider from "react-slick";
import "@/lib/slick/slick.css";
import "@/lib/slick/slick-theme.css";
const cx = cn.bind(style);

type HomeViewProps = {
  locale: string;
};

export default function HomeView(props: HomeViewProps) {
  const { locale } = props;

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    speed: 500,
    pauseOnHover: true,
  };

  return (
    <>
      <section className={cx("Section", "Front-slider")}>
        <div className={cx("Front-slider-items")}>
          <Slider {...settings}>
            <div className={cx("Front-slider-item")}>
              <div className={cx("Front-slider-item-wrap")}>
                <div className={cx("Desc")}>
                  <b>EVENT</b>
                  <h1>
                    11월 신규회원 할인혜택!
                    <br />
                    무료 클래스부터 얼리버드 할인까지
                  </h1>
                  <span>2022.11.1~11.30</span>
                </div>
                <div className={cx("Pic")}>
                  <Image
                    src={"/static/images/ct-front-01.png"}
                    alt={"ct-front-01"}
                    width={340}
                    height={350}
                  />
                </div>
              </div>
            </div>
            <div className={cx("Front-slider-item")}>
              <div className={cx("Front-slider-item-wrap")}>
                <div className={cx("Desc")}>
                  <b>추천 학습 로드맵</b>
                  <h1>
                    웹 퍼블리싱 입문부터 중상급까지 <br />
                    코딩웍스 퍼블리셔 취업 로드맵
                  </h1>
                </div>
                <div className={cx("Pic")}>
                  <Image
                    src={"/static/images/ct-front-02.png"}
                    alt={"ct-front-02"}
                    width={340}
                    height={350}
                  />
                </div>
              </div>
            </div>
            <div className={cx("Front-slider-item")}>
              <div className={cx("Front-slider-item-wrap")}>
                <div className={cx("Desc")}>
                  <b>A to Z</b>
                  <h1>
                    누구나 쉽게 이해하는 웹개발 <br /> 수강생에게 인정받은
                    검증된 강의들
                  </h1>
                </div>
                <div className={cx("Pic")}>
                  <Image
                    src={"/static/images/ct-front-03.png"}
                    alt={"ct-front-03"}
                    width={340}
                    height={350}
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className={cx("Section", "Category-shortcut")}>
        <div className={cx("Category-shortcut-inner")}>
          <div className={cx("Category-shortcut-items")}>
            <a href="#none" className={cx("Category-shortcut-item")}>
              <em>
                <i className="bi bi-calendar-event"></i>
              </em>
              <span>진행 중인 이벤트</span>
            </a>
            <a href="#none" className={cx("Category-shortcut-item")}>
              <em>
                <i className="bi bi-code"></i>
              </em>
              <span>개발·프로그래밍</span>
            </a>
            <a href="#none" className={cx("Category-shortcut-item")}>
              <em>
                <i className="bi bi-graph-up-arrow"></i>
              </em>
              <span>운동·건강</span>
            </a>
            <a href="#none" className={cx("Category-shortcut-item")}>
              <em>
                <i className="bi bi-spellcheck"></i>
              </em>
              <span>학문·외국어</span>
            </a>
            <a href="#none" className={cx("Category-shortcut-item")}>
              <em>
                <i className="bi bi-cup-hot"></i>
              </em>
              <span>라이프스타일</span>
            </a>
            <a href="#none" className={cx("Category-shortcut-item")}>
              <em>
                <i className="bi bi-three-dots"></i>
              </em>
              <span>더 보기</span>
            </a>
          </div>
        </div>
      </section>
      <section className={cx("Section", "Focus-class")}>
        <div className={cx("Focus-class-inner")}>
          <div className={cx("Focus-class-content")}>
            <div className={cx("Front-header")}>
              <h2>강의 그 이상의 인사이트</h2>
              <a href="#none" className={cx("Btn-view-all")}>
                전체 클래스 보기
              </a>
            </div>

            <div className={cx("Focus-class-items")}>
              <Slider
                slidesToShow={4}
                slidesToScroll={1}
                arrows={true}
                dots={false}
                variableWidth={true}
              >
                <div
                  className={cx("Focus-class-item")}
                  style={{
                    width: "280px",
                  }}
                >
                  <div className={cx("Thum")}>
                    <Image
                      src={"/static/images/beyond-class-main-cover-01.png"}
                      alt="beyond-class-main-cover-01"
                      fill
                    ></Image>
                    <em className={cx("Like")}></em>
                    <span className={cx("Badge", "Discount")}>30% 할인</span>
                  </div>
                  <div className={cx("Overview")}>
                    <h4>
                      [2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드
                    </h4>
                    <div className={cx("Class-info")}>
                      코딩웍스·80강 ·16시간 30분
                    </div>
                    <div className={cx("Class-price")}>
                      <span className={cx("Sale")}>30%</span>
                      <span className={cx("Price-prev")}>132,000원</span>
                      <span className={cx("Price-current")}> 92,400원</span>
                    </div>
                    <div className={cx("Class-review")}>
                      <span className={cx("Star")}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                      <span className={cx("Rating")}>4.9</span>
                      <span className={cx("Trainee")}>1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div className={cx("Focus-class-item")}>
                  <div className={cx("Thum")}>
                    <Image
                      src={"/static/images/beyond-class-main-cover-01.png"}
                      alt="beyond-class-main-cover-01"
                      fill
                    ></Image>
                    <em className={cx("Like")}></em>
                    <span className={cx("Badge", "Discount")}>30% 할인</span>
                  </div>
                  <div className={cx("Overview")}>
                    <h4>아름답고 탄탄한 라인을 만들어주는 필라테스 클래스</h4>
                    <div className={cx("Class-info")}>
                      코딩웍스·80강 ·16시간 30분
                    </div>
                    <div className={cx("Class-price")}>
                      <span className={cx("Sale")}>30%</span>
                      <span className={cx("Price-prev")}>132,000원</span>
                      <span className={cx("Price-current")}> 92,400원</span>
                    </div>
                    <div className={cx("Class-review")}>
                      <span className={cx("Star")}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                      <span className={cx("Rating")}>4.9</span>
                      <span className={cx("Trainee")}>1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div className={cx("Focus-class-item")}>
                  <div className={cx("Thum")}>
                    <Image
                      src={"/static/images/beyond-class-main-cover-01.png"}
                      alt="beyond-class-main-cover-01"
                      fill
                    ></Image>
                    <em className={cx("Like")}></em>
                    <span className={cx("Badge", "Discount")}>30% 할인</span>
                  </div>
                  <div className={cx("Overview")}>
                    <h4>
                      외국인과 영어로 네이티브처럼 대화하는 노하우! 영어 발음
                      배우기
                    </h4>
                    <div className={cx("Class-info")}>
                      코딩웍스·80강 ·16시간 30분
                    </div>
                    <div className={cx("Class-price")}>
                      <span className={cx("Sale")}>30%</span>
                      <span className={cx("Price-prev")}>132,000원</span>
                      <span className={cx("Price-current")}> 92,400원</span>
                    </div>
                    <div className={cx("Class-review")}>
                      <span className={cx("Star")}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                      <span className={cx("Rating")}>4.9</span>
                      <span className={cx("Trainee")}>1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div className={cx("Focus-class-item")}>
                  <div className={cx("Thum")}>
                    <Image
                      src={"/static/images/beyond-class-main-cover-01.png"}
                      alt="beyond-class-main-cover-01"
                      fill
                    ></Image>
                    <em className={cx("Like")}></em>
                    <span className={cx("Badge", "Discount")}>30% 할인</span>
                  </div>
                  <div className={cx("Overview")}>
                    <h4>내 집 마련의 꿈을 꿈이 아닌 현실로 만드는 진짜 방법</h4>
                    <div className={cx("Class-info")}>
                      코딩웍스·80강 ·16시간 30분
                    </div>
                    <div className={cx("Class-price")}>
                      <span className={cx("Sale")}>30%</span>
                      <span className={cx("Price-prev")}>132,000원</span>
                      <span className={cx("Price-current")}> 92,400원</span>
                    </div>
                    <div className={cx("Class-review")}>
                      <span className={cx("Star")}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                      <span className={cx("Rating")}>4.9</span>
                      <span className={cx("Trainee")}>1,234명 수강</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className={cx("Focus-class-content")}>
            <div className={cx("Front-header")}>
              <h2>기초부터 응용까지 한번에 OK</h2>
              <a href="#none" className={cx("Btn-view-all")}>
                전체 클래스 보기
              </a>
            </div>

            <div className={cx("Focus-class-items")}>
              <Slider
                slidesToShow={4}
                slidesToScroll={1}
                arrows={true}
                dots={false}
                variableWidth={true}
              >
                <div
                  className={cx("Focus-class-item")}
                  style={{
                    width: "280px",
                  }}
                >
                  <div className={cx("Thum")}>
                    <Image
                      src={"/static/images/beyond-class-main-cover-01.png"}
                      alt="beyond-class-main-cover-01"
                      fill
                    ></Image>
                    <em className={cx("Like")}></em>
                    <span className={cx("Badge", "Discount")}>30% 할인</span>
                  </div>
                  <div className={cx("Overview")}>
                    <h4>월 500만원 매출을 내는 블로그 운영하는 노하우</h4>
                    <div className={cx("Class-info")}>
                      코딩웍스·80강 ·16시간 30분
                    </div>
                    <div className={cx("Class-price")}>
                      <span className={cx("Sale")}>30%</span>
                      <span className={cx("Price-prev")}>132,000원</span>
                      <span className={cx("Price-current")}> 92,400원</span>
                    </div>
                    <div className={cx("Class-review")}>
                      <span className={cx("Star")}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                      <span className={cx("Rating")}>4.9</span>
                      <span className={cx("Trainee")}>1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div className={cx("Focus-class-item")}>
                  <div className={cx("Thum")}>
                    <Image
                      src={"/static/images/beyond-class-main-cover-01.png"}
                      alt="beyond-class-main-cover-01"
                      fill
                    ></Image>
                    <em className={cx("Like")}></em>
                    <span className={cx("Badge", "Discount")}>30% 할인</span>
                  </div>
                  <div className={cx("Overview")}>
                    <h4>
                      눈으로 보는 색감을 그대로, 성공하는 촬영법부터 감성
                      보정까지!
                    </h4>
                    <div className={cx("Class-info")}>
                      코딩웍스·80강 ·16시간 30분
                    </div>
                    <div className={cx("Class-price")}>
                      <span className={cx("Sale")}>30%</span>
                      <span className={cx("Price-prev")}>132,000원</span>
                      <span className={cx("Price-current")}> 92,400원</span>
                    </div>
                    <div className={cx("Class-review")}>
                      <span className={cx("Star")}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                      <span className={cx("Rating")}>4.9</span>
                      <span className={cx("Trainee")}>1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div className={cx("Focus-class-item")}>
                  <div className={cx("Thum")}>
                    <Image
                      src={"/static/images/beyond-class-main-cover-01.png"}
                      alt="beyond-class-main-cover-01"
                      fill
                    ></Image>
                    <em className={cx("Like")}></em>
                    <span className={cx("Badge", "Discount")}>30% 할인</span>
                  </div>
                  <div className={cx("Overview")}>
                    <h4>
                      퍼블리셔 취업을 위한 필수! 퍼블리셔 취업 진짜 실전
                      가이드(PDF)
                    </h4>
                    <div className={cx("Class-info")}>
                      코딩웍스·80강 ·16시간 30분
                    </div>
                    <div className={cx("Class-price")}>
                      <span className={cx("Sale")}>30%</span>
                      <span className={cx("Price-prev")}>132,000원</span>
                      <span className={cx("Price-current")}> 92,400원</span>
                    </div>
                    <div className={cx("Class-review")}>
                      <span className={cx("Star")}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                      <span className={cx("Rating")}>4.9</span>
                      <span className={cx("Trainee")}>1,234명 수강</span>
                    </div>
                  </div>
                </div>
                <div className={cx("Focus-class-item")}>
                  <div className={cx("Thum")}>
                    <Image
                      src={"/static/images/beyond-class-main-cover-01.png"}
                      alt="beyond-class-main-cover-01"
                      fill
                    ></Image>
                    <em className={cx("Like")}></em>
                    <span className={cx("Badge", "Discount")}>30% 할인</span>
                  </div>
                  <div className={cx("Overview")}>
                    <h4>
                      가장 경쟁력 있는 포트폴리오, 모바일 웹 퍼블리싱 포트폴리오
                      with Figma
                    </h4>
                    <div className={cx("Class-info")}>
                      코딩웍스·80강 ·16시간 30분
                    </div>
                    <div className={cx("Class-price")}>
                      <span className={cx("Sale")}>30%</span>
                      <span className={cx("Price-prev")}>132,000원</span>
                      <span className={cx("Price-current")}> 92,400원</span>
                    </div>
                    <div className={cx("Class-review")}>
                      <span className={cx("Star")}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                      <span className={cx("Rating")}>4.9</span>
                      <span className={cx("Trainee")}>1,234명 수강</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("Section", "Best-class")}>
        <div className={cx("Best-class-inner")}>
          <div className={cx("Best-class-content")}>
            <div className={cx("Front-header")}>
              <h2>카테고리 별 베스트 클래스</h2>
              <a href="#none">전체 클래스 보기</a>
            </div>
            <div className={cx("Best-class-wrap")}>
              <Image
                src={"/static/images/banner-invitation.png"}
                alt="banner-invitation"
                width={370}
                height={370}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  console.log("hi");
                }}
              />

              <div className={cx("Best-class-items-outer")}>
                <div className={cx("Best-class-items")}>
                  <div className={cx("Best-class-item")}>
                    <div className={cx("Thum")}>
                      <Image
                        src={"/static/images/best-class-main-cover-01.png"}
                        alt="best-class-main-cover"
                        objectFit="cover"
                        width={130}
                        height={100}
                        style={{
                          borderRadius: "3px",
                        }}
                      />
                    </div>
                    <div className={cx("Overview")}>
                      <h4>아름답고 탄탄한 라인을 만들어주는 필라테스 클래스</h4>
                      <div className={cx("Class-info")}>
                        코딩웍스·80강 ·16시간 30분
                      </div>
                      <div className={cx("Class-price")}>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                        <span className={cx("Price-current")}> 92,400원</span>
                      </div>
                    </div>
                  </div>
                  <div className={cx("Best-class-item")}>
                    <div className={cx("Thum")}>
                      <Image
                        src={"/static/images/best-class-main-cover-01.png"}
                        alt="best-class-main-cover"
                        objectFit="cover"
                        width={130}
                        height={100}
                        style={{
                          borderRadius: "3px",
                        }}
                      />
                    </div>
                    <div className={cx("Overview")}>
                      <h4>아름답고 탄탄한 라인을 만들어주는 필라테스 클래스</h4>
                      <div className={cx("Class-info")}>
                        코딩웍스·80강 ·16시간 30분
                      </div>
                      <div className={cx("Class-price")}>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                        <span className={cx("Price-current")}> 92,400원</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("Best-class-items")}>
                  <div className={cx("Best-class-item")}>
                    <div className={cx("Thum")}>
                      <Image
                        src={"/static/images/best-class-main-cover-01.png"}
                        alt="best-class-main-cover"
                        objectFit="cover"
                        width={130}
                        height={100}
                        style={{
                          borderRadius: "3px",
                        }}
                      />
                    </div>
                    <div className={cx("Overview")}>
                      <h4>아름답고 탄탄한 라인을 만들어주는 필라테스 클래스</h4>
                      <div className={cx("Class-info")}>
                        코딩웍스·80강 ·16시간 30분
                      </div>
                      <div className={cx("Class-price")}>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                        <span className={cx("Price-current")}> 92,400원</span>
                      </div>
                    </div>
                  </div>
                  <div className={cx("Best-class-item")}>
                    <div className={cx("Thum")}>
                      <Image
                        src={"/static/images/best-class-main-cover-01.png"}
                        alt="best-class-main-cover"
                        objectFit="cover"
                        width={130}
                        height={100}
                        style={{
                          borderRadius: "3px",
                        }}
                      />
                    </div>
                    <div className={cx("Overview")}>
                      <h4>아름답고 탄탄한 라인을 만들어주는 필라테스 클래스</h4>
                      <div className={cx("Class-info")}>
                        코딩웍스·80강 ·16시간 30분
                      </div>
                      <div className={cx("Class-price")}>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                        <span className={cx("Price-current")}> 92,400원</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("Best-class-items")}>
                  <div className={cx("Best-class-item")}>
                    <div className={cx("Thum")}>
                      <Image
                        src={"/static/images/best-class-main-cover-01.png"}
                        alt="best-class-main-cover"
                        objectFit="cover"
                        width={130}
                        height={100}
                        style={{
                          borderRadius: "3px",
                        }}
                      />
                    </div>
                    <div className={cx("Overview")}>
                      <h4>아름답고 탄탄한 라인을 만들어주는 필라테스 클래스</h4>
                      <div className={cx("Class-info")}>
                        코딩웍스·80강 ·16시간 30분
                      </div>
                      <div className={cx("Class-price")}>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                        <span className={cx("Price-current")}> 92,400원</span>
                      </div>
                    </div>
                  </div>
                  <div className={cx("Best-class-item")}>
                    <div className={cx("Thum")}>
                      <Image
                        src={"/static/images/best-class-main-cover-01.png"}
                        alt="best-class-main-cover"
                        objectFit="cover"
                        width={130}
                        height={100}
                        style={{
                          borderRadius: "3px",
                        }}
                      />
                    </div>
                    <div className={cx("Overview")}>
                      <h4>아름답고 탄탄한 라인을 만들어주는 필라테스 클래스</h4>
                      <div className={cx("Class-info")}>
                        코딩웍스·80강 ·16시간 30분
                      </div>
                      <div className={cx("Class-price")}>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                        <span className={cx("Price-current")}> 92,400원</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("Section", "Early-bird")}>
        <div className={cx("Early-bird-inner")}>
          <div className={cx("Early-bird-content")}>
            <div className={cx("Countdown-wrap")}>
              <span className={cx("Early-bird-info")}>
                조기인원 마감시 이벤트가 종료됩니다.
              </span>
            </div>
            <div className={cx("Early-bird-banner")}>
              <div className={cx("Banner-about")}>
                <h1>
                  얼리버드~ 왔어요
                  <span>얼리버드 선착순 할인 이벤트, 신규강의 30% 할인</span>
                </h1>
                <h2 className={cx("Hashtag")}>#빅찬스 #세일 #30%</h2>
              </div>
              <div className={cx("Banner-thum")}>
                <Image
                  src={"/static/images/banner-early-bird-01.png"}
                  alt="banner-early-bird"
                  objectFit="cover"
                  width={350}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("Section", "Blog")}>
        <div className={cx("Blog-inner")}>
          <div className={cx("Blog-content")}>
            <div className={cx("Front-header")}>
              <h2>Beyond Insight, 블로그 읽어보기</h2>
              <a href="#none" className={cx("Btn-view-all")}>
                전체 보기
              </a>
            </div>
            <div className={cx("Blog-items")}>
              <div className={cx("Blog-item")}>
                <Image
                  src={"/static/images/blog-cover-01.png"}
                  alt="blog-cover"
                  objectFit="cover"
                  width={375}
                  height={225}
                  style={{
                    borderRadius: "5px",
                  }}
                  className={cx("Thum")}
                />

                <div className={cx("Desc")}>
                  <span className={cx("Blog-sort")}>Web Publishing</span>
                  <div className={cx("Blog-outline")}>
                    <h4>
                      퍼블리싱의 모든 것! 인라인요소, 블록요소, 인라인블록
                    </h4>
                    <p>
                      퍼블리싱의 모든 것이라고 말해도 과언이 아닌 HTML
                      인라인요소, 블록요소, 인라인블록의 특징을 보기 좋게 정리
                    </p>
                  </div>
                  <div className={cx("Blog-writer")}>
                    <Image
                      src={"/static/images/mentor-avatar-01.jpg"}
                      alt="avatar"
                      width={42}
                      height={42}
                      style={{
                        borderRadius: "50%",
                      }}
                    />

                    <div className={cx("Writer-info")}>
                      <b>비와우산</b>
                      <div className={cx("Date-comment")}>
                        <span>
                          <i className={cx("bi", "bi-calendar")}></i> May 24
                        </span>
                        <span>
                          <i className={cx("bi", "bi-chat")}></i> 4 comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("Blog-item")}>
                <Image
                  src={"/static/images/blog-cover-02.png"}
                  alt="blog-cover"
                  objectFit="cover"
                  width={375}
                  height={225}
                  style={{
                    borderRadius: "5px",
                  }}
                  className={cx("Thum")}
                />

                <div className={cx("Desc")}>
                  <span className={cx("Blog-sort")}>Web Publishing</span>
                  <div className={cx("Blog-outline")}>
                    <h4>
                      퍼블리싱의 모든 것! 인라인요소, 블록요소, 인라인블록
                    </h4>
                    <p>
                      퍼블리싱의 모든 것이라고 말해도 과언이 아닌 HTML
                      인라인요소, 블록요소, 인라인블록의 특징을 보기 좋게 정리
                    </p>
                  </div>
                  <div className={cx("Blog-writer")}>
                    <div className={cx("Writer-avatar")}>
                      <Image
                        src={"/static/images/mentor-avatar-01.jpg"}
                        alt="avatar"
                        width={42}
                        height={42}
                        style={{
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className={cx("Writer-info")}>
                      <b>비와우산</b>
                      <div className={cx("Date-comment")}>
                        <span>
                          <i className={cx("bi", "bi-calendar")}></i> May 24
                        </span>
                        <span>
                          <i className={cx("bi", "bi-chat")}></i> 4 comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("Blog-item")}>
                <Image
                  src={"/static/images/blog-cover-03.png"}
                  alt="blog-cover"
                  objectFit="cover"
                  width={375}
                  height={225}
                  style={{
                    borderRadius: "5px",
                  }}
                  className={cx("Thum")}
                />

                <div className={cx("Desc")}>
                  <span className={cx("Blog-sort")}>Web Publishing</span>
                  <div className={cx("Blog-outline")}>
                    <h4>
                      퍼블리싱의 모든 것! 인라인요소, 블록요소, 인라인블록
                    </h4>
                    <p>
                      퍼블리싱의 모든 것이라고 말해도 과언이 아닌 HTML
                      인라인요소, 블록요소, 인라인블록의 특징을 보기 좋게 정리
                    </p>
                  </div>
                  <div className={cx("Blog-writer")}>
                    <div className={cx("Writer-avatar")}>
                      <Image
                        src={"/static/images/mentor-avatar-01.jpg"}
                        alt="avatar"
                        width={42}
                        height={42}
                        style={{
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className={cx("Writer-info")}>
                      <b>비와우산</b>
                      <div className={cx("Date-comment")}>
                        <span>
                          <i className={cx("bi", "bi-calendar")}></i> May 24
                        </span>
                        <span>
                          <i className={cx("bi", "bi-chat")}></i> 4 comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("Section", "Slogan")}>
        <div className={cx("Slogan-inner")}>
          <div className={cx("Slogan-content")}>
            <h1>비욘드 인사이트 온라인 강의 플랫폼</h1>
            <span>
              <em>346,467</em>
              명의 수강생과 <em>3,215</em>개 강의가 비욘드 인사이트를 통해
              배움을 즐겁게 만들고 있습니다.
            </span>
          </div>
        </div>
      </section>
      <section className={cx("Section", "Tip-tech")}>
        <div className={cx("Tip-tech-inner")}>
          <div className={cx("Tip-tech-content")}>
            <div className={cx("Front-header")}>
              <h2>비욘트 인사이트 팁 & 테크</h2>
              <a href="#none" className={cx("Btn-view-all")}>
                전체 보기
              </a>
            </div>
            <div className={cx("Tip-tech-wrap")}>
              <div className={cx("Tip-tech-items")}>
                <div className={cx("Tip-tech-item")}>
                  <div className={cx("Tip-tech-info")}>
                    <span className={cx("Tip-tech-sort")}>필수 유틸리티</span>
                    <h3>
                      파일 관리을 위한 필수 유틸리티! 멀티 윈도우 탐색기 Q-Dir
                    </h3>
                    <p>
                      일반적인 윈도우 사용자라면 굳이 멀티 윈도우 탐색기가
                      필요는 없습니다. 필요한 파일을 열기 위해서 윈도우 탐색기
                      열고 찾아가면 됩니다. 하지만 디자이너, 퍼블리셔
                    </p>
                  </div>

                  <Image
                    src={"/static/images/tip-tech-cover-01.jpg"}
                    alt="tip-tech-cover"
                    objectFit="cover"
                    width={110}
                    height={110}
                    className={cx("Thum")}
                  />
                </div>
                <div className={cx("Tip-tech-item")}>
                  <div className={cx("Tip-tech-info")}>
                    <span className={cx("Tip-tech-sort")}>
                      지식공유자 인터뷰
                    </span>
                    <h3>
                      퍼블리셔 취업·이직을 위한 코딩웍스의 프론트엔드 강의
                    </h3>
                    <p>
                      퍼블리셔 취업을 위한 진짜 가이드 전자책(PDF)으로 효율적인
                      퍼블리싱 학습방법, 좋은 퍼블리싱 강의 잘 가르치는 퍼블리싱
                      강사 고르는 안목, 신입이지만 경력자처럼 퍼블리싱하는 요령
                    </p>
                  </div>
                  <Image
                    src={"/static/images/tip-tech-cover-02.jpg"}
                    alt="tip-tech-cover"
                    objectFit="cover"
                    width={110}
                    height={110}
                    className={cx("Thum")}
                  />
                </div>
              </div>
              <div className={cx("Tip-tech-items")}>
                <div className={cx("Tip-tech-item")}>
                  <div className={cx("Tip-tech-info")}>
                    <span className={cx("Tip-tech-sort")}>작업 생산성</span>
                    <h3>비주얼 스튜디오 코드에서 빈 줄 없애기</h3>
                    <p>
                      비주얼 스튜디오 코드에서 [정규식 찾아 바꾸기]라는 방법으로
                      완벽하게 빈 줄을 해결할 수 있습니다. 제작자가 의도한 빈
                      줄은 유지하고 표현식에 따라 생긴 의도하지 않은 빈 줄은
                      삭제하는 방법입니다.
                    </p>
                  </div>
                  <Image
                    src={"/static/images/tip-tech-cover-03.jpg"}
                    alt="tip-tech-cover"
                    objectFit="cover"
                    width={110}
                    height={110}
                    className={cx("Thum")}
                  />
                </div>
                <div className={cx("Tip-tech-item")}>
                  <div className={cx("Tip-tech-info")}>
                    <span className={cx("Tip-tech-sort")}>작업 생산성</span>
                    <h3>비주얼 스튜디오 코드 캡쳐 익스텐션, CodeSnap</h3>
                    <p>
                      비주얼 스튜디오 코드 익스텐션 중에서 코드캡쳐를 하는
                      CodeSnap을 소개합니다. 일반적인 캡쳐도구를 사용하면 크
                      기를 맞추는게 번거롭습니다. 특히 코드가 화면을 위아래로
                      넘을 경우 코드캡쳐가
                    </p>
                  </div>
                  <Image
                    src={"/static/images/tip-tech-cover-04.jpg"}
                    alt="tip-tech-cover"
                    objectFit="cover"
                    width={110}
                    height={110}
                    className={cx("Thum")}
                  />
                </div>
              </div>
              <div className={cx("Tip-tech-items")}>
                <div className={cx("Tip-tech-item")}>
                  <div className={cx("Tip-tech-info")}>
                    <span className={cx("Tip-tech-sort")}>프로그램 관련</span>
                    <h3>디자인의 약점을 보완해 줄 히든카드~ 미리캔버스</h3>
                    <p>
                      퍼블리셔에게 디자인 일이 생기면 좀 부담스러운게 사실이죠.
                      한다고 해도 시간 대비 퀄리티가 마음에 들지 않는 경우가
                      많아서요. 포토샵 디자인도 잘하는 퍼블리셔라면 좋겠지만
                      여러가지를 모
                    </p>
                  </div>
                  <Image
                    src={"/static/images/tip-tech-cover-05.jpg"}
                    alt="tip-tech-cover"
                    objectFit="cover"
                    width={110}
                    height={110}
                    className={cx("Thum")}
                  />
                </div>
                <div className={cx("Tip-tech-item")}>
                  <div className={cx("Tip-tech-info")}>
                    <span className={cx("Tip-tech-sort")}>IT 소식</span>
                    <h3>2022년 6월 15일 Internet Explorer 11 공식 종료</h3>
                    <p>
                      마이크로소프트에서 2022년 6월 15일에 Explorer 11 지원
                      종료한다고 공식적으로 발표했습니다. 작년에 기사를 찾아
                      봤을 때는 공식적으로 종료를 2021년 01월 27일이라고
                      나왔는데 공식 발표가
                    </p>
                  </div>
                  <Image
                    src={"/static/images/tip-tech-cover-06.jpg"}
                    alt="tip-tech-cover"
                    objectFit="cover"
                    width={110}
                    height={110}
                    className={cx("Thum")}
                  />
                </div>
              </div>

              <a href="#none" className={cx("Btn-tip-tech")}>
                Tip & Tech 기사 더 보기
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
