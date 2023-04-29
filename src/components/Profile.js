import React from 'react';
// import './Profile.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import network from '../photos/network.png'
import learning from '../photos/learning.png'
import practice from '../photos/practice.png'
import blogs from '../photos/blogs.png'
import plus from '../photos/plus.png'

function Profile() {
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchName = async () => {
            const token = localStorage.getItem('token');
            const headers = { Authorization: `Bearer ${token}` };
            try {
                const response = await axios.get("http://localhost:4000/api/users/me", { headers });
                setUser(response.data.email);
            } catch (error) {
                console.log(error);
            }
        }
        fetchName();
    }, [])

    return (
        <>
            <div className='container-fluid'>
                <h1>User Profile</h1>
                <div className="profile">
                    <div className="user-img">
                        <img src="https://picsum.photos/200" alt="user" style={{ borderRadius: "100%" }} />
                    </div>
                    <div className="user-info">
                        <h6>Name: {user}</h6>
                        <h6>Skills: </h6>
                        <h6>City: </h6>
                        <h6>Rank: </h6>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="post" placeholder="Talk to Connections" aria-label="Post" />
                            <button className="btn btn-outline-success" type="submit">Post</button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="img-row1">
                    <div>
                        <img src={network} alt="network" className="img-size t1" />
                        <p className='t1'>Connect and Pair up with developers around the world</p>
                        <img src={blogs} alt="blogs" className="img-size t1" />
                    </div>
                </div>
                <hr />
                <div className="img-row2">
                    <div>
                        <p>Start a new Project </p>
                        <img src={plus} alt="img2" className="img-size" />
                        <p>Create Impact</p>
                    </div>
                </div>
                <hr />
                <div className="img-row3">
                    <div>
                        <img src={learning} alt="img1" className="img-size" />
                        <p>Learn and Practice to hone your skills</p>
                        <img src={practice} alt="img2" className="img-size" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;