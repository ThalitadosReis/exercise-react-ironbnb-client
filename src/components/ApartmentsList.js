import { Link } from 'react-router-dom';

export default function ApartmentsList({apartmentsList}){

    return (
        <>
            <h1>List of apartments</h1>

            {apartmentsList !== undefined && apartmentsList.map((apartment) => {
                return (
                    <div className='apartments' key={apartment._id}>
                        {apartment?.img 
                            ? <img src={apartment.img} alt="" />
                            : <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        }
                        <h3>{apartment.title}</h3>
                        <Link to={"/apartments/" + apartment._id}>More Details</Link>
                    </div>
                )
            })}
        </>
    )
}