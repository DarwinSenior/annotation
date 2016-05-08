function is_rightclick() {
  return (d3.event.which == 3 || d3.event.button == 2);
}

function canvas_draw(canvas) {
  const ctx = canvas.getContext('2d');
  let pts = [];
  const selector = d3.select(canvas);
  const width = parseInt(selector.attr('width'), 10);
  const height = parseInt(selector.attr('height'), 10);
  selector.on('mousedown.select', function() {
    d3.event.stopPropagation();
    selector.classed('dragging', true);
    if (is_rightclick()){
      ctx.strokeStyle = 'rgba(0, 0, 1, 1)';
      ctx.globalCompositeOperation = 'destination-out';
    }else{
      ctx.strokeStyle = 'rgba(0, 0, 1, 1)';
      ctx.globalCompositeOperation = 'destination-over';
    }
    ctx.lineCap = ctx.lineJoin = 'round';
    pts.length = 0;
    const p = d3.mouse(this);
    ctx.moveTo(p[0], p[1]);
  }).on('mousemove.select', function() {
    if (selector.classed('dragging')) {
      const p = d3.mouse(this);
      pts.push(p);
      if (pts.length == 3) {
        ctx.beginPath();
        ctx.bezierCurveTo(pts[0][0], pts[0][1], pts[1][0], pts[1][1], pts[2][0], pts[2][1]);
        ctx.stroke();
        pts.length = 0;
        ctx.moveTo(p[0], p[1]);
        pts.push(p);
      }
    }
  }).on('mouseup.select', function() {
    selector.classed('dragging', false);
    pts.length = 0;
  }).on('contextmenu', function(evt){
    d3.event.preventDefault();
    return false;
  });
}
