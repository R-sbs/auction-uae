import { ReactNode } from "react";


type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function Layout({ children, params: { locale } }: Props) {
  return <div>{children}</div>;
}
