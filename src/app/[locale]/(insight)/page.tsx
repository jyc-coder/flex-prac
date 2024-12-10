import HomeView from "@/views/home/Home.view";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home(props: HomePageProps) {
  const { params } = props;
  const { locale } = await params;
  return <HomeView locale={locale} />;
}
