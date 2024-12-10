import CourseView from "@/views/course/Course.view";

type CoursePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CategoryPage(props: CoursePageProps) {
  const { params } = props;
  const { locale } = await params;

  return <CourseView locale={locale} />;
}
