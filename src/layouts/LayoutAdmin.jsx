import Metrics from "../components/Metrics";
import Sidebar from "../components/Sidebar";

import "../scss/Styles.scss";

function LayoutAdmin(props) {
   const { children } = props;
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="metrics">
          {children}
      </div>
    </div>
  );
}

export default LayoutAdmin;