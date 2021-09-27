

const PostListEl = ({ post }) => {

    return (
        <>
            <div className="post">
                Author : {post.author}
                <br />
                Title: {post.title}
                <br />
                Text:      {post.textPost}
            </div>
        </>
    )
}
export default PostListEl;