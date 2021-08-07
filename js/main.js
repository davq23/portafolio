

document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('emailContactForm').addEventListener('show.bs.modal', function (event) {
        this.querySelector('#recipient-name').value = event.relatedTarget.getAttribute('data-bs-email');
    });

    document.getElementById('emailContactForm').addEventListener('hide.bs.modal', function (event) {
        this.querySelectorAll('.form-control').forEach(function(element) {
            element.value = '';
        });        
    });

    document.getElementById('offcanvasMenu').addEventListener('hidden.bs.offcanvas', function (event) {
        this.querySelectorAll('.collapse.show').forEach(function(element) {
            bootstrap.Collapse.getInstance(element).hide();
        });
    });


    document.querySelectorAll('.progress-bar').forEach(function (progressBar) {
        setTimeout(function() {
            var ariaValueNow = progressBar.getAttribute('aria-valuenow');

            for (let i = 0; i <= ariaValueNow; i++) {
                progressBar.style.width = i + '%';            
                progressBar.innerText = i + '%';
            }
        }, 300);
    });
});