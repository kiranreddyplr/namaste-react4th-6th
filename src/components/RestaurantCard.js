const RestuarentCard = (props) => {
    /*console.log(props);*/
    const {resData} = props;
    const{
      imageId,
      id,
      entityType
    } =resData;
   
    return(
      <div className='res-card'>
        <img className="res-logo" alt="res-logo"  
        src={imageId }/>
        <h2>{id}</h2>
        <h2>{entityType}</h2>
        </div>
    )
  }

  export default RestuarentCard;