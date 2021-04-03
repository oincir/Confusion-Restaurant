import React, {Component} from 'react';
import {Card, CardBody,CardGroup, CardImg, CardText, CardTitle} from "reactstrap";

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.state={
        }
    }

    renderComments(comments){
        if (comments != null){
            const comms = comments.map((comm)=>{
                let date= new Date(comm.date);
                return(
                    <div key={comm.key} className={"container"}>
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
            <div>
                {this.renderDish(this.props.selectedDish)}
            </div>
        )

    }
}

export default Dishdetail;