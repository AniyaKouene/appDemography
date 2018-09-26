import React, { Component } from "react";
import { getMortality } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MortalityListItem from "../components/MortalityListItem";

class MortalityList extends Component {
  componentWillMount() {
    this.props.getMortality(this.props.defaultCountry);
  }
  renderMortalities() {
    const { mortalities } = this.props;
    return mortalities.map(data => {
      return <MortalityListItem key={data.country} mortality={data} />;
    });
  }

  render() {
    console.log(this.props.mortalities);

    return (
      <div className="row justify-content-center">
        <div class="table-responsive-md">
          <table className="table table-borderless">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Pays</th>
                <th scope="col">Hommes</th>
                <th scope="col">Femmes</th>
              </tr>
            </thead>
            <tbody>{this.renderMortalities()}</tbody>
          </table>
        </div>
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
  return bindActionCreators({ getMortality }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MortalityList);
