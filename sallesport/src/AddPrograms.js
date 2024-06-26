import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function AddPrograms() {
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    async function addPrograms() {
        const formData = new FormData();
        formData.append("name", name);
        if (file) {
            formData.append("file", file);
        }

        try {
            let result = await fetch("http://localhost:8000/api/addprograms", {
                method: 'POST',
                body: formData,
            });

            if (result.ok) {
                let response = await result.json();
                console.log("Recette ajoutée:", response);
                navigate("/recettelist");
            } else {
                let error = await result.json();
                console.error("Erreur lors de l'ajout de la recette:", error);
            }
        } catch (error) {
            console.error("Erreur réseau:", error);
        }
    }

    return (
        <>
            <div className="col-sm-6 offset-sm-3">
                <h1>Ajouter un Programme</h1>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Nom"
                />
                <br />
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="form-control"
                />
                <br />
                <button onClick={addPrograms} className="btn btn-primary">Ajouter</button>
            </div>
        </>
    );
}

export default AddPrograms;
