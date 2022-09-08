import Nav from '../component/nav';
import parse from "html-react-parser";
export default function About({data}) {
    const aboutContent = data.data[0].content.page_content 
    return (<div className='card'>
       <Nav page='about'/>
      
       <h1>About Us</h1>
       <div>{ parse(aboutContent)}</div>
    </div>)
}


export async function getStaticProps(){

    const response = await fetch('https://www.zesty.io/-/instant/7-e93178-vqvclg.json');
    const data = await response.json();

    return ({
        props: {data},
    })
}