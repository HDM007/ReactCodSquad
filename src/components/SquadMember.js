import React from 'react';
import PropTypes from "prop-types";

class SquadMember extends React.Component{
    static propTypes = {
        details: PropTypes.shape({
            name: PropTypes.string,
            callsign: PropTypes.string,
            desc:PropTypes.string,
            strengths: PropTypes.array,
            status: PropTypes.string,
            ratio: PropTypes.number
        })
    }

    render() {
        const {name, callsign, desc, strengths, status, ratio} = this.props.details;
        return <li className="squadmember">
            <h3>{name} </h3>  <span className="callsign">Callsign: {callsign}</span>
            <div className="squadmember-details">
            <ul className="strengths">
                <li>{strengths[0]}</li>
                <li>{strengths[1]}</li>
                <li>{strengths[2]}</li>
            </ul>
            <p className="snippet">{desc}. {status} for deployment.</p>
            </div>
            <h4>K/D Ratio: {ratio}</h4>

        </li>
    }

}

export default SquadMember;