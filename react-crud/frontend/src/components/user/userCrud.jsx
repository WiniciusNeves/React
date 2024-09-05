import React, { Component } from "react";
import Main from "../templates/Main";
import axios from "axios";

const BASE_URL = "http://localhost:3001/users";

const initialState = {
    user: { name: '', email: '' },
    list: []
};

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Gerenciamento de usuários"
};

export default class UserCrud extends Component {

    state = { ...initialState };

    componentDidMount() {
        axios(BASE_URL).then(resp => {
            this.setState({ list: resp.data });
        });
    }

    clear = () => {
        this.setState({ user: { name: '', email: '' } });
    }

    save = () => {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${BASE_URL}/${user.id}` : BASE_URL;
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({ user: { name: '', email: '' }, list });
            });
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id);
        if (add) list.unshift(user);
        return list;
    }

    updateField = (event) => {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm = () => {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={this.updateField}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={this.updateField}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={this.save}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={this.clear}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    load = (user) => {
        this.setState({ user });
    }

    remove = (user) => {
        axios.delete(`${BASE_URL}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false);
            this.setState({ list });
        });
    }

    renderTable = () => {
        return (
            <table className="table table-hover mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        );
    }

    renderList = () => {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Main {...headerProps}>
                <div className="user-crud">
                    {this.renderForm()}
                    {this.renderTable()}
                </div>
            </Main>
        );
    }
}
