import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Row,
    Col,
    Button,
    ModalHeader, Modal, ModalBody, Label
} from "reactstrap";
import {Link} from 'react-router-dom'
import {Control, Errors, LocalForm} from "react-redux-form";
import {Loading} from './LoadingComponent'
import {baseUrl} from "../shared/baseUrl";

const RenderDish = ({dish})=> {
    if(dish)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    else
        return <div/>
    }

    const RenderComments = ({comments, addComment, dishId})=> {
        if (comments != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </div>
            );
        else
            return (
                <div/>
            )
    }

    const DishDetail = (props)=>{
        if (props.isLoading){
            return(
                    <div className={"container"}>
                        <div className={"row"}>
                            <Loading/>
                        </div>
                    </div>
                )
        }
        else if (props.errMess){
            return (
            <div className={"container"}>
                <div className={"row"}>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
            );
        }
        else if (props.dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}
                                        addComment={props.addComment}
                                        dishId={props.dish.id}/>
                    </div>
                </div>
            )
        else
            return (
                <div />
            );
    }

    const maxLength =(len)=> (val) => !(val) || (val.length <= len);
    const minLength =(len)=> (val) => (val) && (val.length >= len);

     class CommentForm extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                isModalOpen: false
            }

            this.toggleModal= this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleSubmit = (values) =>{
            this.toggleModal();
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
        }
        toggleModal = () =>{
            this.setState((prev)=>({
                isModalOpen : !prev.isModalOpen
            }));
            console.log(this.state.isModalOpen)
        }

        render() {
            return(
                <div className="col-12 col-md-9">
                    <Modal isOpen={this.state.isModalOpen} >
                        <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={this.handleSubmit} toggle={this.toggleModal}>
                                <Row className={"form-group"}>
                                    <Col md={10}>
                                        <Label htmlFor="ratingSelect">Rating</Label>
                                    </Col>
                                    <Col md={12}>
                                        <Control.select model={".select"}  name="select" id="ratingSelect"
                                                        className={"form-control"}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className={"form-group"}>
                                    <Col md={10}>
                                        <Label htmlFor="author">Your Name</Label>
                                    </Col>
                                    <Col md={12}>
                                        <Control.text model={".author"} id="author" name="author"
                                                      placeholder="Your Name"
                                                      className={"form-control"}
                                                      validators={{
                                                       minLength: minLength(3),
                                                       maxLength: maxLength(15) }} />
                                        <Errors model={".author"}
                                                className={"text-danger"}
                                                show={"touched"}
                                                messages={{
                                                    minLength: 'Must be greater than 3 char',
                                                    maxLength: 'Must be 15 char or less'
                                                }}/>
                                    </Col>
                                </Row>
                                <Row className={"form-group"}>
                                    <Col>
                                       <Label htmlFor="commentText" >Comment</Label>
                                    </Col>
                                    <Col md={12}>
                                        <Control.textarea model={".comment"} name="text" id="commentText" rows={6}
                                                          className={"form-control"}
                                                          placeholder="Your Comment"/>
                                    </Col>
                                </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                        </ModalBody>
                    </Modal>
                    <Button onClick={this.toggleModal} outline type="submit"><span className={"fa fa-pencil"}/> Submit Comment</Button>
                </div>
            );
        }
    }

export default DishDetail;