import getAuthSession from '@/lib/session.js'
import MyListing from "@/pages/mylisting";

const Home = () => {
  return (
    <MyListing />
  )
}

export const getServerSideProps = async ({}) => {
  console.log("---------------")
  // Fetch data from external API
  const res = await fetch(`http://95.163.180.251/api/getUserInfo`)
  const data = await res.json();
  console.log(data);
 
  // Pass data to the page via props
  return { props: { data } }
}

export default Home;