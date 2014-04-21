##Piao.js##

Function : make position-absolute html element float when user mouse moving.

Demo : http://yudongmao.sinaapp.com/demo/piao/example/demo1.html

## Useage ##
###Step1

Import jquery.js and piao.js

###Step2
 
parent element call piao function,children(which you want them to float) as an **ARRAY** parameter

*Example:*

```javascript
$('.out').piao([
	{
		item : $('.ball1'),
		xrate : 10,
		yrate :50,
		invert : true
	},
	{
		item : $('.ball2'),
		xrate : 20,
		yrate :5,
		stop:true
	}
])
```

*note1:*
parameter "invert" and "stop" are optional;

*note2:*
parameter "invert" and "stop" are optional;


