import React from "react";

class Extra extends React.Component {
    render() {
        return (
            <div className="extra-content">
                <h1>Table</h1>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </table>
                <h1>Sound</h1>
                <audio controls>
                    <source src={require("../images/thehangingtree.mp3")} type="audio/mpeg" />
                </audio>
            </div>

        );
    }
}

export default Extra;