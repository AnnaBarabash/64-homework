import { useState } from 'react'
import { ADD_POST } from '../store/actionsType';
import { connect } from 'react-redux'


function Input({addPost}) {

    const [title, setTitle] = useState('');
    const [textPost, setPost] = useState('');
    const [author, setAuthor] = useState('');


    return (
        <>
            <form>
                < div className="formNew">
                <div className="form-group">
                    <label>Title</label>
                    <input name="title" className="form-control" placeholder="title"
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Post</label>
                    <input name="textPost" className="form-control" placeholder="textPost"
                        onChange={e => setPost(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input name="author" className="form-control" placeholder="Author"
                        onChange={e => setAuthor(e.target.value)} />
                </div>
            
                <button  className="btnInput" type='button' onClick={
                    () => {
                        addPost(title,textPost,author)
                    }}
                >Add Post</button>
                </div>
            </form>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {

        addPost: (title,textPost,author) => dispatch({ type: ADD_POST, payload: {title,textPost,author}})
    }
}


export default connect(null, mapDispatchToProps)(Input);