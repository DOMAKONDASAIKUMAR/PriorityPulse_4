import React from 'react'
import Head from '../Components/Header'
import Aboutus from './Aboutus'
function Profile() {
    return (
        <div>
            <Head title='profileNav' link="prof" brand='profile'  btn="2"></Head>
            <Aboutus></Aboutus>
          
        </div>
    )
}

export default Profile
