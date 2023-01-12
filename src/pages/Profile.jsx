import { useEffect, useState } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import routes from '../config/routes'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

function Profiles() {
  const auth = getAuth()

  const [changeDetails, setChangeDetails] = useState(false)

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const { name, email } = formData

  const navigage = useNavigate()

  const onLogout = (e) => {
    auth.signOut()
    navigage(routes.explore)
  }

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // update in firebase auth
        await updateProfile(auth.currentUser, { displayName: name })
        // update in firestore
        await updateDoc(doc(db, 'users', auth.currentUser.uid), { name })
        toast.success(`Success change your name to ${name}`)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleOnChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className='profile'>
      <header className='profileHeader'>
        <p className='pageHeader'>My Profile</p>
        <button type='button' className='logOut' onClick={onLogout}>
          Logout
        </button>
      </header>
      <main>
        <div className='profileDetailsHeader'>
          <p className='profileDetailsText'>Personal Details</p>
          <p
            className='changePersonalDetails'
            onClick={() => {
              changeDetails && onSubmit()
              setChangeDetails((state) => !state)
            }}
          >
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>
        <div className='profileCard'>
          <form>
            <input
              type='text'
              id='name'
              className={!changeDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changeDetails}
              value={name}
              onChange={handleOnChange}
            />
            <input type='email' className={'profileEmail'} disabled value={email} />
          </form>
        </div>
      </main>
    </div>
  )
}

export default Profiles
