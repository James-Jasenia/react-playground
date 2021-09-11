# React Playground

## Components as element wrappers

Components won't behave as wrappers such as `<div></div>` straight out of the box. You will need to pass in a props parameter in the method and access `props.children` in the body of the JSX wrapper. In addition, you can make your life much easier by passing in css classes using the structure below.

```
import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    return<div className={classes}>{props.children}</div>
}

export default Card;

```

## Working with older React Projects

Depending on the definition of older, you will most likely see `import React from 'react'` at the top of every .js file and the use of `React.createElement()` in the retun of the function.

```
import React from 'react'

const myComponent = () => {

    return React.createElement(
        'div',
        {},
        React.createElement('h2', {}, 'Let\'s get started!'),
        React.createElement(ExpenseItem, { item: expenses })
    );
}

```

## Useful Snippets (ES7 React/Redux/GraphQL/React-Native snippets)

NFN - New arrow function  
EXP - Export default
IMP - Import
