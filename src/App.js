import "./App.css";
import Layout from "./layout";
import EndPointsTable from "./modules/endPoints/components/table";

function App() {
    return (
        <div className="App">
            <Layout>
                <EndPointsTable />
            </Layout>
        </div>
    );
}

export default App;
