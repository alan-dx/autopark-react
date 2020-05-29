import React, { useEffect, useState } from 'react';
import firebase from 'firebase';


async function loadContent() {
    let previous = []
    await firebase.database().ref('users').child(firebase.auth().currentUser.uid).child('vehicles').on('value', snap => {
        snap.forEach(child => {
            previous.push({
                name:child.val().model
            })
        })
    })
    console.log(`a: ${previous}`)
    return previous;
}

const Geral = () => {

    const handleLogout = () => {
        firebase.auth().signOut()//Se não houvesse o context API, você teria que redirecionar o usuário via código
    }

    const [listOfVehicles, setListOfVehicles] = useState(loadContent());

    // useEffect(() => {

    //     async function fire() {
    //         console.log(listOfVehicles)
    //         const previousList = listOfVehicles;
    //         await loadContent(previousList, setListOfVehicles);
    //     }

    //     fire()
    // },[])


    return (
        <div>
            <h1>TELA GERAL</h1>
            <button onClick={handleLogout}>LOGOUT</button>
            <hr></hr>
            <div id='teste'>
                {

                    
                }
            <br></br>
            </div>
        </div>
    );
}

export default Geral;