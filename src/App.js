import './App.css';
import Button from '@mui/material/Button';
import ButtonBar from './components/ButtonBar';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard';
import Sales from './components/Sales';
import Shipping from './components/Shipping';
import Inventory from './components/Inventory';
import InventorySummary from './components/InventorySummary'
import InventoryItems from './components/InventoryItems';
import InventoryHistory from './components/InventoryHistory';
import InventoryTransfer from './components/InventoryTransfer';
import Customers from './components/Customers';
import PriceChanges from './components/PriceChanges';
import StashedSales from './components/StashedSales';
import CompletedSales from './components/CompletedSales';
import ItemsSold from './components/ItemsSold';
import ItemsTraded from './components/ItemsTraded';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount} from './counterSlice'
import { useGetPokemonByNameQuery } from './services/pokemon'
import Employees from './components/Employees';
import Stores from './components/Stores';
import NewCustomer from './components/NewCustomer';
import NewEmployee from './components/NewEmployee';
import Login from './components/Login';


import Admin from './components/Admin';
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";

  
const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/Login"
  },
  {
    element: <PermanentDrawerLeft /> ,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/Sales",
        element: <Sales />,
      },
      {
        path: "/Sales/StashedSales",
        element: <StashedSales />,
      },
      {
        path: "/Sales/CompletedSales",
        element: <CompletedSales />,
      },
      {
        path: "/Sales/ItemsSold",
        element: <ItemsSold />,
      },
      {
        path: "/Sales/ItemsTraded",
        element: <ItemsTraded />,
      },
      {
        path: "/Shipping",
        element: <Shipping />,
      },
      {
        path: "/Inventory",
        element: <Inventory />,
      },
      {
        path: "/Inventory/Summary",
        element: <InventorySummary />,
      },
      {
        path: "/Inventory/Items",
        element: <InventoryItems />,
      },
      {
        path: "/Inventory/History",
        element: <InventoryHistory />,
      },
      {
        path: "/Inventory/Transfer",
        element: <InventoryTransfer />,
      },
      {
        path: "/Customers",
        element: <Customers />,
      },
      {
        path: "/Customers/New",
        element: <NewCustomer />,
      },
      {
        path: "/PriceChanges",
        element: <PriceChanges />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
      {
        path: "/Admin/Subscription",
        element: <Admin />,
      },
      {
        path: "/Admin/Stores",
        element: <Stores />,
      },
      {
        path: "/Admin/Employees",
        element: <Employees />,
      },
      {
        path: "/Admin/Employees/New",
        element: <NewEmployee />,
      },
      {
        path: "/Admin/Invoices",
        element: <Admin />,
      },
    ]
  }
]);

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  <button aria-label="Increment by specific value"
          onClick={() => dispatch(incrementByAmount())}
  >
    Increment
  </button>

  return ( //returns html 
    <div className="App">
      <CssBaseline />
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
