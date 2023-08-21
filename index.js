let total=0
function handleCLikBtn(target){
  const itemNode=target.parentNode.childNodes[1].innerText;
  const li=document.createElement('li')
  li.innerText=itemNode
  const selectedItems=document.getElementById('selected-items')
  selectedItems.appendChild(li)

  const price=target.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(price)
  document.getElementById('total').innerText=total
}