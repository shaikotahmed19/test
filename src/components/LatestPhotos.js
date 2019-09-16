import React, { Component } from 'react'
import axios from 'axios'

export default class Photos extends Component {

    state = {
        photos: [],
        page: 1,
    }
    componentDidMount() {
        axios.get('https://api.unsplash.com/photos/?client_id=3bf7eff9b1f080505b91e87e9425fb336f3cda8e524803bf1da893409a5a1577&per_page=13&page=' + this.state.page).then(
            res => this.setState({
                photos: res.data
            })
        )

        this.setState({
            page: this.state.page + 1
        });

    }

    loadNextPage = (e) => {
        this.setState({
            page: this.state.page + 1
        });

        axios.get('https://api.unsplash.com/photos/?client_id=3bf7eff9b1f080505b91e87e9425fb336f3cda8e524803bf1da893409a5a1577&per_page=13&page=' + this.state.page).then(
            res => this.setState({
                photos: res.data
            })
        )

    }

    render() {
        console.log(this.state.photos)

        return (
            <React.Fragment>
                <div className="row justify-content-center">
                <div className="col-12">
                    <div className="load-more-btn">
                        <button onClick={this.loadNextPage}>Go Page {this.state.page}</button>
                    </div>
                </div>
                {
                    this.state.photos.map((photo) => (
                        <div key={photo.id} className="col-lg-4">
                            <div className="single-photo-item">
                                <a href="/" className="d-block">
                                    <div className="photo-wrapper">
                                        <img src={photo.urls.small} alt={photo.description}/>
                                    </div>
                                    <h5>{photo.description}</h5>
                                    <p className="cat-name">by - {photo.user.first_name} {photo.user.last_name}</p>
                                </a>
                            </div>
                        </div>
                    ))
                }
                </div>
            </React.Fragment>
        ) 

    }
}
