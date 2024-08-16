import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default (props) => (
    <ul className="sidebar-menu">
        <MenuItem path="#" icon="dashboard" label="Home" />
        <MenuTree label="Cadastrar" icon="edit">
            <MenuItem path="/#/BillingCycles" icon="usd" label="Ciclo de Pagamento" />
        </MenuTree>
    </ul>
)