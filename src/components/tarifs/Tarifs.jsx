import React from "react";
import './tarifs.css';
import pilates from '../../assets/portfolio/pilates.png'
import { AiOutlineEuroCircle } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";


const data = [
  {
    id: 1,
    image: pilates,
    title: 'Site vitrine de Pilates',
    demo: 'https://lecorpspilates.fr/',
  },


]

const Tarifs = () => {
  return (
    <section id="tarifs">
        <div>
            <div className="tarif__content">
                <h2>Intervention à domicile</h2>
                <p>2 heures facturées au maximum quel que soit le temps passé. A savoir, 80% des interventions ne dépassent pas 1h30.</p>
                <ul>
                    <li><span>Intervention de 1h</span><span>60€</span></li>
                    <li><span>Intervention sur matériel réseau</span><span>Devis</span></li>
                    <li><span>Montage de PC</span><span>Devis</span></li>
                </ul>
            </div>
            <div className="tarif__content">
                <h2>Intervention à distance</h2>
                <p>Prise de contrôle à distance via le logiciel Teamwiever. L'intervention n'est possible qu'une fois le logiciel téléchargé et installé.</p>
                <ul>
                    <li><span>Intervention de 30 min</span><span>30€</span></li>
                    <li><span>Intervention de 1h</span><span>50€</span></li>
                    <li><span>Interventions longues</span><span>Devis</span></li>
                </ul>
            </div>
            <div className="tarif__content"> 
                <h2>Intervention pour les professionnels</h2>
                <ul>
                    <li><span>Intervention de 1h</span><span>80€</span></li>
                    <li><span>Forfait 4H</span><span>250€</span></li>
                    <li><span>Forfait 7H</span><span>400€</span></li>
                </ul>
            </div>
        </div>
        <div>
            <div className="payment">
                <div className="payment__title">
                    <div className="payment__divider__border"></div>
                    <h2>MODALITÉS DE PAIEMENT</h2>
                    <div className="payment__divider__border"></div>
                </div>

                <div className="payment__content">
                    <div className="payment__signet">
                        <span><AiOutlineEuroCircle /></span>
                        <h3>Paiement sur place</h3>
                        <p>Le paiement des interventions à domicile se fait par chèque ou en espèces en fin d'intervention.</p>
                    </div>
                    <div className="payment__signet">
                        <span><FaRegCreditCard /></span>
                        <h3>Paiement à distance</h3>
                        <p>Le paiement des interventions à distance se fait exclusivement par carte via PayPal.</p>
                    </div>
                    <div className="payment__signet">
                        <span><TbFileInvoice /></span>
                        <h3>Factures</h3>
                        <p>Les factures sont envoyées par mail en fin d'intervention.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
  
  export default Tarifs;