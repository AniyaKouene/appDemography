import React, { Component } from "react";
import { getMortality } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MortalityListItem from "../components/MortalityListItem";

class MortalityList extends Component {
    componentWillMount(){
        this.props.getMortality(this.props.defaultCountry)
    }
  renderMortalities() {
    const { mortalities } = this.props;
    return mortalities.map(data => {
      return <MortalityListItem key={data.country} mortality={data}/>;
    });
  }

  render() {
    console.log(this.props.mortalities);

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Pays</th>
              <th className="col-md-6">Hommes</th>
              <th className="col-md-6">Femmes</th>
            </tr>
          </thead>
          <tbody>{this.renderMortalities()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    mortalities: state.mortality
  };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getMortality}, dispatch)
  };
export default connect(mapStateToProps, mapDispatchToProps)(MortalityList);
