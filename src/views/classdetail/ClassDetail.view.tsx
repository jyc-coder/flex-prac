"use client";
import React from "react";
import style from "./ClassDetail.view.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(style);

type ClassDetailViewProps = {
  locale: string;
};

export default async function ClassDetailView(props: ClassDetailViewProps) {
  const { locale } = props;
  return (
    <div>
      <h1 className={cx("Test")}>Category</h1>
      <p>Locale: {locale}</p>
    </div>
  );
}
