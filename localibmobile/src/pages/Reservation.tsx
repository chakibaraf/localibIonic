import React from 'react'


import { IonTitle,IonPage, IonHeader,IonToolbar,IonContent,IonButton} from '@ionic/react';
    


const Reservation: React.FC =()=>{
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Reservation</IonTitle>
                    <IonButton slot='end'>
                        <IonButton routerLink='/' routerDirection='root'>exit</IonButton>

                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'></IonContent>
        </IonPage>

    )
}

export default Reservation;