import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
  import Formularios from './Formularios';

class Login extends Component {

    constructor() {
      super();
      this.state = {
        primerNombre: '',
        apellido: '',
        email: '',
        contraseña: '',
        _id: '',
        tasks: []
       
      };
      this.handleChange = this.handleChange.bind(this);
      this.addTask = this.addTask.bind(this);
    }
  
    handleChange(e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }
  
  
    addTask(e) {
      e.preventDefault();
      if (this.state._id) {
        fetch(`/api/cliente/${this.state._id}`, {
          method: 'PUT',
          body: JSON.stringify({
            primerNombre: this.state.primerNombre,
            apellido: this.state.apellido,
            email: this.state.email,
            contraseña: this.state.contraseña,
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            window.M.toast({ html: 'Informacion usuario actualizada' });
            this.setState({ _id: '', primerNombre: '', apellido: '', email: '', contraseña: ''});
            this.fetchTasks();
          });
      } else {
        fetch('/api/cliente', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            window.M.toast({ html: 'Usuario guardado' });
            this.setState({ primerNombre: '', apellido: '', email: '', contraseña: '' });
            this.fetchTasks();
          })
          .catch(err => console.error(err));
      }
  
    }
  
    deleteTask(id) {
      if (confirm('esta seguro que quiere borrar su usuario?')) {
        fetch(`/api/cliente/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            M.toast({ html: 'Usuario borrado' });
            this.fetchTasks();
          });
      }
    }
  
    editTask(id) {
      fetch(`/api/cliente/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            primerNombre: data.primerNombre,
            apellido: data.apellido,
            email: data.email,
            contraseña: data.contraseña,
            _id: data._id
          });
        });
    }
  
  
    componentDidMount() {
      this.fetchTasks();
    }
  
    fetchTasks() {
      fetch('/api/cliente')
        .then(res => res.json())
        .then(data => {
          this.setState({ tasks: data });
          console.log(this.state.tasks);
        });
    }
  
    render() {
      return (
        
        <div>
          {/* NAVIGATION */}
          <nav className="light-blue darken-4">
            <div className="container">
              <div className="nav-wrapper">
  
                <a href="#" className="brand-logo">Usuario</a>
              </div>
            </div>
          </nav>
  
          <div className="container">
            <div className="row">
              <div className="col s5">
                <div className="card">
                  <div className="card-content">
  
                    <form onSubmit={this.addTask}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input name="primerNombre" onChange={this.handleChange} value={this.state.primerNombre} type="text" placeholder="Primer Nombre" autoFocus />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input name="apellido" onChange={this.handleChange} value={this.state.apellido} type="text" placeholder="Apellido"  />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input name="email" onChange={this.handleChange} value={this.state.email} type="text" placeholder="Email"  />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input name="contraseña" onChange={this.handleChange} value={this.state.contraseña} type="password" placeholder="Contraseña"  />
                        </div>
                      </div>
                      <button type="submit" className="btn light-blue darken-4" >
                        <Link to ="/">Registrarse</Link>
                      </button>
                      <span> </span>
                      <button className="btn light-blue darken-4" >
                        <Link to="/formularios"> Entrar</Link>
                      </button>
                      
                    </form>
                  </div>
                </div>
              </div> 
            </div>
          </div>
       
        </div>
        
      )
    }
  }
  
  export default Login;