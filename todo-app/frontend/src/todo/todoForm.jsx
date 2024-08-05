import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import IconButton from "../template/iconButton";
import { IoMdClose } from "react-icons/io";

import Grid from "../template/grid";
export default (props) => {
    return (
        <form className="todoForm row p-3">
            <Grid cols="12 9 10  ">
                <input type="text" id="description" className="form-control" placeholder="Adicionar Tarefa" value={props.description} onChange={props.handleChange} />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style="primary" icon={<FaPlus />} onClick={props.handleAdd} />
                <IconButton style="info" icon={<FaSearch />} onClick={props.handleSearch} />

                <IconButton style="danger" icon={<IoMdClose />} onClick={props.handleClear} />


            </Grid>

        </form >
    );
}