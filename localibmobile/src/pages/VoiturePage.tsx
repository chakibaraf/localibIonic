import React from 'react'


import { IonTitle,IonPage, IonHeader,IonToolbar,IonContent, IonButton} from '@ionic/react';
import VoitureList from '../components/VoitureList';
    


const VoiturePage: React.FC =()=>{
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Voiture</IonTitle>
                    <IonButton slot='end'>
                        <IonButton routerLink='/' routerDirection='root'>exit</IonButton>

                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonButton routerLink='/app/voiture/details'expand='full' >
                     Details
             </IonButton>
             <VoitureList/>
            </IonContent>
           
        </IonPage>

    )
}

export default VoiturePage;