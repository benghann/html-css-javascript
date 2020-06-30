# Switch

1. Rewrite the "switch" into an "if"
    Write the code using if..else which would correspond to the following switch:
    ``` JavaScript
    switch (browser) {
        case 'Edge':
            alert( "You've got the Edge!" );
            break;

        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert( 'Okay we support these browsers too' );
            break;

        default:
            alert( 'We hope that this page looks ok!' );
    }
    ```

2. Rewrite "if" into "switch"
    Rewrite the code below using a single switch statement:
    ``` JavaScript
    let a = +prompt('a?', '');

    if (a == 0) {
        alert( 0 );
    }
    if (a == 1) {
        alert( 1 );
    }
    if (a == 2 || a == 3) {
        alert( '2,3' );
    }
    ```