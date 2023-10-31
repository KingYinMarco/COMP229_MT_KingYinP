import React, { Component } from "react";

export default class ShopForm extends Component {
    constructor(props) {
        super(props);

        this.fileInputRef = React.createRef();
        this.setShopName = this.setShopName.bind(this);
        this.setShopDescription = this.setShopDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleFileUploadClick = this.handleFileUploadClick.bind(this);
        
        this.state = {
            shopName: '',
            shopDescription: ''
        }
    }

    handleFileUploadClick() {
        this.fileInputRef.current.click();
    }

    setShopName(e) {
        this.setState({
            shopName: e.target.value
        });
    }

    setShopDescription(e) {
        this.setState({
            shopDescription: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.shopName);
        console.log(this.state.shopDescription);

        this.setState({
            shopName: '',
            shopDescription: ''
        });
    }

    render() {
        return (
            <div className="container">
                <h2>New Shop</h2>
                <form onSubmit={this.onSubmit}>
                <button className="upload-btn" type="button" onClick={this.handleFileUploadClick}>
                        UPLOAD LOGO <i class="fa fa-upload"></i>
                    </button>
                    <input 
                        type="file" 
                        ref={this.fileInputRef} 
                        style={{ display: 'none' }} 
                        onChange={this.handleFileChange} 
                        accept=".jpeg, .jpg, .png"
                    />
                    <div className="form-group col-lg-4">
                        <label htmlFor="Name">Name</label>
                        <input type="text" value={this.state.shopName} onChange={this.setShopName} className="form-control" />
                    </div>
                    <div className="form-group col-lg-4">
                        <label htmlFor="Description">Description</label>
                        <input type="text" value={this.state.shopDescription} onChange={this.setShopDescription} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                    <button className="btn btn-secondary">CANCEL</button>
                </form>
            </div>
        );
    }
}
