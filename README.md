
# XPATH Retriever

  

xpath retriever is a simple function that helps you generate the xpath of a given html element.
Written in vanilla Js to be supported by all front-end frameworks.
  

# Table of contents


- [Installation](#installation)
  

- [Usage example](#usage-example)


- [Arguments list](#arguments-list)


- [How it works](#how-it-works)  


- [Use Cases](#use-cases)  
  

- [Contribution](#contribution)


- [Acknowledgments](#acknowledgments)



# Installation

Using npm :

    $ npm i xpath-retriever



# Usage example

First import the utility function

    import { retrieveXPath } from  'xpath-retriever';

Using the retrieveXPath function add a click event listener to the document and display the data :

    const displayXPathValue = (e) => {
	    console.log('relative xpath', retrieveXPath(e.target));
	    console.log('absolute xpath', retrieveXPath(e.target, true));
    };
    
    document.addEventListener('click', displayXPathValue);

  

Use the browser console in the page from where you retrieved the xPath and then execute this command to verify that the xPath is leading to the right element. (Please note that the string paramater need to be replaced with the retrieved xpath) .

  

    $x('retrieved xpath here');

  

Then after testing the function, remove the click event listener created before :

  

    document.removeEventListener('click', displayXPathValue);

  

# Arguments list

|  Parameter | Type | Required | Description |
|--|--|--|--|
| domElement | HTML Element | required | DOM element where the retrieved xpath should lead |
| absolute | boolean | optional | by default false, if true returns absolute xpath else returns relative one




# How it works

  

  

The function takes as an argument a DOM element and returns a string representing an xpath value.

  

  

It will process the given element and its parents ascendingly.

  

  

For each element it will:

  

  

* Look up its id

  

* If it doesn't possess an id, it will check if there is no other similar tag in the DOM

  

* Else, it will determine its position inside its wrapper and then recursively process its parent node.

  

In case the "absolute" parameter is set to true, then the function will return the full xpath starting from the root element to the tag name of the selected element.
  

# Use cases

  

Use cases example :

  

- Flag an element to be evaluated every time a page will be load

- Prepare a data extraction

- Generate xPath expression quickly for a UI testing automation


# Contribution

Every improvement of the package is welcome, just fork the project make the necessary changes and create a pull request.

If you want to contact me (@GAliNor) here is a [link](https://www.linkedin.com/in/ali-guedda/) to my linkedin profile


# Acknowledgments

Many thanks to :

 - [@abiari](https://github.com/abiari)
 - [@hmellahi](https://github.com/hmellahi)
 - [@karimerrahli](https://github.com/karimerrahli)

for the reviews and advice

Several months ago I got inspired by a code snippet posted by a developer that I couldn't find again.
Special thanks to him, if I find you my friend it would be my pleasure to give you the credits you deserve.
