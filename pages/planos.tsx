import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import Hero from "../components/Hero";
import HeroThemaRoom from "../components/HeroThemaRoom";
import HowToCustomize from "../components/HowToCustomize";

const Planos: NextPage = () => {
  return (
    <div className="bg-white">
      <Header />
      
      <h2>Planos</h2>


      <Footer />
    </div>
  );
};

export default Planos;
