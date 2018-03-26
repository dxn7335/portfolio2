import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

/*
 * @component: <Head>
 * ==================s
 * The head element used to contain SEO properties
 */
const CustomHead = ({title, description, theme}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='description' content={(description) || 'Danny Nguyen is a Frontend Developer currently working out of the east-coast.'}/>
                <meta property="og:type" content="website" />
            </Head>
            <style jsx global>{`
                body { 
                    background: ${ (theme) ? '#eee' : '#f13fw3' };
                }
            `}
            </style>
        </div>
    )
}

CustomHead.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default CustomHead;