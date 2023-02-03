import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogAuthor from '../blog-author/BlogAuthor'
import './styles.css'
const BlogItem = (props) => {
  const {
    name,
    description,
    brand,
    _id,
    price,
    reviews,
    imageURL,
    category,
  } = props
  const user = props.user
  return (
    <Card className="blog-card">
      <Card.Img variant="top" src={imageURL} className="blog-cover" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <BlogAuthor price={price} id={_id} />
      </Card.Footer>
    </Card>
  )
}

export default BlogItem
