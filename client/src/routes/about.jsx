import React from 'react';

const About = () => {
    const styles = {
        container: {
            width: '80%',
            margin: 'auto',
            overflow: 'hidden',
        },
        header: {
            background: '#333',
            color: '#fff',
            padding: '10px 0',
            textAlign: 'center',
        },
        branding: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        highlight: {
            color: '#e8491d',
        },
        nav: {
            textAlign: 'center',
            marginTop: '10px',
        },
        navUl: {
            listStyle: 'none',
            padding: 0,
        },
        navLi: {
            display: 'inline',
            marginRight: '20px',
        },
        navLiCurrent: {
            fontWeight: 'bold',
        },
        navA: {
            color: '#fff',
            textDecoration: 'none',
        },
        aboutSection: {
            backgroundColor: '#f4f4f4',
            padding: '20px',
            borderRadius: '5px',
        },
        aboutHeader: {
            textAlign: 'center',
        }
    };

    return (
        
        <div>
            <div className="container">
            <div className="background-div">

            </div>
        </div>
            <header style={styles.header}>
                <div style={styles.container}>
                    <div style={styles.branding}>
                        <h1><span style={styles.highlight}>PagePals</span> Book Club</h1>
                    </div>

                </div>
            </header>

            <div style={styles.container}>
                <section style={styles.aboutSection} className="about">
                    <h1 style={styles.aboutHeader}>About Us</h1>
                    <p>Welcome to PagePals, a book club community dedicated to exploring the world through literature. Our mission is to foster a deeper understanding and appreciation for diverse perspectives, cultures, and ideas. We believe that reading not only enriches our knowledge but also enhances our insight and intuition, allowing us to connect more profoundly with ourselves and the world around us.</p>
                    <p>Through our book selections and discussions, we aim to encourage thoughtful dialogue and personal growth. Join us as we embark on a journey of discovery, empathy, and intellectual engagement.</p>
                </section>
            </div>
        </div>
    );
};

export default About;