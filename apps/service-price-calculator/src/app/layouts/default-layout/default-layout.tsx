export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return <main>{children}</main>;
}

export default DefaultLayout;
