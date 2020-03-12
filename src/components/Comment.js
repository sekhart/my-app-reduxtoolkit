import React from 'react'

export const Comment = ({ comment }) => (
    <article className="comment">
        <h2>{comment.name}</h2>
        <p>{comment.body.substring(0, 200)}</p>
    </article>
)