import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);


    }

    renderComments(comnt)
    {
        if( comnt != null)
        {
            const coment = comnt.map((cmnt) => {
                return (
                    <div key={cmnt.id}>
                        <p> {cmnt.comment} </p>
                        <p> -- {cmnt.author} , {cmnt.date} </p>
                    </div>
                );
            });

            return (
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {coment}
                </div>
            )
        }
        else return(
            <div  className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
            </div>
        )
    }

    renderDish(dish) {

        if (dish != null)
        {
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }


    render()
    {
        return(
            <div>
                {this.renderDish(this.props.dis)}
            </div>
        );
    }


}


export default DishDetail;