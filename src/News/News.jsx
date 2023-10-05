import { useParams } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header"
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav"
import Navbar from "../Pages/Shared/Navbar/Navbar";


const News = () => {
    const {id} = useParams();
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
         <h2 className="text-5xl">News Details</h2>
         <p>{id}</p>
        </div>
        <div>
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  )
}

export default News
