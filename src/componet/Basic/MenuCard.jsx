/* eslint-disable react/prop-types */


const MenuCard = ( { myData} ) => {
    console.log(myData);
    

  return (    
    <>
     <section className="main-card--cointainer">
    {myData.map((curEle)=>{
        const { id, name, category, image, des } = curEle
        return(
            <>           
      <div className="card-container" key={id}>
        <div className="card">


            <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle" >{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtle">{des}</span>
                <div className="line"><hr /></div>
                <div className="card-read">READ</div>
                <div>
              
                <img src={image} alt="images" className="card-media" />
                <button className="card-btn subtle">Order Now</button>
                </div>
            </div>
        </div>
    </div>
                </>
        )
    }
    )}
 </section>
    </>
  )
}


export default MenuCard;
