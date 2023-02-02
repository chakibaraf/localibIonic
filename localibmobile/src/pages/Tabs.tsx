
import {IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Redirect, Route} from 'react-router-dom';
import Voiture from './VoiturePage';
import Reservation from './Reservation';
import Details from './Details';
import {ellipse , triangle} from 'ionicons/icons';

const Tabs: React.FC =()=>{
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path='/app/voiture' component={Voiture}/>
                <Route exact path='/app/reservation' component={Reservation}/>
                <Route exact path='/app/voiture/details'component={Details}/>
                <Route  exact path="/app"/>
                    <Redirect to="app/voiture"/>
            </IonRouterOutlet>

            <IonTabBar slot='bottom'>
                <IonTabButton tab='voiture' href='/app/voiture'>

                <IonIcon icon={ellipse}></IonIcon>
                <IonLabel>Voiture</IonLabel>
                </IonTabButton>

                <IonTabButton tab='reservation' href='/app/reservation'>

                <IonIcon icon={triangle}></IonIcon>
                <IonLabel>Reservation</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>

    )
}

export default Tabs;