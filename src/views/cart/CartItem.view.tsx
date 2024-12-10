"use client";
import React from "react";
import style from "./CartItem.view.module.scss";
import cn from "classnames/bind";
import Image from "next/image";

const cx = cn.bind(style);

type CartItemViewProps = {
  locale: string;
};

export default function CartItemView(props: CartItemViewProps) {
  const { locale } = props;
  return (
    <>
      <section className={cx("Section", "Take-course")}>
        <div className={cx("Take-course-inner")}>
          <div className={cx("Cart-wrap")}>
            <h2 className={cx("Payment-headline")}>수강신청 장바구니</h2>
            <div className={cx("Cart-header")}>
              <span>
                <input type="checkbox" className={cx("Cart-check")} />
                전체선택 <em>3</em>/3
              </span>
              <button className={cx("Btn-all-clear")}>전체삭제</button>
            </div>
            <div className={cx("Cart-items")}>
              <div className={cx("Cart-item")}>
                <div className={cx("Check-status")}>
                  <input type="checkbox" />
                </div>
                <div className={cx("Thum")}>
                  <Image
                    src="/static/images/beyond-class-category-cover-16.png"
                    alt="beyond-class-category-cover"
                    objectFit="cover"
                    fill
                  />
                </div>

                <div className={cx("Cart-overview")}>
                  <div className={cx("Cart-overview-header")}>
                    <h4>할인기간 2022-11-01까지</h4>
                    <button className={cx("Btn-clear")}>&times;</button>
                  </div>

                  <div className={cx("Cart-overview-detail")}>
                    <div className={cx("Cart-overview-info")}>
                      <b className={cx("Class-subject")}>
                        퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력을 위한
                        모바일 웹 퍼블리싱 포트폴리오 with Figma
                      </b>
                      <span className={cx("Mentor-info")}>
                        코딩웍스(Codingworks)<em>평생 무료</em>
                      </span>
                    </div>
                    <div className={cx("Cart-overview-price")}>
                      <div>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                      </div>
                      <span className={cx("Price-current")}>92,400원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("Cart-item")}>
                <div className={cx("Check-status")}>
                  <input type="checkbox" />
                </div>
                <div className={cx("Thum")}>
                  <Image
                    src="/static/images/beyond-class-category-cover-16.png"
                    alt="beyond-class-category-cover"
                    objectFit="cover"
                    fill
                  />
                </div>

                <div className={cx("Cart-overview")}>
                  <div className={cx("Cart-overview-header")}>
                    <h4>할인기간 2022-11-01까지</h4>
                    <button className={cx("Btn-clear")}>&times;</button>
                  </div>

                  <div className={cx("Cart-overview-detail")}>
                    <div className={cx("Cart-overview-info")}>
                      <b className={cx("Class-subject")}>
                        퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력을 위한
                        모바일 웹 퍼블리싱 포트폴리오 with Figma
                      </b>
                      <span className={cx("Mentor-info")}>
                        코딩웍스(Codingworks)<em>평생 무료</em>
                      </span>
                    </div>
                    <div className={cx("Cart-overview-price")}>
                      <div>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                      </div>
                      <span className={cx("Price-current")}>92,400원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("Cart-item")}>
                <div className={cx("Check-status")}>
                  <input type="checkbox" />
                </div>
                <div className={cx("Thum")}>
                  <Image
                    src="/static/images/beyond-class-category-cover-16.png"
                    alt="beyond-class-category-cover"
                    objectFit="cover"
                    fill
                  />
                </div>

                <div className={cx("Cart-overview")}>
                  <div className={cx("Cart-overview-header")}>
                    <h4>할인기간 2022-11-01까지</h4>
                    <button className={cx("Btn-clear")}>&times;</button>
                  </div>

                  <div className={cx("Cart-overview-detail")}>
                    <div className={cx("Cart-overview-info")}>
                      <b className={cx("Class-subject")}>
                        퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력을 위한
                        모바일 웹 퍼블리싱 포트폴리오 with Figma
                      </b>
                      <span className={cx("Mentor-info")}>
                        코딩웍스(Codingworks)<em>평생 무료</em>
                      </span>
                    </div>
                    <div className={cx("Cart-overview-price")}>
                      <div>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                      </div>
                      <span className={cx("Price-current")}>92,400원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("Cart-item")}>
                <div className={cx("Check-status")}>
                  <input type="checkbox" />
                </div>
                <div className={cx("Thum")}>
                  <Image
                    src="/static/images/beyond-class-category-cover-16.png"
                    alt="beyond-class-category-cover"
                    objectFit="cover"
                    fill
                  />
                </div>

                <div className={cx("Cart-overview")}>
                  <div className={cx("Cart-overview-header")}>
                    <h4>할인기간 2022-11-01까지</h4>
                    <button className={cx("Btn-clear")}>&times;</button>
                  </div>

                  <div className={cx("Cart-overview-detail")}>
                    <div className={cx("Cart-overview-info")}>
                      <b className={cx("Class-subject")}>
                        퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력을 위한
                        모바일 웹 퍼블리싱 포트폴리오 with Figma
                      </b>
                      <span className={cx("Mentor-info")}>
                        코딩웍스(Codingworks)<em>평생 무료</em>
                      </span>
                    </div>
                    <div className={cx("Cart-overview-price")}>
                      <div>
                        <span className={cx("Sale")}>30%</span>
                        <span className={cx("Price-prev")}>132,000원</span>
                      </div>
                      <span className={cx("Price-current")}>92,400원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("Payment")}>
            <div className={cx("Price-total-wrap")}>
              <h2 className={cx("Payment-headline")}>결제 금액</h2>
              <div className={cx("Current-price")}>
                <b>총 결제 금액</b>
                <span>
                  <em>270,545</em>원
                </span>
              </div>
              <div className={cx("Origin-price")}>
                <b>상품금액</b>
                <span>344,300원</span>
              </div>
              <div className={cx("Discount-amount")}>
                <b>총 할인 금액</b>
                <span>
                  <em>-73,755</em>원
                </span>
              </div>
            </div>
            <div className={cx("Mobile-confirm-wrap")}>
              <h2 className={cx("Payment-headline")}>휴대폰 번호 입력</h2>
              <div className={cx("Phone-form")}>
                <input
                  type="tel"
                  placeholder="휴대폰 번호(- 없이 숫자로 입력)"
                />
                <button className={cx("Btn-request")}>인증요청</button>
              </div>
            </div>
            <div className={cx("Payment-method-wrap")}>
              <h2 className={cx("Payment-headline")}>결제 수단</h2>
              <div>
                <label>
                  <input type="radio" name="payment-method" />
                  <em></em>카드 전자결제
                  <b className={cx("Free-interest")}>무이자 할부 지원</b>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="payment-method" />
                  <em></em>휴대폰 결제
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="payment-method" />
                  <em></em>계좌이체
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="payment-method" />
                  <em></em>
                  <Image
                    src={"/static/images/ct-payment-naver.png"}
                    alt="naver-pay"
                    objectFit="cover"
                    width={60}
                    height={20}
                    style={{
                      marginRight: "5px",
                      transform: "translateY(3px)",
                    }}
                  />
                  네이버페이
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="payment-method" />
                  <em></em>
                  <Image
                    src={"/static/images/ct-payment-kakao.png"}
                    alt="kakao-pay"
                    objectFit="cover"
                    width={50}
                    height={20}
                    style={{
                      marginRight: "5px",
                      transform: "translateY(3px)",
                    }}
                  />
                  카카오페이
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="payment-method" />
                  <em></em>
                  <Image
                    src={"/static/images/ct-payment-toss.png"}
                    alt="toss-pay"
                    objectFit="cover"
                    width={60}
                    height={20}
                    style={{
                      marginRight: "5px",
                      transform: "translateY(3px)",
                    }}
                  />
                  토스페이
                </label>
              </div>
            </div>
            <button className={cx("Btn-payment-final")}>결제하기</button>
          </div>
        </div>
      </section>
    </>
  );
}
