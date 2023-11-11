import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUserData } from "../redux/store"
import callAPI from "../services/apiServices"

function EditForm({ userData }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // État local pour stocker le nouveau nom d'utilisateur à éditer
  const [newUserName, setNewUserName] = useState(userData?.body?.userName || "")
  const token = useSelector((state) => state.signIn.token) // Récup du token depuis le Redux store
  const userProfile = useSelector((state) => state.userProfile) // Récup infos utlisateur
  const dispatch = useDispatch()

  // Ouverture/fermeture modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Fonction pour sauvegarder la modification du nom d'utilisateur
  const handleSave = async () => {
    try {
      const response = await callAPI("putUserName", token, {
        userName: newUserName,
      })

      dispatch(editUserData(newUserName)) // dispatch de l'action

      closeModal()

      return response
    } catch (error) {
      console.error("Error updating username :", error)
    }
  }

  // Effet déclenché chaque fois que la valeur de userProfile.userName change dans le Redux store
  useEffect(() => {
    setNewUserName(userProfile.userName)
  }, [userProfile.userName])

  return (
    <>
      <button className="edit-button edit-modal" onClick={openModal}>
        Edit Name
      </button>
      {isModalOpen && (
        <div className="edit-section">
          <form className="edit-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-wrapper">
              <label htmlFor="userName">User name:</label>
              <input
                type="text"
                id="userName"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstName">First name:</label>
              <input
                className="input-firstname"
                type="text"
                id="firstName"
                value={userProfile.firstName}
                readOnly
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last name:</label>
              <input
                className="input-lastname"
                type="text"
                id="lastName"
                value={userProfile.lastName}
                readOnly
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                onClick={handleSave}
                className="edit-button save-btn"
              >
                Save
              </button>
              <button className="edit-button cancel-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default EditForm
