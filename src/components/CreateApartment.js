import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function CreateApartment(props){

    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [pricePerDay, setPricePerDay] = useState(0)

    // creating a new apartment listing
    const handleSubmit = (e) => {
        e.preventDefault();

        const newApartment = {
        "title": title,
        "img": img,
        "pricePerDay": pricePerDay
        };

        axios
            .post(process.env.REACT_APP_API_URL + "/apartments", newApartment)
            .then((response) => {
                console.log(response.data);
                navigate("/apartments");
            })
            .catch((e) => {
                console.log(e);
            });

        props.createCallback(newApartment);

        //clear form
        setTitle("");  setImg(""); setPricePerDay(0);
    }

    return (
        <>
            <h1>Create Listing</h1>
            <div className='create-form'>
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                        <input 
                            required={true}
                            type="text" 
                            name="title" 
                            placeholder="Enter a title" 
                            value={title} 
                            onChange={(e) => { setTitle(e.target.value) }} 
                        />

                    <label>Image URL:</label>
                    <input
                        type="url"
                        name="img"
                        placeholder="Paste an image url" 
                        value={img}
                        onChange={(e) => { setImg(e.target.value) }}
                        />

                    <label>Price per day:</label>
                        <input 
                            type="number"
                            name="pricePerDay" 
                            value={pricePerDay}
                            onChange={(e) => { setPricePerDay(e.target.value) }} 
                        />

                    <label><button>Create</button></label>
                </form>
            </div>
        </>
    )
}