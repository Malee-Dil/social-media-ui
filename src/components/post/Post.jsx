import "./post.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";


const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false);

    //TEMP
    const liked = true;


  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}}>
                        <span className="name">{post.name}</span>
                        </Link>
                        <span className="date"> 1 min ago</span>
                    </div>
                </div> 
            <MoreHorizOutlinedIcon/>  
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
            </div>
            <div className="info">
                <div className="item">
                    {liked ? <FavoriteIcon/> : <FavoriteBorderOutlinedIcon/>}
                    12 Likes 
                </div>
                <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                    <SmsOutlinedIcon/>
                    12 Comments 
                </div>
                <div className="item">
                    <ShareOutlinedIcon/>
                    6 Share 
                </div>
            </div>
            {commentOpen && <Comments/>}
        </div>
    </div>
  )
}

export default Post
