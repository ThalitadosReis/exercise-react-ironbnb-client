import { useParams } from "react-router-dom";

export default function ApartmentDetails({apartmentsList}){

    const { apartmentId } = useParams();

    const details = apartmentsList.find(ApartmentDetails => { 
        return ApartmentDetails._id === apartmentId;
    })

    const renderListing = () => {
        return (
            <div className="details">
                <h1>{details.title}</h1>
                {details?.img 
                    ? <img src={details.img} alt="" />
                    : <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                }
                <p>Price per day: {details.pricePerDay} EUR</p>
            </div>
        )

    }

    return (
        <>
            {details === null ? <div className="loader"></div> : renderListing()}
        
        </>
    )
}