/* Added functionality used with the Bulma CSS components */

/* Toggle the dropdown navigation menu and icon by setting is-active
 * class on both the element with the navbar-burger class, and the
 * element pointed to by its data-target attribute.
 */
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // For each one of them (there will probably be only one)...
    $navbarBurgers.forEach( burger => {

      // Get the target from the "data-target" attribute
      const target = burger.dataset.target;
      const $target = document.getElementById(target);

      // Add an on-click event handler that toggles the is-active class
      // on both the burger itself and the menu it drives (the target)
      burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });

      // Also locate every navbar-item class within the target menu being
      // driven by the burger
      const $navbarItems = Array.prototype.slice.call($target.querySelectorAll(".navbar-item"), 0);

      // Check if there are any menu items
      if ($navbarItems.length > 0) {

        // For each menu item ...
        $navbarItems.forEach( navbarItem => {

          // Add an on-click event handler to toggle the is-active class
          // on both the burger itself and the menu it drives, the purpose
          // being to hide the menu when you click on an item in it.
          navbarItem.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          })
        })
      }
    });
  }
});