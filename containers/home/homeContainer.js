import isAnimatedContainer from '../../hoc/isAnimatedContainer';
import Router from 'next/router';
import Link from 'next/link';

const goto = () => {
    e.preventDefault();
    Router.push('/work', '/work', { shallow: true })
}

// Replace with actual HomeContainer Component
const SampleComp = (props) => 
    <div>
        <div>{props.test}</div>
        <Link href="/">
            <a>here</a>
        </Link>
    </div>;

export default isAnimatedContainer(
    {
        title: "Danny Nguyen"
    }
)(SampleComp);
