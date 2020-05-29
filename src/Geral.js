import React, {Component} from 'react';
import firebase from './FirebaseConnection';

class Geral extends Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }

        firebase.database().ref('users').child(firebase.auth().currentUser.uid).child('vehicles').on('value', snap => {
            let state = this.state;
            state.data = []

            snap.forEach(child => {
                state.data.push({
                    model:child.val().model,
                    hrent:child.val().hrent,
                    mient:child.val().mient,
                    plate:child.val().plate
                })
            })

            this.setState(state)
        })

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>TELA GERAL</h1>
                <button onClick={() => this.handleLogout()}>LOGOUT</button>
                <hr></hr>
                <div id='teste'>
                    {

                        this.state.data.map(i => (
                            <div>Modelo: {i.model} - Placa: {i.plate} - Hora Entrada: {i.hrent}:{i.mient} </div>
                        ))
                        
                    }
                <br></br>
                </div>
            </div>
        );
    }
}

export default Geral;