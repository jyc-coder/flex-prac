"use client";
import React from "react";
import style from "./Register.view.module.scss";
import cn from "classnames/bind";
import Image from "next/image";

const cx = cn.bind(style);

type RegisterViewProps = {
  locale: string;
};

export default function RegisterView(props: RegisterViewProps) {
  const { locale } = props;
  return (
    <div className={cx("Container")}>
      <section className={cx("Section", "Member-register")}>
        <div className={cx("Member-register")}>
          <div className={cx("Member-account")}>
            <h1 className={cx("Login-slogan")}>
              나를 성장시키는 배움,
              <br />
              <em>비욘드 인사이트</em>에서 시작하세요.
            </h1>
            <Image
              src={"/static/images/ct-modal-01.png"}
              alt="logo"
              objectFit="cover"
              width={160}
              height={98}
              style={{
                margin: "30px 0",
              }}
            />
          </div>
          <div className={cx("Login-field")}>
            <div>
              <input type="email" placeholder="이메일" />
            </div>
            <div>
              <input type="password" placeholder="비밀번호" />
              <i className={cx("Toggle-pw", "bi", "bi-eye-slash")}></i>
            </div>
            <div>
              <input type="password" placeholder="비밀번호 확인" />
              <i className={cx("Toggle-pw", "bi", "bi-eye-slash")}></i>
            </div>
            <button className={cx("Btn-member-primary")}>가입하기</button>
          </div>
          <div className={cx("Agreement")}>
            <p>
              가입 시, 통합 계정으로 비욘드 인사이트가 제공하는 서비스를 모두
              이용하실 수 있습니다. 서비스 이용약관, 개인정보취급방침에
              동의합니다.
            </p>
            <label>
              <input type="checkbox" />
              <em></em>
              할인 혜택 및 마케팅 정보 수신을 동의합니다.
            </label>
          </div>
          <div className={cx("Login-member")}>
            이미 가입된 계정이 있나요?
            <a href="">로그인 하기</a>
          </div>
        </div>
      </section>
    </div>
  );
}
