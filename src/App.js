import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories =['all', ...new Set(items.map((item)=> item.category))]

console.log(allCategories);
console.log(items);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [category, setCategory] = useState(allCategories);
  const [value, setValue] = useState(0);
  console.log('value', value)

  const filterItem =(category,index=0) =>{
  
    
    
    console.log('check items',items);
    console.log('check category', category)
   
   if(category==='all')
   {
     setMenuItem(items);
     setValue(index);

   }
   else{
    const itemList = items.filter((item)=>item.category === category)
    setMenuItem(itemList);
    setValue(index);
   
   }
     
   
     }
 


  return (
    <>
<main>
      <section className="menu section">
        <div className="title">
          <h2 style={{color:"Red"}}>Food Menu List</h2>
          
        </div>
        <Categories  value={value} setValue={setValue} category={category} filterItem={filterItem}/>
        <Menu menuItem={menuItem} setMenuItem={setMenuItem}/>
      </section>
    </main>
    
    </>
  ) 
}

export default App;
