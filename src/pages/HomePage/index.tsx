import { HTMLAttributes } from "react";
import "./styles.css";

interface HomePageProps extends HTMLAttributes<HTMLDivElement> {}
export default function HomePage({}: HomePageProps) {
  return <div>HOME PAGE</div>;
}
