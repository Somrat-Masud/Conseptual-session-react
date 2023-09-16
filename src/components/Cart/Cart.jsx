import './Cart.css' 
const Cart = ({selectActors, remaing,totalCost}) => {
    console.log(selectActors);
    return (
        <div className='container'> 
          <h5>total actors: {selectActors.length}</h5>
          <h5>remaing:{remaing}</h5>
          <h5>totalCost:{totalCost}</h5>
          {
         selectActors.map((actor) =>(
            <li>{actor.name}</li>
         ))
          }
        </div>
    );
};

export default Cart;