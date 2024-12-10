import ClassDetailView from "@/views/classdetail/ClassDetail.view";

type ClassDetailPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CategoryPage(props: ClassDetailPageProps) {
  const { params } = props;
  const { locale } = await params;
  return <ClassDetailView locale={locale} />;
}
