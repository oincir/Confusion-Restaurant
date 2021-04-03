import React, {Component} from 'react';
import {Card, CardBody, CardDeck, CardGroup, CardImg, CardText, CardTitle} from "reactstrap";

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.state={
        }
    }


    render() {
        const dish = this.props.selectedDish
        if(dish != null){
            return (
                <CardDeck className="col-12 col-md-10 m-1">
                    <Card>
                        <CardImg width={"100%"} src={dish.image} alt={dish.name}/>
                        <CardTitle width={"100%"} >{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle width={"100%"} >Comments</CardTitle>
                            {dish.comments.map((comment)=>{
                                let date= new Date(comment.date);
                                return(
                                <CardText>
                                    {comment.comment}<br/><br/>-- {comment.author} , {date.toLocaleString('default', { month: 'short' })} {date.getDay()}, {date.getFullYear()}
                                </CardText>
                               );
                            })}
                        </CardBody>
                    </Card>
                </CardDeck>
            );
        }else{
            return(
                <div/>
            );
        }
    }
}

export default Dishdetail;