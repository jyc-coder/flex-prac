import BeyondInsightRootLayout from "@/layouts/Root.layout";

const BeyondInsightLayout = async (
  props: React.PropsWithChildren & {
    modal: React.ReactNode;
  }
) => {
  const { children, modal } = props;
  return (
    <BeyondInsightRootLayout>
      {modal}
      {children}
    </BeyondInsightRootLayout>
  );
};

export default BeyondInsightLayout;
