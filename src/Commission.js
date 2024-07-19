import React from 'react';
import { Link } from 'react-router-dom';
import ImageSwitcher from './ImageSwitcher';

export default function Commission() {
    return (
        <div className='App'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item">
                                    <Link className="nav-link" to='/SmrWeb'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link active" to='/SmrWeb/commission'>Commission</Link>
                                    </li>
                                    <li className="nav-item">
                                    <a className='nav-link' href='https://forms.gle/p8YqShe1n71fTZur9'>Form</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="col-md-10" style={{padding:'40px 60px'}}>
                                { ImageSwitcher() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}