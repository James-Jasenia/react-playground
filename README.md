# React Playground

## Components as element wrappers
Components won't behave as wrappers such as <div> straight out of the box. You will need to pass in a props parameter in the method and access ```props.children``` in the body of the JSX Wrapper. In addition, you can make your life much easier by passing in css classes using the structure below. 

```
import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    return<div className={classes}>{props.children}</div>
}

export default Card;

```

## Useful Snippets (ES7 React/Redux/GraphQL/React-Native snippets)
NFN - New arrow function  
EXP - Export default
IMP - Import
