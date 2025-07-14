import "./profile.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Posts from "../../components/posts/Posts";


export const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
          <img 
            src="https://th.bing.com/th/id/R.767f54a2d8fad2c82602eead379e7917?rik=jlgGuRNP1MUoaw&pid=ImgRaw&r=0&sres=1&sresct=1"  
            alt=""
            className="cover" 
          />
          <img 
            src="https://th.bing.com/th/id/OIP.jwYhdRF2gDdFLN6f8HjSMwHaHL?rs=1&pid=ImgDetMain" 
            alt=""
            className="profilePic" 
          />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
          <a href="https://www.facebook.com/">
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <LocationOnIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile