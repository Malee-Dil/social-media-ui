import Post from "../post/Post";
import "./posts.scss"

const Posts = () => {

    //TEMP
    const posts = [
        {
            id:1,
            name: "John Doe",
            userId:1,
            profilePic:
            "https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"We didn’t realize we were making memories; we just knew we were having fun. 🎉",
            img:"https://media.istockphoto.com/id/1480574526/photo/happy-multigenerational-people-having-fun-sitting-on-grass-in-a-public-park.jpg?s=1024x1024&w=is&k=20&c=obz049FFmlNHxkf-flcFOIpJT0qCHk4TWIeYEmWURsQ="
        },
        {
            id:2,
            name: "John cena",
            userId:2,
            profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/John_Cena_2012.jpg",
            desc:"Success is the sum of small efforts, repeated daily",
            img:"https://media.istockphoto.com/id/1677899489/photo/friends-selfie-and-hands-outdoor-for-social-media-fashion-and-fun-adventure-below-diversity.jpg?s=1024x1024&w=is&k=20&c=73GPEK_orO222q8Q6C6S3F95wo6ZjLrkhBQSnwTvJcE="
        },
    ];

    return <div className="posts">
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
        </div>;
    };
    
    export default Posts;


