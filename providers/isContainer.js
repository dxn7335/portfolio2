import Head from '../components/head';
import TransitionGroup from 'react-transition-group/TransitionGroup';

/**
 *  @method Container
 *  @param {object} props
 *  @return {<Component/>}
 *  =======================
 *  High Order Component function used to create a component that will serve as the base page layout container
 *  - Will hold the page head element (with SEO tags)
 *  - Will hold the primary navigation bar
 *  - Will hold the page content (WrappedComponent)
 */
const isContainer = (headProps) => (WrappedComponent) => {
    // returns component
    return (props) => {
        return (
            <div>
                <Head {...headProps} />
                <TransitionGroup component="main">
                    <WrappedComponent {...props} />
                </TransitionGroup>
            </div>
        );
    }
}

export default isContainer;