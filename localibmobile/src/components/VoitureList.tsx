
import React from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonItem, IonLabel, IonList, useIonAlert } from '@ionic/react'


import { carData } from "../data/carData";
import Voiture from '../models/Voiture';




    type Props ={
        voiture: Voiture;
        dataCars: carData;
    }
    
    const VoitureListe = (voiture:Props) => {
       
    
        return (
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{voiture.dataCars.carName} {voiture.dataCars.model}</IonCardTitle>
                </IonCardHeader>
    
                <IonCardContent>
                    <IonList>
                        <IonItem>
                            
                            <IonLabel>{voiture.dataCars.annee}</IonLabel>
                        </IonItem>
    
                        <IonItem>
                            
                        </IonItem>
    
                      
    
                        <IonItem>
                            
                            <IonLabel>{voiture.dataCars.speed}</IonLabel>
                        </IonItem>
    
                        <IonItem>
                         
                            <IonLabel>{voiture.dataCars.price}</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCardContent>
    

                <IonButton color="warning" >
                    Modifier
                </IonButton>
    
                <IonButton>
                    Supprimer
                </IonButton>
            </IonCard>
        )
    }
    
    export default VoitureListe;