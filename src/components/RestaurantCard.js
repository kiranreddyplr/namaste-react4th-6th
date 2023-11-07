import { CON_URL } from "../utils/constant";

const RestuarentCard = (props) => {
    /*console.log(props);*/
    const {resData} = props;
    const{
      cloudinaryImageId,
      name,
      costForTwo,
      avgRating
    } =resData;
    return(
      <div className='res-card'>
        <img className="res-logo" alt="res-logo"  
        src={CON_URL + cloudinaryImageId }/>
        <h4>{name}</h4>
        <h4>{costForTwo}</h4>
        <h4>Rating {avgRating} star</h4> 
      </div>
    )
  }

  export default RestuarentCard;