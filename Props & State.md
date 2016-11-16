#### Changing _props_ and _state_

- | _props_ | _state_ | 
--- | --- | --- 
Can get initial value from parent Component? | Yes | Yes
Can be changed by parent Component? | Yes | No
Can set default values inside Component?* | Yes | Yes
Can change inside Component? | No | Yes
Can set initial value for child Components? | Yes | Yes
Can change in child Components? | Yes | No

### Both props & state

1. can get initial value from parent component, **getDefaultProps** before **getInitialState**.
2. both can set default values.
3. both can set initial value for child component.


### Props

1. better performance, is used to pass to child components.

2. is immutable, can't update inside the component.

### State

1. can update inside the component by **setState**.

2. mutable, but worse performance.
 

 
