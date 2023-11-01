import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUserData } from "../redux/store"
import callAPI from "../api/callApi"

function EditButton({ userData }) {
  // État local pour gérer l'ouverture et la fermeture de la modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // État local pour stocker le nouveau nom d'utilisateur
  const [newUserName, setNewUserName] = useState(
    userData?.body?.userName || ""
  );
  // Récupération du jeton d'authentification et du profil utilisateur depuis le store Redux
  const token = useSelector((state) => state.signIn.token);
  const userProfile = useSelector((state) => state.userProfile);
  // Dispatch Redux pour mettre à jour les données utilisateur
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fonction pour gérer la sauvegarde des modifications du nom d'utilisateur
  const handleSave = async () => {
    try {
      // Requête pour envoyer le nouveau nom d'utilisateur à l'API
      const response = await callAPI("putUserName", token, {
        userName: newUserName,
      });

      // Appel de l'action Redux pour stocker le nouveau nom d'utilisateur
      dispatch(editUserData(newUserName));

      // Ferme la modal après avoir enregistré les modifications
      closeModal();

      return response;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du nom d'utilisateur :",
        error
      );
    }
  };

  // Utilisation de useEffect pour mettre à jour newUserName lorsque userProfile.userName change
  useEffect(() => {
    setNewUserName(userProfile.userName);
  }, [userProfile.userName]);

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
  );
}

export default EditButton;