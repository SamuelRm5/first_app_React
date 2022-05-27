import './RickStyle.css'
import { BsGenderTrans, BsGenderFemale, BsGenderMale } from 'react-icons/bs';

export const RickCard = ({
    name,
    vida,
    gender,
    image, //url
}) => {

    const imageRef = image;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card cartasRick">
                
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ imageRef } className="card-img" alt={name} />
                    </div>
                    <div className="col-8">
                        

                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            {
                                (vida == 1) ? <p className="status aliveColor"></p>
                                    : (vida == 2) ? <p className="status deathColor"></p>
                                    : <p className="status unknownColor"></p>

                            }
                            <p className="card-text genderImg">
                                {
                                    (gender == "Male") ? <BsGenderMale />
                                        : (gender == "Female") ? <BsGenderFemale />
                                        : <BsGenderTrans />
                                }
                            </p>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}