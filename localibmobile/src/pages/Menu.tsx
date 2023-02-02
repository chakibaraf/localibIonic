
import { IonTitle,IonPage, IonHeader,IonToolbar,IonContent, useIonRouter, IonButton} from '@ionic/react';
    


const Menu: React.FC =()=>{
    const navigation = useIonRouter()

    const doMenu = ()=>{
        navigation.push('/app','root','replace')
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Localib</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>

                <IonButton expand='full' onClick={()=> doMenu()}> Menu</IonButton>
            </IonContent>
        </IonPage>

    )
}

export default Menu;