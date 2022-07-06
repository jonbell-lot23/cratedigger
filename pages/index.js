import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const records = [
  {
    name: "The Big Board",
    size: "large",
    width: "8",
    bgcolor: "#F9E559",
    color: "#ACA14A"
  },
  {
    name: "Bookshelf",
    size: "large",
    width: "8",
    bgcolor: "#6CCECB",
    color: "#598F8E"
  },
  {
    name: "Another thing",
    size: "large",
    width: "8",
    bgcolor: "#8EDC9D",    
    color: "#6E9970"
  },
  {
    name: "Beating Bobby Fischer",
    size: "large",
    width: "16",
    bgcolor: "#EF7126",
    color: "#9E5527"
  },
  {
    name: "The Big Board",
    size: "large",
    width: "8",
    bgcolor: "#F9E559",
    color: "#ACA14A"
  },
  {
    name: "Bookshelf",
    size: "large",
    width: "8",
    bgcolor: "#6CCECB",
    color: "#598F8E"
  },
  {
    name: "Another thing",
    size: "large",
    width: "8",
    bgcolor: "#8EDC9D",    
    color: "#6E9970"
  },
  {
    name: "Beating Bobby Fischer",
    size: "large",
    width: "16",
    bgcolor: "#EF7126",
    color: "#9E5527"
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
          
          <div title={`${record.name}`} className={`w-${record.width} mr-1 mb-1 h-48 relative rounded-sm cursor-pointer`} style={{backgroundColor: record.bgcolor, color:record.color}}>
              
              
              <div className="rotate-90 pl-0 origin-left w-48 whitespace-wrap absolute left-4">{record.name}</div>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  );
}
