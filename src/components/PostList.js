import { connect } from "react-redux";
import PostListEl from "./PostListEl";


const PostList = ({ posts }) => {
    return (
        <div>
            {posts.map((post, id, title, textPost,author) => {
                return (
                    <div key={id}>
                        <PostListEl post={post} title={title} textPost={textPost} author={author} />
                    </div>
                )
                })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts 
    }
}


export default connect(mapStateToProps)(PostList);
