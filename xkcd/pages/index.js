import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props) {
  return (
    <main>
      <Header />
      <h1>XKCD</h1> 
      <h2>{props.comic.title}</h2>
      <img src={props.comic.img} alt={props.comic.alt}></img>
     {/* <style>{`
     .hello{
     font: 15px Helvitica, Ariel, sans-serif;
     background: #eee:
     text-align: center;
     padding: 100px:
        }   
     `}
     </style> */}
     <Footer comicNum={props.comic.num} />
    </main>
  )
}

export async function getServerSideProps(context){

  const response = await fetch('https://xkcd.com/info.0.json');
  const data = await response.json();

  return {
    props: {
      comic: data
    }
  }
}
