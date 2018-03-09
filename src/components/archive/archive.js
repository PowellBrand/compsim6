import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {createBook, getBooks} from '../../ducks/reducer';
import './archive.css'


class Archive extends Component {
    constructor(props){
        super(props)

        this.state = {
            bookData: {}
        }

    }
   
   componentDidMount(){
    //   42K, 42 
       getBooks.get(this.props.match.params.id)
       .then(product => this.setState({bookData}))
   }


    render() {
       
        return (
            <div className="archiveMain" style={{backgroundColor: this.props.bgColor}}>
               <a href = '/'><button>Go Home</button></a>
             
            </div>

        )
    }
}
function mapStateToProps(state){
    return{
        bookData: state.bookData
    }
}


export default  connect(mapStateToProps, {getBooks})(Archive)
