const RestuarentCard = (props) => {
    /*console.log(props);*/
    const {resData} = props;
    const{
      id,
      label,
      
    } =resData;
   
    return(
      <div className='res-card'>
        <h2>{id}</h2>
        <h2>{label}</h2>
        </div>
    )
  }

  export default RestuarentCard;