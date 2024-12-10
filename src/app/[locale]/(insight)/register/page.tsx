import RegisterView from "@/views/register/Register.view";

type RegisterPageProp = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function RegisterPage(props: RegisterPageProp) {
  const { params } = props;
  const { locale } = await params;
  return <RegisterView locale={locale} />;
}
