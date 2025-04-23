import { Outlet } from "react-router-dom"
import Navigate from "./Navigate"
const Layout=()=>{
return<div className="HomePage" >
    <header><Navigate/></header>
    <main>
        <Outlet/>
    </main>
</div>
}
export default Layout