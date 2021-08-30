import React from 'react'
import yasuo from "./yasuo.jpg"

const ProfilePhoto = () => {
    return (
        <div >
          <img style={{width:300,height:200,}} className="taille" src={yasuo} alt="hasagi"/>  
        </div>
    )
}

export default ProfilePhoto;
