import CategoryView from "@/views/category/Category.view";

type CategoryPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CategoryPage(props: CategoryPageProps) {
  const { params } = props;
  const { locale } = await params;
  return <CategoryView locale={locale} />;
}
