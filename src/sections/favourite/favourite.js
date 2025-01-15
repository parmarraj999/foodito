import React,{useState} from 'react'
import './favourite.css'

function Favourite() {

    const [image,setImage] = useState("organic")

    return (
        <div className="favourite-container" >
            <div className="left" >
                <h1>Choose <br />Favorite</h1>
                <div className="favorite-list">
                    <div className="list-item" onClick={()=>{
                        setImage("organic")
                    }}>
                        <h2>Organic</h2>
                        <h2>14</h2>
                    </div>
                    <div className="line" ></div>
                    <div className="list-item"  onClick={()=>{
                        setImage("fastfood")
                    }}  >
                        <h2>FastFood</h2>
                        <h2>21</h2>
                    </div>
                    <div className="line" ></div>
                    <div className="list-item"  onClick={()=>{
                        setImage("starter")
                    }} >
                        <h2>Starter</h2>
                        <h2>11</h2>
                    </div>
                </div>
            </div>
            <div className="right" >
                <img src={`../../../../images/${image}-1.jpeg`} className="imageOne"/>
                <img src={`../../../../images/${image}-2.jpeg`} className="imageTwo"/>
            </div>
        </div>
    )
}

export default Favourite