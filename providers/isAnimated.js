import React from 'react';
import * as Animated from 'animated/lib/targets/react-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";

/**
 *  @method isAnimated
 *  @param {<Component>}
 *  @return {<Component>}
 *  ====================
 *  High order function that returns a component that will take in a child component and wrap around it,
 *  used for simple animations on enter and leaving using react life-cycle methods
 */
const isAnimated = (WrappedComponent) => 

    class AnimatedWrapper extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                animate: new Animated.Value(0)
            };
        }

        componentDidMount(_callback) {
            Animated.spring(this.state.animate, { toValue: 1 }).start();
            console.log('appear');
        }

        componentWillEnter(_callback) {
            setTimeout(() => 
                Animated
                    .spring(this.state.animate,{ toValue: 1 })
                    .start() 
            , 250);
            _callback();
        }

        componentWillLeave(_callback) {
            Animated
                .spring(this.state.animate, { toValue: 0 })
                .start();
            setTimeout(() => _callback(), 175);
        }

        render() {
            const style = {
                opacity: Animated.template`${this.state.animate}`,
                transform: Animated.template`
                    translate3d(0, ${this.state.animate.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['10px', '0px']
                    })}, 0)`
            };

            return (
                
                <Animated.div style={style} className='animated-container'>
                    <WrappedComponent {...this.props} />
                </Animated.div>
            );
        }
    };

export default isAnimated;