import dashboard from "../../dashboard.json"
import {Container} from "./App.styled.js";
import Dashboard from "./Dashboard/Dashboard.jsx";

function App() {
    return (
    <>
        <Container>
            <Dashboard data={dashboard.dashboard}/>
        </Container>
    </>
  )
}

export default App
