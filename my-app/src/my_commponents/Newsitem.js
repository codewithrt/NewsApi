import React from 'react';
import photom from './nonphoto.jpg'

function Newsitem(props) {

    return (
        <>
            <div className="card " style={{ width: "18rem" }}>
                <img src={props.imgurl ? props.imgurl : photom} className="card-img-top" alt="..." />


                <div className="card-body">
                    <div className="container">
                    <span className="position-absolute top-0  badge rounded-pill bg-danger" style={{right:"0"}}>
                        {props.source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <h4 className="card-title"> {props.title} </h4>
                    <p className="card-text">{props.description ? props.description : "...."}</p>
                    <a href={props.read} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsitem;
