import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    renderComments(comments){
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
    renderDish(dish){
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

    render() {
        return(
            <div className={"container"}>
                {this.renderDish(this.props.selectedDish)}
            </div>
        )

    }
}

export default DishDetail;