import Admin from "./components/Admin";
import Maker from "./components/Maker";
import Authoriser from "./components/Authoriser";
const Dashboard = () => {
  const id = "Au";

  return (
    <div>
      {/* {id === "A" && <Admin />} */}
      {/* {id === "M" && <Maker />} */}
      {id === "Au" && <Authoriser />}
    </div>
  );
};

export default Dashboard;
