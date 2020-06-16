
## Operators
### Arithmetic Operators
| Operator | Description |
| --- | --- |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `**` | Exponentiation (ES2016) |
| `/` | Division |
| `%` | Modulus (Division Remainder) |
| `++` | Increment |
| `--` | Decrement |

### Assignment Operators
| Operator | Example | Same As |
| --- | --- | --- |
| = | x = y | x = y |
| += | x += y | x = x + y |
| -= | x -= y | x = x - y |
| *= | x *= y | x = x * y |
| /= | x /= y | x = x / y |
| %= | x %= y | x = x % y |
| **= | x **= y | x = x ** y |

### Comparison Operators
| Operator | Description |
| --- | --- |
| == | equal to |
| === | equal value and equal type |
| != | not equal |
| !== | not equal value or not equal type |
| > | greater than |
| < | less than |
| >= | greater than or equal to |
| <= | less than or equal to |
| ? | ternary operator |

### Logical Operators
| Operator | Description |
| --- | --- |
| && | logical and |
| \|\| | logical or |
| ! | logical not |

| Comparison | x | y | Result |
| --- | --- | --- | --- |
| OR | false | false | x \|\| y == false | 
| OR | true | false | x \|\| y == true |
| OR | false | true | x \|\| y == true |
| OR | true | true | x \|\| y == true |
| AND | false | false | x && y == false |
| AND | true | false | x && y == false |
| AND | false | true | x && y == false |
| AND | true | true | x && y == true |
| NOT | true | - | !x == false |
| NOT | false | - | !x == true |

### Type Operators 
| Operator | Description |
| --- | --- |
| typeof | Returns the type of a variable |
| instanceof | Returns true if an object is an instance of an object type |

### Bitwise Operators (Not important)
| Operator | Description | Example | Same as | Result | Decimal |
| --- | --- | --- | --- | --- | --- |
| & | AND | 5 & 1 | 0101 & 0001 | 0001 |  1
| | | OR | 5 | 1 | 0101 | 0001 | 0101 |  5
| ~ | NOT | ~ 5 |  ~0101 | 1010 |  10
| ^ | XOR | 5 ^ 1 | 0101 ^ 0001 | 0100 |  4
| << | Zero fill left shift | 5 << 1 | 0101 << 1 | 1010 |  10
| >> | Signed right shift | 5 >> 1 | 0101 >> 1 | 0010 |   2
| >>> | Zero fill right shift | 5 >>> 1 | 0101 >>> 1 | 0010 |   2