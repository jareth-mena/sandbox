import Layout from "@/app/Layout.tsx";
import { Routes, Route } from "react-router-dom";
import {Fragment} from "react";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Fragment/>} />
        </Routes>
    </Layout>
  )
}

export default App
