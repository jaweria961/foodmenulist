import React from 'react';

const Menu = ({menuItem, SetMenuItem}) => {
  const {id,img,category,price,title,desc} = menuItem;
  return (
    <>
    <div className='section-center'>
     
    
       
      {
        menuItem?.map((item,index)=>{
          return(
            <article key={index} className='menu-item'>
            <img src={item.img} alt={item.title} className='photo' />
            
            <div className='item-info'>
              <header>
                <h4>{item.title}</h4>
                <h4 className='price'>
                  {item.price}
                </h4>
                <h4 className='price'>
                  {item.category}
                </h4>
              </header>
              <p className='item-text'> 
              {item.desc}
              </p>
              <h4 className='price'>
                  ({item.category})
                </h4>
            </div>
          </article>
          )
        })

      }
         
      
     
    </div>
    
    
    </>

  )
};

export default Menu;
