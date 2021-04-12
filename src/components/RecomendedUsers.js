import React, {useState, useEffect} from 'react';
import UserPill from './UsersPill'


export default function User(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function(){
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
            const usersFetch=data;
            setUsers(usersFetch);
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
                <h2 className="text-center">Recomended Users</h2>
                <hr/>
                {
                    users.results.map(user=>
                        <UserPill 
                            username = {user.login.username}
                            img = {user.picture.thumbnail}
                            key={user.login.username}
                        />
                    )
                }
            </div>
        );
    }
        
    
}