import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <section className="mx-auto w-full max-w-[1200px]">
      <div className="px-0 xs:px-6 md:px-4 xl:px-0">{children}</div>
    </section>
  );
}
