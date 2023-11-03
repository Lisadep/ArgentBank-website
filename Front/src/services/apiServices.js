const apiBaseURL = "http://localhost:3001/api/v1" //URL de l'api hébergée localement

//informations sur les différents appels d'API
const apiCalls = {
    getToken: {
        url: "/user/login",
        method: "post",
        auth: false,
    },
    getProfile: {
        url: "/user/profile",
        method: "post",
        auth: true,
    },
    putUserName: {
        url: "/user/profile",
        method: "put",
        auth: true,
    },
};

export const callAPI = async (infos, token, data = {}) => {
    
    const callAPIData = apiCalls[infos]; // Récupération des informations spécifiques à l'appel d'API
    if (!callAPIData) {
        console.error("Error on API connection call");
        return;
    }

    const headers = { "Content-Type": "application/json", }; // indique au serveur que le corps de la requête est au format JSON

    // si besoin d'une authentification -> ajout de l'en-tête "Authorization" à headers avec la valeur "Bearer" suivie du token
    if (callAPIData.auth) { headers.Authorization = `Bearer ${token}`; }

    try {
        const response = await fetch(
            `${apiBaseURL}${callAPIData.url}`, //URL de base l'api + URL spécifique à l'appel d'API 
            {
                method: callAPIData.method, // les options de la requête sont configurées en conséquence
                headers,
                body: JSON.stringify(data)
            },
        )
        if (!response.ok) { //si la réponse affiche une erreur
            const errorData = await response.json(); // capture de la réponse JSON de l'API
            throw new Error (errorData.message); //affiche l'erreur
        }
        return await response.json();

    } catch (error) { //gestion d'une erreur lors de l'appel
        console.error("Error on API connection call :", error);
        throw error;
    }
};

export default callAPI;