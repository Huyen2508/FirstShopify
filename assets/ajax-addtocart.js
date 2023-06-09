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
      jQuery.getJSON('/cart.js', function (cart) {
        $htmlCartIcon = "<svg class='icon icon-cart' aria-hidden='true' focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'> <path fill='currentColor' fill-rule='evenodd' "+
        "d='M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z'></path></svg>"+
        "<span class='visually-hidden'>Cart</span><div class='cart-count-bubble'><span aria-hidden='true'>"+cart.item_count+"</span><span class='visually-hidden'>"+cart.item_count+" item </span></div>";
        $("#cart-icon-bubble").html($htmlCartIcon);
      
        let cartData = cart.items;
        cartData.forEach(item => {
          if (item.id === data.id) {
            this.notification = document.getElementById('cart-notification');
            this.notification.classList.add('animate', 'active');

            $htmlProduct = "<div class='cart-notification-product__image global-media-settings'> <img src="+item.image+"&width=140 alt='image' width='70' height='70' loading='lazy'></div>"
            +"<div><h3 class='cart-notification-product__name h4'>"+item.title+"</h3><dl></dl></div>";
            $("#cart-notification-product").html($htmlProduct);

            $htmlCount = "<span class='cart-notification-count'>View cart ("+cart.item_count+")</span>";
            $("#cart-notification-button").html($htmlCount);
          }
        });
      });
    }  
  });  
}

