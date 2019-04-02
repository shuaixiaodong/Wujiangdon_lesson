function generateHashtag(str) {
    return (str.length > 140 || str ==='') ? false : '#' + str.split(' ').map(capitalize).join(' ');
}
function capitalize(str) {
    // console.log(w);
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// #How Are You
console.log(generateHashtag('How are you'));
console.log(generateHashtag(''));
console.log(generateHashtag('How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you'));

