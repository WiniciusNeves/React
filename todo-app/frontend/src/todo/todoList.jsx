import React from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import IconButton from "../template/iconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "../todo/todoAction";

const TodoList = ({ list = [], handleRemove, handleMarkAsDone, handleMarkAsPending, }) => {

    const renderRows = () => {
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style="success"
                        icon={<FaCheck />}
                        hide={todo.done}
                        onClick={() => handleMarkAsDone(todo)}
                    />
                    <IconButton
                        style="warning"
                        icon={<IoReload />}
                        hide={!todo.done}
                        onClick={() => handleMarkAsPending(todo)}
                    />
                    <IconButton
                        style="danger"
                        icon={<FaTrashAlt />}
                        hide={!todo.done}
                        onClick={() => handleRemove(todo)}
                    />
                </td>
            </tr>
        ));
    };

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Descrição</th>
                    <th className="table-actions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch => bindActionCreators({ handleRemove: remove, handleMarkAsDone: markAsDone, handleMarkAsPending: markAsPending }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
