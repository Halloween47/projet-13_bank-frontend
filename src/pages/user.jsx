import { useDispatch } from 'react-redux'
import { fetchUserDatas, updateLocalStorageUser } from '../store/AuthSlice'
import React, { useState, useEffect } from 'react'
import Account from '../components/account'
import Footer from '../components/footer'
import Header from '../components/header'
import Welcome from '../components/welcome'

function User() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  localStorage.setItem('firstname', firstname);
  useEffect(() => {
    dispatch(fetchUserDatas(token)).then((result) => {
      localStorage.setItem(
        'firstname',
        JSON.stringify(result.data.body.firstName),
        )
        localStorage.setItem(
          'lastname',
          JSON.stringify(result.data.body.lastName),
          )
          setFirstname(result.data.body.firstName)
          setLastname(result.data.body.lastName)
        })
      }, [dispatch, token])
      
      return (
        <div className="App">
        <Header />
        <main className="main bg-dark">
        <Welcome firstName={firstname} lastName={lastname} />
        <h2 className="sr-only">Accounts</h2>
        <Account
        compte="Argent Bank Checking (x8349)"
        sommes="$2,082.79"
        balance="Available Balance"
        />
        <Account
        compte="Argent Bank Savings (x6712)"
        sommes="$10,928.42"
        balance="Available Balance"
        />
        <Account
        compte="Argent Bank Credit Card (x8349)"
        sommes="$184.30"
        balance="Current Balance"
        />
        </main>
        <Footer />
        </div>
        )
      }
      export default User
      