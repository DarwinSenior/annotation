function cursor_data(height, width){
  const header = 'data:image/svg+xml;base64,';
  const content = '<circle r="50%" cx="50%" cy="50%"></circle>';
  return header+btoa('<svg xmlns="http://www.w3.org/2000/svg" height="'+height+'" width="'+width+'">'+content+'</svg>');
}

// http://stackoverflow.com/questions/24039599/how-to-add-stroke-outline-to-transparent-png-image-in-javascript-canvas/24091727
function find_contour(img){

}
