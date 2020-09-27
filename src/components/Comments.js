import React from 'react'
import Comment from './Comment'

const Comments = function(){
    return(
        <div className="commentsContainer">
            <div className="commentsTitle">
                <h3>Comments</h3>
            </div>
            <div className="comment">
                <Comment />
                <div className="reply">
                    <Comment />
                </div>
            </div>
            <div className="comment">
                <Comment />
                <div className="reply">
                    <Comment />
                </div>
            </div>
            <div className="comment">
                <Comment />
                <div className="reply">
                    <Comment />
                </div>
            </div>

        </div>
    )
}

export default Comments;