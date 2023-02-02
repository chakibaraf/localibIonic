import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

import VoitureListe from "./VoitureList";
import { carData } from "../data/carData";


interface Props {
  item : string[];
  dataVoiture: carData[];

}

const VoitureFormGestionVehicule = (props:Props) => {
  /** marque */
  const [dataArr, setDatarr] = useState(props)



  /* un usestate vide pour gerer mon   input */
  const [stateMarque, setMarque] = useState();
  const [stateModel, setModel] = useState();
  const [stateImmatriculation, setImmatriculation] = useState();
  const [stateAnnee, setAnnee] = useState();

  /* prends en parametre l'id utiliser la methode filter pour chaque element de 
  dataArr (item prends l'inverse de id donc rien (creer un nouveau tableau))
   */
  const delate = (id:any) => {
      
    const filter = (dataArr: any[], id: any) => {
      return dataArr.filter((item: any) => item.id !== id);
    };
    /* utliser setDatarr permet d'appliquer la modification */
    setDatarr(filter);
  }
  /* linkedinput permet de lier mon input avec ce que j'ai envie d'ecrire */
  const linkedMarque = (e:any) => {
    setMarque(e);

  }
  const linkedModel = (e:any) => {
    setModel(e);
  }
  const linkedImmatriculation = (e:any) => {
    setImmatriculation(e);
  }
  const linkedAnnee = (e) => {
    setAnnee(e);
  }
  const addVehicule = (e:any) => {
    e.preventDefault();
    const newarr = [...dataArr];
    const newVehicule = {};

   

    newVehicule.brand = stateMarque;
    newVehicule.carName = stateModel;
    newVehicule.immat = stateImmatriculation;
  
  
   newVehicule.annee = stateAnnee;
    

    newVehicule.id = uuidv4();
   

    newarr.push(newVehicule);
   


    console.log(newarr);

    setDatarr(newarr);
    stateMarque('');
    stateModel('');
    stateImmatriculation('');
    stateAnnee('');

    console.log(dataArr);
  }
  return (
    <div>

      <Form onSubmit={e => addVehicule(e)} className="form">
        <div className=" d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="form__group">
            <input value={stateMarque} onInput={e => linkedMarque(e.target.value)}
              type="text" placeholder="Marque" required />
          </FormGroup>
          <FormGroup className="form__group">
            <input value={stateModel} onInput={e => linkedModel(e.target.value)} type="text" placeholder="Model" required />
          </FormGroup>

          <FormGroup className="form__group">
            <input value={stateImmatriculation} onInput={e => linkedImmatriculation(e.target.value)} type="text" placeholder="immatriculation" required />
          </FormGroup>
          <FormGroup className="form__group">
            <input value={stateAnnee} onIput={e => linkedAnnee(e.target.value)} type="text" placeholder="année" required />
          </FormGroup>
          <FormGroup className="form__group">
            <button className="btn find__car-btn">Enregistrement  </button>
          </FormGroup>
        </div>
      </Form>

      <div>
        
        {dataArr.map((item) => {
          return (
            <VoitureListe
            txt={item.brand}
            txt1={item.carName}
            txt2={item.immat}
            txt3={item.annee}
            id={item.id}
            key={item.id}
            
            delfunc={delate}
            
            />
            )
          })}
          
          </div>
      </div>

  );
};

export default VoitureFormGestionVehicule;