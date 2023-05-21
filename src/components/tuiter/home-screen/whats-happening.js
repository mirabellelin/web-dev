import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <div className="p-3 row">
            <div className="col-1 justify-content-center">
                <img src="https://images.unsplash.com/photo-1596543570665-a34c7aeb1da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                     className="rounded-circle" width="45px" height="45px" alt=""/>
            </div>
            <div className="px-4 col-11">
                <div className="">
                    <textarea className="border-0 bg-black text-white w-100 "
                              placeholder="What's happening?"
                              value={whatsHappening}
                              onChange={(event) =>
                                  setWhatsHappening(event.target.value)}>
                    </textarea>
                </div>
                <hr/>
                <div className="align-items-start">

                        <i className="far fa-image pe-3" />
                        <i className="far fa-chart-bar pe-3" />
                        <i className="far fa-smile pe-3" />
                        <i className="far fa-calendar" />

                    <div className="float-end">
                        <button className="btn btn-primary btn-block rounded-pill px-4"
                                onClick={tuitClickHandler}>
                            Tuit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatsHappening;