import React, { Component } from "react";
import { connect } from "react-redux"; 
import { fetchUsers } from '../redux/actions/users'; 
import Loader from "./Loader";
import ReactPaginate from 'react-paginate';
import {Container, Row, Col, Button, Card} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSearch, 
    faPlus,  
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

const initialState = { 
    currPage: 1,
    postsPerPage: 5,
    posts:[],
    pageCount: 0,
    offset: 0,
    data: [],
    perPage: 4,
    currentPage: 0,
    loadingSearch: false,
    image_file:null,
    imageName: '',
    fetching: false,
    currentlyDisplayed: []
};

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = initialState; 
    }  
    getEvents = async () => {  
        await this.props.dispatch(fetchUsers());
        if(this.props.users.fetchUsers.isFulfilled){
        this.setState({ 
            currentlyDisplayed: this.props.users.fetchUsers.data
          }); 
        }
    };  

    convertDate=(params)=> { 
        const date = new Date(params); 
        const arrWaktu = date.toISOString().substr(0, 10);
        const convert = arrWaktu.split("-"); 
        return `${convert[2]} ${convert[1]} `
    }
    
    receivedData = async ()=> {
        // await this.getEvents()
        if(this.props.users.fetchUsers.isFulfilled){
            let data = this.props.users.fetchUsers.data
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map((pd, i) => <React.Fragment> 
                <Card key={pd.login.username} id={pd.login.username} style={{ width: '15rem', marginInline: '0.5em', marginBlockEnd: '0.5em' }}>
                    <Card.Header className="bg-transparent">
                        <Row>
                            <Col>Personnel ID : <span style={{color: '#5abfb6'}}>{pd.login.username}</span></Col>
                            <Col xs={1} lg={1}><FontAwesomeIcon icon={faEllipsisV} /></Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs={4} md={12} lg={12} id="foto-cards">
                                <Card.Img variant="top" src={pd.picture.large} className="rounded-circle mb-2"/>
                            </Col>
                            <Col xs={8} md={12} lg={12}>
                                <Card.Title>Name</Card.Title>
                                <Card.Text> {pd.name.title}{' '}{pd.name.first}{' '}{pd.name.last} </Card.Text> 
                                <Card.Title>Telephone</Card.Title>
                                <Card.Text> {pd.phone} </Card.Text> 
                                <Card.Title className="d-none d-sm-block">Birthday </Card.Title>
                                <Card.Text className="d-none d-sm-block"> {this.convertDate(pd.dob.date)} </Card.Text> 
                                <Card.Title className="d-none d-sm-block">Email</Card.Title>
                                <Card.Text className="d-none d-sm-block"> {pd.email} </Card.Text> 
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </React.Fragment>)
    
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
            
                postData
            })
        }
    }
    componentDidMount = async () => { 
        await this.getEvents()
        await this.receivedData()
    }

    handlePageClick = (e) => {
        this.setState({loadingSearch: false})
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
    
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
    
    };

    render() {  

        if(!this.props.users.fetchUsers.isFulfilled){
            return <Loader/>
        }
        return(
            <Container>
                <Row id="user-top" className="bg-white mb-5 ml-0 mr-0 mt-5 p-3">
                    <Col xs={12} lg={6} id="judul">
                        <h1>PERSONNEL LIST</h1>
                        <label>List of all personnels</label>
                    </Col>
                    <Col xs={12} lg={6} id="cari-tambah-btn">
                        <Button xs={12} lg={6} variant="outline-success"><span className="text-info"><FontAwesomeIcon icon={faSearch} />{' '}</span>Find Personnel</Button>{' '}
                        <Button xs={12} lg={6} variant="info">Add Personnel{' '}<FontAwesomeIcon icon={faPlus} /></Button>{' '}
                    </Col>
                </Row>
                <Row className="mb-5 ml-0 mr-0 mt-5" style={{justifyContent: 'space-between'}}>
                {
                    this.state.postData
                }
                </Row>
                <Row className="justify-content-center">
                    <div id="paginate" className=""> 
                        {/* Using React Paginate */} 
                        <div>
                            <ReactPaginate
                            previousLabel={'< Previous Page'}
                            nextLabel={'Next Page >'}
                            breakLabel={" "}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={0}
                            pageRangeDisplayed={0}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"btn active d-none"}/>
                        </div>
                    </div>
                </Row>
            </Container>
        )
    }
};
// export default Users;
const mapStateToProps = (state) => {
    return {
        users: state.users
    };
  };
  
export default connect(mapStateToProps)(Users);