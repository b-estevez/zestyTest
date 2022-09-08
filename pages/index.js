import Nav from "../component/nav";
import Hbody from "../component/hbody";

export default function Home({ content }) {
  return (
    <>
      <Nav page="home" />
      <Hbody hcontent={content}></Hbody>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://www.zesty.io/-/gql/platform_section.json"
  );
  const content = await response.json();

  return {
    props: { content },
  };
}
