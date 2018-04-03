import isAnimatedContainer from '../../providers/isAnimatedContainer';

// Replace with actual HomeContainer Component
const SampleComp = (props) => <div>{props.test}</div>;

export default isAnimatedContainer(
    {
        title: "Danny Nguyen - Work",
        theme: 'black'
    }
)(SampleComp);
