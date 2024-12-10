"use client";
import React from "react";
import style from "./Login.view.module.scss";
import cn from "classnames/bind";
import Image from "next/image";
import { useRouter } from "@/i18n/routing";

const cx = cn.bind(style);

type LoginViewProps = {
  locale: string;
};

export default function LoginView(props: LoginViewProps) {
  const { locale } = props;
  const router = useRouter();
  console.log("로그인");
  return (
    <div className={cx("Container")}>
      <section className={cx("Section", "Member-login")}>
        <div className={cx("Member-account")}>
          <h1 className={cx("Login-slogan")}>
            나를 성장시키는 배움,
            <br />
            <em>비욘드 인사이트</em>에서 시작하세요.
          </h1>
        </div>
        <div className={cx("Login-field")}>
          <div>
            <input type="email" placeholder="이메일" />
          </div>
          <div>
            <input type="password" placeholder="비밀번호" />
            <i className={cx("Toggle-pw", "bi", "bi-eye-slash")}></i>
          </div>
          <button className={cx("Btn-member-primary")}>로그인</button>
        </div>
        <div className={cx("Join-member")}>
          비욘드 인사이트가 처음이신가요?
          <a href="">간편 회원가입</a>
        </div>
        <div className={cx("Easy-login")}>
          <a href="#none" className={cx("Btn-easy-login", "Kakao")}>
            카카오로 시작하기
          </a>
          <a href="#none" className={cx("Btn-easy-login", "Facebook")}>
            페이스북으로 시작하기
          </a>
          <a href="#none" className={cx("Btn-easy-login", "Apple")}>
            Apple로 시작하기
          </a>
          <span className={cx("Or")}>또는</span>
          <a href="#none" className={cx("Btn-easy-login", "Email")}>
            이메일 계정으로 시작하기
          </a>
        </div>

        <p className={cx("Login-notice")}>
          처음 로그인하면 비욘드 인사이트의 이용약관 및 개인정보처리방침에
          동의한 것으로 간주합니다.
        </p>
        <button
          className={cx("Btn-modal-close")}
          onClick={() => {
            router.back();
          }}
        >
          &times;
        </button>
      </section>
    </div>
  );
}
