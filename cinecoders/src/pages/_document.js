import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar/Navbar";
import BasicMenu from '../components/Dropdown/Neww';
import { useState } from 'react'; // Import useState

import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Footer from "@/components/Footer/Footer";


export default function Document(){



  return (
    <Html lang="en">
      <Head />
      <body>

        <div >
        

        <Main />

        <NextScript />

        <div style={{ marginTop: "7rem" }}>
        <Footer />
        </div>
        </div>
      </body>
      
    </Html>
  )
}
