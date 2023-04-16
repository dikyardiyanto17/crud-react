import router from "./routes";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux'
import store from "./stores";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
