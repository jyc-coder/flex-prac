import CartItemView from "@/views/cart/CartItem.view";

type CartItemViewProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CartItemPage(props: CartItemViewProps) {
  const { params } = props;
  const { locale } = await params;
  return <CartItemView locale={locale} />;
}
