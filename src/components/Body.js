import RestuarentCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return(
      <div className='body'>
          <div className='search'>search</div>
          <div className='res-container'>
           {resList.map((itemlist) => <RestuarentCard key={itemlist.id} resData={itemlist}/>
           )}  
           {resList.map((listitem) => <RestuarentCard resData={listitem}/>)}     
          </div>
      </div>
    )
  }

 

  export default Body;