
/**
 * @param  {} domElement - DOM element for xpath generation
 * @param  {} absolute=false - specify that the returned xpath should be in its absolute format
 * @returns { string } - xpath value
 */
export const retrieveXPath = (domElement, absolute=false) => {
    try{
        if(typeof domElement !== 'object')
            throw 'The argument given isn\'t an HTML element object';
        if(typeof absolute !== 'boolean')
            throw 'The absolute parameter should be a boolean value';

        if(!absolute && domElement.id.length) {
            return `//*[@id='${domElement.id}']`;
        }
        if (!absolute && document.getElementsByTagName(domElement.tagName).length === 1) {
            return `//${domElement.tagName.toLowerCase()}`;
        }
        if(absolute && domElement.tagName.toLowerCase() === 'html') {
            return '/html';
        }
        const nodesInSameLevel = Array.from(domElement.parentNode.childNodes);
        const nodesInSameLevelWithSameTagName = nodesInSameLevel.filter(element => element.tagName === domElement.tagName);
        const domElementLevelPosition = nodesInSameLevelWithSameTagName.indexOf(domElement);
        return `${retrieveXPath(domElement.parentNode, absolute)}/${domElement.tagName.toLowerCase()}${`[${domElementLevelPosition + 1}]`}`;
    } catch (err) {
        throw err;
    }
}
