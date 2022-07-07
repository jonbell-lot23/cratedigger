import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const records = [
  {
    name: "NATALIE",
    size: "large",
    width: "8",
    bgcolor: "RED",
    color: "#FFF",
    img: "TTAJ.png"
  },
  {
    name: "Bookshelf",
    size: "large",
    width: "8",
    bgcolor: "#6CCECB",
    color: "#598F8E",
    img: "RD.png"
  },
  {
    name: "Another thing",
    size: "large",
    width: "8",
    bgcolor: "#8EDC9D",    
    color: "#6E9970",
    img: "NFFN.png"
  },
  {
    name: "Beating Bobby Fischer",
    size: "large",
    width: "16",
    bgcolor: "#EF7126",
    color: "#9E5527",
    img: "BS.png"
  },
  {
    name: "The Big Board",
    size: "large",
    width: "8",
    bgcolor: "#F9E559",
    color: "#ACA14A",
    img: "HTBBF.png"
  },
  {
    name: "Bookshelf",
    size: "large",
    width: "8",
    bgcolor: "#6CCECB",
    color: "#598F8E",
    img: "BATE.png"
  },
  {
    name: "Another thing",
    size: "large",
    width: "8",
    bgcolor: "#8EDC9D",    
    color: "#6E9970",
    img: "42and21.png"
  },
  {
    name: "Beating Bobby Fischer",
    size: "large",
    width: "8",
    bgcolor: "#EF7126",
    color: "#9E5527",
    img: "plebe11.png"
  },
  {
    name: "Beating Bobby Fischer",
    size: "large",
    width: "8",
    bgcolor: "#EF7126",
    color: "#9E5527",
    img: "plebe12.png"
  },
  {
    name: "Beating Bobby Fischer",
    size: "large",
    width: "8",
    bgcolor: "#EF7126",
    color: "#9E5527",
    img: "plebe13.png"
  },
  {
    name: "Beating Bobby Fischer",
    size: "large",
    width: "8",
    bgcolor: "#EF7126",
    color: "#9E5527",
    img: "nffn9.png"
  },
  {
    name: "Beating Bobby Fischer",
    size: "large",
    width: "8",
    bgcolor: "#EF7126",
    color: "#9E5527",
    img: "nffn10.png"
  }
];

export default function Home() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Crate Digger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 justify-center p-8 text-white rounded-xl m-12">
        <h1 className="font-semibold mb-3 text-gray-600">Crate Digger</h1>
        
        <div className="flex col flex-wrap">
        {records.map((record) => (
          
          <img src={record.img} className="mr-1" />
          
        ))}
        </div>
        
      </div>
    </div>
  );
}
