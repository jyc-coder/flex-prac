"use client";
import React from "react";
import style from "./Course.view.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(style);

type CourseViewProps = {
  locale: string;
};

export default async function CourseView(props: CourseViewProps) {
  const { locale } = props;
  return (
    <div>
      <h1 className={cx("Test")}>CourseView</h1>
      <p>Locale: {locale}</p>
    </div>
  );
}
