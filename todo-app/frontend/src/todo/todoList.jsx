import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import IconButton from "../template/iconButton";


const TodoList = (props) => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon={<FaCheck />} hide={todo.done} onClick={() => props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton style="warning" icon={<IoReload />} hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)}></IconButton>
                    <IconButton style="danger" icon={<FaTrashAlt />} hide={!todo.done} onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ));
    }

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
}

export default TodoList;
