import Voiture from "../models/Voiture";

export default class VoitureService {
    static getVoitures(): Promise<Voiture[]> {
        return fetch('http://localhost:8080/voitures')
            .then(res => res.json())
          
    }

    static getVehicule(id: number): Promise<Voiture | null> {
        return fetch(`http://localhost:8080/voitures/${id}`)
            .then(res => res.json())
            
           
    }

    
    static delateVoiture(voiture: Voiture): Promise<{}> {
        return fetch(`http://localhost:8080/voitures/${voiture.id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            
    }

    static addVoiture(voiture: Voiture): Promise<Voiture> {
        return fetch(`http://localhost:8080/voitures`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(voiture)
        })
            .then(res => res.json())
           
    }

}