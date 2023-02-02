import {  Route } from 'react-router-dom';
import {  IonRouterOutlet,IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Menu from './Menu';
import Tabs from './Tabs';
import Details from './Details';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Menu}/>
        <Route path="/app" component={Tabs}/>
        <Route path="/detailsonly" component={Details}/>
         
      </IonRouterOutlet>
    </IonReactRouter>
    </IonPage>
  );
};

export default Home;


/*
<IonHeader>
        <IonToolbar>
          <IonTitle>Localib</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>*/ 