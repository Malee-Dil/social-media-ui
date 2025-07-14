import { use, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Comments.scss"


const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id:1,
            desc:"Such a beautiful photo! 😍 Where was this taken?",
            name:"John Doe",
            userId:1,
            profilePicture:
            "https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:2,
            desc:"Congrats on the big achievement! Well-deserved! 🎉👏",
            name:"kimmy",
            userId:1,
            profilePicture:
            "https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.ProfilePic} alt="" />
            <input type="text" placeholder="Write a comment" />
            <button>Send</button>
        </div>
        
        {comments.map(comment =>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))
    }</div>
  )
}

export default Comments
