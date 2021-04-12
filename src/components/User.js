import React, {useState, useEffect} from 'react';


export default function User(){
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function(){
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const userFetch=data.results[0];
            setUser(userFetch);
            setLoading(false);
        })

    },[]);

   
    if(loading){
        return(
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    if(!loading){
        return(
            <div>
                <img className="rounded-circle shadow img-fluid border border-warning" src={user.picture.large} alt=""/>
                <h1>{user.name.first} {user.name.last}</h1>
                <p>{user.email}</p>
                <hr/>
            </div>
        );
    }
        
    
}