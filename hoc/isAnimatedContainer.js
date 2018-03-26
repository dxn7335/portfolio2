import isContainer from './isContainer';
import isAnimated from './isAnimated';
import { compose } from 'redux';

/**
 *  @method isAnimatedContainer
 *  @param {object} headProps
 *  @return {<Component/>}
 *  ===========================
 *  High order function that will merge the Container and Animated component methods to compose
 *  a Component that will be an animated container. 
 *  (Used for page transitions on route change)
 */
const isAnimatedContainer = (headProps) => (WrappedComponent) => {

    const PageComponent = (props) => <WrappedComponent {...props} />;

    // compose used to chain high-order functions
    return compose(
        isContainer(headProps),
        isAnimated
    )(PageComponent);
}

export default isAnimatedContainer;
