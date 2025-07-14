import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    const{currentUser} = useContext(AuthContext)

    //TEMP
    const stories = [
        {
            id:1,
            name:"John Doe",
            img: "https://images.pexels.com/photos/5602877/pexels-photo-5602877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:2,
            name:"John Doe",
            img: "https://images.pexels.com/photos/5602877/pexels-photo-5602877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:3,
            name:"John Doe",
            img: "https://images.pexels.com/photos/5602877/pexels-photo-5602877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:4,
            name:"John Doe",
            img: "https://images.pexels.com/photos/5602877/pexels-photo-5602877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:5,
            name:"John Doe",
            img: "https://images.pexels.com/photos/5602877/pexels-photo-5602877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

  return (
    <div className="stories">
        <div className="story">
                <img src={currentUser.ProfilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
        </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
        </div>
  )
}

export default Stories