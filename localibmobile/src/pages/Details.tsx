import { IonTitle,IonPage, IonHeader,IonToolbar,IonContent, useIonRouter, IonButton, IonBackButton} from '@ionic/react';
    

const Details: React.FC =()=>{
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButton slot='start'>
                        <IonBackButton defaultHref='/app/voiture'/>
                    </IonButton>
                    <IonTitle>Details</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'></IonContent>
        </IonPage>

    )
}

export default Details;