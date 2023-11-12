import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import PriceCard from "./prices";
import PriceHeader from "./header";
import PriceFeatures from "./features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PriceHeader />
      <PriceCard />
      <PriceFeatures />
    </>
  );
}
