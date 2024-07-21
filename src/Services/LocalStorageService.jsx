const localStorageService = {
    setCartItems: (item) => {
        try {
            localStorage.setItem('cart', JSON.stringify(item));
        } catch (error) {
            console.error('Error setting cart items:', error);
        }
    },
    getCartItems: () => {
        try {
            let existing = localStorage.getItem('cart');
            return existing ? JSON.parse(existing) : [];
        } catch (error) {
            console.error('Error getting cart items:', error);
            return [];
        }
    },
    setUser: (user) => {
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            console.error('Error setting user:', error);
        }
    },
    getUser: () => {
        try {
            let existing = localStorage.getItem('user');
            // Handle case where existing is 'undefined' or 'null'
            if (existing === null || existing === undefined) {
                return null;
            }
            return JSON.parse(existing);
        } catch (error) {
            console.error('Error getting user:', error);
            return null;
        }
    },
    setWishlist: (wishlist) => {
        try {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        } catch (error) {
            console.error('Error setting wishlist:', error);
        }
    },
    getWishlist: () => {
        try {
            let existing = localStorage.getItem('wishlist');
            return existing ? JSON.parse(existing) : [];
        } catch (error) {
            console.error('Error getting wishlist:', error);
            return [];
        }
    }
};

export default localStorageService;


