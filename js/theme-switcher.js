document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');
    const htmlElement = document.documentElement;
    
    // Fungsi untuk mengubah tema
    const toggleTheme = (isDark) => {
        // Mengubah data-bs-theme
        htmlElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
        
        // Mengubah warna background dan text
        document.body.style.backgroundColor = isDark ? '#212529' : '#ffffff';
        document.body.style.color = isDark ? '#ffffff' : '#212529';
        
        // Mengubah warna navbar
        const navbar = document.querySelector('.navbar');
        navbar.className = isDark 
            ? 'navbar sticky-top bg-dark flex-md-nowrap p-0 shadow'
            : 'navbar sticky-top bg-light flex-md-nowrap p-0 shadow';
        
        // Mengubah warna sidebar
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.className = isDark 
                ? 'sidebar border border-right col-md-3 col-lg-2 p-0 bg-dark'
                : 'sidebar border border-right col-md-3 col-lg-2 p-0 bg-light';
        }

        // Mengubah warna table-container
        const tableContainer = document.querySelector('.table-container');
        if (tableContainer) {
            tableContainer.style.backgroundColor = isDark ? '#343a40' : '#f8f9fa';
            tableContainer.style.borderColor = isDark ? '#495057' : '#dee2e6';
        }

        // Mengubah warna untuk Handsontable
        const hot = document.querySelector('.handsontable');
        if (hot) {
            const headers = hot.querySelectorAll('th');
            const cells = hot.querySelectorAll('td');
            
            headers.forEach(header => {
                header.style.backgroundColor = isDark ? '#343a40' : '#f8f9fa';
                header.style.color = isDark ? '#ffffff' : '#212529';
            });
            
            cells.forEach(cell => {
                cell.style.backgroundColor = isDark ? '#495057' : '#ffffff';
                cell.style.color = isDark ? '#ffffff' : '#212529';
            });
        }

        // Simpan preferensi ke localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // Event listener untuk switch
    themeSwitch.addEventListener('change', (e) => {
        toggleTheme(e.target.checked);
    });

    // Set tema awal berdasarkan localStorage atau default ke dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    themeSwitch.checked = savedTheme === 'dark';
    toggleTheme(themeSwitch.checked);
});
