import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { IoCloudDoneOutline, IoCloudOutline, IoCloudUploadOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';

import './Service.scss';

function Service() {
    return (
      <IconContext.Provider value={{color: '#fff', size: 100}}>
        <div>
            <div className="service__section">
                <div className="service__wrapper">
                    <h1 className="service__heading">Hizmetler</h1>
                    <div className="service__container">
                        <Link to="/cloud-computing-template/sign-up" className="service__container-card">
                            <div className="service__container-cardInfo">
                                <div className="icon">
                                    <IoCloudDoneOutline />
                                </div>
                                <h4>SaaS</h4>
                                <ul className="service__container-features">
                                    <li>Hizmet Olarak Yazılım (SaaS), en büyük bulut pazarını temsil etmekte ve hala hızla büyümektedir.</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Teklifler</Button>
                            </div>
                        </Link>

                        <Link to="/cloud-computing-template/sign-up" className="service__container-card">
                            <div className="service__container-cardInfo">
                                <div className="icon">
                                    <IoCloudOutline />
                                </div>
                                <h4>PaaS</h4>
                                <ul className="service__container-features">
                                    <li>Hizmet Olarak Platform (PaaS), uygulamalar ve diğer gelişmeler için kullanılırken, bulut bileşenlerini yazılıma sunar.</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>Teklifler</Button>
                            </div>
                        </Link>

                        <Link to="/cloud-computing-template/sign-up" className="service__container-card">
                            <div className="service__container-cardInfo">
                                <div className="icon">
                                    <IoCloudUploadOutline />
                                </div>
                                <h4>IaaS</h4>
                                <ul className="service__container-features">
                                    <li>IaaS, otomatik olarak tedarik edilen, ölçülebilen ve isteğe bağlı olarak kullanılabilir.</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Teklifler</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </IconContext.Provider>
    );
}

export default Service;
