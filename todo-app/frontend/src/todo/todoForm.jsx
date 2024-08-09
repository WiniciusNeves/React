import React, { Component } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import IconButton from "../template/iconButton";
import Grid from "../template/grid";

import { bindActionCreators } from "redux";
import { changeDescription, search, add, todoClear } from "../todo/todoAction";
import { connect } from "react-redux";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search(this.props.description); // Busca inicial com filtro de descrição
    }

    keyHandler(e) {
        const { add, search, description, todoClear } = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? search(description) : add(description); // Pesquisa com filtro de descrição
        } else if (e.key === 'Escape') {
            todoClear();
        }
    }

    render() {
        const { description, changeDescription, add, search, todoClear } = this.props;

        return (
            <form className="todoForm row p-3">
                <Grid cols="12 9 10">
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Adicionar Tarefa"
                        value={description}
                        onChange={changeDescription}
                        onKeyUp={this.keyHandler}
                    />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon={<FaPlus />} onClick={() => add(description)} />
                    <IconButton style="info" icon={<FaSearch />} onClick={() => search(description)} /> {/* Pesquisa com filtro de descrição */}
                    <IconButton style="default border" icon={<IoMdClose />} onClick={() => todoClear()} />
                </Grid>
            </form>
        );
    }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, todoClear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);