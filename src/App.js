import './App.css';
import Button from '@mui/material/Button';
import ButtonBar from './components/ButtonBar';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard';
import Sales from './components/Sales';
import Shipping from './components/Shipping';
import Inventory from './components/Inventory';
import InventoryItems from './components/InventoryItems';
import InventoryHistory from './components/InventoryHistory';
import InventoryTransfer from './components/InventoryTransfer';
import Customers from './components/Customers';
import PriceChanges from './components/PriceChanges';
import StashedSales from './components/StashedSales';
import CompletedSales from './components/CompletedSales';
import ItemsSold from './components/ItemsSold';
import ItemsTraded from './components/ItemsTraded';


import Admin from './components/Admin';
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";

  
const router = createBrowserRouter([
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
        path: "/Inventory/Summary",
        element: <Inventory />,
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
        path: "/PriceChanges",
        element: <PriceChanges />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
    ]
  }
]);

function App() {



  return ( //returns html 
    <div className="App">
      <CssBaseline />
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
