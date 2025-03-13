
    $(document).ready(function(){
        const prices = {
            quantity1: 10, // Takutoktekneng
            quantity2: 5,  // Turnik
            quantity3: 10, // Mikalamaras
            quantity4: 12  // Saging
        };

        function updateTotalAmount() {
            let totalAmount = 0;
            let totalQuantity = 0;

            $('input[name^="quantity"]').each(function(){
                const quantity = parseInt($(this).val()) || 0;
                totalAmount += quantity * prices[$(this).attr('id')];
                totalQuantity += quantity;
            });

            $('#totalAmount').val('$' + totalAmount.toFixed(2));
            $('#modalAmount').text('$' + totalAmount.toFixed(2));
            $('#orders h2').text(totalQuantity);
        }

        $('input[name^="quantity"]').on('input', updateTotalAmount); //para maselect all name starting with quantity?

        $('#name').on('input', function () {
            $('#pplname').text($(this).val()); 
        });

        $(".menufood").click(function () {
        let inputName = $(this).data("name"); 
        let inputField = $('input[name="' + inputName + '"]'); 

        let currentValue = parseInt(inputField.val()) || 0;
        inputField.val(currentValue + 1); 
        inputField.trigger("input"); 
        });

        $('#showModalBtn').click(function(){
            let form = $('#formData')[0];
            if (!form.checkValidity()) { 
                form.classList.add('was-validated'); 
                return;  
            }
            const amountToPay = parseFloat($('#modalAmount').text().replace('$', ''));

            if (parseInt($('#orders h2').text()) == 0) {
                alert('Your orders are: ' + parseInt($('#orders h2').text()))
                alert('Please enter a valid quantity first.');
                return;
            }

            const payment = parseFloat($('#payment').val());
                
            if(isNaN(payment) || payment < amountToPay){
                alert('Insufficient payment. Please enter a valid amount.');
                return;
            }
                const change = payment - amountToPay;  
                    $('#cash').text(payment.toFixed(2));
                    $('#changeAmount').text(change.toFixed(2));
                    $('#quantityTok').text($("#quantity1").val());
                    $('#quantityTur').text($("#quantity2").val());
                    $('#quantityMika').text($("#quantity3").val());
                    $('#quantitySag').text($("#quantity4").val());
                    $('#paymentModal').modal('show');
                
        });
        updateTotalAmount();
    });
