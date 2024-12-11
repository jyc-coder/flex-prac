"use client";

import React from "react";
import styles from "./Root.layout.module.scss";
import cn from "classnames/bind";
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/routing";

const cx = cn.bind(styles);

const BeyondInsightRootLayout = (props: React.PropsWithChildren) => {
  const { children } = props;
  const router = useRouter();
  const pathname = usePathname();
  const _top = React.useRef<HTMLDivElement>(null);
  const [isLogin, setIsLogin] = React.useState(false);
  const [isTop, setIsTop] = React.useState(true);
  // 현재 페이지 경로 확인

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTop(true);
          console.log("보인다!");
        } else {
          setIsTop(false);
          console.log("안보인다!");
        }
      });
    });
    if (_top.current) observer.observe(_top.current);
  }, []);

  return (
    <div className={cx("Container", "front")}>
      <div ref={_top} />
      <header
        className={cx("Header", {
          top: isTop,
        })}
      >
        <div className={cx("Header-inner")}>
          <div className={cx("Logo-search")}>
            <div className={cx("Logo")}>
              <a href="#">
                <Image
                  src={"/static/images/logo-beyond-insight.png"}
                  alt={"logo-beyond-insight"}
                  width={205}
                  height={23}
                />
              </a>
            </div>
            <div className={cx("Search")}>
              <input type="search" placeholder="어떤 강의를 찾으시나요?" />
              <i className={cx("bi", "bi-search")}></i>
            </div>
            {!isLogin && (
              <div className={cx("Login-register-buttons")}>
                <button
                  className={cx("Btn-login")}
                  onClick={() => {
                    router.push(`/login`);
                  }}
                >
                  로그인
                </button>
                <button className={cx("Btn-register")}>회원가입</button>
              </div>
            )}

            {isLogin && (
              <div className={cx("User-alarm")}>
                <span className={cx("Cart")}>
                  <i className={cx("bi", "bi-cart")}></i>{" "}
                  <em data-count="2"></em>
                </span>
                <span className={cx("Alarm")}>
                  <i className={cx("bi", "bi-bell")}></i>
                  <em data-count="9"></em>
                </span>
                <span className={cx("Avatar")}>
                  <Image
                    src={"/static/images/mentor-avatar-21.jpg"}
                    alt={"avatar"}
                    width={28}
                    height={28}
                    style={{
                      borderRadius: "50%",
                    }}
                  ></Image>
                </span>
              </div>
            )}
          </div>
          <div className={cx("Gnb")}>
            <a href="#none" className={cx("Trigger")}>
              <span>전체 카테고리</span>
            </a>
            <div className={cx("Link-list")}>
              <a href="#none">베스트 클래스</a>
              <a href="#none">이벤트</a>
              <a href="#none">새로운 클래스</a>
              <a href="#none">신규 회원 혜택</a>
              <a href="#none">시그니쳐 클래스</a>
            </div>
          </div>
        </div>

        <div className={cx("Mega-navi")}>
          <div className={cx("Mega-navi-inner")}>
            <div className={cx("Mega-navi-item")}>
              <b>개발·프로그래밍</b>
              <div className={cx("Mega-navi-item-wrap")}>
                <a href="#none">웹 개발</a>
                <a href="#none">프론트엔드</a>
                <a href="#none">백엔드</a>
                <a href="#none">모바일 앱 개발</a>
                <a href="#none">데이터베이스</a>
                <a href="#none">게임 개발</a>
                <a href="#none">자격증</a>
              </div>
            </div>
            <div className={cx("Mega-navi-item")}>
              <b>운동·건강</b>
              <div className={cx("Mega-navi-item-wrap")}>
                <a href="#none">요가</a>
                <a href="#none">필라테스</a>
                <a href="#none">발레</a>
                <a href="#none">스트레칭·자세 개선</a>
                <a href="#none">피트니스</a>
                <a href="#none">러닝·사이클</a>
              </div>
            </div>
            <div className={cx("Mega-navi-item")}>
              <b>학문·외국어</b>
              <div className={cx("Mega-navi-item-wrap")}>
                <a href="#none">영어</a>
                <a href="#none">중국어</a>
                <a href="#none">일본어</a>
                <a href="#none">독일어</a>
                <a href="#none">스페인어</a>
                <a href="#none">외국어 시험</a>
              </div>
            </div>
            <div className={cx("Mega-navi-item")}>
              <b>라이프스타일</b>
              <div className={cx("Mega-navi-item-wrap")}>
                <a href="#none">뷰티</a>
                <a href="#none">명상</a>
                <a href="#none">심리</a>
                <a href="#none">타로·사주·운세</a>
                <a href="#none">게임·e스포츠</a>
                <a href="#none">반려동물</a>
                <a href="#none">인문학</a>
              </div>
            </div>
            <div className={cx("Mega-navi-item")}>
              <b> 창업·재태크</b>
              <div className={cx("Mega-navi-item-wrap")}>
                <a href="#none">국내 쇼핑몰</a>
                <a href="#none">해외 쇼핑몰</a>
                <a href="#none">블로그</a>
                <a href="#none">유튜브</a>
                <a href="#none">전자책·디지털파일</a>
                <a href="#none">쉐어하우스·숙박업</a>
                <a href="#none">요식업</a>
              </div>
            </div>
            <div className={cx("Mega-navi-item")}>
              <b>사진·영상</b>
              <div className={cx("Mega-navi-item-wrap")}>
                <a href="#none">유튜브</a>
                <a href="#none">디자인</a>
                <a href="#none">포토샵</a>
                <a href="#none">스마트폰</a>
                <a href="#none">사진촬영</a>
                <a href="#none">영상편집</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className={cx("Footer")}>
        <div className={cx("Footer-inner")}>
          <div className={cx("Lnb-wrap")}>
            <div className={cx("Footer-slogan")}>
              <h2>트랜드 그 이상의 클래스, 비욘드 인사이트</h2>
            </div>
            <div className={cx("Lnb")}>
              <div className={cx("Link-item")}>
                <div className={cx("Link-item-title")}>비욘드 클래스</div>
                <div className={cx("Link-item-content")}>
                  <a href="#none">앱 다운로드</a>
                  <a href="#none">코드 교환</a>
                  <a href="#none">브랜드</a>
                  <a href="#none">단체 교육</a>
                  <a href="#none">공지사항</a>
                  <a href="#none">채용안내</a>
                </div>
              </div>
              <div className={cx("Link-item")}>
                <div className={cx("Link-item-title")}>클래스 공유자 지원</div>
                <div className={cx("Link-item-content")}>
                  <a href="#none">클래스 개설</a>
                  <a href="#none">스튜디오 대여</a>
                  <a href="#none">클래스 개설 소개 자료</a>
                  <a href="#none">멘토 교육 지원</a>
                </div>
              </div>
              <div className={cx("Link-item")}>
                <div className={cx("Link-item-title")}>고객센터</div>
                <div className={cx("Link-item-content")}>
                  <a href="#none">공지사항</a>
                  <a href="#none">이용약관</a>
                  <a href="#none">개인정보처리방침</a>
                  <a href="#none">FAQ</a>
                  <a href="#none">환불규정</a>
                </div>
              </div>
              <div className={cx("Link-item")}>
                <div className={cx("Link-item-title")}>CONTACT</div>
                <div className={cx("Link-item-content")}>
                  환불문의: refund@beyond-i.com
                  <br />
                  기타문의: help@beyond-i.com
                  <br />
                  고객센터: 02-555-5555
                  <br />
                  (주중 10시~18시 / 주말 및 공휴일 제외)
                </div>
              </div>
            </div>
          </div>
          <div className={cx("Copyright-wrap")}>
            <address>
              <p>
                (주)비욘드클래스 <br />
                사업자번호 : 123-45-67890 | 대표자 : 홍길동 | 개인정보책임관리자
                : 홍길동 | 통신판매업신고번호 : 제 2022-서울마포-1234호 <br />
                (12345) 서울특별시 서대문구 신촌로 123, 3층
              </p>
              <p>Copyright © Beyond Class. All rights reserved.</p>
            </address>
            <div className={cx("SNS")}>
              <a href="#none">
                <i className={cx("bi", "bi-facebook")}></i>
              </a>
              <a href="#none">
                <i className={cx("bi", "bi-instagram")}></i>
              </a>
              <a href="#none">
                <i className={cx("bi", "bi-twitter")}></i>
              </a>
              <a href="#none">
                <i className={cx("bi", "bi-youtube")}></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeyondInsightRootLayout;
