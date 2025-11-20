//this script manages the open/close state of navbar menus

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu-toggle').forEach((btn, index) => {
        // ← HERE is where you select the menu list
        const menuList = btn.parentElement.querySelector('.menu-list'); // <-- use this

        // Load saved state from localStorage
        const storedState = localStorage.getItem(`menu-${index}`);
        if (storedState === 'closed') {
            menuList.style.maxHeight = '0';
            menuList.style.opacity = 0;
        } else {
            menuList.style.maxHeight = menuList.scrollHeight + 'px';
            menuList.style.opacity = 1;
        }

        // Add click listener to toggle
        btn.addEventListener('click', () => {
            if (menuList.style.maxHeight && menuList.style.maxHeight !== '0px') {
                menuList.style.maxHeight = '0';
                menuList.style.opacity = 0;
                localStorage.setItem(`menu-${index}`, 'closed');
            } else {
                menuList.style.maxHeight = menuList.scrollHeight + 'px';
                menuList.style.opacity = 1;
                localStorage.setItem(`menu-${index}`, 'open');
            }
        });
    });
});
