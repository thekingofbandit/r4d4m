import React from "react";

interface c {
    r : number;
    g : number;
    b : number;
}

interface d {
    h : number;
    s : number;
    l : number;
}
interface IProps {
    rgb : Array < c >;
    hsl : Array < d >;
    color : string;
    index : number;
    toDelete : (index : number) => void;
}

const Box : React.FunctionComponent < IProps > = (props) => {
    return (
        <div>
            <div
                className="tw-box"
                style={{
                backgroundColor: props.color
            }}/>
            <div className="tw-card">
                <label>{props.color}</label>
                <button
                    type="button"
                    className="tw-btn-delete"
                    name="btn_delete"
                    onClick={() => props.toDelete(props.index)}>
                    x
                </button>
            </div>
        </div>
    );
};

export default Box;
