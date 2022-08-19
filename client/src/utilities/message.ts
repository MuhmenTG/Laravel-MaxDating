export function messageBox(element:any, messageType:any, messageColor:any, msg:any) {
    document.querySelector(`${element}`).innerHTML = `
      <span style="display:${messageType};color:${messageColor};font-size:18px;margin-left:10px;">${msg}</span>`;
}
