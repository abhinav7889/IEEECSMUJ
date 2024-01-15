import "~/styles/globals.css";

import {Montserrat, Open_Sans, Poppins} from "next/font/google";
import {headers} from "next/headers";
import {TRPCReactProvider} from "~/trpc/react";
import Navbar from "~/app/components/navbar";
import Footer from "~/app/components/footer";
import React from "react";
import Head from "next/head"
import Script from "next/script"
import Header from './components/header';
import logo2 from "./assets/IEEE-logo-about.svg";
import Image from "next/image";
import {NextSeo} from "next-seo";


const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "IEEE CS MUJ",
    description: "IEEE Computer Society, Manipal University Jaipur is a group of driven individuals striving to create and spread awareness about various technologies that surround us.",
    icons: [{rel: "icon", url: "/favicon.svg"}],
};

export default function RootLayout({

                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">

        <body className={`font-sans bg-black ${poppins.variable}`}>
        <Navbar/>
        <div className='bg-black overflow-hidden text-white'>
            <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
