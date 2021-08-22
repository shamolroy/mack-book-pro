//main price code
const mainprice = document.getElementById('mainprice').innerText;

//memory code
const macbookmemory = document.getElementById('mack-memory');
document.getElementById('8gbmemory').addEventListener('click',function(){
    macbookmemory.innerText = '0';
    update()
});
document.getElementById('16gbmemory').addEventListener('click',function(){
    macbookmemory.innerText = '180';
    update()
});

//storage code
const macbookstorage = document.getElementById('mack-storage');
document.getElementById('256gbstorage').addEventListener('click',function(){
    macbookstorage.innerText = '0';
    update()
});
document.getElementById('512gbstorage').addEventListener('click',function(){
    macbookstorage.innerText = '100';
    update()
});
document.getElementById('1tbstorage').addEventListener('click',function(){
    macbookstorage.innerText = '180';
    update()
});

//delivery code
const delivery = document.getElementById('delivery-cost');
document.getElementById('freedelivery').addEventListener('click',function(){
    delivery.innerText = '0';
    update()
});
document.getElementById('expressdelivery').addEventListener('click',function(){
    delivery.innerText = '20';
    update()
});

//update total code
const totalPrice = document.getElementById('total-price'); 
const bottomTotalPrice = document.getElementById('bottom-price'); 
function update(){
    const mackBookMemory = parseFloat(macbookmemory.innerText);
    const mackBookStorage = parseFloat(macbookstorage.innerText);
    const deliveryCost = parseFloat(delivery.innerText);
    const mainPrice = parseFloat(mainprice);
    const mackBookTotalPrice = mackBookMemory + mackBookStorage + deliveryCost + mainPrice;
    totalPrice.innerText = mackBookTotalPrice;
    bottomTotalPrice.innerText = mackBookTotalPrice;
}
//promo code
document.getElementById('promo-button').addEventListener('click',function(){
	const promoField = document.getElementById('promofield');
	const promoInput = promoField.value;
	if(promoInput == 'stevekaku'){
		const discountPrice = parseInt((totalPrice.innerText)*80) / 100;
		bottomTotalPrice.innerText = discountPrice;
	}
	else{
		alert("Invalid Promo Code");
	}
	promoField.value = '';
});
