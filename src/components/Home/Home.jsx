import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
// import Swal from 'sweetalert2/src/sweetalert2.js'
import './Home.css'
const Home = () => {
const [allActors, setallActors] = useState([])
const [selectActors, setSelectActors] =useState([])
const [remaing, setRemaing] = useState(0)
const [totalCost, setTotalCost] = useState()

useEffect(()=> {
    fetch('./data.json')
    .then(res => res.json())
    .then(data =>setallActors(data))
},[])

const handleSelectActor =(actor) =>{
    const isExist = selectActors.find((item) => item.id == actor.id);
    let count = actor.salary; 
    if(isExist){
        return alert("already blocked");
    }
    else{
        selectActors.forEach((item) => {
            count = count + item.salary
        });

        const totalRemainng = 20000 - count ;
        setTotalCost(count)
        if(count > 20000){
            return alert("taka ses ar hove na")
        }else{
            setRemaing(totalRemainng);
            setSelectActors([...selectActors, actor]);
        }
       
    }
}
console.log(selectActors);

    return (
        <div className="container">
            <div className="Home-container">
            <div className="card-container">
                {
                    allActors.map(actor => (
                        // eslint-disable-next-line react/jsx-key
                        <div key={actor.id} className="card">
                        <div className="card-img">
                            <img className='photo' src={actor.image} alt="" />                       
                        </div>
                         <h2>{actor.name}</h2>
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small></p>
                         <div className="info">
                            <p>Salary: {actor.salary}</p>
                            <p>{actor.role}</p>                             
                        </div> 
                             <button onClick={() => handleSelectActor(actor)} className='card-btn'>Select</button>  
                    </div>
                    ))
                }
                </div>
                <div className="cart">
                    <Cart selectActors={selectActors} remaing={remaing} totalCost={totalCost} ></Cart>
                    </div>        
            </div>
        </div>
    );
};

export default Home;