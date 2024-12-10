import LoginView from "@/views/login/Login.view";

type RegisterPageProp = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LoginPage(props: RegisterPageProp) {
  const { params } = props;
  const { locale } = await params;
  return <LoginView locale={locale} />;
}
