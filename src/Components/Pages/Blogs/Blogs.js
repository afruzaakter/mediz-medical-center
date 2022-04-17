import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container m-5 p-5'>
            <h1 className='title text-center'>Question and Answer</h1>

            <div className='backgroundColor p-5 '>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Question-1: Difference between authorization and authentication</Accordion.Header>
                        <Accordion.Body>
                            <p className='text-secondary'>
                                <span className='title fs-4'>Authorization:</span>
                                Authorization determines what resources a user can access.It works through settings that are implemented and maintained by the organization and always takes place after authentication.
                                Authorization isn’t visible to or changeable by the user.
                            </p>
                            <p className='text-secondary'>
                                <span className='title fs-4 '>Authentication:</span>
                                Authentication verifies who the user is.It works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process and is visible to and partially changeable by the user.

                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Question-2:Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                     <p>
                         <span className='text-secondary'>Firebase is used for many purposes that can help your apps to develop, grow and make it quality app. Firebase manages all data in real-time in the database. So, the exchange of data to and fro from the database is easy and quick. </span>
                     </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Question-3:What other services does firebase provide other than authentication</Accordion.Header>
                        <Accordion.Body>
                            <p className='title'>There are many services which Firebase provides, Most useful of them are:
                                <ul className='text-secondary'>
                                    <li>Hosting.</li>
                                    <li>Cloud Firestore.</li>
                                    <li>Cloud Functions.</li>
                                    <li>Authentication.</li>
                                    <li>Google Analytics</li>
                                    <li>Predictions</li>
                                    <li>Cloud Message</li>
                                </ul>
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;