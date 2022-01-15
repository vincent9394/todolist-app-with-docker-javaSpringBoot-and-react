import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import todoReducer from "./store/reducers/TodoReducer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HelpPage from "./components/HelpPage";
import DonePage from "./components/DonePage";
import NotFoundPage from "./components/exception/NotFoundPage.js";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  HomeOutlined,
  CheckOutlined,
  QuestionOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function App() {
  const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header className="topBar">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key={"home"}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key={"done"}>
                <Link to="/done">Done</Link>
              </Menu.Item>
              <Menu.Item key={"help"}>
                <Link to="/help">Help</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <div className="bottom">
            {" "}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key={"home"}>
                <Link to="/">
                  <HomeOutlined />
                </Link>
              </Menu.Item>
              <Menu.Item key={"done"}>
                <Link to="/done">
                  <CheckOutlined />
                </Link>
              </Menu.Item>
              <Menu.Item key={"help"}>
                <Link to="/help">
                  <QuestionOutlined />
                </Link>
              </Menu.Item>
            </Menu>
          </div>

          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/done" component={DonePage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
