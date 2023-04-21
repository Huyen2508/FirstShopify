function addItemToCart(variant_id, qty) {

    data = {
      "id": variant_id,
      "quantity": qty
    }
    jQuery.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function() { 
        window.location.href = '/cart'; 
      }
    });
  }

