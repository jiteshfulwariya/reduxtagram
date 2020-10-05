import React from 'react';

class Comments extends React.Component {

    renderComments(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.match.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    };

    handleSubmit(e) {
        console.log('submitting')
        e.preventDefault();
        const { postId } = this.props.match.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    };

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComments.bind(this))}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="author" placeholder="author" type="text"></input>
                    <input ref="comment" placeholder="comment" type="text"></input>
                    <input type="submit" hidden></input>
                </form>
            </div>
        );
    }
}

export default Comments;