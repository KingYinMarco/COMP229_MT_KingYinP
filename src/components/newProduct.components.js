import React, { Component } from "react";
import'./style.css';
export default class ProductForm extends Component {
    constructor(props) {
        super(props);

        this.fileInputRef = React.createRef();
        this.setProductName = this.setProductName.bind(this);
        this.setProductDescription = this.setProductDescription.bind(this);
        this.setProductCategory = this.setProductCategory.bind(this);
        this.setProductQuantity = this.setProductQuantity.bind(this);
        this.setProductPrice = this.setProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleFileUploadClick = this.handleFileUploadClick.bind(this);
        
        this.state = {
            productName: '',
            productDescription: '',
            productCategory: '',
            productQuantity: '',
            productPrice: '',
            productImage: null
        }
    }

    handleFileUploadClick() {
        this.fileInputRef.current.click();
    }

    setProductName(e) {
        this.setState({
            productName: e.target.value
        });
    }

    setProductDescription(e) {
        this.setState({
            productDescription: e.target.value
        });
    }

    setProductCategory(e) {
        this.setState({
            productCategory: e.target.value
        });
    }

    setProductQuantity(e) {
        this.setState({
            productQuantity: e.target.value
        });
    }

    setProductPrice(e) {
        this.setState({
            productPrice: e.target.value
        });
    }

    setProductImage(e) {
        this.setState({
            productImage: e.target.files[0]
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.productName);
        console.log(this.state.productDescription);
        console.log(this.state.productCategory);
        console.log(this.state.productQuantity);
        console.log(this.state.productPrice);

        this.setState({
            productName: '',
            productDescription: '',
            productCategory: '',
            productQuantity: '',
            productPrice: ''
        });
    }

    render() {
        return (
            <div className="container">
                <h2>New Product</h2>
                <form onSubmit={this.onSubmit}>
                    <button className="upload-btn" type="button" onClick={this.handleFileUploadClick}>
                        UPLOAD PHOTO
                    </button>
                    <input 
                        type="file" 
                        ref={this.fileInputRef} 
                        style={{ display: 'none' }} 
                        onChange={this.handleFileChange} 
                        accept=".jpeg, .jpg, .png"
                    />
                    <div className="insert">
                        <label htmlFor="Name">Name</label>
                        <input type="text"  value={this.state.productName} onChange={this.setProductName} className="form-control" />
                    </div>
                    <div className="insert">
                        <label htmlFor="Description">Description</label>
                        <input type="text" value={this.state.productDescription} onChange={this.setProductDescription} className="form-control" />
                    </div>
                    <div className="insert">
                        <label htmlFor="Category">Category</label>
                        <input type="text" value={this.state.productCategory} onChange={this.setProductCategory} className="form-control" />
                    </div>
                    <div className="insert">
                        <label htmlFor="Quantity">Quantity</label>
                        <input type="number" value={this.state.productQuantity} onChange={this.setProductQuantity} className="form-control" />
                    </div>
                    <div className="insert">
                        <label htmlFor="Price">Price</label>
                        <input type="text" value={this.state.productPrice} onChange={this.setProductPrice} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                    <button className="btn btn-secondary">CANCEL</button>
                </form>
            </div>
        );
    }
}
