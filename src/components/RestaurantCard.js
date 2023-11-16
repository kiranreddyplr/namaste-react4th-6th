const RestuarentCard = (props) => {
    /*console.log(props);*/
    const {resData} = props;
    const{
      name,
      
      
    } =resData;
   
    return(
      <div className='res-card'>
        <h2>{name}</h2>
        <h2>kk</h2>
        </div>
    )
  }

  export default RestuarentCard;