function getColoredName(str, col1, col2) {
  let out = '';
  let html = '';
  for (let i = 0; i < str.length; i++) {
    let t = i / str.length;
    let col = [
      Math.floor(col1[0] + (col2[0] - col1[0]) * t),
      Math.floor(col1[1] + (col2[1] - col1[1]) * t),
      Math.floor(col1[2] + (col2[2] - col1[2]) * t),
    ];
    // console.log(col)
    out += '&#' + col.map(x => (x < 16 ? "0" : "") + x.toString(16)).join('') + "&l" + str[i];
    html += `<b><span style="color:#${col.map(x => (x < 16 ? "0" : "") + x.toString(16)).join('')}">${str[i]}</span></b>`.split('/').join('');
  }
  return [out, html]
}
