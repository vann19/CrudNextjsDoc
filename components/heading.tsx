import { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl font-bold text-blue-700 pb-5">{children}</h1>;
}
