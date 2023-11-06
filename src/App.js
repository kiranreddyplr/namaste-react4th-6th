import './App.css';

/**
 * Header
 *    -logo
 *    -Nav items
 * Body
 *    -search component
 *    -Restuarent container
 *        -cards
 *        -img
 *        -Name of res, Star Rating 
 * Footer
 *    -links
 *    -terms and conditions
 * 
 */

const Header = () => {
  return(
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' alt="logo" src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72"/>
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
  )
}


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
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/>
      <h4>{name}</h4>
      <h4>{costForTwo}</h4>
      <h4>Rating {avgRating} star</h4> 
    </div>
  )
}

const resList= [
  {
    id: "1",
    name: "KFC",
    cloudinaryImageId: "qrqhfouxoeqt8aflj2yt",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.2,
  }
  ,
  {
    id: "2",
    name: "Meghana",
    cloudinaryImageId: "u3w6zgapfaun4zyt5pxn",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.42,
  },
  {
    id: "3",
    name: "Hyderbad house",
    cloudinaryImageId: "qrqhfouxoeqt8aflj2yt",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.62,
  },
  {
    id: "4",
    name: "trinetra",
    cloudinaryImageId: "thzhbierhb2qxhqsl0bo",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 3.2,
  },
  {
    id: "5",
    name: "KFC",
    cloudinaryImageId: "jwzxv4hmmnyuice4pe8x",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.2,
  },
  {
    id: "6",
    name: "KFC",
    cloudinaryImageId: "qrqhfouxoeqt8aflj2yt",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.2,
  }
];

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


const AppLayout = () => {
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
    
  )
}



export default AppLayout;
