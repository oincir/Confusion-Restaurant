import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle,Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from 'react-router-dom'


    const RenderComments = (comments, addComment, dishId)=>{
        if (comments != null){
            const comms = comments.map((comm)=>{
                return(
                    <div key={comm.key}>
                        {comm.comment}<br/><br/>-- {comm.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}
                    </div>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comms}
                </div>
            )
        }
        else{
            return (
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                </div>
            )
        }
    }
    const RenderDish = (dish)=> {
        if(dish != null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            );
        }else{
            return(
                <div/>
            );
        }
    }

    const DishDetail = (props)=>{
        if (props.dish != null)
            return(
                <div className={"container"}>
                    <div className={"row"}>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to={`/menu`}>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className={"col-12"}>
                            <h3>{props.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}/>
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId = {props.dish.id}
                        />

                    </div>
                </div>
            )
        else
            return (
                <div />
            )
    }

export default DishDetail;