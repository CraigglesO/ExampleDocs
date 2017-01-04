/* eslint-disable */
import React from 'react';

export default React.createClass({

  render() {
    let api_stability_type = "api_stability sh_sourceCode api_stability_";
    let stability = '';

    switch (this.props.stability) {
      case 0:
        api_stability_type += "0";
        stability = 'Stability: 0 - Deprecated';
        break;
      case 1:
        api_stability_type += "1";
        stability = 'Stability: 1 - Experimental';
        break;
      case 2:
        api_stability_type += "2";
        stability = 'Stability: 2 - Stable';
        break;
      case 3:
        api_stability_type += "3";
        stability = 'Stability: 3 - Locked';
        break;
    }


    return (
        <pre className={api_stability_type}>
          <div className="stability">
            {stability}
          </div>
          <div className="stability-content">
            {this.props.content}
          </div>
        </pre>
    )

  }
});
