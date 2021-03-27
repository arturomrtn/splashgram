import React, { Component } from 'react'
import AlbumService from '../../../service/album.service'
import CommentService from '../../../service/comment.service'
import ImageService from '../../../service/image.service'
import CommentForm from '../Comment/CommentForm'
import './ImageDetails.css'
import { Card } from 'react-bootstrap'

class ImageDetails extends Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            image: null,
            selectedAlbum: {},
        }

        this.albumService = new AlbumService()
        this.commentService = new CommentService()
        this.imageService = new ImageService()
    }

    componentDidMount() {

        this.albumService
            .getAlbumsByOwner(this.props.loggedUser?._id)
            .then(resp => {
                this.setState({
                    selectedAlbum: resp.data[0],
                    albums: resp.data,
                })
            })
            .catch(err => console.log(err))

        this.setSelectedImage()
    }

    handleSelectChange(event) {
        this.setState({ selectedAlbum: this.state.albums.find(album => album.name === event.target.value) })
    }

    handleAddToAlbum() {
        if (!this.state.selectedAlbum?.images) this.state.selectedAlbum.images = []
        this.state.selectedAlbum.images.push(this.state.image)
        this.albumService.addImageToAlbum(this.state.selectedAlbum._id, this.state.selectedAlbum, this.state.image).then(resp => {
            const newImage = resp.data
            console.log('savedImage', newImage)
            this.setState(prevState => ({
                image: { ...prevState.image, _id: newImage._id }
            }))
        })
    }

    setSelectedImage() {
        const { location } = this.props
        const params = new URLSearchParams(location.search)

        const imageId = params.get('id')
        if (imageId) {
            this.imageService.getOneImage(imageId).then(resp => {
                console.log('selectedImage', resp.data)
                this.setState({ image: resp.data })
            })
        }
        else {
            this.setState({
                image: {
                    link: params.get('link'),
                    description: params.get('description'),
                    author: params.get('author'),
                    comments: []
                }
            })
        }
    }

    addComment(comment) {
        console.log('new comment', comment, this.state.image)

        this.state.image.comments.push(comment)
        this.commentService.addCommentToImage(this.state.image).then(resp => {
            const savedImage = resp.data
            console.log('savedImage', savedImage._id)
            this.setState(prevState => ({
                image: { ...prevState.image, _id: savedImage._id }
            }))
        }).catch(error => console.error(error))
    }


    render() {
        const { albums, selectedAlbum, image } = this.state
        return (
            <div className="image-details">
                <Card className="image-card" style={{ width: '100%' }}>
                    <Card.Img src={image?.link} />
                    <Card.Body>
                        <Card.Text>
                            <strong> Descripción:</strong> {image?.description}
                        </Card.Text>
                        <Card.Text>
                            <strong> Autor:</strong> {image?.author}
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/*<img src={image?.link} width="100%" />
                <p> Descripción: {image?.description}</p>
        <p> Autor: {image?.author}</p> */}

                <p>Selecciona un álbum:</p>
                <select name="selectedAlbum" value={selectedAlbum?.name || ''} onChange={event => this.handleSelectChange(event)}>
                    {albums?.map((elm, index) => {
                        return <option key={index} value={elm.name}>{elm.name}</option>
                    })}
                </select>
                <CommentForm image={image} loggedUser={this.props.loggedUser} onCreateComment={comment => this.addComment(comment)} />
                <button onClick={() => this.handleAddToAlbum()}>Añadir a un álbum</button>
            </div>
        )
    }
}

export default ImageDetails

