"use client";
import React from "react";
import style from "./Category.view.module.scss";
import cn from "classnames/bind";
import Image from "next/image";
import Slider from "react-slick";
import "@/lib/slick/slick.css";
import "@/lib/slick/slick-theme.css";
const cx = cn.bind(style);

type CategoryViewProps = {
  locale: string;
};

export default function CategoryView(props: CategoryViewProps) {
  const { locale } = props;
  return (
    <>
      <section className={cx("Section", "Category-class")}>
        <div className={cx("Category-class-inner")}>
          <div className={cx("Category-class-main")}>
            <h2>개발·프로그래밍</h2>
            <Image
              src={"/static/images/ct-category-main-01.jpg"}
              alt="ct-category-main"
              objectFit="cover"
              style={{
                borderRadius: "10px",
              }}
              fill
            />
          </div>
          <div className={cx("Category-class-detail")}>
            <h3>세부 카테고리</h3>
            <div className={cx("Category-shortcut")}>
              <button className={cx("Btn-shortcut", "Active")}>전체</button>
              <button className={cx("Btn-shortcut")}>웹 개발</button>
              <button className={cx("Btn-shortcut")}>프론트엔드</button>
              <button className={cx("Btn-shortcut")}>백엔드</button>
              <button className={cx("Btn-shortcut")}>모바일 앱 개발</button>
              <button className={cx("Btn-shortcut")}>데이터베이스</button>
              <button className={cx("Btn-shortcut")}>게임 개발</button>
            </div>
          </div>
          <div className={cx("Category-class-sort")}>
            <select name="" id="">
              <option value="">인기순</option>
              <option value="">평점순</option>
            </select>
            <button className={cx("Btn-sort")}>얼리버드 할인</button>
            <button className={cx("Btn-event")}>이벤트 할인</button>
          </div>
          <div className={cx("Category-class-wrap")}>
            <div className={cx("Focus-class-items")}>
              <Slider
                slidesToShow={4}
                slidesToScroll={1}
                arrows={false}
                dots={false}
                variableWidth={true}
                infinite={false}
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
            <div className={cx("Focus-class-items")}>
              <Slider
                slidesToShow={4}
                slidesToScroll={1}
                arrows={false}
                dots={false}
                variableWidth={true}
                infinite={false}
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
            <div className={cx("Focus-class-items")}>
              <Slider
                slidesToShow={4}
                slidesToScroll={1}
                arrows={false}
                dots={false}
                variableWidth={true}
                infinite={false}
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
            <div className={cx("Focus-class-items")}>
              <Slider
                slidesToShow={4}
                slidesToScroll={1}
                arrows={false}
                dots={false}
                variableWidth={true}
                infinite={false}
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
            <div className={cx("Focus-class-items")}>
              <Slider
                slidesToShow={4}
                slidesToScroll={1}
                arrows={false}
                dots={false}
                variableWidth={true}
                infinite={false}
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
          <div className={cx("Paging")}>
            <button className={cx("Prev-list")}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className={cx("Btn-paging-group")}>
              <button className={cx("Btn-paging", "Active")}>1</button>
              <button className={cx("Btn-paging")}>2</button>
              <button className={cx("Btn-paging")}>3</button>
              <button className={cx("Btn-paging")}>4</button>
              <button className={cx("Btn-paging")}>5</button>
            </div>
            <button className={cx("Next-list")}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
