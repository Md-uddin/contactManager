import React from 'react'
import user from '../images/user.jpg';
import { Link } from 'react-router-dom';

const Contactdetails = (props) => {
    console.log(props + 'from contact details')
    console.log("this is contactdetails   " + props)
    const { name, email } = props.location.state.contact;
    return (
        <> 
            <div className="main">
                <div className="ui card centered">
                    <div className="image">
                        <img src={user} alt="not available" />
                </div>
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">
                            {email}

                        </div>
                </div>
                </div>
                <div className="center-div">
                    <Link to="/"><button className="ui button blue center"> Back to contact List</button>
                 </Link>
                </div>
        </div>
        </>
    )
}

export default Contactdetails;
