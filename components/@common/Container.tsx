import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <section className="max-w-pc mx-auto w-full">
      <div className="px-6 tab:px-4 pc:px-0">{children}</div>
    </section>
  );
}
